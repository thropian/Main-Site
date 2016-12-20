Bottom = 2000
MakeScreen(1600,Bottom)

MakeWall(205,625,4,180,"Fighter")
MakeWall(205,405,4,220,"Mage")
MakeWall(205,5,4,400,"Archer")
MakeWall(155,625,100,4,"All")
MakeText(50,400,"The opening is too high for the Elf. Maybe the Paladin can help boost the scrawny little Elf's jump a little.",150)

MakeStairsR(405,805,600,600,"ArcherMage")
MakeWall(1005,205,200,200,"FighterArcher")
MakeWall(1205,205,4,200,"FighterMage","C:FighterMage-All")
MakeWall(1405,205,4,200,"All","C:All-FighterMage")
MakeWall(1207,205,198,4,"All")
MakeWall(1207,405,198,4,"All")
MakeLever(1355,300,"A")

MakeStairsR(405,805,600,400,"FighterMage")
MakeWall(1005,405,200,200,"ArcherMage")
MakeWall(1205,405,4,200,"All","A:All-FighterArcher")
MakeWall(1405,405,4,200,"FighterArcher","A:FighterArcher-All")
MakeWall(1207,605,198,4,"All")
MakeLever(1355,500,"B")

MakeStairsR(405,805,600,200,"FighterArcher")
MakeWall(1005,605,200,200,"FighterMage")
MakeWall(1205,605,4,200,"All","B:All-ArcherMage")
MakeWall(1405,605,4,200,"ArcherMage","B:ArcherMage-All")
MakeWall(1207,805,198,4,"All")
MakeLever(1355,700,"C")

MakeWall(1205,5,4,200,"All")
MakeBox(5,5,1200,800,"All","r")

MakeWall(1400,805,9,395,"All")

MakeWall(1409,1000,191,4,"All","D:All-FighterArcherMage")
MakeLever(1500,900,"D")

MakeWall(1600,0,4,1700,"All")
MakeWall(1200,1700,400,4,"All")

MakeBox(700,1100,500,300,"All","b")
MakeLever(1100,1300,"E")
MakeWall(900,1400,300,4,"All")
MakeWall(500,1700,700,4,"Mage","E:Mage-FighterArcher")
MakeStairsR(895,2000,300,296,"Fighter","E:Fighter-Mage")
MakeBox(500,1700,700,300,"All","t")
MakeWall(300,1700,200,4,"All")

MakePortal(0,2000,"U")

Spawn("Fighter", 50, 800)
Spawn("Archer", 75, 800)
Spawn("Mage", 100, 800)