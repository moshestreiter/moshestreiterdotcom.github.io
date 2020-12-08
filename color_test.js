// Color Test
function colorTest() {
    document.getElementById("colorTest").disabled = true;
    // remove other containers
    if(document.getElementById("rainbowContainer") != null) {
        document.getElementById("rainbowContainer").remove();
    }
    if (document.getElementById("battleshipContainer") != null) {
        document.getElementById("battleshipContainer").remove();
    }
    //enable other buttons
    document.getElementById("generateRainbow").disabled = false;
    document.getElementById("homePage").disabled = false;
    document.getElementById("PlayBattleship").disabled = false;

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
    const GAMELENGTH = 18;
    let score = 0;
    let questionNum = 1;

    // create container anew
    let colorTestContain = document.createElement("div");
    colorTestContain.id = "colorTestContainer";
    document.getElementById("main").appendChild(colorTestContain);

    // heading
    let heading = document.createElement("h2");
    heading.id = ("colorTestHeading");
    heading.className = ("heading");
    heading.innerHTML = "Ever wonder how many colors you are able to see?<br> Take this color test to find out!";
    document.getElementById("colorTestContainer").appendChild(heading);

    // status bar
    let statusBar = document.createElement("div");
    statusBar.id = ("status");
    document.getElementById("colorTestContainer").appendChild(statusBar);
    let qNum = document.createElement("div");
    qNum.id = ("questionNum");
    document.getElementById("status").appendChild(qNum);
    let scoreBar = document.createElement("div");
    scoreBar.id = ("score");
    document.getElementById("status").appendChild(scoreBar);

    //message display
    let messageDisp = document.createElement("div");
    messageDisp.id = ("messageDisplay");
    document.getElementById("colorTestContainer").appendChild(messageDisp);
    view.message("First read the test info below,<br> we can wait...<br> Press 'Start' to begin the test:")

    // board
    let testBoard = document.createElement("div");
    testBoard.id = ("board");
    document.getElementById("colorTestContainer").appendChild(testBoard);
    let sqr1 = document.createElement("div");
    sqr1.id = ("square1");
    document.getElementById("board").appendChild(sqr1);
    let sqr2 = document.createElement("div");
    sqr2.id = ("square2");
    document.getElementById("board").appendChild(sqr2);

    // buttons
    let colorButtons = document.createElement("div");
    colorButtons.id = ("colorTestButtons");
    document.getElementById("colorTestContainer").appendChild(colorButtons);
    let startButton = document.createElement("button");
    startButton.id = ("begin");
    startButton.className = ("colorTestButton");
    startButton.innerHTML = "Start";
    document.getElementById("colorTestButtons").appendChild(startButton);
    let differentButton = document.createElement("button");
    differentButton.id = ("different");
    differentButton.className = ("colorTestButton");
    differentButton.innerHTML = "Different";
    document.getElementById("colorTestButtons").appendChild(differentButton);
    let sameButton = document.createElement("button");
    sameButton.id = ("same");
    sameButton.className = ("colorTestButton");
    sameButton.innerHTML = "Same";
    document.getElementById("colorTestButtons").appendChild(sameButton);
    let nextButton = document.createElement("button");
    nextButton.id = ("next");
    nextButton.className = ("colorTestButton");
    nextButton.innerHTML = "Next";
    document.getElementById("colorTestButtons").appendChild(nextButton);
    
    document.getElementById("different").disabled = true;
    document.getElementById("same").disabled = true;
    document.getElementById("next").disabled = true;
    document.getElementById("board").style.background = "linear-gradient(90deg, rgb(255,0,127), rgb(255,0,0), rgb(255,127,0), rgb(255,255,0), rgb(0,255,0), rgb(0,255,255), rgb(0,127,255),rgb(0,0,255), rgb(127,0,255), rgb(255,0,255), rgb(255,0,127), rgb(255,0,0), rgb(255,127,0), rgb(255,255,0), rgb(0,255,0), rgb(0,255,255), rgb(0,127,255),rgb(0,0,255), rgb(127,0,255))";

    // test info
    let testInfoContainer = document.createElement("div");
    testInfoContainer.id = "testInfoContainer";
    document.getElementById("colorTestContainer").appendChild(testInfoContainer);
    let testInfo1 = document.createElement("p");
    testInfo1.className = "testInfo";
    testInfo1.innerHTML = "Computer displays are composed of pixels, and each pixel is composed of 3 light emitting diodes(LED's). Each diode emits light in the frequency of one of the three primary colors, which are Red, Green, and Blue lights. The combination of these three LED's create the color of each individual pixel.";
    document.getElementById("testInfoContainer").appendChild(testInfo1);
    let testInfo2 = document.createElement("p");
    testInfo2.className = "testInfo";
    testInfo2.innerHTML = "By combining these 3 primary color lights at various intensities, it is possible to create all the colors of the rainbow (and more not found in a rainbow) including black and white. Absolute black is the absence of all light, and absolute white light is the combination of all the primary colors at full intensity. Shades of gray are produced when all colors are of equal intensity, but while there is not absolute absence or full presence of light intensity, rather the light intensity is somewhere in between the poles of the bi-polar spectrum of intensity.";
    document.getElementById("testInfoContainer").appendChild(testInfo2);
    let testInfo3 = document.createElement("p");
    testInfo3.className = "testInfo";
    testInfo3.innerHTML = "All colors can be produced by combining red, green, and blue light at varying intensities. For example, you get shades of orange when you combine red and green lights, and full yellow when red and green are at full intensity. Shades of yellow are produced by adjusting the blue light. Google 'RGB Calculator' if you would like to further explore these fascinating characteristics of light using a sliding rule to display all the various shades of color by adjusting the Red, Green, and Blue lights.";
    document.getElementById("testInfoContainer").appendChild(testInfo3);
    let testInfo4 = document.createElement("p");
    testInfo4.className = "testInfo";
    testInfo4.innerHTML = "The 3 LED's in each pixel in your display can each be adjusted on a scale of 0 to 255, 0 being complete absence of intensity, and 255 being full intensity. This means that there are 16,777,216 possible shades of colors that can be displayed on your computer screen (256 × 256 × 256).";
    document.getElementById("testInfoContainer").appendChild(testInfo4);
    let testInfo5 = document.createElement("p");
    testInfo5.className = "testInfo";
    testInfo5.innerHTML = "When you click 'Start' to begin the test, you will be prompted to enter the level of color differentiation that you would like to be tested on. Entering the number 1 would adjust one of the three LED's at random for one of the two squares at random by only 1 unit on the RGB scale from 0 to 255 compared to the second square (if the presented set of squares are different from each other). If your eyes would be capable of distinguishing between the two squares of colors at this level of 1 unit differential for all the questions on the test, then that would mean you are capable of seeing all possible 16,777,216 colors that can be displayed. Entering the number 2 would adjust the scales at random by 2 units, effectively halving the number of possible colors able to be seen. If you were able to distinguish the squares at level 2 then that would mean you can see about 8,388,608 shades of colors (16,777,216 / 2). Successfully completing level 10, for example, would mean you can see 1,677,722 colors.";
    document.getElementById("testInfoContainer").appendChild(testInfo5);
    let testInfo6 = document.createElement("p");
    testInfo6.className = "testInfo";
    testInfo6.innerHTML = "Whether the two squares presented are different shades of colors or the same color is determined by the computer program at random. As well each set of colors, different or not, is determined at random. By taking the test you will learn that for some differing sets of squares you are able to easily perceive a difference, while other sets at the same level are not so easily distinguished. This demonstrates the wonderful diversity and mystery of our individual strengths and weaknesses in our perceptions of colors.";
    document.getElementById("testInfoContainer").appendChild(testInfo6);
    let testInfo7 = document.createElement("p");
    testInfo7.className = "testInfo";
    testInfo7.innerHTML = "At the end of the test, if you score more than 75% you will be presented with an approximation of how many colors you are able to perceive based of the level of the test that was served, as well as taking into account the ratio of correct answers.";
    document.getElementById("testInfoContainer").appendChild(testInfo7);
    let testInfo8 = document.createElement("p");
    testInfo8.className = "testInfo";
    testInfo8.innerHTML = "Without further ado, begin the test by clicking on 'Start' and then entering the level you would like to be tested at as a number (i.e. '1' or '5' or any number between 1 and 128, 1 being the most challenging and 128 being least challenging).";
    document.getElementById("testInfoContainer").appendChild(testInfo8);
    let testInfo9 = document.createElement("p");
    testInfo9.className = "testInfo";
    testInfo9.innerHTML = "<br>Note 1.<br> If you are taking the test for the first time, it is suggested to start at a less challenging level like 20 or 30 or so and work your way up so as to get familiar with the nature of the test and to not get discouraged from the first try. Levels 1 – 10 can be very difficult especially to start out with, as the color differences are usually extremely subtle.";
    document.getElementById("testInfoContainer").appendChild(testInfo9);
    let testInfo10 = document.createElement("p");
    testInfo10.className = "testInfo";
    testInfo10.innerHTML = "<br>Note 2.<br> If you find that you don't believe a set of squares are different and yet the test says they are, you can open the developers console for your browser (for the Google Chrome browser, click on View => Developer => JavaScript Console) and you can see the RGB scale for each square and confirm they are in actuality different from each other by the chosen level number in one of the primary colors in the RGB scale, however difficult to perceive on the screen. And yes, you can also 'cheat' the test this way, however as there are no prizes for this test at the moment other than the prize of knowing a personal approximation of how many colors you can see, you would only be cheating yourself of this knowledge! Also fyi, in a future version of this test there will be a leader board with the names of those who were able to see the maximum level of colors. In this future version the console will not display the RGB codes, and the source code will be encrypted as well.";
    document.getElementById("testInfoContainer").appendChild(testInfo10);
    
    let begin = document.getElementById("begin");
    begin.onclick = startTest;
    
    function startTest() {
        score = 0;
        questionNum = 1;
        do {
            level = window.prompt("To select the level of color differential you would like to test at, enter a number between 1 - 128: ")
        } while (level < 1 || level > 128 || Number.isInteger(parseInt(level)) == false);
        LEVEL = parseInt(level);
        document.getElementById("board").style.background = square1;
        document.getElementById("colorTestHeading").hidden = true;
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
               view.message( "End of Test.<br><br>You were not able to answer at least 75% correctly on the test at this level. You can try again at the same level to see if you do better, or consider taking a new test at a less challenging level to find the maximum number of colors you can see.<br><br> Press 'Start' to begin a new test:")
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
}

