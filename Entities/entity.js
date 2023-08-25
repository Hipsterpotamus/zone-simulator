class Entity{
    constructor(name, type, health, attackspeed, damage, armor, gold, regen, complexStats) { 
        this.name = name;
        this.type = type;
        this.hp = health;
        this.maxhp = health;
        this.as = attackspeed;
        this.asScalingPoint = 50;
        this.dmg = damage;
        this.arm = armor;
        this.gold = gold;
        this.regen = regen;
        this.lifedrain = 0;
        this.thorn = 0;
        this.antiheal = 0;
        this.dodge = 0;        
        this.regenRate = 100;
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

    changeStat (stat, amount) {
        this[stat] += amount;
        this.updateEntityDisplay();
    }

    changeHp(amount){
        if(amount == 'max') {
            this.hp = this.maxhp;
        } else {
                this.hp = Math.min(this.maxhp, this.hp + amount);
        }

        this.updateHealthBar(amount);
        if (!g.combat.inCombat) {this.updateEntityDisplay()};

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

    calcRegen(){
        let antihealRegen = Math.max(this.calcStat('regen') - this.antihealApplied, 0);
        return antihealRegen - this.bleedApplied;
    }

    runRegen() {
        let regen = this.calcRegen();
        if (regen != 0) {
            this.changeHp(regen);
        }
    }

    calcAs() {
        const rawAS = this.calcStat('as');
        let as;
        let asScale = this.asScalingPoint;
        const adjRoot = 3;
        const adjScalingMult = 4;
        if (rawAS > asScale) {
            as = Math.max((100 - asScale) - Math.floor(Math.pow((rawAS - asScale) * adjScalingMult, 1/adjRoot)), 1);
        } else {
            as = 100 - rawAS;
        }
        return as;
    }
    
    cleanStatus() {
        this.shatterApplied = 0;
        this.bleedApplied = 0;
        this.antihealApplied = 0;
    }

    receiveHitFrom(opp, damage) {
        if(this.testDodge(opp.accuracy)) {
            let oppDMG =  opp.testDmg(this.testArm(), this.calcStat('superarmor'));
            this.changeHp(-oppDMG);

            this.shatterApplied += opp.testShatter();
            this.bleedApplied += opp.testBleed();
            this.antihealApplied = opp.antiheal;

            this.changeMaxHp(-opp.testTear(this.calcStat('superarmor')));

            let oppHpChange = opp.testLifeDrain(oppDMG);
            oppHpChange -= this.testThorn(opp.calcStat('superarmor'));
            opp.changeHp(oppHpChange);
        }
    }

    receiveNonHitDmg(hitDMG, opp) {
        if(this.testDodge(opp.accuracy)) {
            let oppDMG =  opp.testDmg(this.testArm(), this.calcStat('superarmor'), hitDMG);
            this.changeHp(-oppDMG);

            let oppHpChange = opp.testLifeDrain(oppDMG);
            // oppHpChange -= this.testThorn(opp.calcStat('superarmor')); Will need to think if
            opp.changeHp(oppHpChange);
        }
    }

    testDodge(accuracy) {
        return Math.random() > (this.calcStat('dodge') / accuracy);
    }

    testArm() {
        return Math.min(Math.max(this.calcStat('arm')-this.shatterApplied, 0), this.calcStat('arm'));
    }

    testDmg(armor, superarmor, flatDmg) { //flat dmg is utilized when spells or items are used
        if(flatDmg){
            return Math.max(flatDmg - armor - superarmor, 0);
        }else{
            return Math.max(this.calcStat('dmg') - armor - superarmor, 0);
        }
    }

    testLifeDrain(damage) {
        return Math.floor(damage*(this.calcStat('lifedrain')/100))
    }

    testShatter() {
        let shatter = Math.floor(this.calcStat('shatter')/10);
        if(Math.random()<((this.calcStat('shatter')%10)/10)){shatter+=1;}
        return shatter;
    }

    testBleed() {
        let bleed = Math.floor(this.calcStat('bleed')/10);
        if(Math.random()<((this.calcStat('bleed')%10)/10)){bleed+=1;}
        return bleed;
    }

    testThorn(superarmor) {
        return Math.max(this.calcStat('thorn') - superarmor, 0);
    }

    testTear(superarmor) {
        return Math.max(this.calcStat('tear') - superarmor, 0);
    }
}
