class ShopItem{
    constructor(name, rawname, type, description, goldPrice, otherCur, onBuy, rarity){
        this.name = name;
        this.rawname = rawname;
        this.type = type;
        this.onBuy = onBuy;
        this.goldPrice = goldPrice;
        this.description = description;
        this.rarity = rarity;
        if(otherCur){
            Object.keys(otherCur).forEach((cur)=>{
                this[cur] = otherCur[cur];
            });
        }
        this.element;
    }
    purchase(){
        if( g.player.gold>=this.goldPrice){
             g.player.gold-=this.goldPrice;
            this.onBuy();
            if(this.item == 'item'){
                for(a in  g.player.inv.item){
                    if( g.player.inv.item[a].rawname == this.rawname){
                         g.player.inv.item[a].appendElement();
                    }
                }
            }
            this.element.remove();
            elementUp();
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
    shopItemsMasterList[name].purchase();
    elementUp();
}