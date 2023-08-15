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
        this.complexity = complexity;
        this.income = 0;
        this.element;
        this.initElement = initElement;

        this.appendElement();

        // if (complexStats) {
        //     if (complexStats.income) {
        //         this.income = complexStats.income;
        //     }
        // }
        // This does the same thing, and allows for more complex stats to be added without having to add them
        Object.keys(complexStats).forEach((stat)=>{
            this[stat] = complexStats[stat];
        })
    }
    appendElement() {
        this.element = $('<option>', {
            'value': this.name,
            'id': '#' + this.name + '-select'
        });
        this.element.appendTo('#' + this.type + '-select');
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
