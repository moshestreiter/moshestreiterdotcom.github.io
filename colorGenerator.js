// Color Generator
function patternGenerator() {

    document.getElementById("generateColorPattern").disabled = true;
    // remove other containers
    if (document.getElementById("colorTestContainer") != null) {
        document.getElementById("colorTestContainer").remove();
    }
    if (document.getElementById("rainbowContainer") != null) {
        document.getElementById("rainbowContainer").remove();
    }
    if (document.getElementById("battleshipContainer") != null) {
        document.getElementById("battleshipContainer").remove();
    }
    //enable other buttons
    document.getElementById("colorTest").disabled = false;
    document.getElementById("homePage").disabled = false;
    document.getElementById("generateRainbow").disabled = false;
    document.getElementById("PlayBattleship").disabled = false;

    let colorGenContain = document.createElement("div");
    colorGenContain.id = "colorGeneratorContainer";
    document.getElementById("main").appendChild(colorGenContain);

    let colorGenLink = document.createElement("a");
    colorGenLink.id = "colorGeneratorLink";
    colorGenLink.href = "colorGenerator.html";
    colorGenLink.target = "_blank";
    colorGenLink.innerHTML = "Click on this link to open a new tab<br> and generate cool color patterns!";
    document.getElementById('colorGeneratorContainer').appendChild(colorGenLink);

    let colorGenNote = document.createElement("p");
    colorGenNote.id = "colorGeneratorNote";
    colorGenNote.innerHTML = "Note:<br>This application is best utilized on a desktop/laptop browser, where it is possible to resize the browser window, and possible to use a mouse to hover over color squares to get their RGB codes. While performing these actions are not required to use the app or run the color pattern algorithm, they are essential in being able to analyze the generated color pattern. For example, without the ability to resize the browser window, the displayed pattern that is generated is limited to the 1 size width of you phone or tablet screen, and you will not be able adjust the displayed pattern array.";
    document.getElementById("colorGeneratorContainer").appendChild(colorGenNote);


    
    

}