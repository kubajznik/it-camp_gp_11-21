let coinCord;
let playerCord;

function getCoords() {

    coinCord = $('#coin').css('left');
    playerCord = $('#player').css('left');
    console.log(coinCord);
    console.log(playerCord);
    /* console.log($('#player').css('left')); */
}

function checkCollision() { // Prüfung auf Kollision
    getCoords(); // Abrufen der Koordinaten

    if (playerCord > coinCord) { // Ist die Spiler Koordinate kleiner als der Coin? => Coin ist von vor / von Spieler entfernt
        console.log("Coin ist noch vom Spieler entfernt");

    } else if (playerCord = coinCord) { //Wenn Spieler Koordinate der Coin Koordinate entspricht kollidiert der Coin gerade mit dem Spieler
        collisionTriggerd(); //Welcher Coin ist kollidiert? Coin ausblenden

    } else {
        console.log("Do nothing");
    }
}

function collisionTriggerd(id) { //Hier soll die ID übergeben werden welcher Coin Kollidiert ist
    id = $(this).hide("slow");
}

$('document').ready(function() {

    console.log("DOM ready");
});