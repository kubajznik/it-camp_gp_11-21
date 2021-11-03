$(document).ready(function(){
		setStartPosition(500, 500);
		$(document).on('keydown',function(e){
			console.log(e.code);
			switch(e.code){
				case "KeyD":
					moveplayerright();
					break;
				case "KeyA":
					moveplayerleft();
					break;
				case "KeyW":
					jump();
					break;
				default:
					console.log("Falsche Taste du idiot")
					}
				setPlayerPosition()
			});
});


moveplayerright(){
	Punkte++
	
}
moveplayerleft(){
	
	
	
}
function setPlayerPosition(){
	$('#ID')	// hier muss noch die div ID noch eingefügt werden
	.css('margin-top', player.top)
	.css('margin-left', player.left);
}
let player = {
	top: 0,
	left: 0
	}
let Punkte = 0
let playercostume = Mario