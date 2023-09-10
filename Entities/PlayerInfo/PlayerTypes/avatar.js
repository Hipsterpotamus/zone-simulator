class Avatar extends Player {
    constructor(type) {
        super(type);
        this.name = 'ava';

        this.getByType('weapon').name = 'Avatar\'s Staff';
        this.getByType('weapon').updateItemInfo()
        this.getByType('head').name = 'Avatar\'s Hat';
        this.getByType('head').updateItemInfo()
        this.getByType('chest').name = 'Avatar\'s Shirt';
        this.getByType('chest').updateItemInfo()
        this.getByType('legs').name = 'Avatar\'s Pants';
        this.getByType('legs').updateItemInfo()
        this.getByType('feet').name = 'Avatar\'s Shoes';
        this.getByType('feet').updateItemInfo()
    }

    initPlayerDisplay() {
        this.addItem(new Equippable(this.game, 'Avatar\'s Staff', {'metatype': 'weapon'}), false, false);
        this.addItem(new Equippable(this.game, 'Avatar\'s Hat', {'metatype': 'head'}), false, false);
        this.addItem(new Equippable(this.game, 'Avatar\'s Shirt', {'metatype': 'chest'}), false, false);
        this.addItem(new Equippable(this.game, 'Avatar\'s Pants', {'metatype': 'legs'}), false, false);
        this.addItem(new Equippable(this.game, 'Avatar\'s Shoes', {'metatype': 'feet'}), false, false);

        this.changeMana(0);

        this.updateEntityDisplay();
    }

    addItem(item, itemShop = false, updateDisplay = true) {
        if (item.metatype != 'usable' && item.metatype != 'magic' && this.inv[item.metatype][0] != '') {
            this.mergeEquippable(item);
            if (itemShop && itemShop.shopOpen) {itemShop.updateShopItems()};
        } else {
            this.inv[item.metatype][1].push(item);
            item.appendToSelect()
            this.changeSelectedItem(item, itemShop, updateDisplay);
        }
    }

    changeSelectedItem(item, itemShop = false, updateDisplay = true) {
        if (updateDisplay && item.metatype != 'usable' && item.metatype != 'magic') {item.calcComparisons()}
        this.attackCounter = 0;
        this.inv[item.metatype][0] = item;
        if (updateDisplay) {item.updateItemInfo()}
        $('#'+item.metatype+'-select').val(item.name);
        if (itemShop && itemShop.shopOpen) {itemShop.updateShopItems()};
    }

    mergeEquippable(item) {
        let avatarItem = this.getByType(item.metatype);
        if(item.itemInfo){
            Object.keys(item.itemInfo).forEach((stat)=>{
                avatarItem[stat] += item[stat];
            });
        }
        avatarItem.as -= 25;
        avatarItem.updateItemInfo();
    }
}