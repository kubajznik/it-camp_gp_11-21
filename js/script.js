let player = {
    top: 0,
    left: 0,
    //jumpStrength has to be adjusted in the css animation
    jumpStrenght: 100,
    bigJumpStrength: 200,
    costume: "grafik/mageOne.png"
}

let map = {
    costume: "grafik/iceLandscape.png",
    startingTop: 250,
    startingLeft: 625
}

$(document).ready(function() {
    setStartPosition(map.startingTop, map.startingLeft);
    setPlayerCostume();
    setMapCostume();

    $(document).on('keydown', function(e) {
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
            case "KeyB":
                let obstacle = $("#playground").append('<div class="obstacle"> </div>')[0].lastChild;
                console.log(obstacle);
                window.setTimeout(function() {
                    obstacle.remove();
                }, 2500);
                break;
            default:
                console.log(e.code);
        }
        setPlayerPosition()
    });

    $("#map").click(function() {

    });

    $("#starten").click(function() {
        /*function coinAppearence() {
            zahl = Math.floor(Math.random() * 900)
            coin.left = 1900
            for (let i = 0; i < coinNumber; i++) {
                $("#coin" + i)
                    .css('margin-top', zahl)
                    .css('margin-left', coin.left)
            }
            console.log("coinApperance")
        }*/
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

function setPlayerCostume() {
    $("#player").css('background-image', "url('" + player.costume + "')");
}

function setMapCostume() {
    $("#playground").css('background-image', "url('" + map.costume + "')");
}