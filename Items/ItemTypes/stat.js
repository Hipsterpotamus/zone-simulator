class Stat extends Item {
    constructor(name, metatype, onUse, complexStats) {
        super(name, metatype);
        this.onUse = onUse;
        this.equipped = false;
        
        if(complexStats){
            Object.keys(complexStats).forEach((stat)=>{
                this[stat] = complexStats[stat];
            });
        }
    }
}