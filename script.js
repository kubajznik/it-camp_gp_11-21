
function setStartPosition(top, left){
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
	$("#starten").click(function(){
		
function setStartPositionCoin(top, left){
			coin.top = top;
			coin.left = left;
			setCoinPosition();
		}
		function setCoinPosition() {
			$('#coin')
				.css('margin-top', coin.top)
				.css('margin-left', coin.left)
		}
		
		
		$(document).ready(function() {
			setStartPositionCoin(650, 900);
			
		});	
		
function getPosition(e) {
		var x = e.clientX;
		var y = e.clientY;
		var coords = "x koordinaten: "+x+"y koordinate: "+y;
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
    setInterval(function () {

        coin.left = coin.left - 10

        $(coin).css('margin-left', coin.left)


        if (coin.left <= -150) { coinAppearence() }

        console.log(coin.left)
        
    }, 100);
}

			
			
			
	//		$(document).on('keydown', function(e) {
	//		switch (e.code) { 
	//			case "KeyW":
	//				coin.left = coin.left -10;
	//				break;
	//		}
	//		setCoinPosition();
	//	});
	
	$('#coin').animate({
		width: '200',
		left: '+=50'
	},5000, function() {
	});
	});
});


$(document).ready(e => {
	$("#map").click(function(){
		
		
		
	
	});
});


$(document).ready(e => {
	$("#charakter").click(function(){
		
		
		
	
	});
});
