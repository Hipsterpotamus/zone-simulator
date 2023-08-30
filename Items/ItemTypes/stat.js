class Stat extends Item {
    constructor(game, name, itemInfo) {
        super(game, name);
        this.itemInfo = itemInfo;

        //default stat stats
        
        if(itemInfo){
            Object.keys(itemInfo).forEach((stat)=>{
                this[stat] = itemInfo[stat];
                if (stat === 'metatype' || stat === 'price') {
                    delete this.itemInfo[stat];
                }
            });
        }
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
        return '[' + shopDesc + ']';
    }

    onBuy() {
        this.onUse();
    }

    onUse() {
        Object.keys(this.itemInfo).forEach((stat)=>{
            this.game.player.changeStat(stat, this.itemInfo[stat]);
        });
    }
}