class Boss extends Enemy{
    constructor(game, name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats) {
        super(game, name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats);
        this.boss = true;
    }

    getLvlHealMult() {
        return 4;
    }
}