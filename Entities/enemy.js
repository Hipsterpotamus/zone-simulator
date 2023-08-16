
class Enemy extends Entity{
      // If the constuctor is exactly the same as Entity, you don't need this
    // Only use it if you're going to add aditional parameters on top of the entity defaults
    constructor(name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats) {
         super(false, name, type, health, attackspeed, damage, armor, gold, regen, complexStats);
         this.complexStats = complexStats;
         this.diffC = difficultyCh;
    }
}