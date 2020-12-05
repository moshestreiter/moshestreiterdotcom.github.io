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
const GAMELENGTH = 10;
let score = 0;
let questionNum = 1;

view.message("Press begin to start test:")

document.getElementById("different").disabled = true;
document.getElementById("same").disabled = true;
document.getElementById("next").disabled = true;
document.getElementById("board").style.backgroundColor = "grey";

let begin = document.getElementById("begin");
begin.onclick = startTest;

function startTest() {
    do {
        level = window.prompt("    Computer displays are composed of pixels, and each pixel is composed of 3 light emmitting diodes(LED's). Each diode emits light in the frequancy of one of the three primary colors, which are Red, Green, and Blue lights.\n    By combining these 3 primary color lights at various intensities, it is possible to create all the colors of the rainbow including black and white. Absolute black is the absense of all light, and absolute white light is the combination of all the primary colors at full intensity. Shades of grey are produced when all colors are of equal intensity, and while there is not absolute absence or full presence of light intensity, rather the light intensity is somewhere in between the poles of the bi-polar spectrum.\n    All colors are produced by combining red, green, and blue light at varying intensities. For example you get shades of oranges whe you combine red and green lights, and yellow when red and green are at full intesity. Shades of yellow are produced by adjusting the blue light. Google 'RGB Calculator' if you would like to further explore these fascination charactoristics of light using a sliding rule to display all the various shades of color by adjusting Red, Green, and Blue lights.\n    The 3 LED's in each pixel in your computer display can each be adjusted on a scale of 0 to 255, 0 being complete absence of intensity, and 255 being full intensity. This means that there is 16,777,216 possible shades of colors that can be displayed on your computer (256 x 256 x 256).\n    In the input field below, you are able to enter the level of color differenciation you would like to be tested on. Entering the number 1 would adjust one of the three LED's at random for one of the two squares by only 1 on the RGB scale from 0 to 255,compared to the second square. If your eyes would be capable of distinguish between the two squares of colors at this level of 1 for all the questions on the test, then that would mean you are capable of seeing all possible 16,777,216 colors that can be displayed. Entering the number 2 would adjust the scales at random by 2, effectively halving the number of possible colors. If you were able to distinguish the squares at level 2 that that would mean you can see about 8,388,608 shades of colors(16,777,216 / 2). Successfully completeing level 10 would mean you can see 1,677,722 colors.\n    Whether or not the two squares presented are different shades of colors or the same color is determined by the computer at random. As well each set of colors different or not is determined at random. By taking the test you will learn that for some differing examples you are able to easily percieve a difference, while others at the same level in the same test set are not so easily distinguished. This demonstrates the wonderful diversity and mystery of our individual perceptions of colors.\n    At the end of the test you will be presented with an approximation of how many colors you are able to percieve based of the level the test served, as well as taking into account the ratio of correct answers.\n    Without further ado, begin the test by entering the level you would like to try as a number (i.e. '1' or '5', or any number between 1 and 100:\n    It is suggested to start at a lower level like 20 or 30 or so and work you way up so as to not get discouraged. levels 1 - 10 can be very difficult especially to start out with, as the differences are usually very subtle.\n    Note: If you find that you dont believe a set of squares are different and yet the test says they are, you can open the devepers console for your browser (for Google Chrome browser, click on View => Developer => Javascript Console) and see the RGB scale for each square and confirm they are different from each other by the chosen level number in one of the primary colors, however difficult to perceive. And yes you can also 'cheat' the test this way, however as there are no prizes for this test other than the prize of knowing a personal approximation of how many colors you can see, you would only be cheating yourself of this knowledge! Also, in a future version of this test there will be a leaderboard with the names of those who were able to see the maximum level of colors. In this future version the console will not display the RGB codes, and the source code will be encrypted as well.")
    } while (level < 1 || level > 100);
    LEVEL = parseInt(level);
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
        view.message("Correct - the squares are different colors")
    } else {
        view.message("Incorrect - the squares are the same color")
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
        view.message("Correct - the squares are the same color");
    } else {
        view.message("Incorrect - the squares are different colors");
    }
    document.getElementById("different").disabled = true;
    document.getElementById("same").disabled = true;
    document.getElementById("next").disabled = false;
    let nextTest = document.getElementById("next");
    nextTest.onclick = handleNext;
}

function handleNext() {
    if (questionNum == GAMELENGTH) {
        view.message("End of Test.<br>You can see approximately " + (Math.round((16777216 / LEVEL) * score/GAMELENGTH)) + " colors at level" + LEVEL + ".")
        document.getElementById("next").disabled = true;
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

    console.log("Square1: " + square1);
    console.log("Square2: " + square2);
    console.log("Board: " + board);
    console.log(plusOrMinus(LEVEL));
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
