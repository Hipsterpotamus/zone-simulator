class Equippable {
    constructor(startEquipped, name, metatype, type, dmg, armor, regen, attackSpeedChange, complexStats) {
        this.equipped = startEquipped;
        this.name = name;
        this.metatype = metatype;
        this.type = type;
        this.dmg = dmg;
        this.arm = armor;
        this.regen = regen;
        this.aSChange = attackSpeedChange;
        this.income = 0;
        this.element;
                
        this.appendElement();

        // This does the same thing, and allows for more complex stats to be added without having to add them
        if(complexStats){
            Object.keys(complexStats).forEach((stat)=>{
                this[stat] = complexStats[stat];
            });
        }
        
    }
    appendElement() {
        this.element = $('<option>', {
            'value': this.name,
            'id': '#' + this.name + '-'+this.metatype+'-select'
        });
        this.element.appendTo('#' + this.metatype + '-select');
        let textToShow = this.name + ':';
        if (this.metatype == 'weapon') {
            if (this.dmg != 0) {
                textToShow += ' ' + displayWithSign(this.dmg) + ' dmg';
            }
            if (this.arm != 0) {
                textToShow += ' ' + displayWithSign(this.armor) + ' armor';
            }
        } else {
            if (this.arm != 0) {
                textToShow += ' ' + displayWithSign(this.armor) + ' armor';
            }
            if (this.dmg != 0) {
                textToShow += ' ' + displayWithSign(this.dmg) + ' dmg';
            }
        }
        if (this.regen != 0) {
            textToShow += ' ' + displayWithSign(this.regen) + ' regen';
        }
        if (this.aSChange != 0) {
            textToShow += ' ' + displayWithSign(this.aSChange) + ' speed';
        }
        if (this.income != 0) {
            textToShow += ' ' + displayWithSign(this.income) + ' income';
        }
        if (this.name == 'none') {
            textToShow = 'none';
        }
        this.element.text(textToShow);
    }
}


$(document).ready(function(){
    let equipT = ['weapon','head','chest','legs','feet'];
    for(a in equipT){
        $('#'+equipT[a]+'-select').on('change',function(){
            let newEquip = $(this).val();
            let idPull = $(this).attr('id');
            let thing = idPull.replace(/-select$/i, '');
            g.p.inv[thing].forEach(i => {
                if(i.name==newEquip){i.equipped = true;updateEquippableStats(i);}else{i.equipped = false;}
            });
        });
    }
});