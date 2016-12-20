coin = document.createElement("img")
coin.src = "coin.png"
coin.style.position = "absolute"
coin.style.width = "50px"
coin.style.height = "50px"
document.body.appendChild(coin)
coin.style.left = "-50px"
coin.style.top = "-50px"

Width = 1000

temp1 = document.createElement("img")
temp1.src = "Question-Block.png"
temp1.style.position = "absolute"
temp1.style.left = (1*Width/4-25)+"px"
temp1.style.top = "125px"
temp1.style.height = "50px"
temp1.style.width =" 50px"
document.body.appendChild(temp1)

temp2 = document.createElement("img")
temp2.src = "Question-Block.png"
temp2.style.position = "absolute"
temp2.style.left = (2*Width/4-25)+"px"
temp2.style.top = "125px"
temp2.style.height = "50px"
temp2.style.width = "50px"
document.body.appendChild(temp2)

temp3 = document.createElement("img")
temp3.src = "Question-Block.png"
temp3.style.position = "absolute"
temp3.style.left = (3*Width/4-25)+"px"
temp3.style.top = "125px"
temp3.style.height = "50px"
temp3.style.width = "50px"
document.body.appendChild(temp3)

Question = document.createElement("div")
Question.style.position = "absolute"
Question.style.left = "0px"
Question.style.width = Width+"px"
Question.style.textAlign = "center"
Question.style.color = "white"
document.body.appendChild(Question)

Text1 = document.createElement("div")
Text1.style.position = "absolute"
Text1.style.left = (1*Width/4-50)+"px"
Text1.style.top = "200px"
Text1.style.width = "100px"
Text1.style.textAlign = "center"
Text1.style.color = "white"
document.body.appendChild(Text1)

Text2 = document.createElement("div")
Text2.style.position = "absolute"
Text2.style.left = (2*Width/4-50)+"px"
Text2.style.top = "200px"
Text2.style.width = "100px"
Text2.style.textAlign = "center"
Text2.style.color = "white"
document.body.appendChild(Text2)

Text3 = document.createElement("div")
Text3.style.position = "absolute"
Text3.style.left = (3*Width/4-50)+"px"
Text3.style.top = "200px"
Text3.style.width = "100px"
Text3.style.textAlign = "center"
Text3.style.color = "white"
document.body.appendChild(Text3)

function Coin(x,y){
coin.style.left = x
coin.style.top = y-50
setTimeout(function(){coin.style.top=-50;coin.style.left=-50},500);}

function Next(a){
if(n!=0){
if(n==1){Difficulty=a}
if(Difficulty==4){if(!question[a]){Things[Things.length]=new Spawn((a-3)*Width/4-25,115,-10)}}
if(Difficulty==5){if((Math.floor(n/3)*3 == n) || (!question[a])){Things[Things.length]=new Spawn((a-3)*Width/4-25,115,-10)}}
if(Difficulty==6){if((Math.floor(n/2)*2 == n) || (!question[a])){Things[Things.length]=new Spawn((a-3)*Width/4-25,115,-10)}}
if(question[a]){n+=1}}
else{n += 1}
if(n<questions.length){
question = questions[n]
Question.innerHTML = n+".) "+question[0]
Text1.innerHTML = question[1]
Text2.innerHTML = question[2]
Text3.innerHTML = question[3]}
else{alert("You win!")}}

function AnswerA(){
if(question[4]){Coin((1*Width/4-25),125)}
Next(4)}

function AnswerB(){
if(question[5]){Coin((2*Width/4-25),125)}
Next(5)}

function AnswerC(){
if(question[6]){Coin((3*Width/4-25),125)}
Next(6)}

questions = [[true],
["How good are you at math? (Or: Choose your difficulty!)","Not really","Sort of","Very",true,true,true],["d/dx sin(x)?","sin(x)","-cos(x)","cos(x)",false,false,true],["d/dx (u/v)?","(u'v-uv')/(v*v)","u'v+uv'","u'*v'",true,false,false],["d/dx tan(x)?","-csc^2(x)","sec^2(x)","sec(x)*tan(x)",false,true,false],["Derivative of position is:","Velocity","Acceleration","Time",true,false,false],["d/dx ln(x)?","ln(x)","e^x","1/x",false,false,true],["The intergration of sine is:","sin(x)","-cos(x)","cos(x)",false,true,false],["Integration of f(x) from a to b:","f(a)-f(b)","f(b)-f(a)","(f(b)-f(a))/(b-a)",false,true,false],["Will I pass for this?","Yes","100%","Yes, because Coach Jones is the best!",true,true,true]]

Difficulty=0
n=0
Next(0)