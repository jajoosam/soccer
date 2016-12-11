var player;
var ball;
var goal;
var noOfGoals = 0;
function setup() {
  createCanvas(255, 500);
  player1 = createSprite(125.5,250, 50, 50);
  player2 = createSprite(125.5,250, 50, 50);
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

  if (keyDown(RIGHT_ARROW)) {
    player1.position.x = player1.position.x + 3;
  }
  if (keyDown(LEFT_ARROW)) {
    player1.position.x = player1.position.x - 3;
  }
  if (keyDown(UP_ARROW)) {
    player1.position.y = player1.position.y - 3;
  }
  if (keyDown(DOWN_ARROW)) {
    player1.position.y = player1.position.y + 3;
  }
  
    if (keyDown(S)) {
    player2.position.x = player2.position.x + 3;
  }
  if (keyDown(A)) {
    player2.position.x = player2.position.x - 3;
  }
  if (keyDown(W)) {
    player2.position.y = player2.position.y - 3;
  }
  if (keyDown(S)) {
    player2.position.y = player2.position.y + 3;
  }

  ball.bounce(player1);
  ball.bounce(player2);
  player1.bounce(player2);
  player2.bounce(player1);

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
