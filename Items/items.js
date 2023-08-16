class Item{
    constructor(name, rawname, type, description, onUse){
        this.name = name;
        this.rawname = rawname;
        this.type = type;
        this.description = description;
        this.onUse = onUse;
        
        this.element;
        this.appendElement();
    }
    appendElement() {
        this.element = $('<option>', {
            'value': this.name,
            'id': '#' + this.name + '-'+this.metatype+'-select'
        });
        this.element.appendTo('#item-select');
        this.element.text(this.name);
    }

}