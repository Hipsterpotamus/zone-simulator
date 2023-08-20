class zone {
    constructor(zoneLevel) {
        this.zoneLevel = zoneLevel;
        this.minZoneLevel = 1;
        this.zoneItemList = {
            'weapon' : [],
            'head' : [],
            'chest' : [],
            'legs' : [],
            'feet' : [],
            'stat' : [],
            'item' : [],
            'magic' : []
        }
    }

    changeZoneLevel(num) {
        if (this.zoneLevel + num > this.maxZoneLevel) {
            this.zoneLevel = this.maxZoneLevel;
        } else if (this.zoneLevel + num < this.minZoneLevel) {
            this.zoneLevel = this.minZoneLevel;
        } else {
            this.zoneLevel += num;
        }
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
    
        return new Enemy(...enemyAttributes);
    }

    getRandomEvent(space) {
        let eventPool = [];
        this.zoneEvents.forEach(element => {
            if (space >= element[0] && space <= element[1]) {
                eventPool.push(element[2]);
            }
        });
        const selectedEvent = eventPool[Math.floor(Math.random() * eventPool.length)];
        return eventList[selectedEvent];
    }

    getZoneEvent() {
        return eventList[this.pathEvent];
    }

    getShopType() {
        return this.shopType;
    }

    getZoneLable() {
        return this.zoneLable;
    }

    pushZoneItems() {
        for (const item of this.zoneItems) {
            const category = item[0];
            const itemName = item[1];
            this.zoneItemList[category].push(shopItemsMasterList[itemName]);
        }
    }
}