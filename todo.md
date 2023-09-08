
# Todo

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
### Pre-public Requirements

#### Caden: new combat display & LVL Up display
* [x] Finish new combat display
* [x] Add combat results to display (combat.displayCombatStats, line 159)
* [x] Create XP bar
* [] Results/Death Screen (player.death, line 91)(current death screen is already epic...)
#### Holden:
* [x] Finish Beach Items
* [x] Finish Beach Enemies
* [x] Finish Beach Events
* [x] Finish Beach Rest Sites
* [] Finish Beach Bosses
* [] Add/balance boss reward items to all zones
#### Grant:
* [x] Implement Combat Delay
* [x] Create Combat Results
* [x] Implement Boss Reward System
* [x] Create LVL UP System
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
* [] Tail to data-text changes for speed improvements
* [] Fix non-smooth animation on MP bar
* [] Create combat stats elements and content to display over dead enemy at the end of combat
* [] Flash a color on the enemy/player when they take damage
* [x] Visual indicator for when player or enemy dodges
* [] Add support for multiple enemies (combat logic in combat.js, enemy log behavior in enemy.updateEntityDisplay())
* [x] Make sure 8 stats fit into armor
* [] Implement "combat timer" element which appears during combat (either in the dead space in the "enemy encounter" tab or rolling on the header)
* [x] Fix but where if displaying a tail on an element is deleted, it makes the tail float forever

## Backend:

### New stuff
* [] Add speedup button/slider/something
* [] Add rarity to shop items

### Fixes

### Refactoring
* [] Update combat systems to run in deltatime? for better communication with frontend

* [] Figure out a better way to call event format and implement across codebase
* [] Document backend systems somewhere
