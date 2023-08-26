
# Todo

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
### Pre-public Requirements

#### Caden: new combat display & LVL Up display
* [] Finish new combat display
* [] Create LVL UP display
* [] Results/Death Screen
#### Holden:
* [] Finish Beach Items
* [] Finish Beach Enemies
* [] Finish Beach Events
* [] Finish Beach Rest Sites
* [] Finish Beach Bosses
#### Grant:
* [] Implement Combat Delay
* [] Create Combat Results Page
* [] Implement Boss Reward System
* [] Create LVL UP System
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

## Executive:
* [x] Decide what info should be included in combat log


* [] Add grasslands boss reward items
* [] Add forest boss/es
* [] Add forest boss reward items
* [] Add beach items
* [] Add beach events/rests/pathevent
* [] Add beach enemies
* [] Set beach stats appropriately for balance
* [] Add beach boss/es
* [] Add beach boss reward items

## Frontend
* [] Create combat stats elements and content to display over dead enemy at the end of combat

* [] Fix error messages coming from path.js during combat. line 25: TypeError: Cannot read properties of null (reading 'style'). line 32: TypeError: Cannot read properties of null (reading 'classList')
* [] Header changing color per-zone
* [] Make sure 8 stats fit into armor
* [] Implement "combat timer" element which appears during combat (either in the dead space in the "enemy encounter" tab or rolling on the header)
* [] Fix but where if displaying a tail on an element is deleted, it makes the tail float forever

## Backend

### New stuff
* [] Add combat log list combat stats

* [] Add player level up system
* [] Implement boss reward system
* [] Add support for multiple enemies
* [] Add rarity to shop items
* [] Get all the characters functioning

### Fixes
* [] Add dodge scaling behavior similar to speed
* [] Make speed/updated dodge changes more clear in practice. maybe adopt percent scaling on them?
* [] Add delay before battle

### Refactoring
* [] Update README.md with info on all backend systems



# Ideas
* I think it would be interesting to have a blurred image per-zone in the background with the color mixed it it. Could see it going either way, but I think it might look nice and add a nice effect.

* Flash a color on the enemy/player when they take damage
* Visual indicator for when player or enemy dodges

