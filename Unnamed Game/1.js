Bottom = 3000

MakeScreen(2300,Bottom)


MakeWall(5,5,4,1495,"All")
MakeWall(5,600,1995,4,"All")
MakeText(50,400,"A & D to walk.")

MakeWall(750,500,50,100,"Fighter")

MakeWall(1500,500,300,100,"Archer")
MakeText(1650,300,"W to jump.",100)

MakeWall(2300,5,4,1495,"All")
MakeWall(5,1500,1995,4,"All")
MakeWall(1650,604,4,896,"Mage","A:Mage-Archer")
MakeText(1700,1300,"A magic barrier? Maybe that elf can help. Press 2 to play him.", 200)
MakeWall(2000,1500,300,4,"Mage","A:Mage-FighterArcher")

MakeWall(1000,1400,200,100,"Archer")
MakeWall(500,1400,200,100,"Mage")

MakeText(100,1200,"A wizard! Perfect, he knows about magic stuffs. Press 3 and go places!",200)

MakeWall(2000,1500,4,1000,"All")
MakeWall(2300,1500,4,1300,"All")
MakeWall(2000,2000,300,4,"Fighter","A:Fighter-FighterArcherMage")
MakeLever(2150,1900,"A")
MakeText(2020,1800,"A lever! Press E to flip it and make things happen!",260)

MakeText(2000,2600,"That was an adventure! Press 1 to see what the Paladin is up to.",300)
MakeWall(2000,2800,300,4,"All")
MakeStairsR(0,3000,2000,200,"All")
MakeText(60,2800,"<-- Get all three adventures out there to begin your quest!",200)
MakePortal(-50,2700,"R")

Spawn("Fighter", 105, 600)
Spawn("Archer", 1550, 1500)
Spawn("Mage", 105, 1500)