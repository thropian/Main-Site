Bottom = 99999999999
MakeScreen(1200,Bottom)

MakeWall(300,600,10,205,"OneWay/FighterR")
MakeWall(300,600,10,5,"OneWay/FighterU")
MakeWall(400,600,10,205,"OneWay/FighterArcherR")
MakeWall(400,600,10,5,"OneWay/FighterArcherU")
MakeWall(500,600,10,205,"OneWay/ArcherR")
MakeWall(500,600,10,5,"OneWay/ArcherU")
MakeWall(600,600,10,205,"OneWay/ArcherMageR")
MakeWall(600,600,10,5,"OneWay/ArcherMageU")
MakeWall(700,600,10,205,"OneWay/MageR")
MakeWall(700,600,10,5,"OneWay/MageU")
MakeWall(800,600,10,205,"OneWay/FighterMageR")
MakeWall(800,600,10,5,"OneWay/FighterMageU")
MakeWall(900,600,10,205,"OneWay/AllR")
MakeWall(900,600,10,5,"OneWay/AllU")





MakeBox(5,5,1200,800,"All")
Spawn("Fighter", 50, 800)
Spawn("Archer", 100, 800)
Spawn("Mage", 150, 800)