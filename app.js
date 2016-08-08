var player;
var ball;
var goal;
var noOfGoals = 0;
function setup() {
  createCanvas(255, 500);
  player = createSprite(125.5,250, 50, 50);
  ball = createSprite(125.5, 400, 25,25);
  goal = createSprite(125.5, 5, 100, 25);
  borderRight = createSprite(255, 0, 10, 1000);
  borderLeft = createSprite(0, 0, 10, 1000);
  borderTop = createSprite(0, 0, 500, 10);
  borderBottom = createSprite(0, 500, 500, 10);
}

function draw() {
  background(300, 240, 220);
  drawSprites();

  player.position.x = mouseX;
  player.position.y = mouseY;

  ball.bounce(player);

  if(ball.overlap(goal)){
    ball.position.x = 125.5;
    ball.position.y = 250;

    noOfGoals += 1;
    if(noOfGoals == 1){
        document.getElementById("additonal-text").innerHTML = " goal scored";
        document.getElementById("goals").innerHTML = noOfGoals;
    }
    else{
        document.getElementById("additonal-text").innerHTML = " goals scored";
        document.getElementById("goals").innerHTML = noOfGoals;
    }
}
  if(player.overlap(borderRight)){
    player.position.x = 35;
  }

  if(player.overlap(borderLeft)){
    player.position.x = 220;
  }

  if(player.overlap(borderBottom)){
    player.position.y = 35;
  }

  if(player.overlap(borderTop)){
    player.position.y = 465;
  }

}
