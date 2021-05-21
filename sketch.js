//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
	this.image = loadImage ("images/dogImg.png")
  this.image = loadImage ("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = new dog (250,250,50,50)

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
 background(46,139,87);
 if (keyWentDown(UP_ARROW)){
   writeStock(foodS)
 }
 
  dog.display();
  drawSprites();
  //add styles here

}



