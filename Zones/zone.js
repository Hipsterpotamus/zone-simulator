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
        let tempRand = Math.random();
        let enemyStats = {
            ...self.enemyStats
        };
        if (tempRand < self.levelDifficultyDist[self.zoneLevel][0]) {
            enemyList = enemyStats[self.zoneLevel-1];
            enemyList[8] += 1;
        } else if (tempRand < self.levelDifficultyDist[self.zoneLevel][1]) {
            if (self.zoneLevel == self.maxZoneLevel - 1) {
                enemyList = enemyStats[self.zoneLevel - 1];
                enemyList[8] += 1;
            } else {
                enemyList = enemyStats[self.zoneLevel];
            }
        } else {
            if (self.zoneLevel == self.maxZoneLevel - 1) {
                enemyList = enemyStats[self.zoneLevel];
            } else if (self.zoneLevel == self.maxZoneLevel) {
                enemyList = enemyStats[self.zoneLevel-1];
                enemyList[8] += 1;
            } else {
                enemyList = enemyStats[self.zoneLevel+1];
                enemyList[8] -= 1;
            }
        }
        return enemyList[Math.floor(Math.random() * enemyList.length)];
    }
}