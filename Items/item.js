class Item {
    constructor(name, metatype) {
        this.name = name;
        this.metatype = metatype;
        const UNSELECTABLE = ['stat','magic'];
        if (!UNSELECTABLE.includes(metatype)) {
            this.appendElement()
            g.player.inv[metatype].forEach(element => {
                element.equipped = false;
            });
            this.equipped = true;
            $('#'+this.metatype+'-select').val(this.name);
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