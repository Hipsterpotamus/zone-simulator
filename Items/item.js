class Item {
    constructor(game, name) {
        this.game = game;
        this.name = name;
        this.metatype = false;
        this.price = 0;
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