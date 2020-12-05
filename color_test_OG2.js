let view = {
    score: function(score) {
        let scoreDisplay = document.getElementById("score");
        scoreDisplay.innerHTML = score;
    },
    message: function(result) {
        let messageDisplay = document.getElementById("messageDisplay");
        messageDisplay.innerHTML = result;
    },
    question: function(q) {
        let questionNum = document.getElementById("questionNum");
        questionNum.innerHTML = q;
    }, 
    level: function(l) {
        let levelInd = document.getElementById("level");
        levelInd.innerHTML = l;
    }
};
 
let level = "";
let LEVEL = 0;
let R = "";
let G = "";
let B = "";
let square1 = "";
let square2 = ""; 
let board = "";
const GAMELENGTH = 18;
let score = 0;
let questionNum = 1;

//view.level("Level: " + level);
//view.score("Score: " + score + "/" + GAMELENGTH);
//view.question("Question #" + questionNum + "/" + GAMELENGTH);
view.message("First read the test info below,<br> we can wait...<br> Press 'Start' to begin the test:")

document.getElementById("different").disabled = true;
document.getElementById("same").disabled = true;
document.getElementById("next").disabled = true;
document.getElementById("board").style.background = "linear-gradient(90deg, red, yellow, green, blue, purple)";

let begin = document.getElementById("begin");
begin.onclick = startTest;

function startTest() {
    score = 0;
    questionNum = 1;
    do {
        level = window.prompt("To select the level of color differential you would like to test at, enter a number between 1 - 128 (1 being the most challenging and 128 being least challenging):\n\n Note.\nIf you are taking the test for the first time, it is suggested to start at a less challenging level like 20 or 30 or so and work your way up so as to get familiar with the nature of the test and to not get discouraged from the first try. Levels 1 – 10 can be very difficult especially to start out with, as the color differences are usually extremely subtle. ")
    } while (level < 1 || level > 128 || Number.isInteger(parseInt(level)) == false);
    LEVEL = parseInt(level);
    document.getElementById("heading").hidden = true;
    document.getElementById("different").disabled = false;
    document.getElementById("same").disabled = false;
    nextSlide();
}

function generatePrimaryColor() {
    return Math.floor(Math.random() * 256);
}

function generateSquare1() {
    return "rgb(" + R + "," + G + "," + B + ")";
}

function generateSquare2() {
    let sameOrDifferent = Math.floor(Math.random() * 2);
    let randomPrimary = Math.floor(Math.random() * 3);
    let r = 0;
    let g = 0;
    let b = 0;
    if (sameOrDifferent === 0) {
        return "rgb(" + R + "," + G + "," + B + ")";
    }

    if (randomPrimary === 0) {
        r = generateColor(R);
        g = G;
        b = B;
        return "rgb(" + r + "," + g + "," + b + ")";
    } else if (randomPrimary === 1) {
        r = R;
        g = generateColor(G);
        b = B;
        return "rgb(" + r + "," + g + "," + b + ")";
    } else {
        r = R;
        g = G;
        b = generateColor(B);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
}

function generateColor(primCol) {
    if (primCol + LEVEL > 255) {
        return primCol - LEVEL;
    } else if (primCol - LEVEL < 0) {
        return primCol + LEVEL;
    } else {
        return plusOrMinus(LEVEL) + primCol;
    }
}

function plusOrMinus(level) {
    let plus = + level;
    let minus = - level;
    if (Math.floor(Math.random() * 2) === 1) {
        return plus;
    } else {
        return minus;
    }
}

function handleDifferent() {
    if (square1 != square2) {
        score += 1;
        view.score("Score: " + score + "/" + GAMELENGTH);
        view.message("True -<br> the squares are different colors")
    } else {
        view.message("False -<br> the squares are the same color")
    }
    document.getElementById("different").disabled = true;
    document.getElementById("same").disabled = true;

    document.getElementById("next").disabled = false;
    let nextTest = document.getElementById("next");
    nextTest.onclick = handleNext;    
}

function handleSame() {
    if (square1 == square2) {
        score += 1;
        view.score("Score: " + score + "/" + GAMELENGTH);
        view.message("True -<br> the squares are the same color");
    } else {
        view.message("False -<br> the squares are different colors");
    }
    document.getElementById("different").disabled = true;
    document.getElementById("same").disabled = true;
    document.getElementById("next").disabled = false;
    let nextTest = document.getElementById("next");
    nextTest.onclick = handleNext;
}

function handleNext() {
    if (questionNum == GAMELENGTH) {
        if (LEVEL === 1 && parseFloat(score/GAMELENGTH) >= .75) {
            view.message("End of Test.<br><br>Wow amazing! You can see approximately " + (Math.round((16777216 / LEVEL) * score/GAMELENGTH)) + " colors at level " + LEVEL + "! Which means either you have super-human color vision capable of seeing at least all the possible colors that can be displayed by your display, or you cheated by looking at the developers console or used inspect elements to view the source code :)<br><br> Press 'Start' to begin a new test: ")
        } else if (score/GAMELENGTH === 1) {
            view.message("End of Test.<br><br>You can see approximately " + (Math.round((16777216 / LEVEL) * score/GAMELENGTH)) + " colors at level " + LEVEL + ". Considering you achieved a perfect score (congrats), take a new test at a more challenging level to get closer to the real maximum number of colors you can see.<br><br> Press 'Start' to begin a new test:");
        } else if (parseFloat(score/GAMELENGTH) >= .75) {
            view.message("End of Test.<br><br>You can see approximately " + (Math.round((16777216 / LEVEL) * score/GAMELENGTH)) + " colors at level " + LEVEL + ". Considering you answered at least 75% correctly on the test (well done), take a new test at a more challenging level to get closer to the real maximum number of colors you can see.<br><br> Press 'Start' to begin a new test:");
        } else {
           view.message( "End of Test.<br><br>You were not able to answer at least 75% correctly on the test at level " + LEVEL + ". You can try again at the same level to see if you do better, or consider taking a new test at a less challenging level to find the maximum number of colors you can see.<br><br> Press 'Start' to begin a new test:")
        }
        document.getElementById("next").disabled = true;
        document.getElementById("begin").disabled = false;
    } else {
        document.getElementById("different").disabled = false;
        document.getElementById("same").disabled = false;
        questionNum += 1;
        nextSlide();
    }  
}
function nextSlide() {
    R = generatePrimaryColor();
    G = generatePrimaryColor();
    B = generatePrimaryColor();
    
    square1 = document.getElementById("square1").style.backgroundColor = generateSquare1();
    square2 = document.getElementById("square2").style.backgroundColor = generateSquare2();
    board = document.getElementById("board").style.backgroundColor = square1;

    let different = document.getElementById("different");
    different.onclick = handleDifferent;
    let same = document.getElementById("same");
    same.onclick = handleSame;
    document.getElementById("next").disabled = true;
    view.message("Are the two squares <br> the same or different colors?")
    view.score("Score: " + score + "/" + GAMELENGTH);
    view.question("Question #" + questionNum + "/" + GAMELENGTH);

    console.log("Test Differential: " + LEVEL);
    console.log("Left Square: " + square1);
    console.log("Right Square: " + square2);
    //console.log("Board: " + board);
    //console.log(plusOrMinus(LEVEL));
}


/*window.onload = init;

function init() {
    //LEVEL = window.prompt("Enter level of color differential:")
    nextSlide();
}*/
    

/*if(questionNum === 1) {
    do {
        LEVEL = prompt("Enter level of color differential:")
    } while (LEVEL < 1 || LEVEL > 50);
}*/
