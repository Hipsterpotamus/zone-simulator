const statsList = ['dmg', 'arm', 'regen', 'speed', 'dodge', 'shatter', 'bleed', 'lifedrain', 'antiheal', 'thorn', 'superarmor','tear'];
const percentage_stats = ['dodge', 'lifedrain', 'shatter', 'bleed'];

class Entity{
    constructor() {
        this.levelInfo = new LevelInfo();
        this.hp = 0;
        this.maxhp = 0;
        this.as = 0;
        this.asScalingPoint = 50;
        this.dmg = 0;
        this.arm = 0;
        this.gold = 0;
        this.regen = 0;
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

        this.attackCounter = 0;
        this.regenCounter = 0;

        this.alive = true;

        this.tempStats = {};
        this.timedStats = {};
    }

    changeStat (stat, amount) {
        if (stat === 'gold') {
            this.changeGold(amount);
        } else if (stat === 'hp') {
            this.changeHp(amount);
        } else if (stat === 'maxhp') {
            this.changeMaxHp(amount);
        } else {
            this[stat] += amount;
        }
        this.updateEntityDisplay();
    }

    changeTempStat (stat, amount, type = 'flat') { //types are currently 'flat' and 'percent'
        if (!this.tempStats[stat]) {
            this.tempStats[stat] = {};
        }
        if (!this.tempStats[stat][type]) {
            this.tempStats[stat][type] = amount;
        } else {
            this.tempStats[stat][type] += amount;
            if (this.tempStats[stat][type] === 0) {
                delete(this.tempStats[stat][type]);
                if (Object.keys(this.tempStats[stat]).length === 0) {delete(this.tempStats[stat])}
            }
        }
    }

    calcTempStatChange(stat, base) {
        let calcStat = base;
        if (this.tempStats[stat] && this.tempStats[stat].flat) {
            calcStat += this.tempStats[stat].flat;
        }
        if (this.tempStats[stat] && this.tempStats[stat].percent) {
            calcStat = Math.floor(calcStat * (1 + this.tempStats[stat].percent * 0.01));
        }
        return calcStat;
    }

    changeTimedStat (stat, amount, ticks, type = 'percent') { //types are currently 'flat' and 'percent'
        if (!this.timedStats[stat]) {
            this.timedStats[stat] = {};
        }
        if (!this.timedStats[stat][type]) {
            this.timedStats[stat][type] = {};
            this.timedStats[stat][type].amount = amount;
            this.timedStats[stat][type].ticks = ticks;
        } else {
            this.timedStats[stat][type].amount += amount;
            this.timedStats[stat][type].ticks += ticks;
            if (this.timedStats[stat][type].amount === 0 || this.timedStats[stat][type].ticks <= 0) {
                delete(this.timedStats[stat][type]);
                if (Object.keys(this.timedStats[stat]).length === 0) {delete(this.timedStats[stat])}
            }
        }
    }

    calcTimedStatChange(stat, base) {
        let calcStat = base;
        if (this.timedStats[stat] && this.timedStats[stat].flat && this.timedStats[stat].flat.amount) {
            calcStat += this.timedStats[stat].flat.amount;
        }
        if (this.timedStats[stat] && this.timedStats[stat].percent && this.timedStats[stat].percent.amount) {
            calcStat = Math.floor(calcStat * (1 + this.timedStats[stat].percent.amount * 0.01));
        }
        return calcStat;
    }

    changeTimedStatCounters (ticks) {
        if (Object.keys(this.timedStats).length !== 0) {
            Object.keys(this.timedStats).forEach((stat)=>{
                if (Object.keys(this.timedStats[stat]).length !== 0) {
                    Object.keys(this.timedStats[stat]).forEach((type)=>{
                        this.timedStats[stat][type].ticks += ticks;
                        if (this.timedStats[stat][type].ticks <= 0) {
                            delete(this.timedStats[stat][type]);
                            if (Object.keys(this.timedStats[stat]).length === 0) {delete(this.timedStats[stat])}
                        }
                    });
                }
            });
        }
    }

    changeHp(amount){
        if(amount == 'max') {
            this.hp = this.maxhp;
        } else {
            amount = Math.max(Math.min(amount + this.calcStat('superarmor'), 0), amount);
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

    changeMaxHp(amount) {
        let newAmount = amount;
        if (newAmount >= 0 && this.levelInfo.activeCharacteristics.has('emergent')) {
            newAmount = CHARACTERISTICS['emergent'].onMaxHpGained(amount);
        }
        this.maxhp += newAmount;
        this.changeHp(Math.max(amount, 0));
        if (this.hp > this.maxhp) {this.changeHp(this.hp - this.maxhp)};
    }

    calcRegen(){
        let antihealRegen = Math.max(this.calcStat('regen') - this.antihealApplied, this.calcStat('regen'));
        return antihealRegen - this.bleedApplied;
    }

    runRegen() {
        let regen = this.calcRegen();
        if (regen != 0) {
            this.changeHp(regen);
        }
        this.combatStats.hpRegened += regen;
        this.gameCombatStats.hpRegened += regen;
    }

    calcAs() {
        const rawAS = this.calcStat('as');
        return Math.floor(100 * Math.pow((1/2), (rawAS / 100)));
    }
    
    cleanStatus() {
        this.shatterApplied = 0;
        this.bleedApplied = 0;
        this.antihealApplied = 0;
        this.tempStats = {};
        this.timedStats = {};
    }

    receiveHitFrom(opp, mult = 1) {
        if(this.testDodge(opp.accuracy)) {
            let oppDMG = opp.testDmg(this.testArm(), mult, false, true);
            this.changeHp(-oppDMG);

            opp.combatStats.outgoingDmg += oppDMG;
            this.combatStats.incomingBlocked += (opp.testDmg(0, 1) - oppDMG);
            opp.gameCombatStats.outgoingDmg += oppDMG;
            this.gameCombatStats.incomingBlocked += (opp.testDmg(0, 1) - oppDMG);

            this.shatterApplied = Math.min(this.shatterApplied + opp.testShatter(), this.calcStat('arm'));
            this.bleedApplied += opp.testBleed();
            this.antihealApplied = Math.max(opp.antiheal, this.calcStat('regen'));

            this.changeMaxHp(-opp.calcStat('tear'));

            let oppHpChange = opp.testLifeDrain(oppDMG);
            
            if (this.levelInfo.activeCharacteristics.has('tricky')) {
                oppHpChange -= CHARACTERISTICS['tricky'].onHitReceived(oppDMG);
            }

            oppHpChange -= this.calcStat('thorn');
            opp.changeHp(oppHpChange);
        } else {
            console.log(this.name + ' dodge');
            this.animateDodge();
        }
    }

    receiveNonHitDmg(hitDMG, opp) {
        if(this.testDodge(opp.accuracy)) {
            let oppDMG =  opp.testDmg(this.testArm(), 1, hitDMG);
            this.changeHp(-oppDMG);

            let oppHpChange = opp.testLifeDrain(oppDMG);
            // oppHpChange -= this.testThorn(opp.calcStat('superarmor')); Will need to think if
            opp.changeHp(oppHpChange);
        } else {
            console.log(this.name + ' dodge');
            this.animateDodge();
        }
    }

    animateDodge() {}

    testDodge(accuracy) {
        return Math.random() > (this.calcStat('dodge') / accuracy);
    }

    testArm() {
        return Math.min(Math.max(this.calcStat('arm')-this.shatterApplied, 0), this.calcStat('arm'));
    }

    testDmg(armor, mult, flatDmg) { //flat dmg is utilized when spells or items are used
        if(flatDmg){
            return Math.max(flatDmg * mult - armor, 0);
        }else{
            return Math.max(this.calcStat('dmg') * mult - armor, 0);
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

    setAttackTimer(time, speed, color) {
        this.timer.style.background = `-webkit-linear-gradient(left, var(--md-sys-color-${color}) 50%, var(--md-sys-color-${color}-container) 50%)`;

        if (time/speed < 0.5) {
            this.timermask.style.background = `var(--md-sys-color-${color}-container)`;
            this.timermask.style.webkitTransform = `rotate(${time/speed*-1}turn)`;
        } else { 
            this.timermask.style.background = `var(--md-sys-color-${color})`;
            this.timermask.style.webkitTransform = `rotate(${(time/speed*-1)-0.5}turn)`;
        }

        if (time/speed > .90) {
            this.timer.classList.add('land');
            setTimeout(() => {
                this.timer.classList.remove('land');
            }, 200);
        } else {
            this.timer.classList.remove('land');
        }
    }
}
