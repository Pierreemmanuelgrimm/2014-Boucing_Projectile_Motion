$(document).ready(function(){	
			FloorY = 500;
			$('#floor').css("top",""+FloorY+"");
			
			deg = 0;
			Mass = 5;
			Size = 5;
			Borders = 1;
			PosX = 0;
			PosY = FloorY - Size - Borders;
			VelX = 0;
			VelY = 0;
			ForX = 0;
			ForY = 0;
			AccX = 0;
			AccY = 0;
			
			$('body').append("<div id='plane'></div>");
			$('#plane').css("left",""+PosX+"");
			$('#plane').css("top",""+PosY+"");
			$('#plane').css({'width' : Size });
			$('#plane').css({'height' : Size });
			$('#plane').css('background-color:green');
});