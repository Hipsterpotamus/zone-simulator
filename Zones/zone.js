class zone {
    constructor(zoneLevel) {
        self.zoneLevel = zoneLevel;
        self.minZoneLevel = 1;
    }

    increaseZoneLevel() {
        if (self.zoneLevel < self.maxZoneLevel) {
            self.zoneLevel += 1;
        }
    }

    decreaseZoneLevel() {
        if (self.zoneLevel > self.minZoneLevel) {
            self.zoneLevel -= 1;
        }
    }

    getRandomEnemy() {
        let tempRand = Math.random();
        let enemyList;
        if (tempRand < self.levelDifficultyDist[self.zoneLevel][0]) {
            enemyList = self.enemyStats[self.zoneLevel-1];
            enemyList[8] += 1;
        } else if (tempRand < self.levelDifficultyDist[self.zoneLevel][1]) {
            if (self.zoneLevel == self.maxZoneLevel - 1) {
                enemyList = self.enemyStats[self.zoneLevel - 1];
                enemyList[8] += 1;
            } else {
                enemyList = self.enemyStats[self.zoneLevel];
            }
        } else {
            if (self.zoneLevel == self.maxZoneLevel - 1) {
                enemyList = self.enemyStats[self.zoneLevel];
            } else if (self.zoneLevel == self.maxZoneLevel) {
                enemyList = self.enemyStats[self.zoneLevel-1];
                enemyList[8] += 1;
            } else {
                enemyList = self.enemyStats[self.zoneLevel+1];
                enemyList[8] -= 1;
            }
        }
        return enemyList[Math.floor(Math.random() * enemyList.length)];
    }
}