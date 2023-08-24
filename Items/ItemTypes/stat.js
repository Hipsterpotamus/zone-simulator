class Stat extends Item {
    constructor(name, metatype, onUse, complexStats) {
        super(name, metatype);
        this.onUse = onUse;
        
        if(complexStats){
            Object.keys(complexStats).forEach((stat)=>{
                this[stat] = complexStats[stat];
            });
        }
    }
}