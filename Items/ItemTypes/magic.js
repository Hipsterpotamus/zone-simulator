// Purchased from shop
// Each spell has an appropriate mana cost (and potential other costs including but not limited to hp, further types of mana, etc.)
// Each spell has a cool down in addition to it's mana cost (around 1 second to deter spam clicking)
// Each spell has a ability which functions similar to a usable item


class Magic extends Item {
    constructor(name, metatype, complexStats) {
        super(name, metatype);
        
        if(complexStats){
            Object.keys(complexStats).forEach((stat)=>{
                this[stat] = complexStats[stat];
            });
        }
    }
}