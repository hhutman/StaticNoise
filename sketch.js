// this variable is global
var y;
count = 0;

function setup() {
 createCanvas(800, 600);
	//y = height / 3;
}

function draw() {
  // need set a background colour every frame
	background(0);
    noFill();
	stroke(255,50);
	noLoop();
	drawCircle(width/2, height/2, 300);


  

  }//draw close
  

function drawCircle(x, y, size) {
	ellipse(x, y, size, size);
    ellipse(150, y, size, size);
  ellipse(350, y, size, size);
  ellipse(350, y, size, size);

	if (size > 3) {
		var new_size = size/2 ;
		drawCircle(x + random(new_size), y, new_size);
        drawCircle(x - random(new_size), y, new_size);
        drawCircle(x, y + random(new_size), new_size);
        drawCircle(x, y - random(new_size), new_size);

	}	
}


  function ball(xval, size, scount, smultiply){
     noStroke();
	fill(255, 100, 200);
	ellipse(xval, y, size, size);
      
  //Motion with sin wave
  count += 1;
	y = (height/3) + (sin(count/scount) * smultiply);
    
  }



  function flower(x, y, size){
	fill(255,255,128);
	stroke(255);
	ellipse(x, y, size, size);
    fill(150, 100, 200, 50);
    var new_size = size/2;
	ellipse(x + new_size, y, new_size, new_size);
	ellipse(x - new_size, x, new_size, new_size);
	ellipse(x, y + new_size, new_size, new_size);
	ellipse(x, y - new_size, new_size, new_size);

}

  
  
  //elipses moving across the screen
// for (var y = 20; y < height; y += 40) {

// 		for(var x = 20; x < width; x += 40){
//            fill(x,100,128, 255);
// 			stroke(255);
// 			strokeWeight(2);
// 			ellipse(x, y, 40, 40);

// 		}
// }



// rect(random(width),50,200,300);
// rect(random(width),150,100,200);
//   ellipse(random(width),height/2,200,200);
