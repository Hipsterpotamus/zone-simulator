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