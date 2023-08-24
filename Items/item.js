class Item {
    constructor(name, metatype) {
        this.name = name;
        this.metatype = metatype;
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