// Battleship Game
function playBattleship() {

    document.getElementById("PlayBattleship").disabled = true;
    // remove other containers
    if (document.getElementById("colorTestContainer") != null) {
        document.getElementById("colorTestContainer").remove();
    }
    if (document.getElementById("rainbowContainer") != null) {
        document.getElementById("rainbowContainer").remove();
    }
    //enable other buttons
    document.getElementById("colorTest").disabled = false;
    document.getElementById("homePage").disabled = false;
    document.getElementById("generateRainbow").disabled = false;

    let battleshipContain = document.createElement("div");
    battleshipContain.id = "battleshipContainer";
    document.getElementById("main").appendChild(battleshipContain);

    let battleshipLink = document.createElement("a");
    battleshipLink.id = "battleshipLink"
    battleshipLink.href = "battleship/battleship.html";
    battleshipLink.target = "_blank";
    battleshipLink.innerHTML = "Click on this link to open a new tab<br> and play Battleship!";
    document.getElementById('battleshipContainer').appendChild(battleshipLink);

    
    

}