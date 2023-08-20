const CATEGORIES = ['weapon', 'head', 'chest', 'legs', 'feet', 'stat', 'item'];
const EQUIPSPLIT = 5;

function fillShop(shopCode) {
    let itemToPush = [];
    let shopCodeExpand = [shopCode[0], 0, 0, 0, 0, shopCode[2], shopCode[3]];
    for (let i = 0; i < shopCode[1]; i++) {
        let randNum = Math.floor(Math.random() * 4) + 1;
        shopCodeExpand[randNum] += 1;
    }

    CATEGORIES.forEach((category, index) => {
        let count = shopCodeExpand[index] || 0;
        let availableItems;
        if (index < EQUIPSPLIT) {
            availableItems = zoneIs.equippable[category];
        } else {
            availableItems = zoneIs[category];
        }
        console.log(availableItems);

        if (availableItems.length === 0) {
            return;
        }

        for (let i = 0; i < count; i++) {
            let searchInd = Math.floor(Math.random() * availableItems.length);
            itemToPush.push(availableItems[searchInd]);
            availableItems.splice(searchInd, 1);
            if (availableItems.length === 0) {
                break;
            }
        }
    });

    for (let itm of itemToPush) {
        itm.appendShopItem();
    }
}
