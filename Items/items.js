class Item{
    constructor(name, rawname, type, description, startingCount, useCount, onUse, complex){
        this.name = name;
        this.rawname = rawname;
        this.type = type;
        this.description = description;
        this.onUse = onUse;
        this.count = startingCount;
        this.useCount = useCount;
        this.equipped = false;
        if(g.p.inv.item.length == 0){
            this.equipped = true;
            $('#item-select-description').html(this.description+'<br>count : '+this.count);
        }
        
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
                    this.onUse();
                }else{
                    // for future: communicate to player that item must be used in combat
                }
            }else if(this.type == 'all-self'){
                this.count-=this.useCount;
                this.onUse();
            }
            
        }else{
            // for future: communicate to player that count = 0 and item use failed
        }
    }
}



$(function() {
    $('item-select').on('change',function(){
        let newEquip = $(this).val();
        g.p.inv['item'].forEach(i => {
            if(i.rawname==newEquip){i.equipped = true;$('#item-select-description').html(i.description+'<br>count : '+i.count);}else{i.equipped = false;}
        });
    });
    $('#use-item').on('click',function(){
        g.p.getByType('item').attemptUse();
    });
});

