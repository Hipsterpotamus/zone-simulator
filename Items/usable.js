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
        console.log(1);
        if(this.uses > 0){
            console.log(2);
            if(this.type == 'combat'){
                console.log(3);
                if(g.inCombat){
                    console.log(4);
                    this.uses -= 1;
                    this.onUse();
                }else{
                    // for future: communicate to player that item must be used in combat
                }
            }else if(this.type == 'all'){
                console.log(5);
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

$(function(){
    $('#use-usable').on('click',function(){
        console.log(g.player.getByType('usable'));
        g.player.getByType('usable').attemptUse();
    })
});
