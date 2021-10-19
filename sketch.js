const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour, timeText;

var bg = "sunrise.png";

function preload() 
{
    getTime();
    
}

function setup()
{
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw()
{
    if(backgroundImg)
    {
        background(backgroundImg);
    }

    Engine.update(engine);

    strokeWeight(4);
    textSize(20);
    fill("white");
    text("Time: " + timeText, width - 1200, 20);

}

async function getTime(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON = await response.json();

    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var Time = datetime.slice(11,16);

    console.log(Time);

    if(Time>=0 && Time<18 )
    {
        bg = "sunrise.png";
    }
    else
    {
        bg="sunset.png"
    }
    backgroundImg = loadImage(bg);
    timeText = Time;
}
