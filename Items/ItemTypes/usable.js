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
    }

    attemptUse(){
        if(this.uses > 0){
            if(this.type == 'combat'){
                if(g.combat && g.combat.inCombat){
                    this.uses -= 1;
                    this.onUse();
                }else{notify('You must be in combat to use ' + this.name + '.')
                }
            }else if(this.type == 'all'){
                this.uses -= 1;
                this.onUse();
            }
            this.updateItemInfo();
        }else{
            notify('You are out of uses of ' + this.name + '.')
        }
    }

    updateItemInfo() {
        $('#usable-select-description').html(this.description+'<br>count : '+this.uses);
    }
}