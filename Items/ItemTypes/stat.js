class Stat extends Item {
    constructor(game, name, metatype, onUse, complexStats) {
        super(name, metatype);
        this.game = game;
        this.onUse = onUse;
        
        if(complexStats){
            Object.keys(complexStats).forEach((stat)=>{
                this[stat] = complexStats[stat];
            });
        }
    }
}