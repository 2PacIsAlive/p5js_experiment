var max_distance;
var img;
var offset = 0;
var easing = 0.05;
var dx = 0;
var dir = 0;
var song;
var deadOpacity = 50;

function setup() {
  song = loadSound('assets/newB.mp3');
  createCanvas(windowWidth, windowHeight);
  noStroke();
  max_distance = dist(0, 0, width, height);
  img = loadImage("assets/4.png");  // Load an image into the program
  img2 = loadImage("assets/3.png");
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    deadOpacity = 50;
    window.open ('https://soundcloud.com/its-chophaus')
  } else {
    song.play();
    deadOpacity = 150
  }
}

function draw() {
  image(img, 0, 0, windowWidth, windowHeight);  // Display at full opacity
  if (dir == 0){
  	if (dx < 20){
  		dx = dx+1;
  		offset += easing;
  	}
  	else{
  		dir = 1;
  	}
  }
  else{
  	if (dx > 0){
  		dx = dx - 1;
  		offset -= easing;
  	}
  	else{
  		dir = 0
  	}
  }
  tint(255, deadOpacity);  // Display at half opacity
  image(img2, offset, 0, windowWidth, windowHeight);

  if (song.isPlaying){
  	// Set the volume to a range between 0 and 1.0
	  var volume = map(mouseX, 0, width, 0, 1);
	  volume = constrain(volume, 0, 1);
	  song.amp(volume);

	  // Set the rate to a range between 0.1 and 4
	  // Changing the rate alters the pitch
	  var speed = map(mouseY, 0.1, height, 0, 1);
	  speed = constrain(speed, 0.01, 2);
	  song.rate(speed);

	  // Draw some circles to show what is going on
	  //stroke(0);
	  //fill(51, 100);
	  //ellipse(mouseX, 100, 48, 48);
	  //stroke(0);
	  //fill(51, 100);
	  //ellipse(100, mouseY, 48, 48);
  } 
}