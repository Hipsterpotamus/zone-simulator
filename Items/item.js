class Item {
    constructor(game, name) {
        this.game = game;
        this.name = name;
        this.metatype = false;
        this.price = 0;

        this.disabled = false;
        this.purchased = false;
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
        let newPrice = this.price;
        if (this.game.player.name === 'florence') {newPrice = Math.ceil(this.price * 1.3)}
        if (this.game.player.levelInfo.activeCharacteristics.has('persuasive')) {
            newPrice = CHARACTERISTICS['persuasive'].onCalculatePrice(newPrice);
        }
        if (this.metatype === 'magic' && this.game.player.levelInfo.activeCharacteristics.has('studious')) {
            newPrice = CHARACTERISTICS['studious'].onCalculateSpellPrice(newPrice);
        }
        if (this.game.player.levelInfo.activeCharacteristics.has('committed')) {
            newPrice = CHARACTERISTICS['committed'].onExpensivePurchase(this.game.player, newPrice);
        }
        if( this.game.player.gold>=newPrice){
            this.game.player.changeGold(-newPrice);
            this.onBuy();
            this.shopElement.remove();
            this.purchased = true;
            this.updatePurchaseHistory();
            this.game.path.itemShop.updateShopItems();
        } else {
            notify('Not enough Gold!');
        }
    }

    updateShopElement() {
        const newClass = this.metatype + '-shop-item shop-item ' + (this.game.player.gold < this.price ? 'shop-item-disabled' : '');
        if (this.game.player.gold < this.price) {this.disabled = true}
        this.shopElement.attr('class', newClass);
        let displayPrice = this.price;
        if (this.game.player.name === 'florence') {displayPrice = Math.ceil(this.price * 1.3)}
        let displayText = 'buy ' + this.name + ': ';

        if (this.game.player.levelInfo.activeCharacteristics.has('persuasive')) {
            displayPrice = CHARACTERISTICS['persuasive'].onCalculatePrice(this.price);
            displayText += '<del>' + this.price + '</del> ' + displayPrice + ' gold<br>' + this.genShopDesc();
        } else if (this.metatype === 'magic' && this.game.player.levelInfo.activeCharacteristics.has('studious')) {
            displayPrice = CHARACTERISTICS['studious'].onCalculateSpellPrice(this.price);
            displayText += '<del>' + this.price + '</del> ' + displayPrice + ' gold<br>' + this.genShopDesc();
        } else {
            displayText += displayPrice + ' gold<br>' + this.genShopDesc();
        }
        this.shopElement.html(displayText);
        // Stat icons on shop buttons
        let shopItemStats = $('<div>', {
            'class': 'shop-item-stats',
            'id': this.name.replace(/\s/g, '') + '-stats'
        });
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
        shopItemStats.appendTo(this.shopElement);
    }

    appendToShop() {
        this.shopElement = $('<button>', {
            'id': '#' + this.name.replace(/\s/g, '') + '-purchase'
        });
        this.shopElement.appendTo('#content-central-box');
        this.updateShopElement()

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