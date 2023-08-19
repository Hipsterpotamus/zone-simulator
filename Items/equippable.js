class Equippable {
    constructor(startEquipped, initEle, name, metatype, type, dmg, armor, regen, attackSpeedChange, complexStats) {
        this.equipped = startEquipped;
        this.initEle = initEle;
        this.name = name;
        this.metatype = metatype;
        this.type = type;
        this.dmg = dmg;
        this.arm = armor;
        this.regen = regen;
        this.aSChange = attackSpeedChange;
        this.income = 0;
        this.element;
                
        if(initEle){
            this.appendElement();
        }

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
        let textToShow = this.name + '–' + this.type;
        if(this.name == 'none'){textToShow = 'none';}
        this.element.text(textToShow);
    }
}


$(function(){
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