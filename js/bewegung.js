let player = {
    top: 0,
    left: 0,
    speed: 10,
    jumpStrenght: 20,
    costume: "mario",
    costumeNumber: 1
}

let stone = {
    top: 0,
    left: 1900,
    speed: 20
}

var stone0 = { left: 1900 }
var stone1 = { left: 1900 }
var stone2 = { left: 1900 }
var stone3 = { left: 1900 }
var stone4 = { left: 1900 }
var stone5 = { left: 1900 }
var stone6 = { left: 1900 }
var stone7 = { left: 1900 }
var stone8 = { left: 1900 }
var stone9 = { left: 1900 }
var stone10 = { left: 1900 }
var stone11 = { left: 1900 }
var stone12 = { left: 1900 }
var stone13 = { left: 1900 }
var stone14 = { left: 1900 }
var stone15 = { left: 1900 }

var stoneNumber = 16;

var Player = document.getElementById('player');
var Stone = document.getElementById('stone');

$(document).ready(function () {
    console.log("ready");
    generateStones()
    setPlayerLocation(500, 500)
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
                player.top = player.top - 10
                break;
            case "KeyS":
                player.top = player.top + 10
                break;
            case "Space":
                player.top = player.top - 10
                break;
            case "KeyC":
                changePlayerCostume();
                break;
            case "KeyH":
                $("#player").hide()
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

function stoneAppearence() {
    zahl = Math.floor(Math.random() * 900)
    stone0.left = 1900
    stone1.left = 1900
    stone2.left = 1900
    stone3.left = 1900
    stone4.left = 1900
    stone5.left = 1900
    stone6.left = 1900
    stone7.left = 1900
    stone8.left = 1900
    stone9.left = 1900
    stone10.left = 1900
    stone11.left = 1900
    stone12.left = 1900
    stone13.left = 1900
    stone14.left = 1900
    stone15.left = 1900
    for (let i = 0; i < stoneNumber; i++) {
        $("#stone" + i)
            .css('margin-top', zahl)
            .css('margin-left', stone.left)
    }
    console.log("stoneApperance")
}

function stoneMovment() {
    setInterval(function () {

        stone0.left = stone0.left - stone.speed
        stone1.left = stone1.left - stone.speed
        stone2.left = stone2.left - stone.speed
        stone3.left = stone3.left - stone.speed
        stone4.left = stone4.left - stone.speed
        stone5.left = stone5.left - stone.speed
        stone6.left = stone6.left - stone.speed
        stone7.left = stone7.left - stone.speed
        stone8.left = stone8.left - stone.speed
        stone9.left = stone9.left - stone.speed
        stone10.left = stone10.left - stone.speed
        stone11.left = stone11.left - stone.speed
        stone12.left = stone12.left - stone.speed
        stone13.left = stone13.left - stone.speed
        stone14.left = stone14.left - stone.speed
        stone15.left = stone15.left - stone.speed

        $(stone0).css('margin-left', stone0.left)
        $(stone1).css('margin-left', stone1.left)
        $(stone2).css('margin-left', stone2.left)
        $(stone3).css('margin-left', stone3.left)
        $(stone4).css('margin-left', stone4.left)
        $(stone5).css('margin-left', stone5.left)
        $(stone6).css('margin-left', stone6.left)
        $(stone7).css('margin-left', stone7.left)
        $(stone8).css('margin-left', stone8.left)
        $(stone9).css('margin-left', stone9.left)
        $(stone10).css('margin-left', stone10.left)
        $(stone11).css('margin-left', stone11.left)
        $(stone12).css('margin-left', stone12.left)
        $(stone13).css('margin-left', stone13.left)
        $(stone14).css('margin-left', stone14.left)
        $(stone15).css('margin-left', stone15.left)

        if (stone0.left <= -150) { stoneAppearence() }
        if (stone1.left <= -150) { stoneAppearence() }
        if (stone2.left <= -150) { stoneAppearence() }
        if (stone3.left <= -150) { stoneAppearence() }
        if (stone4.left <= -150) { stoneAppearence() }
        if (stone5.left <= -150) { stoneAppearence() }
        if (stone6.left <= -150) { stoneAppearence() }
        if (stone7.left <= -150) { stoneAppearence() }
        if (stone8.left <= -150) { stoneAppearence() }
        if (stone9.left <= -150) { stoneAppearence() }
        if (stone10.left <= -150) { stoneAppearence() }
        if (stone11.left <= -150) { stoneAppearence() }
        if (stone12.left <= -150) { stoneAppearence() }
        if (stone13.left <= -150) { stoneAppearence() }
        if (stone14.left <= -150) { stoneAppearence() }
        if (stone15.left <= -150) { stoneAppearence() }

        console.log(stone0.left)
        console.log(stone15.left <= -150)
        
    }, 100);
}

function generateStones() {
    let html = "";
    for (var i = 0; i < stoneNumber; i++) {
        html += '<div id="stone' + i + '" style="height:75; width:200"></div>'
    }

    document.getElementById("stoneParent").innerHTML = html;

    stoneAppearence()
    stoneMovment()
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