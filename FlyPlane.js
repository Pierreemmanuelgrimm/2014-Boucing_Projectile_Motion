	function entityM(){
				//Moving
					Scale = 1/10000;
					bounce();
					PosX += VelX;
					PosY += VelY;
					
				
						deg = 360*Math.atan2(VelY,VelX)/(2*Math.PI);;
						//deg += AngleChange;
						plane.style.webkitTransform = 'rotate('+deg+'deg)'; 
						plane.style.mozTransform    = 'rotate('+deg+'deg)'; 
						plane.style.msTransform     = 'rotate('+deg+'deg)'; 
						plane.style.oTransform      = 'rotate('+deg+'deg)'; 
						plane.style.transform       = 'rotate('+deg+'deg)';
						
						
					$('#plane').css("left",""+(PosX)+"");
					$('#plane').css("top",""+(PosY)+"");
						
						

				//New Velocity
					VelX += AccX;
					VelY += AccY;						
				//New Forces
					EnginThrX = Engine();
					EnginThrY = -Engine();
					ForX = EnginThrX;
					ForY = (Mass * 9.81)  + EnginThrY;
				//NOT COMPLETE

				//New Acceleration
				$('#plane').html(deg);
				AccX = Scale*ForX/Mass;
				AccY = Scale*ForY/Mass;
	}
	function bounce(){
		if ((PosX + VelX) < 0){
			VelX *= -0.50;
			VelY *= 0.75;
			
		}
		if ((PosY + VelY) < 0){
			VelY *= -0.75;
			VelX *= 0.50;
		}
		if ((PosY + Size + VelY) > FloorY){
			VelY *= -0.75;
			VelX *= 0.50;
		}
		
	}
