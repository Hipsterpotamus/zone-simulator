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
        this.hp = 0;
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
        this.maxMana = 0

        if(itemInfo){
            Object.keys(itemInfo).forEach((stat)=>{
                this[stat] = itemInfo[stat];
                if (stat === 'metatype' || stat === 'price' || stat === 'type' || stat === 'message' ) {
                    delete this.itemInfo[stat];
                }
            });
        }

        if (this.metatype === 'weapon') {
            this.durability = 50; //default durability
        } 

        if (this.name !== 'none' && this.game !== undefined && this.game.player.name === 'maggie') {
            Object.keys(this.itemInfo).forEach((stat)=>{
                if (stat !== 'as') {
                    this.itemInfo[stat] = this.itemInfo[stat] * 2;
                }
            });
            this.price = this.price * 3;
        }
    }

    doDamage() {
        this.durability -= 1;
        console.log(this.durability)
        if (this.durability === 0) {
            this.itemInfo['dmg'] = this.dmg;
            this.dmg = 0;
            this.durability = -1;
        } else if (this.durability < -1) {this.durability = -1}
        this.updateItemInfo();
    }

    genShopDesc() {
            const FULLNAMES = {'arm': 'armor', 'dodge': '% dodge', 'antiheal': 'anti-heal', 'manaGen': 'mana regen', 'maxMana': 'max mana', 'Maxhp': 'max hp'}
            let shopDesc = '';
            Object.keys(this.itemInfo).forEach((stat) => {
                let value = this.itemInfo[stat];
                if (FULLNAMES[stat]) {
                    stat = FULLNAMES[stat];
                }
                if (stat === 'hp') {
                    shopDesc += (shopDesc ? ', ' : '') + 'heal ' + value + ' ' + stat;
                } else if (stat === 'as') {
                    if (value > 0) {
                        shopDesc += (shopDesc ? ', ' : '') + '+' + value + ' attack speed';
                    } else {
                        shopDesc += (shopDesc ? ', ' : '') + value + ' attack speed';
                    }
                } else {
                    if (value > 0) {
                        shopDesc += (shopDesc ? ', ' : '') + '+' + value + ' ' + stat;
                    } else {
                        shopDesc += (shopDesc ? ', ' : '') + value + ' ' + stat;
                    }
                }
            });
            return this.metatype + ' : [' + shopDesc + ']';
        }

    onBuy() {
        this.game.player.addSelectableItem(this, this.game.path.itemShop, true);
    }

    calcComparisons() {
        let allComps = '';
        if(this.itemInfo){
            Object.keys(this.itemInfo).forEach((stat)=>{
                allComps += this.genComparison(stat) + `
`;
            });
        } else {
            if(this.game.player.getByType(this.metatype)[itemInfo]){
                Object.keys(this.game.player.getByType(this.metatype)[itemInfo]).forEach((stat)=>{
                    allComps += this.genComparison(stat) + `
`;
                });
            }
        }

        console.log(allComps);
    }

    genComparison(stat) {
        let currentEquipStat = this.game.player.getByType(this.metatype)[stat];
        let currentStat = this.game.player.calcStat(stat);
        let ownStat = this[stat];
        let compStat = ownStat - currentEquipStat;
        if (currentEquipStat === 0 && ownStat === 0) {
            return '';
        }
        if (stat === 'as') {
            let currentPercent = this.calcAsChange(currentEquipStat, currentStat - currentEquipStat);
            let currentTickChange = this.game.player.calcAsTheory(currentStat) - this.game.player.calcAsTheory(currentStat - currentEquipStat);
            let ownTickChange = this.game.player.calcAsTheory(currentStat - currentEquipStat + ownStat) - this.game.player.calcAsTheory(currentStat - currentEquipStat);
            let compareTickChange = ownTickChange - currentTickChange;
            let ownPercent = this.calcAsChange(ownStat, currentStat - currentEquipStat);
            let comparePercent = this.calcAsChange(compStat, currentStat);
            return `${currentEquipStat > 0 ? '+' : ''}${currentEquipStat} ${stat} => ${ownStat > 0 ? '+' : ''}${ownStat} ${stat} (${Math.abs(compStat)} ${stat} ${compStat > 0 ? 'higher' : 'lower'})
${currentTickChange > 0 ? '+' : ''}${currentTickChange} ticks => ${ownTickChange > 0 ? '+' : ''}${ownTickChange} ticks (${Math.abs(compareTickChange)} ${compareTickChange > 0 ? 'ticks slower' : 'ticks faster'}) 
${currentPercent > 0 ? '+' : ''}${currentPercent}% => ${ownPercent > 0 ? '+' : ''}${ownPercent}% (${Math.abs(comparePercent)}% ${comparePercent > 0 ? 'faster' : 'slower'})`;
        } else {
            return `${currentEquipStat > 0 ? '+' : ''}${currentEquipStat} ${stat} => ${ownStat > 0 ? '+' : ''}${ownStat} ${stat} (${Math.abs(compStat)} ${stat} ${compStat > 0 ? 'higher' : 'lower'})`;
        }
    }

    changeStat (stat, amount) {
        this[stat] += amount;
        this.updateItemInfo();
    }

    calcAsChange(amount, prevAmount) {
        const rawAS = prevAmount;
        const tempAS = rawAS + amount;
        const adjRaw = this.game.player.calcAsTheory(rawAS);
        const adjTemp = this.game.player.calcAsTheory(tempAS);
        return Math.round((adjRaw - adjTemp) / adjRaw * 1000) / 10;
    }

    updateItemInfo() {
        let statOutput = ''; 
        if(this.metatype == 'weapon'){
            statOutput+='DMG: '+displayWithSign(this.dmg)+'<br>';
            statOutput+='SPEED: '+displayWithSign(this.as)+'<br>'
            statOutput+='ARMOR: '+displayWithSign(this.arm)+'<br>';
            statOutput+='REGEN: '+displayWithSign(this.regen)+'<br>';
            statOutput+='DURABILITY: '+displayWithSign(this.durability)+'<br>';
            
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
        } else if (this.game !== undefined){
            this.game.player.updateEntityDisplay();
        }
        
        $('#'+this.metatype+'-stats').html(statOutput);
    }
}