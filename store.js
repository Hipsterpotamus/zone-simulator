class ShopItem{
    constructor(name, rawname, type, description, goldPrice, otherCur, onBuy){
        this.name = name;
        this.rawname = rawname;
        this.type = type;
        this.onBuy = onBuy;
        this.goldPrice = goldPrice;
        this.description = description;
        if(otherCur){
            Object.keys(otherCur).forEach((cur)=>{
                this[cur] = otherCur[cur];
            });
        }
        this.element;
    }
    purchase(){
        if(g.p.gold>=this.goldPrice){
            g.p.gold-=this.goldPrice;
            this.onBuy();
            this.element.remove();
        }
    }
    appendShopItem(){
        this.element = $('<button>', {
            'id': '#' + this.name + '-purchase'
        });
        this.element.appendTo('#content-central-box');
        this.element.html('buy '+this.name+': '+this.goldPrice+' gold<br>'+this.description);
        let iname = this.rawname;
        this.element.on('click', function(){
            clickToPur(iname);
        });
    }
}
function clickToPur(name){
    shopIs[name].purchase();
}

let shopIs = {
    'greenapple': new ShopItem('green apple','greenapple','statUp','(+5 max hp)', 5, 0, function(){
        g.p.maxhp+=5;
        g.p.hp+=5;
    }),
    'redapple': new ShopItem('red apple','redapple','statUp','(+6 max hp)', 6, 0, function(){
        g.p.maxhp+=6;
        g.p.hp+=6;
    })
}