// Purchased from shop
// Each spell has an appropriate mana cost (and potential other costs including but not limited to hp, further types of mana, etc.)
// Each spell has a cool down in addition to its mana cost (around 1 second to deter spam clicking)
// Each spell has a ability which functions similar to a usable item
// Each spell has an associated button element which on click does the spell's ability after checking for costs
// Some spells may have finite uses in addition to the above requirements.
// Each spell has a short description placed on its button and a long description that can be obtained from hovering over.


class Magic extends Item {
    constructor(name, metatype, magicElement, type, shortDescription, longDescription, manaCost, spell, coolDown, usesFinite, complexStats){
        super(name, metatype);
        this.magicElement = magicElement;
        this.type = type;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.manaCost = manaCost;
        this.coolDown = coolDown;
        this.usesFinite = usesFinite;
        this.spell = spell;
        
        if(complexStats){
            Object.keys(complexStats).forEach((stat)=>{
                this[stat] = complexStats[stat];
            });
        }

        this.appendElement();
    }

    attemptUse(){
        if(g.combat.inCombat){
            if(g.player.mana>=this.manaCost){
                g.player.changeMana(-this.manaCost);
                this.spell();
            }else{
                notify('not enough mana!');
            }
        }else{
            notify('magic spells can only be used during combat!')
        }
        
    }
    appendElement() {
        this.element = $('<button>', {
            'val': this.name,
            'id': this.name + '–spell–use',
            'class': 'magic-spell'
        });
        this.element.appendTo('#spell-container');
        let magicHtml = '';
        magicHtml += this.name + '<br>';
        magicHtml += this.manaCost + ' mana <br>';
        magicHtml += this.shortDescription;
        this.element.html(magicHtml);
        this.element.on('click',spellClick);
    }
}


function spellClick(){
    console.log('epic');
    let value = $(this).val();
    for(x in g.player.inv.magic){
        console.log(value);
        if(g.player.inv.magic[x].name == value){
            g.player.inv.magic[x].attemptUse();
        }
    }
}
//