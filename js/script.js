let player = {
    top: 0,
    left: 0,
    width: 100,
    height: 100,
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

let score = 0;

$(document).ready(function() {
    setStartPosition(map.startingTop, map.startingLeft);
    setPlayerCostume();
    setMapCostume();

    $(document).on('keydown', function(e) {
        switch (e.code) {
            case "KeyW":
                jump();
                break;
            case "Space":
                highjump();
                break;
        }
        setPlayerPosition()
    });

    window.setInterval(function() {
        window.setTimeout(
            function() {
                spawnObstacles();
            }, randomInt())
    }, 1000);

    $("#map").click(function() {

    });

    $("#starten").click(function() {

    });
});

let fastestSpawn = 500;
let slowestSpawn = 2000;

function randomInt() {
    return Math.round(Math.random() * (slowestSpawn - fastestSpawn) + fastestSpawn);
}

var CharacterWidthAdjustment = 25;

function checkCollisionObstacle(character, obstacle) {
    if (player.left + player.width + CharacterWidthAdjustment >= obstacle.offsetLeft && player.left + CharacterWidthAdjustment >= obstacle.offsetLeft &&
        player.left + CharacterWidthAdjustment < obstacle.offsetLeft + obstacle.offsetWidth &&
        character.offsetTop + player.height >= obstacle.offsetTop + obstacle.offsetHeight + 2) {
        alert("Game Over. Du hast " + score + " Punkte erzielt.");
        gameReset();
    }
}

function spawnObstacles() {
    let obstacle = $("#playground").append('<div class="obstacle"> </div>')[0].lastChild;
    let character = document.getElementById("player");
    let interval = window.setInterval(function() {
        checkCollisionObstacle(character, obstacle)
    }, 2);
    window.setTimeout(function() {
        obstacle.remove();
        updateScore();
        clearInterval(interval);
    }, 2500);
}

function gameReset() {
    score = 0;
}

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

function updateScore() {
    score++;
    $("#score").text("Punkte: " + score);
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