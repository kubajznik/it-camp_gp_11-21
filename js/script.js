//Struct für unseren Spieler
let player = {
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    //Sprunghöhe muss direkt im CSS geändert werden
    jumpStrenght: 100,
    bigJumpStrength: 200,
    //Bilder aus dem Grafikordner verwenden
    costume: "grafik/mageOne.png"
}

//Struct für verschiedene Karten
let map = {
    costume: "grafik/iceLandscape.png",
    startingTop: 250,
    startingLeft: 625
}

let score = 0;

$(document).ready(function() {
    //Vorbereitung, die nötig ist
    setStartPosition(map.startingTop, map.startingLeft);
    setPlayerCostume();
    setMapCostume();

    //kleiner Sprung mit w, großer mit Leertaste
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

    //Erzeuge jede Sekunde ein Hindernis, dass nach einer zufälligen Zeit erscheint
    window.setInterval(function() {
        window.setTimeout(
            function() {
                spawnObstacles();
            }, randomInt())
    }, 1000);

    //TODO: Startbildschirm implementieren
    $("#map").click(function() {

    });

    //TODO Startbildschirm implementieren
    $("#starten").click(function() {

    });
});

//kürester Abstand zwischen Gegnern
let fastestSpawn = 1000;
//weitester Abstand zwischen Gegnern
let slowestSpawn = 2000;

//Zufalls zahl zwischen den Variablen oben
function randomInt() {
    return Math.round(Math.random() * (slowestSpawn - fastestSpawn) + fastestSpawn);
}

//Mitte des Charakters soll kollidieren, nicht der Rand, ca 1/4 des Charakters
var CharacterWidthAdjustment = 25;

function checkCollisionObstacle(character, obstacle) {
    if (player.left + player.width + CharacterWidthAdjustment >= obstacle.offsetLeft && player.left + CharacterWidthAdjustment >= obstacle.offsetLeft &&
        player.left + CharacterWidthAdjustment < obstacle.offsetLeft + obstacle.offsetWidth &&
        character.offsetTop + player.height >= obstacle.offsetTop + obstacle.offsetHeight + 2) {
        alert("Game Over. Du hast " + score + " Punkte erzielt.");
        gameReset();
    }
}

//Erzeuge ein Hindernis, das von rechts nach links wandert
function spawnObstacles() {
    //Füge Spielfeld ein Obstacle hinzu
    let obstacle = $("#playground").append('<div class="obstacle"> </div>')[0].lastChild;
    let character = document.getElementById("player");
    //Überprüfe alle 2ms
    let interval = window.setInterval(function() {
        //ob Kollision auftritt
        checkCollisionObstacle(character, obstacle)
    }, 2);
    //Entferne nach 2500 (=Zeit der Animation) das Hidernis aus dem Spiel
    window.setTimeout(function() {
        obstacle.remove();
        //Punkt, wenn Hindernis verschwindet, TOD: richtige Punkteanzeige implementieren
        clearInterval(interval);
    }, 2500);
}

//Alles, was nach einem Spiel passieren muss
function gameReset() {
    score = 0;
}

//Großer Sprung
function highjump() {
    $('#player').addClass("highJumpClass");
    window.setTimeout(function() {
        $('#player').removeClass("highJumpClass");
    }, 500);
}


//Kleiner SPrung
function jump() {
    $('#player').addClass("jumpClass");
    window.setTimeout(function() {
        $('#player').removeClass("jumpClass");
    }, 300);
}

//Startposition festlegen
function setStartPosition(top, left) {
    player.top = top;
    player.left = left;
    setPlayerPosition();
}

//Punktestand erhöhen und anzeigen
function updateScore() {
    score = score+3;
    $("#score").text("Punkte: " + score);
}

//Die in player gespeicherte Position anzeigen
function setPlayerPosition() {
    $('#player')
        .css('margin-top', player.top)
        .css('margin-left', player.left)
}

//Das in player gespeicherte Kostüm anzeigen
function setPlayerCostume() {
    $("#player").css('background-image', "url('" + player.costume + "')");
}

//Den in map gespeicherten Hintergrund anzeigen
function setMapCostume() {
    $("#playground").css('background-image', "url('" + map.costume + "')");
}








    window.setInterval(function() {
        window.setTimeout(
            function() {
                spawnCoins();
            }, randomInt())
    }, 1000);
	
	
	function checkCollisionCoin(character, coin) {
    if (player.left + player.width + CharacterWidthAdjustment >= coin.offsetLeft && player.left + CharacterWidthAdjustment >= coin.offsetLeft &&
        player.left + CharacterWidthAdjustment < coin.offsetLeft + coin.offsetWidth &&
        character.offsetTop + player.height >= coin.offsetTop + coin.offsetHeight + 2) {
			updateScore();
		coin.remove();
 }
}

function spawnCoins() {
    //Füge Spielfeld ein Coin hinzu
    let coin = $("#playground").append('<div class="coin"> </div>')[0].lastChild;
    let character = document.getElementById("player");
    //Überprüfe alle 2ms
    let interval = window.setInterval(function() {
        //ob Kollision auftritt
        checkCollisionCoin(character, coin)
    }, 2);
    //Entferne nach 2500 (=Zeit der Animation) das Hidernis aus dem Spiel

}