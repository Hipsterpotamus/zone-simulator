function fillShop(shopType){
    let itemToPush = [];
    let searchInd;
    if (shopType == '3w,2a,4s,2i'){
        let w = 3;
        while (w>0){
            searchInd = Math.floor(Math.random()*zoneIs.equippable.weapon.length);
            if(true){
                itemToPush.push(zoneIs.equippable.weapon[searchInd]);
                zoneIs.equippable.weapon.splice(searchInd,1);
                w -= 1;
            }
        }
        let a = 2;
        while (a>0){
            let armorPiece = (Math.floor(Math.random()*4)+1);
            switch(armorPiece){
                case 1:
                    searchInd = Math.floor(Math.random()*zoneIs.equippable.head.length);
                    if(true){
                        itemToPush.push(zoneIs.equippable.head[searchInd]);
                        zoneIs.equippable.head.splice(searchInd,1);
                        a -= 1;
                    }
                break;
                case 2:
                    searchInd = Math.floor(Math.random()*zoneIs.equippable.chest.length);
                    if(true){
                        itemToPush.push(zoneIs.equippable.chest[searchInd]);
                        zoneIs.equippable.chest.splice(searchInd,1);
                        a -= 1;
                    }
                break;
                case 3:
                    searchInd = Math.floor(Math.random()*zoneIs.equippable.legs.length);
                    if(true){
                        itemToPush.push(zoneIs.equippable.legs[searchInd]);
                        zoneIs.equippable.legs.splice(searchInd,1);
                        a -= 1;
                    }
                break;
                case 4:
                    searchInd = Math.floor(Math.random()*zoneIs.equippable.feet.length);
                    if(true){
                        itemToPush.push(zoneIs.equippable.feet[searchInd]);
                        zoneIs.equippable.feet.splice(searchInd,1);
                        a -= 1;
                    }
                break;
            }
        } 
        let s = 4;
        while (s>4){
            searchInd = Math.floor(Math.random()*zoneIs.stat.length);
            if(true){
                itemToPush.push(zoneIs.stat[searchInd]);
                zoneIs.stat.splice(searchInd,1);
                s -= 1;
            }
        }
        // let i = 2;
        // while (i>4){
        //     searchInd = Math.floor(Math.random()*zoneIs.item.length);
        //     if(true){
        //         itemToPush.push(zoneIs.item[searchInd]);
        //         i -= 1;
        //     }
        // }
    }
    console.log(itemToPush);
    for(itm in itemToPush){
        itemToPush[itm].appendShopItem();
    }
}
function getShopType(){
    switch(g.zone){
        case 'grassland':
            return '3w,2a,4s,2i';
    }
}
