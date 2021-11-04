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
let startStones = 3;

$(document).ready(function() {
    console.log("ready");

    generateStones()
    setStonesVisible(Math.floor(Math.random() * 10 * 1000))

    setPlayerLocation(500, 500)
    updatePlayer()
})

function stoneMovment() {
    setInterval(function() {

        stone0.left = stone0.left - stone.speed


        $("#stone0").css('margin-left', stone0.left)

        if (stone0.left <= -150) {
            stone0.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log("rechts")
            console.log(zahl);
            $("#stone0")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
    }, 100);
}

function generateStones() {
    //    let html = "";
    //    for (var i = 0; i < stoneNumber; i++) {
    //        html += '<div id="stone' + i + '" style="height:75; width:200"></div>'
    //    }

    //    document.getElementById("stoneParent").innerHTML = html;

    stoneMovment()
    setStoneImage()
}

function setStonesVisible(timeUntilNextStone) {
    setTimeout(function() {
        startStones++
        showStones()
        timeUntilNextStone = setStonesVisibleDelay()
    }, timeUntilNextStone)
}

function setStonesVisibleDelay() {
    return Math.floor(Math.random() * 10 * 1000);
}

function showStones() {
    if (startStones >= 1) { $("#stone0").show() }
    if (startStones >= 2) { $("#stone1").show() }
    if (startStones >= 3) { $("#stone2").show() }
    if (startStones >= 4) { $("#stone3").show() }
    if (startStones >= 5) { $("#stone4").show() }
    if (startStones >= 6) { $("#stone5").show() }
    if (startStones >= 7) { $("#stone6").show() }
    if (startStones >= 8) { $("#stone7").show() }
    if (startStones >= 9) { $("#stone8").show() }
    if (startStones >= 10) { $("#stone9").show() }
    if (startStones >= 11) { $("#stone10").show() }
    if (startStones >= 12) { $("#stone11").show() }
    if (startStones >= 13) { $("#stone12").show() }
    if (startStones >= 14) { $("#stone13").show() }
    if (startStones >= 15) { $("#stone14").show() }
    if (startStones >= 16) { $("#stone15").show() }
}

function setStoneImage() {
    for (var i = 0; i < stoneNumber; i++) {
        let id = "#stone" + i
        console.log(id)
        $(id)
            .css('background-image', "url(grafik/stone.png)")
            .css('position, absolute')
    }
    $("#stone0")
        .css('background-image', "url(grafik/stone.png)")
        .css('position, absolute')
}