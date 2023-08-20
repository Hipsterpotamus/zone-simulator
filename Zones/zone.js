class zone {
    constructor(zoneLevel) {
        self.zoneLevel = zoneLevel;
        self.minZoneLevel = 1;
    }

    changeZoneLevel(num) {
        if (self.zoneLevel + num > self.maxZoneLevel) {
            self.zoneLevel = self.maxZoneLevel;
        } else if (self.zoneLevel + num < self.minZoneLevel) {
            self.zoneLevel = self.minZoneLevel;
        } else {
            self.zoneLevel += num;
        }
    }

    getRandomEnemy() {
        const randomValue = Math.random();
        const enemyStats = { ...self.enemyStats };
        let levelAdjustment = 0;
        let selectedEnemyList;
    
        const easyThreshold = self.levelDifficultyDist[self.zoneLevel][0];
        const medThreshold = self.levelDifficultyDist[self.zoneLevel][1];
        const adjZoneLevel = Math.min(self.zoneLevel, self.maxZoneLevel - 2);
    
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
            } else if (category === 'item') {
                zoneIs.item.push(shopItemsMasterList[itemName]);
            }
        }
    }
}