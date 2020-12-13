// GBR
function generateColorsGBR() {
    //create color container
    let colorContainer = document.createElement("div");
    colorContainer.id = "colorContainer";
    document.getElementById("main").appendChild(colorContainer);
    //enable clear button
    document.getElementById("clearColors").disabled = false;

    let colorArray = [];
    let primaryLength = 255;
    let DIF = enterDifferential();
    let width = enterWidth();
    let height = enterHeight();
    let R = 0;
    let G = 0;
    let B = 0;

    function pushColor() {
        colorArray.push("rgb(" + G + "," + B + "," + R + ")");
    }

    pushColor();

    for (let i = 0; i < (primaryLength/DIF); i++) {
        R += DIF;
        pushColor();
    }

    for (let i = 0; i < (primaryLength/DIF); i++) {
        R = 0;
        G += DIF;
        pushColor();
    
        for (let j = 0; j < (primaryLength/DIF); j++) {
            R += DIF;
            pushColor();
        }
    }

    for (let i = 0; i < (primaryLength/DIF); i++) {
        R = 0;
        G = 0;
        B += DIF;
        pushColor();

        for (let i = 0; i < (primaryLength/DIF); i++) {
            R += DIF;
            pushColor();
        }
    
        for (let j = 0; j < (primaryLength/DIF); j++) {
            R = 0;
            G += DIF;
            pushColor();
    
            for (let k = 0; k < (primaryLength/DIF); k++) {
                R += DIF;
                pushColor();
            }
        }
    }
    
    for (let i = 0; i < colorArray.length; i++) {
        let pix = document.createElement("div");
        pix.className = "pixel";
        pix.style.width = width + "px";
        pix.style.height = height + "px";
        pix.title = colorArray[i];
        pix.style.background = colorArray[i];
        document.getElementById("colorContainer").appendChild(pix);
    }
} 