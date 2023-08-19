class Item{
    constructor(name, rawname, type, description, startingCount, useCount, onUse, complex){
        this.name = name;
        this.rawname = rawname;
        this.type = type;
        this.description = description;
        this.onUse = onUse;
        this.count = startingCount;
        this.useCount = useCount;
        
        if(complex){

        }

        this.element;
        this.appendElement();
    }
    appendElement() {
        this.element = $('<option>', {
            'value': this.rawname,
            'id': '#' + this.name + '-'+this.metatype+'-select'
        });
        this.element.appendTo('#item-select');
        this.element.text(this.name);
    }
    attemptUse(){
        if(this.count>(this.useCount-1)){
            if(this.type == 'combat-enemy'){
                if(g.inCombat){
                    this.count-=this.useCount;
                    this.onUse;
                }else{
                    // for future: communicate to player that item must be used in combat
                }
            }
            
        }else{
            // for future: communicate to player that count = 0 and item use failed
        }
    }
}



$(function() {
    $('#use-item').on('click',function(){
        let itemSelected = $('#item-select').val();

    });
});


let itemMasterList = {
    'firecracker': new Item('firecracker', 'firecracker', 'combat-enemy', 'During combat, use to deal 20 damage (bypasses armor) to the current enemy, lose 2 hp', 1, 1, function(){
        g.cEnemy.hp-=20;
        g.p.hp-=2;
    }),
    'throwingegg': new Item('throwing egg', 'throwingegg', 'combat-enemy', "During combat, lower the current enemy's armor by 3",3, 1, function(){
        g.cEnemy.arm-=3;
    })
}