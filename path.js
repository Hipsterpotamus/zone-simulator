class Path {
    constructor(game) {
        this.game = game;
        this.zoneNum = 1;
        this.maxSpaces;
        this.typeInfo;
        this.setSpaces;
        this.nextSpace;
        this.spaceNumber = 0;

        this.itemShop = new ItemShop(game);
    }

    generatePath(maxSpaces, typeInfo, setSpaces) {
        this.maxSpaces = maxSpaces;
        this.typeInfo = typeInfo;
        this.setSpaces = setSpaces;

        this.pushZoneItems();

        this.generateNextSpace();
    }

    generateNextSpace() {
        this.nextSpace;
        let total = 0;
        this.typeInfo.forEach(element => {
            total += element[1];
        });
        const rand = Math.random();
        let runningTotal = 0;
        for (let i = 0; i < this.typeInfo.length; i++) {
            const element = this.typeInfo[i];
            runningTotal += element[1] / total;
            if (runningTotal > rand) {
                this.nextSpace = element[0];
                break;
            }
        }
        if (this.spaceNumber in this.setSpaces) {this.nextSpace = this.setSpaces[this.spaceNumber];}
        
        if (this.game.player.levelInfo.activeCharacteristics.has('prescient')) {
            CHARACTERISTICS['prescient'].onNotifyNextSpace(this.nextSpace);
        }
        this.adjustChances();
    }

    adjustChances() {
        this.typeInfo.forEach(element => {
            if (element[0] == this.nextSpace) {
                element[1] = element[3];
            } else {
                element[1] += element[2];
            }
        });
    }

    advancePath() {
        this.itemShop.shopOpen = false;
        this.displayZoneInfo();
        if(this.spaceNumber%3==0 && this.spaceNumber != 0){this.game.zone.changeZoneLevel(1)};
        $('#content-central-box').empty();

        let income = this.game.player.calcStat('income');
        if (this.game.player.levelInfo.activeCharacteristics.has('thrifty')) {
            income = CHARACTERISTICS['thrifty'].onCalculateIncome(income);
        }
        this.game.player.changeGold(income);
        
        const SPACEKEYS = {'shop' : 'shopEvent', 
        'event' : 'eventEvent', 
        'rest' : 'restEvent', 
        'enemy' : 'enemyEvent', 
        'empty' : 'emptyEvent',
        'pathEvent' : 'pathEventEvent', 
        'boss' : 'bossEvent'};

        this[SPACEKEYS[this.nextSpace]]();
        if (this.spaceNumber >= this.maxSpaces) {
            this.spaceNumber = 0;
            this.advanceZone();
            this.zoneNum += 1;
        } else {
            this.spaceNumber += 1;
            this.generateNextSpace();
        }
    }

    advanceZone() {
        this.game.zone = this.game.zone.advanceToNextZone();
        this.generatePath(...this.game.zone.pathGen);
    }

    shopEvent() {
        setEventFormat(false);
        setBroadcastTitleText('Shop');
        this.itemShop.generateNewShop(this.game.zone.getShopCode());
    }

    eventEvent() {
        setNextButtonVisible(false);
        setBroadcastTitleText('Event');
        let eventInfo = [...this.game.zone.getRandomEvent(this.spaceNumber)];
        let newEvent = new EventCreator(this.game, eventInfo[0], ...eventInfo[1]);
        newEvent.createElements();
    }

    restEvent() {
        setNextButtonVisible(false);
        setBroadcastTitleText('A Rest');
        let restInfo = this.game.zone.getRandomRest(this.spaceNumber);
        let newRest = new EventCreator(this.game, restInfo[0], ...restInfo[1]);
        newRest.createElements();
    }

    enemyEvent() {
        setNextButtonVisible(false);
        let enemy = this.game.zone.getRandomEnemy();
        this.game.combat.preCombatDelay(this.game.player, enemy, 3, 'Enemy Encounter');
    }

    emptyEvent() {
        setBroadcastTitleText(this.game.zone.zoneMessage, true);
        if (this.game.player.name === 'ben') {this.game.player.giveGift(this.zoneNum)};
    }

    pathEventEvent() {
        setNextButtonVisible(false);
        let eventInfo = this.game.zone.getZoneEvent();
        let newEvent = new EventCreator(this.game, eventInfo[0], ...eventInfo[1]);
        newEvent.createElements();
    }

    bossEvent() {
        setNextButtonVisible(false);
        let boss = this.game.zone.getBoss();
        this.game.combat.preCombatDelay(this.game.player, boss, 5, 'Boss Battle');       
    }

    displayZoneInfo() {
        $('#zone-text').text(this.zoneNum+'–'+this.spaceNumber);
    }

    pushZoneItems() {
        this.game.zone.zoneItems.forEach(itemName => {
            let metatype = ITEMLIST[itemName]['metatype'];
            this.game.zone.zoneItemList[metatype].push(this.itemShop.generateItem(itemName, structuredClone(ITEMLIST[itemName])));
        });
    }
}