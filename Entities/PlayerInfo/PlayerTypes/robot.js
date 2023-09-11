class Robot extends Player {
    constructor(type) {
        super(type);
        this.name = 'Robert'; //fully implemented
        this.levelheal = this.maxhp;
        
        this.initPlayerDisplay();
    }

    changeHp(amount){
        if(amount == 'max') {
            this.hp = this.maxhp;
        } else {
            amount = Math.max(Math.min(amount + this.calcStat('superarmor'), 0), amount);
            if (amount < 0 && this.inCombat) {
                this.combatStats.incomingDmg -= amount;
                this.gameCombatStats.incomingDmg -= amount;
            }
            if (this.inCombat && amount > 0) {amount = 0};
            this.hp = Math.min(this.maxhp, this.hp + amount);
        }

        this.updateHealthBar(amount);

        if (this.hp <= 0 && this.alive) {
            this.hp = 0;
            this.death();
        } else if (this.hp > 0){
            this.updateEntityDisplay();
        };
    }
}