let player = {
    top: 0,
    left: 0,
    speed: 10,
    costume: "mario",
    costumeNumber: 1
}

$(document).ready(function () {
    console.log("ready");
    setPlayerLocation(100, 200)
    updatePlayer()
    $(document).on('keydown', e => {
        console.log(e.code)
        switch (e.code) {
            case "KeyA":
                movePlayerLeft();
                break;
            case "KeyD":
                movePlayerRight();
                break;
            case "KeyW":
                movePlayerRight();
                break;
            case "Space":
                movePlayerRight();
                break;
            case "KeyC":
                changePlayerCostume();
                break;
            default:
                console.log("Keine gueltige Taste")
                break;
        }
        updatePlayer()
    })
});

function movePlayerLeft() {
    player.left = player.left - player.speed;
}

function movePlayerRight() {
    player.left = player.left + player.speed;
}

function changePlayerCostume() {
    player.costumeNumber++
    console.log(player.costumeNumber)
    switch (player.costumeNumber) {
        case 1:
            player.costume = "mario"
            break;
        case 2:
            player.costume = "peach"
            break;
        case 3:
            player.costume = "yoshi"
            break;
        default:
            player.costumeNumber = 1;
            player.costume = "mario"
            break;
        }
        console.log(player.costume)
        
        $("#player").css('background-image', "url('" + "grafik/" + player.costume + ".png'");
}

function updatePlayer() {
    $("#player")
        .css('margin-top', player.top)
        .css('margin-left', player.left)
        .css('background-image', player.costume + ".png")
}

function setPlayerLocation(top, left) {
    player.top = top
    player.left = left;
}