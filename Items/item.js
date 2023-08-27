class Item {
    constructor(game, name) {
        this.game = game;
        this.name = name;
        this.metatype = false;
        this.price = 0;
    }

    appendToSelect() {
        this.selectElement = $('<option>', {
            'value': this.name,
            'id': '#' + this.name + '-'+this.metatype+'-select'
        });
        this.selectElement.appendTo('#' + this.metatype + '-select');
        this.selectElement.text(this.name);
    }

    purchase(){
        if( this.game.player.gold>=this.price){
            this.game.player.changeGold(-this.price);
            this.onBuy();
            this.shopElement.remove();
            this.updatePurchaseHistory();
            this.game.path.itemShop.updateShopItems();
        } else {
            notify('Not enough Gold!');
        }
    }

    updateShopElement() {
        const newClass = this.metatype + '-shop-item shop-item ' + (this.game.player.gold < this.price ? 'shop-item-disabled' : '');
        this.shopElement.attr('class', newClass);
    }

    appendToShop() {
        this.shopElement = $('<button>', {
            'id': '#' + this.name.replace(/\s/g, '') + '-purchase',
            'class': this.metatype + '-shop-item shop-item ' + (this.game.player.gold < this.price ? 'shop-item-disabled' : ''),
        });
        this.shopElement.appendTo('#content-central-box');
        if (this.game.player.levelInfo.characteristics.persuasive) {
            let newPrice = Math.ceil(this.price * 3 / 4);
            this.shopElement.html('buy ' + this.name + ': <del>' + this.price + '</del> ' + newPrice + ' gold<br>' + this.genShopDesc());
        } else {
            this.shopElement.html('buy ' + this.name + ': ' + this.price + ' gold<br>' + this.genShopDesc());
        }


            // Stat icons on shop buttons
        // add a div inside the button in this structure
        // <div class="shop-item-stats">
        //     <div class="stat-up"> <SVG HERE> </div>
        //     <div class="arm-down"> <SVG HERE> </div>
        // </div>
        let shopItemStats = $('<div>', {
            'class': 'shop-item-stats',
            'id': this.name.replace(/\s/g, '') + '-stats'
        });
        
        // add the stat up/down icon divs based on which stats are affected by the item
        // [type, damage, armor, regen, attackSpeedChange, complexStats]

        // for stat in stat_icons
        for (let stat in stat_icons) {
            if (this.itemInfo[stat] < 0) {
                let statDown = $('<div>', {
                    'class': 'stat-down shop-stat-' + stat
                });
                statDown.appendTo(shopItemStats);
                statDown.html(stat_icons[stat])
            } else if (this.itemInfo[stat] > 0) {
                let statUp = $('<div>', {
                    'class': 'stat-up shop-stat-' + stat
                });
                statUp.appendTo(shopItemStats);
                statUp.html(stat_icons[stat])
            }
        }
        
        // if (this.itemInfo[1] > 0) {
        //     let armUp = $('<div>', {
        //         'class': 'stat-up shop-stat-dmg'
        //     });
        //     armUp.appendTo(shopItemStats);
        //     $('.shop-stat-dmg').html(stat_icons['dmg'])
        // } else if (this.itemInfo[2] > 0) {
        //     let armUp = $('<div>', {
        //         'class': 'stat-up shop-stat-arm'
        //     });
        //     armUp.appendTo(shopItemStats);
        //     $('.shop-stat-arm').html(stat_icons['arm'])
        // }
        // add to the button
        shopItemStats.appendTo(this.shopElement);


        this.shopElement.on('click', () => {
            this.purchase();
        });
    }

    updatePurchaseHistory() {
        this.game.player.totalPurchased += this.price;
        $('#purchase-total').text(this.game.player.totalPurchased);
        this.game.purchaseHistory.push(this);
        let newPurchase = $('<p>', {
            'class': 'gold-text-tail-item'
        });
        newPurchase.text(this.name.charAt(0).toUpperCase() + this.name.substr(1) + ' - ' + this.price + ' Gold');
        newPurchase.appendTo('#gold-text-tail');
    }
}