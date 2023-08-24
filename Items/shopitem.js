class ShopItem{
    constructor(name, goldPrice, shopDesc, metatype, itemInfo){
        this.name = name;
        this.goldPrice = goldPrice;
        this.shopDesc = shopDesc;
        this.metatype = metatype;
        this.itemInfo = itemInfo;
        this.element;
        this.onBuy;
        this.generateItem();
    }

    generateItem() {
        const EQUIPPABLELIST = ['weapon', 'head', 'chest', 'legs', 'feet'];
        if (EQUIPPABLELIST.includes(this.metatype)) {
            this.onBuy = () => g.player.inv[this.metatype].push(new Equippable(this.name, this.metatype, ...this.itemInfo));
        }
    
        const USABLELIST = ['usable'];
        if (USABLELIST.includes(this.metatype)) {
            this.onBuy = () => g.player.inv[this.metatype].push(new Usable(this.name, this.metatype, ...this.itemInfo));
        }
    
        const STATLIST = ['stat'];
        if (STATLIST.includes(this.metatype)) {
            this.onBuy = () => new Stat(this.name, this.metatype, ...this.itemInfo).onUse();
        }
    
        const MAGICLIST = ['magic'];
        if (MAGICLIST.includes(this.metatype)) {
            this.onBuy = () => g.player.inv[this.metatype].push(new Magic(this.name, this.metatype, ...this.itemInfo));
        }
    }

    purchase(){
        if( g.player.gold>=this.goldPrice){
            g.player.changeGold(-this.goldPrice);
            this.onBuy();
            this.element.remove();
            updatePurchaseHistory(this);
            g.player.inv[this.metatype].forEach(element => {
                if (element.equipped) {element.updateItemInfo()};
            });
        } else {
            notify('Not enough Gold!');
        }
    }

    appendShopItem() {
        this.element = $('<button>', {
            'id': '#' + this.name.replace(/\s/g, '') + '-purchase',
            'class': this.metatype + '-shop-item',
        });
        this.element.appendTo('#content-central-box');
        this.element.html('buy ' + this.name + ': ' + this.goldPrice + ' gold<br>' + this.shopDesc);
        this.element.on('click', () => {
            this.purchase();
        });
    }
}