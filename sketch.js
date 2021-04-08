const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ,bg1;
var timer=0
function preload() {
    // create getBackgroundImg( ) here

 getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
 if(bg1)
    background(bg1)
    // add condition to check if any background image is there to add
textSize(30)
 text("time: "+timer,20,30)


    Engine.update(engine);

    // write code to display time in correct format here
   

}

async function getBackgroundImg(){

    // write code to fetch time from API

var times =await  fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
var timeJSON= await times.json()
//console.log(timeJSON)
    // write code slice the datetime
var datetime = timeJSON.datetime

var rTime =datetime.slice(11,13)
var date = datetime.slice(11,19)
console.log(rTime)
timer=date



    // add conditions to change the background images from sunrise to sunset
if(rTime===06){
bg="sunrise1.png"
}
else if(rTime===07){
bg="sunrise2.png"
}
else if(rTime===08){
bg="sunrise3.png"
}
else if(rTime===09){
bg="sunrise4.png"
}
else if(rTime >= 10 && rTime<=14){
bg="sunrise5.png"
}
else if(rTime>=15 && rTime<=17){
bg="sunrise6.png"
}
else if(rTime===18){
bg="sunset7.png"
}
else if(rTime===19){
bg="sunset8.png"
}
else if(rTime===20){
bg="sunset9.png"
}
else if(rTime===21){
bg="sunset10.png"
}
else if(rTime>=22 && rTime<=02){
bg="sunset11.png"
}
else {
bg="sunset12.png"
}



//load the image in backgroundImg variable here
    bg1=loadImage(bg)
}

