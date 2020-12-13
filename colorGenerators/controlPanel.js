// Control Panel
function clearBoard() {
    if (document.getElementById("colorContainer") != null) {
        document.getElementById("colorContainer").remove();
    }
}

function enterDifferential() {
    let difStr = document.getElementById("colorDifInput").value; 
    difInt = parseInt(difStr);
    if (difInt===1||difInt===3||difInt===5||difInt===15||difInt===17||difInt===51||difInt===85||difInt===255) {
        return difInt; 
    } else {
        alert("Please enter a valid number for this algorithm: 1, 3, 5, 15, 17, 51, 85, or 255.\n\nWarning:\nEntering 1 will ask the computer processor to generate a pattern with 16,777,216 unique colors, and unless your computer has enough RAM, the browser renderer will likely not be able to handle this number and the browser window will freeze. (This app was created on a 2011 iMac with 8 gigabytes of RAM was not able to handle it at level 1, but it can handle the next level 3 which generates a pattern with 636,056 colors that takes about 14 seconds, and level 5 after that takes about 4 seconds to generate a 140,608 color pattern). If you try a level on your machine and the browser freezes (not that big a deal if it happens), just exit out the window and reopen to start over with a less memory demanding level.");
    }
}           
function enterWidth() {
    let widthStr = document.getElementById("squareWidthInput").value;
    widthInt = parseInt(widthStr);
    if (widthInt < 1 || widthInt > 400) {
        alert("For pixel width please enter a number between 1-400.");
    } else {
        return widthInt;
    }
}      
function enterHeight() {
    let heightStr = document.getElementById("squareHeightInput").value;
    heightInt = parseInt(heightStr);
    if (heightInt < 1 || heightInt > 400) {
        alert("For pixel height please enter a number between 1-400.");
    } else {
        return heightInt;
    }
}          