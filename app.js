var player;
var ball;
var goal;
function setup() {
  createCanvas(255, 500);
  player = createSprite(125.5,250, 50, 50);
  ball = createSprite(125.5, 400, 25,25);
  goal = createSprite(125.5, 5, 100, 25)
}

function draw() {
  background(300, 240, 220);
  drawSprites();

  player.position.x = mouseX;
  player.position.y = mouseY;

  ball.bounce(player);

  if(ball.overlap(goal)){
    ball.remove();
  }
}
