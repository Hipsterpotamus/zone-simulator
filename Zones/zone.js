const ITEMCATEGORIES = ['weapon', 'head', 'chest', 'legs', 'feet', 'stat', 'usable', 'magic'];

class Zone {
    constructor(game) {
        this.game = game;
        this.zoneLevel = 1;
        this.minZoneLevel = 1;
        this.zoneItemList = {}
        ITEMCATEGORIES.forEach(element => {
            this.zoneItemList[element] = [];
        });
    }

    changeZoneLevel(num) {
        if (this.zoneLevel + num > this.maxZoneLevel) {
            this.zoneLevel = this.maxZoneLevel;
        } else if (this.zoneLevel + num < this.minZoneLevel) {
            this.zoneLevel = this.minZoneLevel;
        } else {
            this.zoneLevel += num;
        }
        setEventFormat(false); // remove event formatting 
    }

    getRandomEnemy() {
        const randomValue = Math.random();
        const enemyStats = { ...this.enemyStats };
        let levelAdjustment = 0;
        let selectedEnemyList;
    
        const easyThreshold = this.levelDifficultyDist[this.zoneLevel][0];
        const medThreshold = this.levelDifficultyDist[this.zoneLevel][1];
        const adjZoneLevel = Math.min(this.zoneLevel, this.maxZoneLevel - 2);
    
        if (randomValue < easyThreshold) {
            selectedEnemyList = enemyStats[adjZoneLevel - 1];
            levelAdjustment += 1;
        } else if (randomValue < medThreshold) {
            selectedEnemyList = enemyStats[adjZoneLevel];
        } else {
            selectedEnemyList = enemyStats[adjZoneLevel + 1];
            levelAdjustment -= 1;
        }
    
        const enemyAttributes = selectedEnemyList[Math.floor(Math.random() * selectedEnemyList.length)];
        enemyAttributes[8] += levelAdjustment;
    
        return new Enemy(this.game, ...enemyAttributes);
    }

    getBoss(){
        const bossAttributes = this.bossStats[Math.floor(Math.random() * this.bossStats.length)];
    
        return new Boss(this.game, ...bossAttributes);
    }

    getRandomEvent(space) {
        let eventPool = [];
        this.zoneEvents.forEach(element => {
            if (space >= element[0] && space <= element[1]) {
                eventPool.push(element[2]);
            }
        });
        const selectedEvent = eventPool[Math.floor(Math.random() * eventPool.length)];
        return [selectedEvent, EVENTLIST[selectedEvent]];
    }

    getZoneEvent() {
        return [this.pathEvent, EVENTLIST[this.pathEvent]];
    }

    getRandomRest(space) {
        let zoneRest;
        const rand = Math.random();
        for (let i = 0; i < this.zoneRests.length; i++) {
            const element = this.zoneRests[i];
            if (space >= element[0] && space <= element[1] && rand < element[3]) {
                zoneRest = element[2];
                break;
            }
        }
        return [zoneRest, EVENTLIST[zoneRest]];
    }

    getShopType() {
        return this.shopType;
    }
}