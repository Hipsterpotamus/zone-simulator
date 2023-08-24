class Player extends Entity{
    constructor(type) {
        super('', type, 0, 0, 0, 0, 0, 0, '');
        //default stats- can be specified further in char classes
        this.hp = 100;
        this.maxhp = 100;
        this.dmg = 1;
        this.arm = 0;
        this.regen = 0;
        this.levelheal = 5;
        this.income = 0;
        this.aS = 100; //i'm not sure what the point of setting this stat is
        this.aSLvl = 0;
        this.dodge = 0;
        this.gold = 25;
        this.inv = {
            'usable':[],
            'weapon':[],
            'head':[],
            'chest':[],
            'legs':[],
            'feet':[],
        }
    }

    playerInit() { //used for initialization that depends on player object
        this.inv = {
            'usable':[new Usable('none', 'usable', 'never', '', 0, '')],
            'weapon':[new Equippable('none', 'weapon', 'none', 0, 0, 0, 0)],
            'head':[new Equippable('none', 'head', 'none', 0, 0, 0, 0)],
            'chest':[new Equippable('none', 'chest', 'none', 0, 0, 0, 0)],
            'legs':[new Equippable('none', 'legs', 'none', 0, 0, 0, 0)],
            'feet':[new Equippable('none', 'feet', 'none', 0, 0, 0, 0)],
        }
    }

    calcRegen(){ //regen where bleed goes negative
        let baseRegen = (this.regen+this.getByType('weapon').regen+this.getByType('head').regen+this.getByType('chest').regen+this.getByType('legs').regen+this.getByType('feet').regen);
        let antihealRegen = Math.max(baseRegen - this.antihealApplied, 0);
        return antihealRegen - this.bleedApplied;
    }

    //regen where never goes negative
    //calcRegen(){
    //    let baseRegen = (this.regen+this.getByType('weapon').regen+this.getByType('head').regen+this.getByType('chest').regen+this.getByType('legs').regen+this.getByType('feet').regen);
    //    return Math.max(baseRegen - this.antihealApplied - this.bleedApplied, 0);
    //}

    calcAs() { // Attack Speed
        const rawAS = this.aSLvl + this.getByType('weapon').aSChange + this.getByType('head').aSChange + this.getByType('chest').aSChange + this.getByType('legs').aSChange + this.getByType('feet').aSChange;
        const adjRoot = 3; //functionally similar to fibonacci with cleaner code
        const adjScalingMult = 4;
        if (rawAS > 85) {
            this.aS = Math.max(15 - Math.floor(Math.pow((rawAS - 85) * adjScalingMult, 1/adjRoot)), 1) ;
        } else {
            this.aS = 100 - rawAS;
        }
        return this.aS;
    }

    calcStat(stat) { //should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        return (
            this[stat] +
            this.getByType('weapon')[stat] +
            this.getByType('head')[stat] +
            this.getByType('chest')[stat] +
            this.getByType('legs')[stat] +
            this.getByType('feet')[stat]
        );
    }

    changeStat (stat, amount) {  //TBI
        this[stat] += amount;
    }
        
    getByType(type){
        let foundEquip;
        this.inv[type].forEach((item)=>{
             if(item.equipped == true){
                 foundEquip = item;
             }
        })
        return foundEquip;
    }

    gainGold(inBattle, amount) {
        this.gold += amount;
        this.updateGoldDisplay();
    }

    changeLvlHeal(amount) {
        this.levelheal += amount;
    }

    death() {
        //add you died screen or something
    }

    // Not totally sure where you'll want this, depending on if all entities have mana
    depleteMana(amount) { // For when mana is used is by spells
        this.mana = min(0, this.mana - amount);
        updateManaBar(amount, this.mana, this.maxMana);
    }

    updateHealthBar(damage) { // damage healed
        var healthBar = $('#player-health-bar-container'),
        bar = healthBar.find('#player-health-bar'),
        hit = healthBar.find('#player-health-hit-bar');
        updateBar(-damage, this.hp, this.maxhp, healthBar, bar, hit);
    }

    updateEntityDisplay(tick = -1) {
        let htmlOutput = '';
        htmlOutput = this.name+'<br>';
        htmlOutput+='hp : '+this.hp+'/'+this.maxhp+'<br>';
        htmlOutput+='dmg : '+this.calcStat('dmg')+' ('+this.dmg+' + '+(this.calcStat('dmg')-this.dmg)+')<br>';
        if (tick != -1) {htmlOutput+='time: '+(this.calcAs()-(tick % this.calcAs()))+'<br>';}
        if(this.shatterApplied!=0){
            htmlOutput+='arm : '+Math.max(0,(this.calcStat('arm')-this.shatterApplied))+' ('+this.arm+' + '+(this.calcStat('arm')-this.arm)+' - '+Math.min(this.calcStat('arm'), this.shatterApplied)+')<br>';
        }else{
            htmlOutput+='arm : '+this.calcStat('arm')+' ('+this.arm+' + '+(this.calcStat('arm')-this.arm)+')<br>';
        }
        
        htmlOutput+='regen : '+this.calcRegen()+' ('+this.regen+' + '+(this.calcRegen()-this.regen)+')<br>';
        if(this.calcStat('dodge')!=0){htmlOutput+='dodge : '+this.calcStat('dodge')+' ('+this.dodge+' + '+(this.calcStat('dodge')-this.dodge)+')<br>';}
        if(this.calcStat('thorn')!=0){htmlOutput+='thorn : '+this.calcStat('thorn')+' ('+this.thorn+' + '+(this.calcStat('thorn')-this.thorn)+')<br>';}
        if(this.calcStat('shatter')!=0){htmlOutput+='shatter : '+this.calcStat('shatter')+' ('+this.shatter+' + '+(this.calcStat('shatter')-this.shatter)+')<br>';}
        if(this.calcStat('lifedrain')!=0){htmlOutput+='lifedrain : '+this.calcStat('lifedrain')+' ('+this.lifedrain+' + '+(this.calcStat('lifedrain')-this.lifedrain)+')<br>';}

        $('#player-stats').html(htmlOutput);
    }

    updateGoldDisplay() {
        $('#gold-text').text('gold: '+ this.gold);
    }
}