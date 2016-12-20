<!--W=87,A=65,S=83,D=68, E=69, 1=49, 2=50, 3=51, Esc=27-->
<!--Players are 160px tall and jump 200px high.-->

Players = []
PlayerName = ""
Jump = 21
WalkSpeed = 7
Gravity = 1
Menu = false


Up=87
Left=65
Down=83
Right=68
Activate=69
CF=49 <!--Control Fighter
CA=50 <!--Control Archer
CM=51 <!--Control Mage


PCs = []

function Attack1(Tick,Name){
PCs[Name].HeadFrame = 3
Tick+=5
if(Name=="Fighter"){
Arm = document.getElementById("Arm")
Arm.style.top = Fighter.Y-193
if(Fighter.X<MouseX){
Arm.style.left = Fighter.X+13
Arm.style.transform = "rotate("+(45+Tick)+"deg)";Arm.style.transformOrigin = "bottom"
Arm.style.MozTransform = "rotate("+(45+Tick)+"deg)";Arm.style.MozTransformOrigin = "bottom"
Arm.style.webkitTransform = "rotate("+(45+Tick)+"deg)";Arm.style.webkitTransformOrigin = "bottom"}
else{
Arm.style.left = Fighter.X+40
Arm.style.transform = "rotate(-"+(45+Tick)+"deg)";Arm.style.transformOrigin = "bottom"
Arm.style.MozTransform = "rotate(-"+(45+Tick)+"deg)";Arm.style.MozTransformOrigin = "bottom"
Arm.style.webkitTransform = "rotate(-"+(45+Tick)+"deg)";Arm.style.webkitTransformOrigin = "bottom"}
if(Tick>=90){Arm.style.left = -200}
}
if(Tick<90){setTimeout("Attack1("+Tick+",'"+Name+"')",20)}
else{PCs[Name].HeadFrame = 0}
}

function Attack2(Tick,Name){
PCs[Name].HeadFrame = 4
Tick+=5
if(Tick<90){setTimeout("Attack2("+Tick+",'"+Name+"')",20)}
else{PCs[Name].HeadFrame = 0}
}

function Action(e){
if(!Menu){
button = (window.event) ? event.keyCode : e.keyCode
loc = buttons.indexOf(button)
if(button == CF){PlayerName = Players[0]}
else if(button == CA){PlayerName = Players[1]}
else if(button == CM){PlayerName = Players[2]}

else if(button == Activate){
x = document.getElementsByClassName("Lever")
for(y=x.length;y>=0;y--){
if(x[y] != undefined){
Px = parseInt(x[y].style.left.slice(0,-2))
Py = parseInt(x[y].style.top.slice(0,-2))
if( (PCs[PlayerName].X-70<=Px+20 && PCs[PlayerName].X+70>=Px+20) && (PCs[PlayerName].Y-160<=Py+20 && PCs[PlayerName].Y+80>=Py+20) ){
Flip(x[y].id)
}
}}}

else if(loc == -1){
buttons.push(button)
<!--alert(button)
if(button==Up&&PCs[PlayerName].ChangeY==0){
PCs[PlayerName].ChangeY=-Jump
if(PlayerName == "Archer" && (PCs["Fighter"].X-50<=PCs["Archer"].X && PCs["Archer"].X<=PCs["Fighter"].X+50) && (PCs["Fighter"].Y-80<=PCs["Archer"].Y && PCs["Archer"].Y<=PCs["Fighter"].Y+80)){PCs["Archer"].ChangeY=-Jump*(4/3)}
}}}}

function Stop(e){
button = (window.event) ? event.keyCode : e.keyCode
loc = buttons.indexOf(button)
if(loc != -1){buttons.splice(loc,1)}}

var buttons = []

function Move(){
if(Players != ",,"){
if(PlayerName == ""){for(c=0;c<3;c++){if(Players[c]!=""){PlayerName = Players[c];break}}}
Player1 = document.getElementById(PlayerName+"Head")
Player2 = document.getElementById(PlayerName+"Legs")
Arrow = document.getElementById("Arrow")
temp1x = PCs[PlayerName].X

for(c=0;c<Players.length;c++){
char = Players[c]
if(char != ""){
if(char == PlayerName && buttons.indexOf(65)!=-1 && buttons.indexOf(68)!=-1 && PCs[char].ChangeY >= 0){PCs[char].ChangeY += Gravity/4}
else{PCs[char].ChangeY += Gravity+.00001}
if(PCs[char].Y > Bottom){
document.getElementById(char+"Head").parentNode.removeChild(document.getElementById(char+"Head"))
document.getElementById(char+"Legs").parentNode.removeChild(document.getElementById(char+"Legs"))
t = Players.indexOf(char)
Players[t] = ""
if(PlayerName == char){PlayerName=""}
}
PCs[char].LegsFrame = 5
x = document.querySelectorAll("img.Wall")
for(y = x.length;y>=0;y--){
if(x[y] != undefined){
if(x[y].style.background.indexOf(char) == -1){
Px = parseInt(x[y].style.left.slice(0,-2))
Py = parseInt(x[y].style.top.slice(0,-2))
Pw = parseInt(x[y].style.width.slice(0,-2))
Ph = parseInt(x[y].style.height.slice(0,-2))

if((PCs[char].Y-5<=Py && Py<=PCs[char].Y+PCs[char].ChangeY) && (Px<=PCs[char].X+60 && PCs[char].X+5<=Px+Pw) && (x[y].style.background.indexOf("OneWay") == -1 || x[y].style.background[x[y].style.background.indexOf(".png")-1] == "U")){<!--Down-->
document.getElementById(char+"Head").style.backgroundPosition = "0 0"
document.getElementById(char+"Legs").style.backgroundPosition = "0 0"
PCs[char].ChangeY = 0
PCs[char].Y = Py
}

if((PCs[char].Y-144+PCs[char].ChangeY<=Py+Ph && Py+Ph<=PCs[char].Y-144) && (Px<=PCs[char].X+60 && PCs[char].X+5<=Px+Pw) && (x[y].style.background.indexOf("OneWay") == -1 || x[y].style.background[x[y].style.background.indexOf(".png")-1] == "D")){<!--Up-->
PCs[char].ChangeY = 0
PCs[char].Y = Py+Ph+144
}

}}}

if(PCs[char].ChangeY==0){PCs[char].LegsFrame = 0}
PCs[char].Y += PCs[char].ChangeY

document.getElementById(char+"Head").style.top = PCs[char].Y-142
document.getElementById(char+"Legs").style.top = PCs[char].Y-60
}}

if(buttons.indexOf(Left)!=-1){
if(PCs[PlayerName].ChangeY==0 || (buttons.indexOf(65)!=-1 && buttons.indexOf(68)!=-1 && PCs[char].ChangeY >= 0)){
PCs[PlayerName].LegsFrame = Math.floor(PCs[PlayerName].LegsImg)
if(Math.floor(PCs[PlayerName].LegsImg)==2){
PCs[PlayerName].LegsFrame=0}
if(Math.floor(PCs[PlayerName].LegsImg)==3){
PCs[PlayerName].LegsFrame=2}
PCs[PlayerName].LegsImg += .2
if(PCs[PlayerName].LegsImg>=4){PCs[PlayerName].LegsImg=0}}

x = document.querySelectorAll("img.Wall")
for(y = x.length;y>=0;y--){
if(x[y] != undefined){
if(x[y].style.background.indexOf(PlayerName) == -1 && (x[y].style.background.indexOf("OneWay") == -1 || x[y].style.background[x[y].style.background.indexOf(".png")-1] == "R")){
Px = parseInt(x[y].style.left.slice(0,-2))
Py = parseInt(x[y].style.top.slice(0,-2))
Pw = parseInt(x[y].style.width.slice(0,-2))
Ph = parseInt(x[y].style.height.slice(0,-2))

if((temp1x-WalkSpeed<=Px+Pw && Px+Pw<=temp1x) && (Py<=PCs[PlayerName].Y-7 && PCs[PlayerName].Y-140<=Py+Ph)){
temp1x = Px+Pw+WalkSpeed
}}}}

temp1x -= WalkSpeed
PCs[PlayerName].Direction = "flip"}

if(buttons.indexOf(Right)!=-1){
if(PCs[PlayerName].ChangeY==0 || (buttons.indexOf(65)!=-1 && buttons.indexOf(68)!=-1 && PCs[char].ChangeY >= 0)){
PCs[PlayerName].LegsFrame = Math.floor(PCs[PlayerName].LegsImg)
if(Math.floor(PCs[PlayerName].LegsImg)==2){PCs[PlayerName].LegsFrame=0}
if(Math.floor(PCs[PlayerName].LegsImg)==3){PCs[PlayerName].LegsFrame=2}
PCs[PlayerName].LegsImg += .2
if(PCs[PlayerName].LegsImg>=4){PCs[PlayerName].LegsImg=0}}

x = document.querySelectorAll("img.Wall")
for(y = x.length;y>=0;y--){
if(x[y] != undefined){
if(x[y].style.background.indexOf(PlayerName) == -1 && (x[y].style.background.indexOf("OneWay") == -1 || x[y].style.background[x[y].style.background.indexOf(".png")-1] == "L")){
Px = parseInt(x[y].style.left.slice(0,-2))
Py = parseInt(x[y].style.top.slice(0,-2))
Pw = parseInt(x[y].style.width.slice(0,-2))
Ph = parseInt(x[y].style.height.slice(0,-2))

if((temp1x+64<=Px && Px<=temp1x+64+WalkSpeed) && (Py<=PCs[PlayerName].Y-7 && PCs[PlayerName].Y-140<=Py+Ph)){
temp1x = Px-64-WalkSpeed
}}}}

temp1x += WalkSpeed
PCs[PlayerName].Direction = "normal"}

PCs[PlayerName].X = temp1x
Player1.style.left = PCs[PlayerName].X
Arrow.style.top = PCs[PlayerName].Y-162
if(PCs[PlayerName].HeadFrame != 3){
if(PCs[PlayerName].Direction == "normal"){
Player2.style.left = PCs[PlayerName].X-8
Arrow.style.left = PCs[PlayerName].X+12
}
else{
Player2.style.left = PCs[PlayerName].X+22
Arrow.style.left = PCs[PlayerName].X+32
}
if(PCs[PlayerName].HeadFrame != 4){
Player1.style.backgroundPosition = -(PCs[PlayerName].LegsFrame*64)+"px 0px"}
else{
Player1.style.backgroundPosition = -(PCs[PlayerName].HeadFrame*64)+"px 0px"}
Player2.style.backgroundPosition = -(PCs[PlayerName].LegsFrame*50)+"px 0px"
Player1.className = PCs[PlayerName].Direction
Player2.className = PCs[PlayerName].Direction
}

else{
if(PCs[PlayerName].X<MouseX){Direction = "normal"}
else{Direction = "flip"}
if(Direction == "normal"){
Player2.style.left = PCs[PlayerName].X-8
Arrow.style.left = PCs[PlayerName].X+12
}
else{
Player2.style.left = PCs[PlayerName].X+22
Arrow.style.left = PCs[PlayerName].X+32
}
Player1.style.backgroundPosition = -(PCs[PlayerName].HeadFrame*64)+"px 0px"
Player2.style.backgroundPosition = -(PCs[PlayerName].LegsFrame*50)+"px 0px"
Player1.className = Direction
Player2.className = Direction
}
window.scrollTo(PCs[PlayerName].X-(window.innerWidth/2),PCs[PlayerName].Y-(window.innerHeight/2))
}
else{
Arrow = document.getElementById("Arrow")
Arrow.style.left = "-40px"
Arrow.style.top = "-40px"
window.scrollTo(0,0)
clearInterval(Timer)
NextLevel()
}
}

function Spawn(Name, x, y){
eval(Name+"=new Object();PCs[Name]="+Name)
Players.push(Name)
PCs[Name].X = x
PCs[Name].Y = y
PCs[Name].ChangeY = 0
PCs[Name].HeadFrame = 0
PCs[Name].LegsImg = 0
PCs[Name].Direction = "normal"

temp = document.createElement("img")
temp.className = "normal"
temp.src = "Sprites/img_trans.gif"
temp.id = Name+"Legs"
temp.style.position = "absolute"
temp.style.width = 50+"px"
temp.style.height = 60+"px"
temp.style.left = (x-8)+"px"
temp.style.top = (y-60)+"px"
temp.style.background = "url('Sprites/"+Name+"Legs.png')"
temp.style.backgroundSize = "300% 100%"
document.body.appendChild(temp)

temp = document.createElement("img")
temp.className = "normal"
temp.src = "Sprites/img_trans.gif"
temp.id = Name+"Head"
temp.style.position = "absolute"
temp.style.width = "64px"
temp.style.height = "96px"
temp.style.left = x+"px"
temp.style.top = (y-142)+"px"
temp.style.background = "url('Sprites/"+Name+"Head.png')"
temp.style.backgroundSize = "600% 100%"
document.body.appendChild(temp)
}

window.onload = function(){
Timer = setInterval("Move()",20)
document.onkeydown = Action
document.onkeyup = Stop}

Arrow = document.createElement("img")
Arrow.src = "Sprites/Arrow.png"
Arrow.id = "Arrow"
Arrow.style.position = "absolute"
Arrow.style.width = "20px"
Arrow.style.height = "20px"
Arrow.style.zIndex = 1000
document.body.appendChild(Arrow)

Arm = document.createElement("img")
Arm.src = "Sprites/img_trans.gif"
Arm.id = "Arm"
Arm.style.background = "url('Sprites/FighterSword.png')"
Arm.style.position = "absolute"
Arm.style.width = "12px"
Arm.style.height = "95px"
Arm.style.left = "-100px"
Arm.style.zIndex = 30
document.body.appendChild(Arm)

document.body.onmousemove = function(event) {
event = event || window.event
MouseX = event.clientX + window.pageXOffset
MouseY = event.clientY
}

window.onmousedown = function MouseClick(e){
e = e || window.event
switch(e.which){
case 1:
Attack1(0,PlayerName)
break
case 3:
Attack2(0,PlayerName)
break
}
}