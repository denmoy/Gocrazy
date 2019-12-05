var diameter = 50;


  const barWidth = 20;
  let lastBar = -1;

  function setup() {
    createCanvas(720, 400);
    colorMode(HSB, height, height, height);
    noStroke();
    background(0);
  }

  function draw() {
    let whichBar = mouseX / barWidth;
    if (whichBar !== lastBar) {
      let barX = whichBar * barWidth;
      fill(mouseY, height, height);
      rect(barX, 0, barWidth, height);
      lastBar = whichBar;
    }

  fill(150);
  strokeWeight(25);
  stroke(255,255,255);
  ellipse(200,250,250,)

  ellipse (mouseX, mouseY, 30,20 ); //mouseX = system variale give the value of the x position
//mouseY= system variable goive the value of the y position
  strokeWeight(5);
  stroke(10);

if (mouseIsPressed){
  diameter=50;
  fill( random(250) );
}
else {
  diameter=10;
  fill(250,255,200);
}

ellipse(150, 250, diameter, diameter);
ellipse(250, 250, diameter, diameter);
ellipse(350, 250, diameter, diameter);
ellipse(450, 250, diameter, diameter);// ellipse and the diameter are variale give to it already so i dont have to write it over and over
ellipse(550, 250, diameter, diameter);
ellipse(650, 250, diameter, diameter);
ellipse(200, 300, diameter, diameter);

}
