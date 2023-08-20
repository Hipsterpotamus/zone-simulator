class Boss extends Enemy{
    constructor(name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats) {
        super(name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats);
        this.boss = true;
    }
}