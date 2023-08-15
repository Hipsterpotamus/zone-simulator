class ShopItem{
    constructor(name, type, description, price, onBuy){
        this.name = name;
        this.type = type;
        this.onBuy = onBuy;
        this.price = price;
        this.description = description;
        this.element;
    }
    appendShopItem(){
        this.element = $('<button>', {
            'id': '#' + this.name + '-purchase'
        });
        this.element.appendTo('#content-central-box');
        this.element.html('buy '+this.name+': '+this.price+' gold<br>'+this.description);
    }
    purchase(){

    }
}


let shopIs = {
    'greenapple': new ShopItem('green apple','statUp','(+5 max hp)', 5, function(){
        g.p.maxhp+=5;
        g.p.hp+=5;
    }),
    'redapple': new ShopItem('red apple','statUp','(+6 max hp)', 6, function(){
        g.p.maxhp+=6;
        g.p.hp+=6;
    })
}