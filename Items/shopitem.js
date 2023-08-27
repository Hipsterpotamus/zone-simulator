class ShopItem{
    constructor(game, name, goldPrice, shopDesc, metatype, itemInfo){
        this.game = game;
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
            this.onBuy = () => this.game.player.addSelectableItem(new Equippable(this.game, this.name, this.metatype, ...this.itemInfo));
        }
    
        const USABLELIST = ['usable'];
        if (USABLELIST.includes(this.metatype)) {
            this.onBuy = () => this.game.player.addSelectableItem(new Usable(this.game, this.name, this.metatype, ...this.itemInfo));
        }
    
        const STATLIST = ['stat'];
        if (STATLIST.includes(this.metatype)) {
            this.onBuy = () => new Stat(this.game, this.name, this.metatype, ...this.itemInfo).onUse(this.game);
        }
    
        const MAGICLIST = ['magic'];
        if (MAGICLIST.includes(this.metatype)) {
            this.onBuy = () => this.game.player.addSelectableItem(new Magic(this.game, this.name, this.metatype, ...this.itemInfo));
        }
    }

    purchase(){
        if( this.game.player.gold>=this.goldPrice){
            this.game.player.changeGold(-this.goldPrice);
            this.onBuy();
            this.element.remove();
            this.updatePurchaseHistory();
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
        if (this.game.player.levelInfo.characteristics.persuasive) {
            let newPrice = Math.ceil(this.goldPrice / 2);
            this.element.html('buy ' + this.name + ': <del>' + this.goldPrice + '</del> ' + newPrice + ' gold<br>' + this.shopDesc);
        } else {
            this.element.html('buy ' + this.name + ': ' + this.goldPrice + ' gold<br>' + this.shopDesc);
        }



        // add a div inside the button in this structure
        // <div class="shop-item-stats">
        //     <div class="stat-up"> <SVG HERE> </div>
        //     <div class="arm-down"> <SVG HERE> </div>
        // </div>
        let shopItemStats = $('<div>', {
            'class': 'shop-item-stats'
        });
        
        // add the stat up/down icon divs based on which stats are affected by the item
        // [type, damage, armor, regen, attackSpeedChange, complexStats]
        if (this.itemInfo[1] > 0) {
            let armUp = $('<div>', {
                'class': 'stat-up shop-stat-dmg'
            });
            armUp.appendTo(shopItemStats);
            $('.shop-stat-dmg').html(stat_icons['dmg'])
        } else if (this.itemInfo[2] > 0) {
            let armUp = $('<div>', {
                'class': 'stat-up shop-stat-arm'
            });
            armUp.appendTo(shopItemStats);
            $('.shop-stat-arm').html(stat_icons['arm'])
        }
        // add to the button
        shopItemStats.appendTo(this.element);


        this.element.on('click', () => {
            this.purchase();
        });
    }

    updatePurchaseHistory() {
        this.game.player.totalPurchased += this.goldPrice;
        $('#purchase-total').text(this.game.player.totalPurchased);
        this.game.purchaseHistory.push(this);
        let newPurchase = $('<p>', {
            'class': 'gold-text-tail-item'
        });
        newPurchase.text(this.name.charAt(0).toUpperCase() + this.name.substr(1) + ' - ' + this.goldPrice + ' Gold');
        newPurchase.appendTo('#gold-text-tail');
    }
}