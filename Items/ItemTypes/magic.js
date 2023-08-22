// Purchased from shop
// Each spell has an appropriate mana cost (and potential other costs including but not limited to hp, further types of mana, etc.)
// Each spell has a cool down in addition to its mana cost (around 1 second to deter spam clicking)
// Each spell has a ability which functions similar to a usable item
// Each spell has an associated button element which on click does the spell's ability after checking for costs
// Some spells may have finite uses in addition to the above requirements.
// Each spell has a short description placed on its button and a long description that can be obtained from hovering over.


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