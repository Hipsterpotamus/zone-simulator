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
        this.game.player.changeGold(this.gold, true);
        this.game.combat.combatStats['totalGoldGain'] += this.gold;

        this.game.player.levelInfo.changeXp(this.xp);

        this.alive = false;
        this.game.zone.changeZoneLevel(this.diffC);
        
        this.updateEntityDisplay();
        
        let item = this.getRewardItem();
        item.onBuy();
    }

    getRewardItem() {
        let item = ITEMLIST[this.rewardItem];
        notify(item[0], 10);
        item = item[1];
        return new ShopItem(this.game, this.rewardItem, 0, '', item[0], item[1]);
    }
}