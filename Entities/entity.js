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
        this.shatterApplied = 0;
        this.bleedApplied = 0;

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

        if (this.hp <= 0 && amount != 0) {
            this.hp = 0;
            this.death();
        }
    }

    changeMaxHp(amount) {
        this.maxhp += amount;
        this.changeHp(Math.max(amount, 0));
        if (this.hp > this.maxhp) {this.changeHp(this.hp - this.maxhp)};
    }

    
    cleanStatus() {
        this.shatterApplied = 0;
        this.bleedApplied = 0;
    }

    receiveHit(opp) {
        if(this.testDodge()) {
            let oppDMG =  opp.testDmg(this.testArm());
            this.changeHp(-oppDMG);
            let oppHpChange = opp.testLifeDrain(oppDMG);
            this.updateHealthBar(oppDMG);
            this.shatterApplied += opp.testShatter();
            this.changeMaxHp(-opp.tear);
            oppHpChange -= this.calcThorn();
            opp.changeHp(oppHpChange)
        }
    }

    testDodge() {
        return Math.random() > (this.calcDodge() / 100);
    }

    testArm() {
        return Math.min(Math.max(this.calcArm()-this.shatterApplied, 0), this.calcArm());
    }

    testDmg(armor) {
        return Math.max(this.calcDmg() - armor, 0);
    }

    testLifeDrain(damage) {
        return Math.floor(damage*(this.calcLifeDrain()/100))
    }

    testShatter() {
        let cleanShatter = Math.floor(this.calcShatter()/10);
        if(Math.random()<((this.calcShatter()%10)/10)){cleanShatter+=1;}
        return cleanShatter;
    }
}
