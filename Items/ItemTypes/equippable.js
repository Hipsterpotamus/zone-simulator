class Equippable extends Item {
    constructor(game, name, itemInfo) {
        super(game, name);
        this.itemInfo = itemInfo;

        //default equippable stats
        this.type = false;
        this.message = false;

        this.dmg = 0;
        this.arm = 0;
        this.regen = 0;
        this.as = 0;
        this.income = 0;
        this.thorn = 0;
        this.dodge = 0;
        this.lifedrain = 0;
        this.thorn = 0;
        this.antiheal = 0;
        this.tear = 0;
        this.shatter = 0;
        this.bleed = 0;
        this.superarmor = 0;
        this.accuracy = 0;
        this.manaGen = 0;

        if(itemInfo){
            Object.keys(itemInfo).forEach((stat)=>{
                this[stat] = itemInfo[stat];
                if (stat === 'metatype' || stat === 'price' || stat === 'type' || stat === 'message' ) {
                    delete this.itemInfo[stat];
                }
            });
        }
    }

    genShopDesc() {
        let shopDesc = '';
        Object.keys(this.itemInfo).forEach((stat) => {
            if (this.itemInfo[stat] > 0) {
                shopDesc += (shopDesc ? ', ' : '') + '+' + this.itemInfo[stat] + ' ' + stat;
            } else {
                shopDesc += (shopDesc ? ', ' : '') + this.itemInfo[stat] + ' ' + stat;
            }
        });
        return '(' + shopDesc + ')';
    }

    onBuy() {
        this.game.player.addSelectableItem(this);
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
            this.game.player.updateEntityDisplay();
        }
        
        $('#'+this.metatype+'-stats').html(statOutput);
    }
}