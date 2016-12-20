Things = []

function Spawn(x,y,changeY){
this.thing = document.createElement("img")
this.thing.src = "Spiny_Shell.png"
this.thing.style.position = "absolute"
this.thing.style.width = 50+"px"
this.thing.style.height = 50+"px"
this.thing.style.left = x+"px"
this.thing.style.top = y+"px"
this.thing.style.zIndex = -1
this.changeY = changeY
if(Math.random() > .5){this.thing.className = "flip"}
else{this.thing.className = "normal"}
document.body.appendChild(this.thing)
}

Test = function(){
thingNum = 0
while(thingNum<Things.length){
thing = Things[thingNum]
y = thing.thing.style.top
y = parseInt(y.substring(0,y.length-2))
x = thing.thing.style.left
x = parseInt(x.substring(0,x.length-2))
Px = Player.X
Py = Player.Y
if(((x+5<=Px && Px<=x+45) || (Px+5<=x && x<=Px+45)) && ((y<=Py && Py<=y+50) || (Py<=y && y<=Py+50))){Die()}
if(y<350){y+=thing.changeY;thing.changeY+=.5;thing.thing.style.top=y+"px"}
if(y>350){thing.thing.style.top="350px"}
if(thing.thing.className == "normal"){
thing.thing.style.left = x-5+"px"
if(x<=0){thing.thing.className = "flip"}}
else{
thing.thing.style.left = x+5+"px"}
if(x>=950){thing.thing.className = "normal"}
thingNum += 1}}

Die = function(){
clearInterval(MoveTimer)
Player.dead = true
Player.ChangeY = -15}

MoveTimer = setInterval(Test,15)