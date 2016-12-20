Bottom = 820
MakeScreen(1200,Bottom)

MakeBox(5,5,1200,780,"All","t")
MakeWall(80,5,1125,4,"All")
MakeWall(5,-400,4,405,"All")
MakeWall(1205,-400,4,405,"All","A:All-FighterArcherMage")
MakeLever(100,-50,"A")
MakeWall(10,575,5,4,"FighterArcherMage","A:FighterArcherMage-AllU")
<!--Regular Jump height = 205
MakeWall(10,410,5,4,"OneWay/FighterMageU","A:FighterMageU-AllU")
<!--Archer boosted jump height = 370
MakeWall(10,205,5,4,"OneWay/FighterMageU","A:FighterMageU-AllU")
MakeText(400,400,"And so you completed the adventure so far (the tutorial). If you liked it/think it has potential/want to see more, feel free to click either of the links below the characters and let the creators know. We do appreciate the input!",400)

Spawn("Fighter", 50, 780)
Spawn("Archer", 100, 780)
Spawn("Mage", 150, 780)