const ITEMCATEGORIES = ['weapon', 'head', 'chest', 'legs', 'feet', 'stat', 'usable', 'magic'];

class Zone {
    constructor(zoneLevel) {
        this.zoneLevel = zoneLevel;
        this.minZoneLevel = 1;
        this.zoneItemList = {}
        ITEMCATEGORIES.forEach(element => {
            this.zoneItemList[element] = [];
        });
    }

    zoneInit() { //used for initialization that depends on zone object
        this.pushZoneItems();
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
    
        return new Enemy(...enemyAttributes);
    }

    getBoss(){
        const bossAttributes = this.bossStats[Math.floor(Math.random() * this.bossStats.length)];
    
        return new Boss(...bossAttributes);
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
        return eventList[zoneRest];
    }

    getShopType() {
        return this.shopType;
    }

    getZoneLable() {
        return this.zoneLable;
    }

    pushZoneItems() {
        for (const item of this.zoneItems) {
            let itemName = item[1];
            let metatype = item[0];
            this.zoneItemList[metatype].push(new ShopItem(itemName, ...ITEMLIST[itemName]));
        }
    }

    fillShop() { //considering moving this to a future Game class
        let shopCode = this.shopCode;
        let shopCodeExpand = [shopCode[0], 0, 0, 0, 0, shopCode[2], shopCode[3], shopCode[4]];

        for (let i = 0; i < shopCode[1]; i++) {
            const randNum = Math.floor(Math.random() * 4) + 1;
            shopCodeExpand[randNum] += 1;
        }
    
        ITEMCATEGORIES.forEach((category, index) => {
            let count = shopCodeExpand[index] || 0;
            let availableItems = this.zoneItemList[category];
    
            for (let i = 0; i < count; i++) {
                if (availableItems.length === 0) {
                    break;
                }
                const searchInd = Math.floor(Math.random() * availableItems.length);
                let item = availableItems[searchInd];
                availableItems.splice(searchInd, 1);
                item.appendShopItem();
                }
        });
    }
}