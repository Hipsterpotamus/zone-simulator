class Path {
    constructor(game) {
        this.game = game;
        this.game.zoneNum = 1;
        this.maxSpaces;
        this.typeInfo;
        this.setSpaces;
        this.nextSpace;
        this.spaceNumber = 0;

        this.playerInit();
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
        this.displayZoneInfo();
        if(this.spaceNumber%3==0 && this.spaceNumber != 0){this.game.zone.changeZoneLevel(1)};
        $('#content-central-box').empty();
        this.game.player.changeGold(this.game.player.calcStat('income'));
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
            this.game.zoneNum += 1;
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
        setBroadcastTitleText('Shop');

        const ITEMCATEGORIES = ['weapon', 'head', 'chest', 'legs', 'feet', 'stat', 'usable', 'magic'];

        let shopCode = this.game.zone.shopCode;
        let shopCodeExpand = [shopCode[0], 0, 0, 0, 0, shopCode[2], shopCode[3], shopCode[4]];

        for (let i = 0; i < shopCode[1]; i++) {
            const randNum = Math.floor(Math.random() * 4) + 1;
            shopCodeExpand[randNum] += 1;
        }
    
        ITEMCATEGORIES.forEach((category, index) => {
            let count = shopCodeExpand[index] || 0;
            let availableItems = this.game.zone.zoneItemList[category];
    
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

    eventEvent() {
        setBroadcastTitleText('Event');
        let eventInfo = [...this.game.zone.getRandomEvent(this.spaceNumber)];
        let newEvent = new EventCreator(this.game, eventInfo[0], ...eventInfo[1]);
        newEvent.createElements();
    }

    restEvent() {
        setBroadcastTitleText('A Rest');
        let restInfo = this.game.zone.getRandomRest(this.spaceNumber);
        let newRest = new EventCreator(this.game, restInfo[0], ...restInfo[1]);
        newRest.createElements();
    }

    enemyEvent() {
        setNextButtonVisible(false);
        $('#combatTimer').removeClass('hidden');
        $('#large-tab-title').text('Enemy Encounter');
        setBroadcastTitleText('Enemy Encounter', true);
        let enemy = this.game.zone.getRandomEnemy();
        this.game.combat.startCombat(this.game.player, enemy);
    }

    emptyEvent() {
        setBroadcastTitleText(this.game.zone.zoneMessage, true);
    }

    pathEventEvent() {
        let eventInfo = this.game.zone.getZoneEvent();
        let newEvent = new EventCreator(this.game, eventInfo[0], ...eventInfo[1]);
        newEvent.createElements();
    }

    bossEvent() {
        setNextButtonVisible(false);
    
        setBroadcastTitleText('Boss Battle!', true);
    
        $('#combatTimer').removeClass('hidden');
    
        let boss = this.game.zone.getBoss();
        this.game.combat.startCombat(this.game.player, boss);       
    }

    displayZoneInfo() {
        $('#zone-text').text('zone: '+this.game.zoneNum+'–'+this.spaceNumber);
    }

    pushZoneItems() {
        this.game.zone.zoneItems.forEach(itemName => {
            let metatype = ITEMLIST[itemName][2];
            this.game.zone.zoneItemList[metatype].push(new ShopItem(this.game, itemName, ...ITEMLIST[itemName]));
        });
    }

    playerInit() {
        this.game.player.addSelectableItem(new Usable(this.game, 'none', 'usable', 'never', '', 0, ''));
        this.game.player.addSelectableItem(new Equippable(this.game, 'none', 'weapon', 'none', 0, 0, 0, 0));
        this.game.player.addSelectableItem(new Equippable(this.game, 'none', 'head', 'none', 0, 0, 0, 0));
        this.game.player.addSelectableItem(new Equippable(this.game, 'none', 'chest', 'none', 0, 0, 0, 0));
        this.game.player.addSelectableItem(new Equippable(this.game, 'none', 'legs', 'none', 0, 0, 0, 0));
        this.game.player.addSelectableItem(new Equippable(this.game, 'none', 'feet', 'none', 0, 0, 0, 0));
    }
}