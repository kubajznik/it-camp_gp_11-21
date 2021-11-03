let player = {
    top: 0,
    left: 0
}

$(document).ready(function () {
    console.log("ready");
    setPlayerLocation(100, 200)
    updatePlayerLocation()
    $(document).on('keydown', e => {
        console.log(e.code)
        switch (e.code) {
            case "KeyA":
                movePlayerLeft();
                break;
            case "KeyD":
                movePlayerRight();
                break;
            default:
                console.log("Keine gültige Taste")
                break;
        }
        updatePlayerLocation()
    })
});

function movePlayerLeft() {
    player.left = player.left - 10;
}

function movePlayerRight() {
    player.left = player.left + 10;
}

function updatePlayerLocation() {
    $("#player").css({
        left: player.left,
        top: player.top
    })
}

function setPlayerLocation(top, left) {
    player.top = top
    player.left = left;
}