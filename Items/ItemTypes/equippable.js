class Equippable extends Item {
    constructor(name, metatype, type, dmg, armor, regen, attackSpeedChange, complexStats) {
        super(name, metatype);
        this.type = type;
        this.dmg = dmg;
        this.arm = armor;
        this.regen = regen;
        this.aSChange = attackSpeedChange;
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

        if(complexStats){
            Object.keys(complexStats).forEach((stat)=>{
                this[stat] = complexStats[stat];
            });
        }

        if (this.equipped) {
            this.updateItemInfo();
        }
    }

    updateItemInfo() {
        let statOutput = ''; 
        if(this.metatype == 'weapon'){
            statOutput+='DMG : '+displayWithSign(this.dmg)+'<br>';
            statOutput+='ARM : '+displayWithSign(this.arm)+'<br>';
            statOutput+='REGEN : '+displayWithSign(this.regen)+'<br>';
            statOutput+='SPEED : '+displayWithSign(this.aSChange)+'<br>'
        }else{
            statOutput+='ARM : '+displayWithSign(this.arm)+'<br>';
            statOutput+='REGEN : '+displayWithSign(this.regen)+'<br>';
            statOutput+='DMG : '+displayWithSign(this.dmg)+'<br>';
            statOutput+='SPEED : '+displayWithSign(this.aSChange)+'<br>'
        }
        if(this.name=='none'){statOutput = '';}
        $('#'+this.metatype+'-stats').html(statOutput);
    }
}