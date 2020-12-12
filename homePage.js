// Home Page
function homePage() {
    document.getElementById("homePage").disabled = true;
    // remove other containers
    if(document.getElementById("rainbowContainer") != null) {
        document.getElementById("rainbowContainer").remove();
    }
    if(document.getElementById("colorTestContainer") != null) {
        document.getElementById("colorTestContainer").remove();
    }
    if(document.getElementById("battleshipContainer") != null) {
        document.getElementById("battleshipContainer").remove();
    }
    if (document.getElementById("colorGeneratorContainer") != null) {
        document.getElementById("colorGeneratorContainer").remove();
    }
    //enable other buttons
    document.getElementById("generateRainbow").disabled = false;
    document.getElementById("colorTest").disabled = false;
    document.getElementById("PlayBattleship").disabled = false;
    document.getElementById("generateColorPattern").disabled = false;
}
