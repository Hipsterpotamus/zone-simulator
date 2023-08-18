function fillShop(shopType){
    let itemToPush = [];
    let searchInd;
    if (shopType == '3w,2a,3s,2i'){
        let attempts = 0;
        let w = 3;
        while (w>0 && attempts<100){
            attempts+=1;
            searchInd = Math.floor(Math.random()*zoneIs.equippable.weapon.length);
            if(true){
                if(zoneIs.equippable.weapon[searchInd]){
                    itemToPush.push(zoneIs.equippable.weapon[searchInd]);
                    zoneIs.equippable.weapon.splice(searchInd,1);
                    w -= 1;
                }
            }
        }
        let a = 2;
        while (a>0 && attempts<100){
            attempts+=1;
            let armorPiece = (Math.floor(Math.random()*4)+1);
            switch(armorPiece){
                case 1:
                    searchInd = Math.floor(Math.random()*zoneIs.equippable.head.length);
                    if(true){
                        if(zoneIs.equippable.head[searchInd]){
                            itemToPush.push(zoneIs.equippable.head[searchInd]);
                            zoneIs.equippable.head.splice(searchInd,1);
                            a -= 1;
                        }
                    }
                break;
                case 2:
                    searchInd = Math.floor(Math.random()*zoneIs.equippable.chest.length);
                    if(true){
                        if(zoneIs.equippable.chest[searchInd]){
                            itemToPush.push(zoneIs.equippable.chest[searchInd]);
                            zoneIs.equippable.chest.splice(searchInd,1);
                            a -= 1;
                        }
                    }
                break;
                case 3:
                    searchInd = Math.floor(Math.random()*zoneIs.equippable.legs.length);
                    if(true){
                        if(zoneIs.equippable.legs[searchInd]){
                            itemToPush.push(zoneIs.equippable.legs[searchInd]);
                            zoneIs.equippable.legs.splice(searchInd,1);
                            a -= 1;
                        }
                    }
                break;
                case 4:
                    searchInd = Math.floor(Math.random()*zoneIs.equippable.feet.length);
                    if(true){
                        if(zoneIs.equippable.feet[searchInd]){
                            itemToPush.push(zoneIs.equippable.feet[searchInd]);
                            zoneIs.equippable.feet.splice(searchInd,1);
                            a -= 1;
                        }
                    }
                break;
            }
        } 
        let s = 3;
        while (s>0 && attempts < 100){
            attempts+=1;
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
    for(itm in itemToPush){
        itemToPush[itm].appendShopItem();
    }
}
function getShopType(){
    switch(g.zone){
        case 'grassland':
            return '3w,2a,3s,2i';
    }
}
