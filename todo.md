
# Todo

## Urgent
* [] Make it so that any time entities takes damage or gain health, it is done in a function like `entity.decreaseHP()` or `entity.gainHP()`. So no more `g.player.hp-=g.cEnemy.calcThorn();`. It should be `g.player.decreaseHP(g.cEnemy.calcThorn());` or something like that. This will make it easier to animate attacks and heals, and add things like armor and magic resistance.

## Frontend
* [] Header changing color per-zone
* [] Make sure 8 stats fit into armor
* [] Implement "combat timer" element which appears during combat (either in the dead space in the "enemy encounter" tab or rolling on the header)
* [] Create combat stats elements and content to display over dead enemy at the end of combat
* [] Add spots to send usable can't be used/not enough gold to puchase info


## Backend
* [] Add feedback when useable can't be used/item can't be purchased
* [] Implement magic system and add corresponding shop items into pool
* [] Start working on player level up system
* [] Create shop items for forest zone

* [] Update README.md with info on all backend systems
* [] Refactor combat.js
* [] Refactor path.js
* [] Allow player to move to a new zone after completing their current one
* [] Get rid of of global variables
* [] Refactor game.js? (will likely require a full transition to an object oriented framework to significantly improve)



# Ideas
* Flash a color on the enemy/player when they take damage
* Visual indicator for when player or enemy dodges
* 
