class Usable extends Item {
    constructor(game, name, metatype, type, description, uses, onUse, complexStats){
        super(name, metatype);
        this.game = game;
        this.type = type;
        this.description = description;
        if (game.player.levelInfo.characteristics.mechanical) {
            this.uses = uses * 2;
        } else {
            this.uses = uses;
        }
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
                if(this.game.combat.inCombat){
                    this.uses -= 1;
                    this.onUse(this.game);
                    this.game.player.combatStats.itemsUsed += 1;
                    this.game.player.gameCombatStats.itemsUsed += 1;
                }else{notify('You must be in combat to use ' + this.name + '.')
                }
            }else if(this.type == 'all'){
                this.uses -= 1;
                this.onUse(this.game);
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