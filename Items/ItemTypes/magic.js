// Purchased from shop
// Each spell has an appropriate mana cost (and potential other costs including but not limited to hp, further types of mana, etc.)
// Each spell has a cool down in addition to its mana cost (around 1 second to deter spam clicking)
// Each spell has a ability which functions similar to a usable item
// Each spell has an associated button element which on click does the spell's ability after checking for costs
// Some spells may have finite uses in addition to the above requirements.
// Each spell has a short description placed on its button and a long description that can be obtained from hovering over.


class Magic extends Item {
    constructor(name, metatype, magicElement, type, shortDescription, longDescription, manaCost, onUse, coolDown, usesFinite, complexStats){
        super(name, metatype);
        this.magicElement = magicElement;
        this.type = type;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.manaCost = manaCost;
        this.coolDown = coolDown;
        this.usesFinite = usesFinite;
        this.onUse = onUse;
        
        if(complexStats){
            Object.keys(complexStats).forEach((stat)=>{
                this[stat] = complexStats[stat];
            });
        }
    }

    attemptUse(){
        if(game.combat.inCombat){
            if(game.player.mana>=this.manaCost){
                game.player.changeMana(-this.manaCost);
                this.onUse();
            }else{
                notify('not enough mana!');
            }
        }else{
            notify('magic spells can only be used during combat!')
        }
        
    }
    appendElement() {
        this.element = $('<button>', {
            'value': this.name,
            'id': this.name + '-spell-use',
            'class': 'magic-spell'
        });
        this.element.appendTo('#spell-container');
        let magicHtml = '';
        magicHtml += this.name + '<br>';
        magicHtml += this.manaCost + ' mana <br>';
        magicHtml += this.shortDescription;
        this.element.html(magicHtml);
        this.element.on('click', () => { 
            this.attemptUse();
        });
    }

    updateItemInfo() {
        //add stuff here if you want any selectable/equippable behavior for magic items
    }
}