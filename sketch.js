var canvas;
var music;
var line1 , line2 , line3 , line4 , line5 , line6 , line7 , line8
var box
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1090,600);
    line1 = createSprite(100,590,200,10)
    line2 = createSprite(400,590,200,10)
    line3 = createSprite(700,590,200,10)
    line4 = createSprite(1000,590,200,10)
    line5 = createSprite(1,300,1,600)
    line6 = createSprite(1089,300,1,600)
    line7 = createSprite(545,1,1069,1)
    

    line1.shapeColor = "red"
    line2.shapeColor = "purple"
    line3.shapeColor = "blue"
    line4.shapeColor = "green"
    line5.shapeColor = "black"
    line6.shapeColor = "black"
    line7.shapeColor = "black"
    box = createSprite(random(20,750),40,40,40)
    box.shapeColor = "white"
    box.velocityY = 5
    box.velocityX = -5
    
}
 

function draw() {
    background(0);
    drawSprites()
    box.bounceOff(line5)
    box.bounceOff(line6)
    box.bounceOff(line7)
    createEdgeSprites()
    if(line1.isTouching(box) && box.bounceOff(line1)){
        box.shapeColor = "red"
        music.play()
    }
    if(line2.isTouching(box) && box.bounceOff(line2)){
        box.shapeColor = "purple"
        music.play()
    }
    if(line3.isTouching(box) && box.bounceOff(line3)){
        box.shapeColor = "blue"
        music.play()
    }
    if(line4.isTouching(box) && box.bounceOff(line4)){
        box.shapeColor = "green"
        music.play()
    }
}
