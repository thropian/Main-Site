function Flip(id){<!--Lever-->
a = document.getElementById(id)
if(a.style.backgroundPosition == "0px 0px"){
down = true
a.style.backgroundPosition = "20px 0px"}
else{
down = false
a.style.backgroundPosition = "0px 0px"}
x = document.querySelectorAll("img.Wall")
for(y=0;y<x.length;y++){
if(x[y].name.indexOf(id+":") != -1){
if(down){
New = x[y].name.slice(x[y].name.indexOf("-")+1)
if("ULDR".indexOf(New[New.length-1]) == -1){
x[y].style.background = 'url("Terrains/'+New+'.png")'
}
else{
x[y].style.background = 'url("Terrains/OneWay/'+New+'.png")'
}}
else{
New = x[y].name.slice(x[y].name.indexOf(":")+1,x[y].name.indexOf("-"))
if("ULDR".indexOf(New[New.length-1]) == -1){
x[y].style.background = 'url("Terrains/'+New+'.png")'
}
else{
x[y].style.background = 'url("Terrains/OneWay/'+New+'.png")'
}}
}
}

}