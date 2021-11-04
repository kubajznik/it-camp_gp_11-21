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
		
//			switch (e.code) { 
//				case "KeyW":
	//				player.top = player.top -30;
	//				break;
	//		}
	//		switch (e.code) { 
	//			case "KeyA":
	//				player.left = player.left -30;
	//			break;
	//		}
	//		switch (e.code) { 
	//			case "KeyS":
	//				player.top = player.top +30;
	//				break;
	//		}
	//		switch (e.code) { 
	//			case "KeyD":
	//			player.left = player.left +30;
	//				break;
	//		}
	//		setPlayerPosition();
	//		
	//	});
		
	

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

let Punkte = 0;
		

			switch (e.code) { 
				case "KeyD":
				player.left = player.left +30;
				break;
			}
			setPlayerPosition();
			
		
		
