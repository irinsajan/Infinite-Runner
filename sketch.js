var car, carImg;
var backgroundImg;
var blugermImg, blugreengermImg, blupurpgermImg, greengermImg, lightblugermImg, pinkgermImg, purpgermImg, redevilgermImg, redgermImg;
var blugerm, blugreengerm, blupurpgerm, greengerm, lightblugerm, pinkgerm, purpgerm, redevilgerm, redgerm;

function preload() {
    backgroundImg = loadImage("images/cars on road.png");

    carImg = loadImage("images/pink car.png");

    blugermImg = loadImage("images/blugerm.png");
    blugreengermImg = loadImage("images/blugreengerm.png");
    blupurpgermImg = loadImage("images/blupurpgerm.png");
    greengermImg = loadImage("images/greengerm.png");
    lightblugermImg = loadImage("images/lightblugerm.png");
    pinkgermImg = loadImage("images/pinkgerm.png");
    purpgermImg = loadImage("images/purpgerm.png");
    redevilgermImg = loadImage("images/redevilgerm.png");
    redgermImg = loadImage("images/redgerm.png");
}

function setup(){
    createCanvas(1020, 900);

    car = createSprite(580, 700);
    car.addImage(carImg);
    car.scale = 0.35;

    blugerm = createSprite(70, 600);
    blugerm.addImage(blugermImg);
    blugerm.scale = 0.2;

    blugreengerm = createSprite(200, 850);
    blugreengerm.addImage(blugreengermImg);
    blugreengerm.scale = 0.2;

    blupurpgerm = createSprite(200, 50);
    blupurpgerm.addImage(blupurpgermImg);
    blupurpgerm.scale = 0.2;

    greengerm = createSprite(450, 800);
    greengerm.addImage(greengermImg);
    greengerm.scale = 0.2;

    lightblugerm = createSprite(320, 500);
    lightblugerm.addImage(lightblugermImg);
    lightblugerm.scale = 0.2;

    pinkgerm = createSprite(700, 200);
    pinkgerm.addImage(pinkgermImg);
    pinkgerm.scale = 0.2;

    purpgerm = createSprite(700, 750);
    purpgerm.addImage(purpgermImg);
    purpgerm.scale = 0.2;

    redevilgerm = createSprite(820, 500);
    redevilgerm.addImage(redevilgermImg);
    redevilgerm.scale = 0.2;

    redgerm = createSprite(960, 200);
    redgerm.addImage(redgermImg);
    redgerm.scale = 0.2;
}

function draw(){
    background(backgroundImg);

    drawSprites();

    
    camera.position.x = car.x;
    camera.position.y = car.y;
            

    if(keyDown(UP_ARROW)) {
        car.y -= 50;
   }
   
   if(car.y <= -350) {
    background("white");

    textSize(60);
    fill("black");
    text("🏠 Welcome Home 🏠", 270, -730);

    car.y = (580, -350);

    drawSprites();
   }
}
