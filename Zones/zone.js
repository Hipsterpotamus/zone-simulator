class zone {
    constructor(zoneLevel) {
        self.zoneLevel = zoneLevel;
        self.minZoneLevel = 1;
    }

    increaseZoneLevel(increaseNum) {
        if (self.zoneLevel + increaseNum < self.maxZoneLevel) {
            self.zoneLevel += increaseNum;
        } else {
            self.zoneLevel = self.maxZoneLevel;
        }
    }

    decreaseZoneLevel(decreaseNum) {
        if (self.zoneLevel - decreaseNum > self.minZoneLevel) {
            self.zoneLevel -= decreaseNum;
        } else {
            self.zoneLevel = self.minZoneLevel;
        }
    }

    getRandomEnemy() {
        const randomValue = Math.random();
        const enemyStats = { ...self.enemyStats };
        let levelAdjustment = 0;
        let selectedEnemyList;
    
        const easyThreshold = self.levelDifficultyDist[self.zoneLevel][0];
        const medThreshold = self.levelDifficultyDist[self.zoneLevel][1];
        const isMaxZoneLevelMinusOne = self.zoneLevel === self.maxZoneLevel - 1;
        const isMaxZoneLevel = self.zoneLevel === self.maxZoneLevel;
    
        if (randomValue < easyThreshold) {
            selectedEnemyList = enemyStats[self.zoneLevel - 1];
            levelAdjustment += 1;
        } else if (randomValue < medThreshold) {
            selectedEnemyList = enemyStats[isMaxZoneLevelMinusOne ? self.zoneLevel - 1 : self.zoneLevel];
            if (isMaxZoneLevelMinusOne) levelAdjustment += 1;
        } else {
            if (isMaxZoneLevelMinusOne || isMaxZoneLevel) {
                selectedEnemyList = enemyStats[self.zoneLevel - (isMaxZoneLevel ? 1 : 0)];
                if (isMaxZoneLevel) levelAdjustment += 1;
            } else {
                selectedEnemyList = enemyStats[self.zoneLevel + 1];
                levelAdjustment -= 1;
            }
        }
    
        const enemyAttributes = selectedEnemyList[Math.floor(Math.random() * selectedEnemyList.length)];
        enemyAttributes[8] += levelAdjustment;
    
        return new Enemy(...enemyAttributes);
    }

    getShopType() {
        return self.shopType;
    }

    getZoneLable() {
        return self.zoneLable;
    }

    pushZoneItems() {
        for (const item of self.zoneItems) {
            const category = item[0];
            const itemName = item[1];
            if (category === 'weapon') {
                zoneIs.equippable.weapon.push(shopItemsMasterList[itemName]);
            } else if (category === 'head') {
                zoneIs.equippable.head.push(shopItemsMasterList[itemName]);
            } else if (category === 'chest') {
                zoneIs.equippable.chest.push(shopItemsMasterList[itemName]);
            } else if (category === 'legs') {
                zoneIs.equippable.legs.push(shopItemsMasterList[itemName]);
            } else if (category === 'feet') {
                zoneIs.equippable.feet.push(shopItemsMasterList[itemName]);
            } else if (category === 'stat') {
                zoneIs.stat.push(shopItemsMasterList[itemName]);
            }
        }
    }
}