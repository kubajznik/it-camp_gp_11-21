let player = {
    top: 0,
    left: 0,
}

$(document).ready(function() {
    console.log("starting");
    setStartPosition(720, 20); /* Startpositionen auf verschiedenen Maps verändern */
    $(document).on('keydown', function(e) {
        console.log(e.code);
        switch (e.code) {
            case "KeyD":
                player.left = player.left + 15;
                break;
            case "KeyA":
                player.left = player.left - 15;
                break;
            case "KeyW":
                jump();
                break;
            case "Space":
                highjump();
                break;
            default:
                console.log(e.code);
        }
        setPlayerPosition()
    });
});

function highjump() {
    $('#player').addClass("highJumpClass");
    window.setTimeout(function() {
        $('#player').removeClass("highJumpClass");
    }, 500);
}

function jump() {
    $('#player').addClass("jumpClass");
    window.setTimeout(function() {
        $('#player').removeClass("jumpClass");
    }, 300);
}

function setStartPosition(top, left) {
    player.top = top;
    player.left = left;
    setPlayerPosition();
}

function setPlayerPosition() {
    $('#player')
        .css('margin-top', player.top)
        .css('margin-left', player.left)
}

$(document).ready(function() {
    setStartPosition(630, 400);
});

$(document).ready(e => {
    $("#starten").click(function() {

        function setStartPositionCoin(top, left) {
            coin.top = top;
            coin.left = left;
            setCoinPosition();
        }

        function setCoinPosition() {
            $('#coin')
                .css('margin-top', coin.top)
                .css('margin-left', coin.left)
        }

        setStartPositionCoin(650, 900);

        function getPosition(e) {
            var x = e.clientX;
            var y = e.clientY;
            var coords = "x koordinaten: " + x + "y koordinate: " + y;
            document.getElementById("showcoordinates").innerHTML = coords;


        }

        let koordinate;


        var coin = { left: 1900 }

        var coinNumber = 16;

        var Stone = document.getElementById('stone');


        function coinAppearence() {
            zahl = Math.floor(Math.random() * 900)
            coin.left = 1900
            for (let i = 0; i < coinNumber; i++) {
                $("#coin" + i)
                    .css('margin-top', zahl)
                    .css('margin-left', coin.left)
            }
            console.log("coinApperance")
        }

        function coinMovment() {
            setInterval(function() {

                coin.left = coin.left - 10

                $(coin).css('margin-left', coin.left)


                if (coin.left <= -150) { coinAppearence() }

                console.log(coin.left)

            }, 100);
        }

        $('#coin').animate({
            width: '200',
            left: '+=50'
        }, 5000, function() {});
    });
});


$(document).ready(e => {
    $("#map").click(function() {




    });
});


$(document).ready(e => {
    $("#charakter").click(function() {




    });
});

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
let startStones = 3;

$(document).ready(function() {
    console.log("ready");

    generateStones()
    setStonesVisible(Math.floor(Math.random() * 10 * 1000))

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
})

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

function stoneMovment() {
    setInterval(function() {

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

        $("#stone0").css('margin-left', stone0.left)
        $("#stone1").css('margin-left', stone1.left)
        $("#stone2").css('margin-left', stone2.left)
        $("#stone3").css('margin-left', stone3.left)
        $("#stone4").css('margin-left', stone4.left)
        $("#stone5").css('margin-left', stone5.left)
        $("#stone6").css('margin-left', stone6.left)
        $("#stone7").css('margin-left', stone7.left)
        $("#stone8").css('margin-left', stone8.left)
        $("#stone9").css('margin-left', stone9.left)
        $("#stone10").css('margin-left', stone10.left)
        $("#stone11").css('margin-left', stone11.left)
        $("#stone12").css('margin-left', stone12.left)
        $("#stone13").css('margin-left', stone13.left)
        $("#stone14").css('margin-left', stone14.left)
        $("#stone15").css('margin-left', stone15.left)

        if (stone0.left <= -150) {
            stone0.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log("rechts")
            console.log(zahl);
            $("#stone0")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone1.left <= -150) {
            stone1.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone1")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone2.left <= -150) {
            stone2.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone2")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone3.left <= -150) {
            stone3.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone3")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone4.left <= -150) {
            stone4.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone4")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone5.left <= -150) {
            stone5.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone5")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone6.left <= -150) {
            stone6.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone6")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone7.left <= -150) {
            stone7.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone7")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone8.left <= -150) {
            stone8.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone8")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone9.left <= -150) {
            stone9.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone9")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone10.left <= -150) {
            stone10.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone10")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone11.left <= -150) {
            stone11.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone11")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone12.left <= -150) {
            stone12.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone12")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone13.left <= -150) {
            stone13.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone13")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone14.left <= -150) {
            stone14.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone14")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
        }
        if (stone15.left <= -150) {
            stone15.left = 1900
            zahl = Math.floor(Math.random() * 900)
            console.log(zahl);
            $("#stone15")
                .css('margin-top', zahl)
                .css('margin-left', stone.left)
            console.log(zahl)
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