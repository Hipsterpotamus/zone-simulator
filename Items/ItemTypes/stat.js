class Stat extends Item {
    constructor(game, name, itemInfo) {
        super(game, name);
        this.itemInfo = itemInfo;
        
        if(itemInfo){
            Object.keys(itemInfo).forEach((stat)=>{
                this[stat] = itemInfo[stat];
                if (stat === 'metagame' || stat === 'price') {
                    delete this.itemInfo[stat];
                }
            });
        }
    }

    genShopDesc() {
        return '';
    }

    onUse() {
        Object.keys(this.itemInfo).forEach((stat)=>{
            this.game.player.changeStat(stat, this.itemInfo[stat]);
        });
    }
}