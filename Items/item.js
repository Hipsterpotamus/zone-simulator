class Item {
    constructor(name, metatype) {
        this.name = name;
        this.metatype = metatype;

        this.appendElement()
        if(g.player.inv[metatype] == 0){
            this.equipped = true;
            $('#'+this.metatype+'-select').val(this.name);
        } else {
            this.equipped = false;
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
//could maybe change this to use player.getByType
$(function() {
    let metatypes = ['weapon','head','chest','legs','feet', 'usable'];
    for (let metatype of metatypes) {
        $('#' + metatype + '-select').on('change', function() {
            let newItem = $(this).val();
            g.player.inv[metatype].forEach(item => {
                if (item.name == newItem) {
                    item.equipped = true;
                    item.updateItemInfo();
                } else {
                    item.equipped = false;
                }
            });
        });
    }
});