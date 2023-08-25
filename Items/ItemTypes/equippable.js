class Equippable extends Item {
    constructor(name, metatype, type, dmg, armor, regen, attackSpeedChange, complexStats) {
        super(name, metatype);
        this.type = type;
        this.dmg = dmg;
        this.arm = armor;
        this.regen = regen;
        this.as = attackSpeedChange;
        this.income = 0;
        this.thorn = 0;
        this.dodge = 0;
        this.lifedrain = 0;
        this.thorn = 0;
        this.antiheal = 0;
        this.dodge = 0;
        this.tear = 0;
        this.shatter = 0;
        this.bleed = 0;
        this.superarmor = 0;
        this.accuracy = 0;
        this.manaGen = 0;

        if(complexStats){
            Object.keys(complexStats).forEach((stat)=>{
                this[stat] = complexStats[stat];
            });
        }
    }

    changeStat (stat, amount) {
        this[stat] += amount;
        this.updateItemInfo();
    }

    updateItemInfo() {
        let statOutput = ''; 
        if(this.metatype == 'weapon'){
            statOutput+='DMG: '+displayWithSign(this.dmg)+'<br>';
            statOutput+='SPEED: '+displayWithSign(this.as)+'<br>'
            statOutput+='ARMOR: '+displayWithSign(this.arm)+'<br>';
            statOutput+='REGEN: '+displayWithSign(this.regen)+'<br>';
            
            if(this.dodge){statOutput+='DODGE: '+displayWithSign(this.dodge)+'<br>';}
            if(this.shatter){statOutput+='SHATTER: '+displayWithSign(this.shatter)+'<br>';}
            if(this.lifedrain){statOutput+='LIFEDRAIN: '+displayWithSign(this.lifedrain)+'<br>';}
            if(this.manaGen){statOutput+='MANA GEN: '+displayWithSign(this.manaGen)+'<br>';}
        }else{
            statOutput+='ARMOR: '+displayWithSign(this.arm)+'<br>';
            statOutput+='REGEN: '+displayWithSign(this.regen)+'<br>';
            statOutput+='SPEED: '+displayWithSign(this.as)+'<br>'
            statOutput+='DMG: '+displayWithSign(this.dmg)+'<br>';
            
            if(this.dodge){statOutput+='DODGE: '+displayWithSign(this.dodge)+'<br>';}
            if(this.shatter){statOutput+='SHATTER: '+displayWithSign(this.shatter)+'<br>';}
            if(this.lifedrain){statOutput+='LIFEDRAIN: '+displayWithSign(this.lifedrain)+'<br>';}
            if(this.manaGen){statOutput+='MANA GEN: '+displayWithSign(this.manaGen)+'<br>';}
        }
        if(this.name=='none'){
            statOutput = '';
        } else {
            game.player.updateEntityDisplay();
        }
        
        $('#'+this.metatype+'-stats').html(statOutput);
    }
}