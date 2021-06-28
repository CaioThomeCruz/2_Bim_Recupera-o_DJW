
var insere = document.getElementById("floco").getContext("2d");
var Neve= new Image();
function Inicio(){
    Neve.src = "Neve.png"
     Desenho();
}
function Desenho (){
    requestAnimationFrame(Desenho);
    insere.drawImage(Neve,10,10,200,200);
}
Inicio();

update()
	var dt = 1 / this.fps;

	for(var i=0; i<this.stars.length; i++) {
		var star = this.stars[i];
		star.y += dt * star.velocity;
		//	If the star has moved from the bottom of the screen, spawn it at the top.
		if(star.y > this.height) {
			var x = Math.random()*this.width;
			var size =  Math.random()*3+1;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			let s = new Star(x, 0,size, vel);
			//console.table(s);			
		 	this.stars[i] = s;
		}
		
	}
	//console.table(this.stars);
