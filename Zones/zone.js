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
        if (self.zoneLevel - increaseNum > self.minZoneLevel) {
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
    
        const [easyThreshold, medThreshold] = [self.levelDifficultyDist[self.zoneLevel][0], self.levelDifficultyDist[self.zoneLevel][0]];
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
}