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
        this.as = 0;
        this.dodge = 0;
        this.gold = 25;
        this.mana = 1000;
        this.inv = {
            'usable':[],
            'weapon':[],
            'head':[],
            'chest':[],
            'legs':[],
            'feet':[],
            'magic':[]
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
            'magic':[]
        }
    }


    //generic functions

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

    changeStat (stat, amount) {
        this[stat] += amount;
        this.updateEntityDisplay();
    }

    //other
        
    getByType(type){
        let foundEquip;
        this.inv[type].forEach((item)=>{
             if(item.equipped == true){
                 foundEquip = item;
             }
        })
        return foundEquip;
    }

    changeGold(amount, inCombat = false) {
        this.gold += amount;
        this.updateGoldDisplay();
    }

    death() {
        //add you died screen or something
    }

    // Not totally sure where you'll want this, depending on if all entities have mana
    depleteMana(amount) { // For when mana is used is by spells
        this.mana = min(0, this.mana - amount);
        updateManaBar(amount, this.mana, this.maxMana);
    }


    //display

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