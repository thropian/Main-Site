Width = 1000

function Action(e){
<!--W=87,A=65,S=83,D=68-->
button = (window.event) ? event.keyCode : e.keyCode
if(button==87||button==83||button==68||button==65){<!--Move-->
loc = buttons.indexOf(button)
if(loc == -1){buttons.push(button)
if(button==87&&Player.ChangeY==0){Player.ChangeY=-20}}}}

function Stop(e){
<!--W=87,A=65,S=83,D=68-->
button = (window.event) ? event.keyCode : e.keyCode
if(button==87||button==65||button==83||button==68){<!--Stop-->
loc = buttons.indexOf(button)
if(loc != -1){buttons.splice(loc,1)}}}

var buttons = []

function Movement(){
<!--W=87,A=65,S=83,D=68-->
temp1y = Player.Y+Player.ChangeY
temp1x = Player.X
if(!Player.dead){
if(Player.ChangeY==0){Player.Frame = 0}
else{Player.Frame = 5}}
else{Player.Frame = 4}
if(buttons.indexOf(65)!=-1 && !Player.dead){
if(Player.ChangeY==0){
Player.Frame = Math.floor(Player.Img)
Player.Img += .2
if(Player.Img>=4){Player.Img=1}}
temp1x -= 5
if(temp1x<=0){temp1x=0}
if((125<temp1y && temp1y<175) && ((1*Width/4+20)==temp1x||(2*Width/4+20)==temp1x||(3*Width/4+20)==temp1x)){
temp1x+=5}
Player.Direction = "flip"}

if(buttons.indexOf(68)!=-1 && !Player.dead){
if(Player.ChangeY==0){
Player.Frame = Math.floor(Player.Img)
Player.Img += .2
if(Player.Img>=4){Player.Img=1}}
temp1x += 5
if(temp1x>=Width-50){temp1x=Width-50}
if((125<temp1y && temp1y<175) && ((1*Width/4-70)==temp1x||(2*Width/4-70)==temp1x||(3*Width/4-70)==temp1x)){
temp1x-=5}
Player.Direction = "normal"}

if(temp1y<350 || Player.dead){
if(temp1y<500){
Player.ChangeY += 1.000005}
else{Player.ChangeY = 0
temp1y = 500
clearInterval(Player.Timer)
location.reload(true)}
if(176==Math.floor(temp1y) && Player.ChangeY < 0){
if((temp1x<=(1*Width/4-25) && (1*Width/4-25)<=temp1x+50) || ((1*Width/4-25)<=temp1x && temp1x<=(1*Width/4+25))){temp1y=175;Player.ChangeY=0.00005;AnswerA()}
if((temp1x<=(2*Width/4-25) && (2*Width/4-25)<=temp1x+50) || ((2*Width/4-25)<=temp1x && temp1x<=(2*Width/4+25))){temp1y=175;Player.ChangeY=0.00005;AnswerB()}
if((temp1x<=(3*Width/4-25) && (3*Width/4-25)<=temp1x+50) || ((3*Width/4-25)<=temp1x && temp1x<=(3*Width/4+25))){temp1y=175;Player.ChangeY=0.00005;AnswerC()}
<!--if((temp1x<=(4*Width/5-25) && (4*Width/5-25)<=temp1x+50) || ((4*Width/5-25)<=temp1x && temp1x<=(4*Width/5+25))){temp1y=175;Player.ChangeY=0.00005;AnswerD()}-->
}}
else{
Player.ChangeY = 0
temp1y = 350}
<!--if(Player.ChangeY>16){Player.ChangeY=16;}
Player.X = temp1x
Player.Y = temp1y
document.getElementById("Mario").style.left = Player.X+"px"
document.getElementById("Mario").style.top = Player.Y+"px"
document.getElementById("Mario").className = Player.Direction
document.getElementById("Mario").style.backgroundPosition = "-"+Player.Frame*50+" 0"
document.getElementById("Mario").style.backgroundSize = "600% 100%"
}

window.onload = function(){
Player.Timer = setInterval("Movement()",20)
document.onkeydown = Action
document.onkeyup = Stop}