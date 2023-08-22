class Usable extends Item {
    constructor(name, metatype, type, description, uses, onUse, complexStats){
        super(name, metatype);
        this.type = type;
        this.description = description;
        this.uses = uses;
        this.onUse = onUse;
        
        if(complexStats){
            Object.keys(complexStats).forEach((stat)=>{
                this[stat] = complexStats[stat];
            });
        }
        if (this.equipped) {
            this.updateItemInfo();
        }
    }

    attemptUse(){
        if(this.uses > 0){
            if(this.type == 'combat'){
                if(g.inCombat){
                    this.uses -= 1;
                    this.onUse();
                }else{
                    // for future: communicate to player that item must be used in combat
                }
            }else if(this.type == 'all'){
                this.uses -= 1;
                this.onUse();
            }
            this.updateItemInfo();
        }else{
            // for future: communicate to player that uses = 0 and item use failed
        }
    }

    updateItemInfo() {
        $('#usable-select-description').html(this.description+'<br>count : '+this.uses);
    }
}