class Entity{
    constructor(name, type, health, attackspeed, damage, armor, gold, regen, complexStats) { 
        this.name = name;
        this.type = type;
        this.hp = health;
        this.maxhp = health;
        this.aS = 0; 
        this.aSLvl = attackspeed;
        this.dmg = damage;
        this.arm = armor;
        this.gold = gold;
        this.regen = regen;
        this.lifedrain = 0;
        this.thorn = 0;
        this.antiheal = 0;
        this.dodge = 0;        
        this.regenRate = 50;
        this.tear = 0;
        this.shatter = 0;
        this.accuracy = 100;
        this.bleed = 0;
        this.superarmor = 0;
        this.shatterApplied = 0;
        this.bleedApplied = 0;
        this.antihealApplied = 0;

        this.alive = true;

        if(complexStats){
            Object.keys(complexStats).forEach((stat)=>{
                this[stat] = complexStats[stat];
            });
        }
    }

    changeHp(amount){
        if(amount == 'max') {
            this.hp = this.maxhp;
        } else {
                this.hp = Math.min(this.maxhp, this.hp + amount);
        }

        this.updateHealthBar(amount);

        if (this.hp <= 0 && this.alive) {
            this.hp = 0;
            this.alive = false;
            this.death();
        }
    }

    changeMaxHp(amount) {
        this.maxhp += amount;
        this.changeHp(Math.max(amount, 0));
        if (this.hp > this.maxhp) {this.changeHp(this.hp - this.maxhp)};
    }

    runRegen() {
        let regen = this.calcRegen();
        if (regen != 0) {
            this.changeHp(regen);
        }
    }

    
    cleanStatus() {
        this.shatterApplied = 0;
        this.bleedApplied = 0;
        this.antihealApplied = 0;
    }

    receiveHitFrom(opp) {
        if(this.testDodge(opp.accuracy)) {
            let oppDMG =  opp.testDmg(this.testArm(), this.superarmor);
            this.changeHp(-oppDMG);

            this.shatterApplied += opp.testShatter();
            this.bleedApplied += opp.testBleed();
            this.antihealApplied = opp.antiheal;

            this.changeMaxHp(opp.testTear(this.superarmor));

            let oppHpChange = opp.testLifeDrain(oppDMG);
            oppHpChange -= this.testThorn(opp.calcSuperArmor());
            opp.changeHp(oppHpChange);
        }
    }

    testDodge(accuracy) {
        return Math.random() > (this.calcDodge() / accuracy);
    }

    testArm() {
        return Math.min(Math.max(this.calcArm()-this.shatterApplied, 0), this.calcArm());
    }

    testDmg(armor, superarmor) {
        return Math.max(this.calcDmg() - armor - superarmor, 0);
    }

    testLifeDrain(damage) {
        return Math.floor(damage*(this.calcLifeDrain()/100))
    }

    testShatter() {
        let shatter = Math.floor(this.calcShatter()/10);
        if(Math.random()<((this.calcShatter()%10)/10)){shatter+=1;}
        return shatter;
    }

    testBleed() {
        let bleed = Math.floor(this.calcBleed()/10);
        if(Math.random()<((this.calcBleed()%10)/10)){bleed+=1;}
        return bleed;
    }

    testThorn(superarmor) {
        return Math.max(this.calcThorn() - superarmor, 0);
    }

    testTear(superarmor) {
        return Math.max(this.calcTear() - superarmor, 0);
    }
}
