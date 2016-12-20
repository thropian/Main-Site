Bottom = 100000


MakeBox(5,5,495,595,"All","r")
//MakeLever(50,550,"A")

MakeWall(500,-300,4,305,"All")
MakeBox(500,5,100,415,"All","t")
MakeWall(500,420,4,180,"FighterArcher","B:FighterArcher-FighterArcherMage")
MakeLever(550,320,"A")
MakeWall(500,210,100,5,"FighterArcherMage","A:FighterArcherMage-AllU")
MakeWall(500,600,300,5,"Fighter","B:Fighter-AllU")
MakeWall(605,415,195,5,"OneWay/ArcherU")
MakeWall(605,230,195,5,"OneWay/MageU")
MakeBox(500,600,300,200,"All","tr")

MakeWall(800,415,5,190,"All")
MakeWall(800,5,5,225,"Archer","A:Archer-FighterArcher")
MakeWall(800,230,5,190,"OneWay/AllL","B:AllL-Mage")
MakeLever(700,180,"B")


Spawn("Fighter",50,500)
Spawn("Archer",100,500)
Spawn("Mage",150,500)