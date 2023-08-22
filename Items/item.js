class Item {
    constructor(name, metatype) {
        this.name = name;
        this.metatype = metatype;
        const UNSELECTABLE = ['stat'];
        if (!UNSELECTABLE.includes(metatype)) {
            this.appendElement()
            if(g.player.inv[metatype] == 0){
                this.equipped = true;
                $('#'+this.metatype+'-select').val(this.name);
            } else {
                this.equipped = false;
            }
        }
    }

    appendElement() {
        this.element = $('<option>', {
            'value': this.name,
            'id': '#' + this.name + '-'+this.metatype+'-select'
        });
        this.element.appendTo('#' + this.metatype + '-select');
        this.element.text(this.name);
    }
}