class Path {
    constructor(zoneNum) {
        this.zoneNum = zoneNum + 1;
        this.maxSpaces;
        this.typeInfo;
        this.setSpaces;
        this.nextSpace;
        this.spaceNumber = 1;
    }

    generatePath(maxSpaces, typeInfo, setSpaces) {
        this.maxSpaces = maxSpaces;
        this.typeInfo = typeInfo;
        this.setSpaces = setSpaces;

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
        if(this.spaceNumber%3==0){g.zone.changeZoneLevel(1)};
        $('#content-central-box').empty();
        g.player.changeGold(g.player.calcStat('income'));
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
        g.zone.advanceToNextZone();
        g.zone.zoneInit();
    }

    shopEvent() {
        setBroadcastTitleText('Shop');
        g.zone.fillShop();
    }

    eventEvent() {
        setBroadcastTitleText('Event');
        let eventInfo = g.zone.getRandomEvent(this.spaceNumber);
        eventInfo.createElements();
    }

    restEvent() {
        setBroadcastTitleText('A Rest');
        let restInfo = g.zone.getRandomRest(this.spaceNumber);
        restInfo.createElements();
    }

    enemyEvent() {
        setNextButtonVisible(false);
        $('#combatTimer').removeClass('hidden');
        $('#large-tab-title').text('Enemy Encounter');
        setBroadcastTitleText('Enemy Encounter', true);
        let enemy = g.zone.getRandomEnemy();
        g.combat.startCombat(g.player, enemy);
    }

    emptyEvent() {
        setBroadcastTitleText('A new zone...', true);
    }

    pathEventEvent() {
        setBroadcastTitleText('A Forkroad');
        let eventInfo = g.zone.getZoneEvent();
        eventInfo.createElements();
    }

    bossEvent() {
        setNextButtonVisible(false);
    
        setBroadcastTitleText('Boss Battle!', true);
    
        $('#combatTimer').removeClass('hidden');
    
        let boss = g.zone.getBoss();
        g.combat.startCombat(g.player, boss);       
    }

    displayZoneInfo() {
        $('#zone-text').text('zone: '+this.zoneNum+'–'+this.spaceNumber);
    }
}

$(function() {
    $('#go-next-debug').on('click', function() { g.path.advancePath(); });
    $('.floating-next').on('click', function() { g.path.advancePath(); });
});

//if (rnd < 0.33) {
//    eventInfo = eventList['A Tree House'];
//} else if (rnd < 0.66) {
//    eventInfo = eventList['A Dryad Temple'];
//} else {
//    eventInfo = eventList['A Dam'];