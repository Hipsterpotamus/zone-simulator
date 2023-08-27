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
        this.onUse();
    }

    onUse() {
        Object.keys(this.itemInfo).forEach((stat)=>{
            this.game.player.changeStat(stat, this.itemInfo[stat]);
        });
    }
}