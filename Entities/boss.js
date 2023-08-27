class Boss extends Enemy{
    constructor(game, xp, rewardItems, name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats) {
        super(game, xp, name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats);
        this.rewardItems = rewardItems;
        this.boss = true;
    }

    getLvlHealMult() {
        return 4;
    }

    death() {
        if (this.game.player.levelInfo.characteristics.dominant && this.combatStats.ticksAlive < 500) {
            this.game.combat.combatStats['totalGoldGain'] += this.gold * 2;
            this.game.player.changeGold(this.gold * 2, true);
        } else {
            this.game.combat.combatStats['totalGoldGain'] += this.gold;
            this.game.player.changeGold(this.gold, true);
        }

        this.alive = false;
        this.game.zone.changeZoneLevel(this.diffC);
        
        this.updateEntityDisplay();

        this.game.player.levelInfo.changeXp(this.xp);

        this.game.combat.bossRewards = this;
    }

    giveBossRewards() {
        this.game.combat.bossRewards = false;
        this.createBossRewardElements1();
    }

    createBossRewardElements1() { //used event creation format for now
        setBroadcastTitleText('A reward');

        const description = 'Choose from one of the weapons below:'
        let descriptionElement = $('<p>', {
            'class': 'event-description'
        });
        descriptionElement.text(description);
        descriptionElement.appendTo('#description-container');
        setEventFormat(true);

        for (let weapon of this.rewardItems[0]) {
            let button = $('<button>', {
                'class': 'event-button'
            });
            button.text(weapon.name + ': ' + weapon.message + ' ' + weapon.genShopDesc());
            button.on('click', () => {
                weapon.onBuy();
                $('#content-central-box').empty();
                this.createBossRewardElements2();
            });
            button.appendTo('#content-central-box');
        }
    }

    createBossRewardElements2() {
        setBroadcastTitleText('A second reward');

        const description = 'Choose from one of the rewards below:'
        let descriptionElement = $('<p>', {
            'class': 'event-description'
        });
        descriptionElement.text(description);
        descriptionElement.appendTo('#description-container');
        setEventFormat(true);

        for (let item of this.rewardItems[1]) {
            let button = $('<button>', {
                'class': 'event-button'
            });
            button.text(item.name + ' ' +  item.genShopDesc());
            button.on('click', () => {
                item.onBuy();
                $('#content-central-box').empty();
                setNextButtonVisible(true);
            });
            button.appendTo('#content-central-box');
        }
        let button = $('<button>', {
            'class': 'event-button'
        });
        button.text('+' + this.xp + 'xp');
        button.on('click', () => {
            this.game.player.levelInfo.changeXp(this.xp);
            $('#content-central-box').empty();
            this.game.combat.bossRewards = false;
            if (this.game.player.levelInfo.checkLvlUp()) {
                this.game.player.levelInfo.levelUp(false);
            } else {
                setNextButtonVisible(true);
            }
        });
        button.appendTo('#content-central-box');
    }
}