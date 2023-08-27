class Boss extends Enemy{
    constructor(game, xp, rewardItem, name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats) {
        super(game, xp, name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats);
        this.rewardItem = rewardItem;
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
        
        let item = this.getRewardItem();
        item.onBuy();
    }

    getRewardItem() {
        let item = ITEMLIST[this.rewardItem];
        notify(item['message'], 10);
        return this.game.path.itemShop.generateItem(this.rewardItem, item);
    }
}