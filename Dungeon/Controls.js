document.onkeydown = Press

function Press(e){
	loc = []
	loc2 = []
	button = (window.event) ? event.keyCode : e.keyCode
	if(Map.value.charAt(0)=="█"){

		if(button==37){<!--Left
			loc = [Player[1]-1,Player[2]]}

		if(button==38){<!--Up
			loc = [Player[1],Player[2]-1]}

		if(button==39){<!--Right
			loc = [Player[1]+1,Player[2]]}

		if(button==40){<!--Down
			loc = [Player[1],Player[2]+1]}

		if(Field.charAt(XY(loc[0],loc[1])) == " "){
			Player[1] = loc[0]
			Player[2] = loc[1]
			Draw()}

		if(Field.charAt(XY(loc[0],loc[1]))=="♦"){
			Player[1] = loc[0]
			Player[2] = loc[1]
			Field = Field.substring(0,XY(loc[0],loc[1]))+" "+Field.substring(XY(loc[0],loc[1])+1,Field.length)
			Draw()}

		if(Field.charAt(XY(loc[0],loc[1]))=="#"){
			if(button==37){<!--Left
				loc2 = [Player[1]-2,Player[2]]}

			if(button==38){<!--Up
				loc2 = [Player[1],Player[2]-2]}

			if(button==39){<!--Right
				loc2 = [Player[1]+2,Player[2]]}

			if(button==40){<!--Down
				loc2 = [Player[1],Player[2]+2]}

			if(Field.charAt(XY(loc2[0],loc2[1]))==" "){
				Player[1] = loc[0]
				Player[2] = loc[1]
				Field = Field.substring(0,XY(loc[0],loc[1]))+" "+Field.substring(XY(loc[0],loc[1])+1,Field.length)
				Field = Field.substring(0,XY(loc2[0],loc2[1]))+"#"+Field.substring(XY(loc2[0],loc2[1])+1,Field.length)
				Draw()}

			if(["►","◄","▼","▲"].indexOf(Field.charAt(XY(loc2[0],loc2[1]))) != -1){
				while(["►","◄","▼","▲"].indexOf(Field.charAt(XY(loc2[0],loc2[1]))) != -1){
					if(Field.charAt(XY(loc2[0],loc2[1]))=="►"){
						loc2[0]+=1
						}
					if(Field.charAt(XY(loc2[0],loc2[1]))=="◄"){
						loc2[0]-=1
						}
					if(Field.charAt(XY(loc2[0],loc2[1]))=="▲"){
						loc2[1]-=1
						}
					if(Field.charAt(XY(loc2[0],loc2[1]))=="▼"){
						loc2[1]+=1
						}
					if(loc[0]==loc2[0] && loc[1]==loc2[1]){
						Field = Field.substring(0,XY(loc[0],loc[1])-1)+"SPLAT!"+Field.substring(XY(loc[0],loc[1])+5,Field.length)
						loc = [100000000,100000000000]
						dead = true
						}
					}
				Player[1] = loc[0]
				Player[2] = loc[1]
				if(!dead){
				Field = Field.substring(0,XY(loc[0],loc[1]))+" "+Field.substring(XY(loc[0],loc[1])+1,Field.length)
				Field = Field.substring(0,XY(loc2[0],loc2[1]))+"#"+Field.substring(XY(loc2[0],loc2[1])+1,Field.length)}
				Draw()
				}
			}
		}
	if(button==82){
		Reset()}

	if(button==83){
		Skip()}

	if(button==191){
		Help()}

	if([13,8,37,38,39,40].indexOf(button) != -1){
		return false}

	return false}

function Help(){
if(Map.value.charAt(0) == "█"){
	Map.value = "Welcome to the help screen.\nPress '/' at any time to enter/exit this screen.\nUse the arrow keys to move.\nPress 'r' to reset level.\n\nSymbols:\n"
	temp = [Player[0]+" - You\n","█ - Wall\n","  - Walk area\n","♦ - Money (Collect it all to win)\n","# - Walk into to push\n","►▼▲◄ - pushes box in direction. (You will be crushed if you are in the way)\n",""]
	x = 0
	while(x < level+3){
		Map.value += temp[x]
		x+=1
		}
	if(level==1){Map.value += "\n\nThis first level is long and boring, press 's' to skip it."}
	Map.value += "\n\n\n\This game is currently incomplete. Enjoy what is available."
	}
else{
	Draw()
	}
}

function Win(){
if(Field.indexOf("♦") == -1){
	level += 1
	if(level==2){
		Map.value = 'Congratulations.\nYou beat this level.\n\nNow adding, boxes.\n# - walk into to push.\n\nPress "/" to begin.'
		Map2()}
	else if(level==3){
		Map.value = 'Congratulations.\nYou beat this level.\n\nNow adding, conveyors.\n►▼▲◄ - pushes box in direction. (You will be crushed if you are in the way)\n(Note: Conveyers are not safe for human use.)\n\nPress "/" to begin.'
		Map3()}
	else{
		Map.value = 'You have beaten all the levels currently available.\nPress "/" to start over.'
		level = 1
		Map1()}
	}
}

function Skip(){
	dead = false
	Map.value = 'Skipping level.\n\nPress "/" to begin next level'
	level += 1
	if(level==2){
		Map.value = 'Skipping level.\n\nNow adding, boxes.\n# - walk into to push.\n\nPress "/" to begin next level.'
		Map2()}
	else if(level==3){
		Map3()}
	else{
		Map.value = 'You have beaten all the levels currently available.\nPress "/" to start over.'
		level = 1
		Map1()}
}

function Reset(){
	dead = false
	if(level==1){
		Map1()}

	if(level==2){
		Map2()}

	if(level==3){
		Map3()}

	Draw()
}