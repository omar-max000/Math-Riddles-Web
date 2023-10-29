// MAIN
const mainMenu = document.getElementById('main-menu');
const levelsMenu = document.getElementById('levels-menu');
const gameScreen = document.getElementById('game');
const soundOnOff = document.getElementById('sound-button');
const audio = new Audio('wrong.wav');
const audio2 = new Audio('right.wav');
let isAudioMuted = false;
let currentLevel = 1; 
let answer;

//main IDs
document.getElementById('play-button').addEventListener('click', () => {
    mainMenu.style.display = 'none';
    gameScreen.style.display = 'block';
    loadLevel(currentLevel); 
});

document.getElementById('levels-button').addEventListener('click', () => {
    mainMenu.style.display = 'none';
    levelsMenu.style.display = 'block';
    displayLevels();
});

document.getElementById('restart').addEventListener('click', () => {
    restart();
});

soundOnOff.addEventListener('click', () => {
    if (isAudioMuted) {
        audio.muted = false;
        audio2.muted = false;
        soundOnOff.textContent='Sound On';
    } else {
        audio.muted = true;
        audio2.muted = true;
        soundOnOff.textContent='Sound Off';
    }
    isAudioMuted = !isAudioMuted;
});

document.getElementById('exit-button').addEventListener('click', () => {
    exit();
});

// main FUNCTS


// exit
function exit(){
    if(window.confirm('Are you sure you want to exit')){
        window.close();
    }
}
// restart
function restart(){
    currentLevel = 1;
    alert("Restarted");
}
// start
function startLevel(level) {
    levelsMenu.style.display = 'none';
    gameScreen.style.display = 'block';
    if(level>=currentLevel){
        currentLevel = level;
    }
    loadLevel(level);
}
// display
function displayLevels() {
    levelsMenu.innerHTML = '';
    const arrow = document.createElement('button');
    arrow.className = 'backarrow';
    arrow.innerText='GO BACK';
    arrow.addEventListener('click', () => {
        gameScreen.innerHTML="";
        mainMenu.style.display = 'flex';
        mainMenu.style.flexDirection = 'column';
        mainMenu.style.justifyContent = 'center';
        mainMenu.style.alignItems = 'center';
        mainMenu.style.height = '100vh';
    });
    for (let i = 1; i <= 100; i++) {
        const levelIcon = document.createElement('button');
        levelIcon.className = 'level-icon';
        levelIcon.innerText = i;

        if (i <= currentLevel) {
            levelIcon.addEventListener('click', () => startLevel(i));
        } else {
            levelIcon.style.pointerEvents = 'none'; 
            levelIcon.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            levelIcon.style.opacity ='0.5';
            levelIcon.disabled = true;
        }
        
        levelsMenu.appendChild(levelIcon);
        levelsMenu.appendChild(arrow);
    }
}
// handleanswer
function handleCorrectAnswer() {

    alert('Nice!'); // Show an alert message

    const shouldContinue = confirm('Do you want to move to the next level?'); // Confirm dialog

    if (shouldContinue) {
        startLevel(currentLevel + 1);
    }
}


// load level
function loadLevel(level) {
    gameScreen.innerHTML = '';

    if (level === 1) {
        answer = "19";
        level1();
    }
    else if(level === 2){
        answer = "13";
        level2();
    }
    else if(level === 3){
        answer = "8";
        level3();
    }

    const levelContentContainer = document.createElement('div');
    levelContentContainer.classList.add('level-container');
    const levelContent = document.createElement('div');
    levelContent.classList.add('level-content');

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('input-buttons');
    const inputField = document.createElement('div');
    
    inputField.classList.add('input-field');

    for (let i = 0; i < 10; i++) {
        const button = document.createElement('button');
        button.textContent = i;

        // Add an event listener to the button to handle clicks
        
            button.addEventListener('click', () => {
                if (inputField.textContent.length < 5){
                inputField.textContent += i;
                } // Append the button's value to the input field
            });
        

        buttonsContainer.appendChild(button);
    }

    const hintButton = document.createElement('button');
    hintButton.textContent = 'Hint';
    hintButton.addEventListener('click', () => {
        if(level === 1){
            alert("Division Starts First !");
        }
        else if(level === 2){
            alert("You Only Need To Pay Attention To One Side Actually!");
        }
    })

    const crossButton = document.createElement('button');
    crossButton.textContent = 'X';
    crossButton.addEventListener('click', () => {
        inputField.textContent='';
    })
    const fakeInput = document.createElement('input');
    fakeInput.type = 'text';
    fakeInput.style.display = 'block';

    if (inputField.textContent ==='') {
        fakeInput.style.display = 'none';
    }

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
        if (inputField.textContent === answer){
            
            audio2.play();
            setTimeout(() => {
                handleCorrectAnswer();
            }, 500); // Delay for 1 second (adjust as needed)
        }
        else{
            
            audio.play();
            setTimeout(() => {
                alert('Wrong answer');
            }, 500); // Delay for 1 second (adjust as needed)
        }
    })

    levelContent.appendChild(buttonsContainer);
    levelContent.appendChild(hintButton);
    levelContent.appendChild(fakeInput);
    levelContent.appendChild(inputField);
    levelContent.appendChild(crossButton);
    levelContent.appendChild(submitButton);
    levelContentContainer.appendChild(levelContent);
    gameScreen.appendChild(levelContentContainer);
}






// LEVELS
function level1(){
    const arrow = document.createElement('button');
    arrow.className = 'backarrow';
    arrow.innerText='<--';
    arrow.addEventListener('click', () => {
        gameScreen.innerHTML="";
        mainMenu.style.display = 'flex';
        mainMenu.style.flexDirection = 'column';
        mainMenu.style.justifyContent = 'center';
        mainMenu.style.alignItems = 'center';
        mainMenu.style.height = '100vh';
    });

    const name = document.createElement('div');
    name.className='navbar';
    name.innerText = `level 1`;
    const quiz = document.createElement('div');
    quiz.className='quiz';
    quiz.innerText = "8+9+2+3-9/3 = x ";
    
    gameScreen.appendChild(arrow);
    gameScreen.appendChild(name);
    gameScreen.appendChild(quiz);
}

function level2(){
    const arrow = document.createElement('button');
    arrow.className = 'backarrow';
    arrow.innerText='<--';
    arrow.addEventListener('click', () => {
        gameScreen.innerHTML="";
        mainMenu.style.display = 'flex';
        mainMenu.style.flexDirection = 'column';
        mainMenu.style.justifyContent = 'center';
        mainMenu.style.alignItems = 'center';
        mainMenu.style.height = '100vh';
    });

    const name = document.createElement('div');
    name.className='navbar';
    name.innerText = `level 2`;
    const quiz = document.createElement('div');
    quiz.className='quiz';
    quiz.innerText = "2=19\n4=17\n16=15\n256=x";
    
    gameScreen.appendChild(arrow);
    gameScreen.appendChild(name);
    gameScreen.appendChild(quiz);
}
function level3(){
    const arrow = document.createElement('button');
    arrow.className = 'backarrow';
    arrow.innerText='<--';
    arrow.addEventListener('click', () => {
        gameScreen.innerHTML="";
        mainMenu.style.display = 'flex';
        mainMenu.style.flexDirection = 'column';
        mainMenu.style.justifyContent = 'center';
        mainMenu.style.alignItems = 'center';
        mainMenu.style.height = '100vh';
    });

    const name = document.createElement('div');
    name.className='navbar';
    name.innerText = `level 3`;
    const quiz = document.createElement('div');
    quiz.className='quiz';
    quiz.innerText = "a = 5\na + b + c = 15\na + c = 12\n a + b = ?";
    
    gameScreen.appendChild(arrow);
    gameScreen.appendChild(name);
    gameScreen.appendChild(quiz);
}


