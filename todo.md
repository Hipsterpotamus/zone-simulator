
# Todo

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
### Pre-public Requirements

#### Caden: new combat display & LVL Up display
* [] Finish new combat display
* [] Add combat results to display (combat.displayCombatStats, line 159)
* [] Create LVL UP display
* [] Results/Death Screen (player.death, line 91)(current death screen is already epic...)
#### Holden:
* [] Finish Beach Items
* [] Finish Beach Enemies
* [] Finish Beach Events
* [] Finish Beach Rest Sites
* [] Finish Beach Bosses
* [] Add/balance boss reward items to all zones
#### Grant:
* [] Implement Combat Delay
* [x] Create Combat Results
* [x] Implement Boss Reward System
* [] Create LVL UP System
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

## Executive:
* [] Add grasslands boss reward items
* [x] Add forest boss/es
* [] Add forest boss reward items
* [] Add beach items
* [] Add beach events/rests/pathevent
* [] Add beach enemies
* [] Set beach stats appropriately for balance
* [] Add beach boss/es
* [] Add beach boss reward items

## Frontend:
* [] Create combat stats elements and content to display over dead enemy at the end of combat

* [] Add support for multiple enemies (combat logic in combat.js, enemy log behavior in enemy.updateEntityDisplay())
* [] Header changing color per-zone
* [] Make sure 8 stats fit into armor
* [] Implement "combat timer" element which appears during combat (either in the dead space in the "enemy encounter" tab or rolling on the header)
* [] Fix but where if displaying a tail on an element is deleted, it makes the tail float forever

## Backend:

### New stuff
* [] Add player level up system
* [] Add rarity to shop items
* [] Get all the characters functioning

### Fixes
* [] Fix enemy/item speed stats to be more consistent with new scaling
* [] Add delay before battle

### Refactoring
* [] Document backend systems somewhere



# Ideas
* I think it would be interesting to have a blurred image per-zone in the background with the color mixed it it. Could see it going either way, but I think it might look nice and add a nice effect.

* Flash a color on the enemy/player when they take damage
* Visual indicator for when player or enemy dodges

