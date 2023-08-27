class ItemShop {
    constructor(game) {
        this.game = game;
        this.itemsInShop = [];
    }

    generateNewShop(shopCode) {
        const ITEMCATEGORIES = ['weapon', 'head', 'chest', 'legs', 'feet', 'stat', 'usable', 'magic'];

        let shopCodeExpand = [shopCode[0], 0, 0, 0, 0, shopCode[2], shopCode[3], shopCode[4]];

        for (let i = 0; i < shopCode[1]; i++) {
            const randNum = Math.floor(Math.random() * 4) + 1;
            shopCodeExpand[randNum] += 1;
        }

        this.itemsInShop = [];
    
        ITEMCATEGORIES.forEach((category, index) => {
            let count = shopCodeExpand[index] || 0;
            let availableItems = this.game.zone.zoneItemList[category];
    
            for (let i = 0; i < count; i++) {
                if (availableItems.length === 0) {
                    break;
                }
                const searchInd = Math.floor(Math.random() * availableItems.length);
                let item = availableItems[searchInd];
                availableItems.splice(searchInd, 1);
                item.appendToShop();
                this.itemsInShop.push(item);
            }
        });
    }

    updateShopItems() {
        this.itemsInShop.forEach(item => {
            item.updateShopElement();
        });
    }

    generateItem(name, itemInfo) {
        const EQUIPPABLELIST = ['weapon', 'head', 'chest', 'legs', 'feet'];
        if (EQUIPPABLELIST.includes(itemInfo.metatype)) {
            return new Equippable(this.game, name, itemInfo);
        }
    
        const USABLELIST = ['usable'];
        if (USABLELIST.includes(itemInfo.metatype)) {
            return new Usable(this.game, name, itemInfo);
        }
    
        const STATLIST = ['stat'];
        if (STATLIST.includes(itemInfo.metatype)) {
            return new Stat(this.game, name, itemInfo);
        }
    
        const MAGICLIST = ['magic'];
        if (MAGICLIST.includes(itemInfo.metatype)) {
            return new Magic(this.game, name, itemInfo);
        }
    }
}