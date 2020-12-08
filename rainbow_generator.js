// Rainbow Generator
function generateRainbow() {
    document.getElementById("generateRainbow").disabled = true;
    // remove other containers
    if (document.getElementById("colorTestContainer") != null) {
        document.getElementById("colorTestContainer").remove();
    }
    if (document.getElementById("battleshipContainer") != null) {
        document.getElementById("battleshipContainer").remove();
    }
    //enable other buttons
    document.getElementById("colorTest").disabled = false;
    document.getElementById("homePage").disabled = false;
    document.getElementById("PlayBattleship").disabled = false;

    let colorArray = [];
    const LENGTH = 255;
    const DIF = 1;
    let R = 255;
    let G = 255;
    let B = 255;

    // create container anew
    let rainbowContain = document.createElement("div");
    rainbowContain.id = "rainbowContainer";
    document.getElementById("main").appendChild(rainbowContain);

    let rainbowGenInfo = document.createElement("div");
    rainbowGenInfo.id = "rainbowGenInfo";
    rainbowGenInfo.innerHTML = "There are exactly 1,792 perceivable colors displayed below, which is the maximum number of different colors found in a physically true rainbow that a computer can display. For a rainbow displayed in reality, the number of different colors is Infinity, if not limited somehow to the size of a photon.<br> In this algorithmically generated rainbow spectrum, each of the 1,792 colors fills its own row only 1 pixel high. Hover the mouse pointer over a color in the rainbow to see its unique RGB code.";
    document.getElementById("rainbowContainer").appendChild(rainbowGenInfo);

    colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    
    for (let i = 0; i < LENGTH; i++) {
        G -= DIF;
        B -= DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }
    for (let i = 0; i < LENGTH; i++) {
        G += DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }
    for (let i = 0; i < LENGTH; i++) {
        R -= DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }
    for (let i = 0; i < LENGTH; i++) {
        B += DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }
    for (let i = 0; i < LENGTH; i++) {
        G -= DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }
    for (let i = 0; i < LENGTH; i++) {
        R += DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }
    for (let i = 0; i < LENGTH; i++) {
        G += DIF;
        colorArray.push("rgb(" + R + "," + G + "," + B + ")");
    }

    for (let i = 0; i < colorArray.length; i++) {
        let div = document.createElement("div");
        div.id = "div";
        div.style.width = "100%";
        div.style.height = "1px";
        div.title = colorArray[i];
        div.style.background = colorArray[i];
        document.getElementById("rainbowContainer").appendChild(div);
    }
}