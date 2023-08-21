const CATEGORIES = ['weapon', 'head', 'chest', 'legs', 'feet', 'stat', 'item'];

function fillShop(shopCode) {
    let itemToPush = [];
    let shopCodeExpand = [shopCode[0], 0, 0, 0, 0, shopCode[2], shopCode[3]];
    for (let i = 0; i < shopCode[1]; i++) {
        let randNum = Math.floor(Math.random() * 4) + 1;
        shopCodeExpand[randNum] += 1;
    }

    CATEGORIES.forEach((category, index) => {
        let count = shopCodeExpand[index] || 0;
        let availableItems = g.zone.zoneItemList[category];

        for (let i = 0; i < count; i++) {
            if (availableItems.length === 0) {
                break;
            }
            let searchInd = Math.floor(Math.random() * availableItems[category].length);
            let item = availableItems[searchInd];
            availableItems.splice(searchInd, 1);
            item.appendShopItem();
            }
    });
}