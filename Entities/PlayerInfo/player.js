class Player extends Entity{
    constructor(type) {
        super('', type, 0, 0, 0, 0, 0, 0, '');
        //default stats- can be specified further in char classes
        this.hp = 100;
        this.maxhp = 100;
        this.dmg = 1;
        this.arm = 0;
        this.regen = 0;
        this.levelheal = 10;
        this.income = 0;
        this.as = 0;
        this.dodge = 0;
        this.gold = 25;
        this.mana = 0;
        this.maxMana = 15;
        this.manaRate = 50;
        this.manaGen = 1;
        this.totalPurchased = 0;

        this.inv = {
            'usable':['', []],
            'weapon':['', []],
            'head':['', []],
            'chest':['', []],
            'legs':['', []],
            'feet':['', []],
            'magic':['', []],
        }
    }

    addSelectableItem(item) {
        this.inv[item.metatype][1].push(item);
        item.appendElement()
        this.changeSelectedItem(item);
    }

    changeSelectedItem(item) {
        this.inv[item.metatype][0] = item;
        item.updateItemInfo();
        $('#'+item.metatype+'-select').val(item.name);
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

    //other
        
    getByType(metatype){
        return this.inv[metatype][0];
    }

    changeGold(amount, inCombat = false) {
        this.gold += amount;
        this.updateGoldDisplay();
    }

    death() {
        $('#player-death').removeClass('hidden');
        $('#player-death').addClass('fullViewport');
        let video = $('#player-death')[0];
        video.play();
        video.addEventListener('ended', function() {$('#player-death').addClass('hidden')});
    }

    // Not totally sure where you'll want this, depending on if all entities have mana
    changeMana(amount) { // For when mana is used is by spells
        this.mana = this.mana + amount;
        this.mana = (this.mana >= this.maxMana) ? this.maxMana : this.mana;
        if(this.mana>this.maxMana){}
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
        htmlOutput = this.name+' | ';
        htmlOutput+='hp : '+this.hp+'/'+this.maxhp+' | ';
        htmlOutput+='dmg : '+this.calcStat('dmg')+' ('+this.dmg+' + '+(this.calcStat('dmg')-this.dmg)+') | ';
        if (tick != -1) {htmlOutput+='time: '+(this.calcAs()-(tick % this.calcAs()))+' | ';}
        if(this.shatterApplied!=0){
            htmlOutput+='arm : '+Math.max(0,(this.calcStat('arm')-this.shatterApplied))+' ('+this.arm+' + '+(this.calcStat('arm')-this.arm)+' - '+Math.min(this.calcStat('arm'), this.shatterApplied)+') | ';
        }else{
            htmlOutput+='arm : '+this.calcStat('arm')+' ('+this.arm+' + '+(this.calcStat('arm')-this.arm)+') | ';
        }
        
        htmlOutput+='regen : '+this.calcRegen()+' ('+this.regen+' + '+(this.calcRegen()-this.regen)+') | ';
        if(this.calcStat('dodge')!=0){htmlOutput+='dodge : '+this.calcStat('dodge')+' ('+this.dodge+' + '+(this.calcStat('dodge')-this.dodge)+') | ';}
        if(this.calcStat('thorn')!=0){htmlOutput+='thorn : '+this.calcStat('thorn')+' ('+this.thorn+' + '+(this.calcStat('thorn')-this.thorn)+') | ';}
        if(this.calcStat('shatter')!=0){htmlOutput+='shatter : '+this.calcStat('shatter')+' ('+this.shatter+' + '+(this.calcStat('shatter')-this.shatter)+') | ';}
        if(this.calcStat('lifedrain')!=0){htmlOutput+='lifedrain : '+this.calcStat('lifedrain')+' ('+this.lifedrain+' + '+(this.calcStat('lifedrain')-this.lifedrain)+') | ';}

        $('#player-stats').html(htmlOutput);
    }

    updateGoldDisplay() {
        $('#gold-text').text('gold: '+ this.gold);
    }
}