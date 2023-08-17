class ShopItem{
    constructor(name, rawname, type, description, goldPrice, otherCur, onBuy, rarity){
        this.name = name;
        this.rawname = rawname;
        this.type = type;
        this.onBuy = onBuy;
        this.goldPrice = goldPrice;
        this.description = description;
        this.rarity = rarity;
        if(otherCur){
            Object.keys(otherCur).forEach((cur)=>{
                this[cur] = otherCur[cur];
            });
        }
        this.element;
    }
    purchase(){
        if(g.p.gold>=this.goldPrice){
            g.p.gold-=this.goldPrice;
            this.onBuy();
            this.element.remove();
        }
    }
    appendShopItem(){
        this.element = $('<button>', {
            'id': '#' + this.name + '-purchase'
        });
        this.element.appendTo('#content-central-box');
        this.element.html('buy '+this.name+': '+this.goldPrice+' gold<br>'+this.description);
        let iname = this.rawname;
        this.element.on('click', function(){ 
            clickToPur(iname);
        });
    }
}
function clickToPur(name){
    shopItemsMasterList[name].purchase();
}
$(function() {

})
let shopItemsMasterList = {
    //grassland weapon
    'branch':new ShopItem('branch','branch','weapon','(2 dmg -12 speed sword)', 5, 0, function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'branch', 'weapon', 'sword', 2, 0, 0 ,-12));
    },'common'),
    'smalldagger':new ShopItem('small dagger','smalldagger','weapon','(3 dmg dagger)', 5, 0, function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'small dagger', 'weapon', 'dagger', 3, 0, 0 ,0));
    },'common'),
    'grasswhip':new ShopItem('grass whip','grasswhip','weapon','(2 dmg +30 speed whip)', 15, 0, function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'grass whip', 'weapon', 'whip', 2, 0, 0 , 30));
    },'common'),
    'woodensword':new ShopItem('wooden sword','woodensword','weapon','(6 dmg -15 speed sword)', 18, 0, function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'wooden sword', 'weapon', 'sword', 6, 0, 0 , -15));
    },'common'),
    //grassland hat
    'grasshat':new ShopItem('grass hat','grasshat','head','(1 armor hat)', 7, 0, function(){
        g.p.inv.head.push(new Equippable(true, true, 'grass hat', 'head', 'hat', 0, 1, 0, 0));
    },'common'),
    //grassland chest
    'cottonshirt':new ShopItem('cotton shirt','cottonshirt','chest','(1 armor shirt)', 5, 0, function(){
        g.p.inv.chest.push(new Equippable(true, true, 'cotton shirt', 'chest', 'shirt', 0, 1, 0, 0));
    },'common'),
    //grassland legs
    'overalls':new ShopItem('overalls','overalls','legs','(1 armor pants)', 6, 0, function(){
        g.p.inv.legs.push(new Equippable(true, true, 'overalls', 'legs', 'pants', 0, 1, 0, 0));
    },'common'),
    //grassland feet
    'strawshoes':new ShopItem('straw shoes','strawshoes','feet','(1 armor shoes)', 6, 0, function(){
        g.p.inv.feet.push(new Equippable(true, true, 'straw shoes', 'feet', 'shoes', 0, 1, 0, 0));
    },'common'),
    //stat
    'greenapple':new ShopItem('green apple','greenapple','statUp','(+5 max hp)', 5, 0, function(){
        g.p.maxhp+=5;
        g.p.hp+=5;
    },'common'),
    'redapple':new ShopItem('red apple','redapple','statUp','(+6 max hp)', 6, 0, function(){
        g.p.maxhp+=6;
        g.p.hp+=6;
    },'common'),
    'chocolatebar':new ShopItem('chocolate bar','chocolatebar','statUp','(-2 max hp +5 speed)', 10, 0, function(){
        g.p.maxhp-=2;
        g.p.hp-=2; if(g.p.hp<0){playerDeath();}
        g.p.asLvl+=5;
    },'common'),
    'proteinshake':new ShopItem('protein shake','proteinshake','statUp','(+1 dmg)', 10, 0, function(){
        g.p.dmg+=1;
    },'common'),
    'grapefruit':new ShopItem('grapefruit','grapefruit','statUp','(+1 regen)', 14, 0, function(){
        g.p.dmg+=1;
    },'common')
};
let zoneIs = {
    'equippable' : {
        'weapon' : [],
        'head' : [],
        'chest' : [],
        'legs' : [],
        'feet' : []
    },
    'stat' : [],
    'item' : [],
    'magic' : []
}

function pushItemsFromZone(zone){
    switch(zone){
        case 'grassland':
            // weapon
            zoneIs.equippable.weapon.push(shopItemsMasterList.branch);
            zoneIs.equippable.weapon.push(shopItemsMasterList.smalldagger);
            zoneIs.equippable.weapon.push(shopItemsMasterList.grasswhip);
            zoneIs.equippable.weapon.push(shopItemsMasterList.woodensword);
            //armor
                //head
                zoneIs.equippable.head.push(shopItemsMasterList.grasshat);
                zoneIs.equippable.head.push(shopItemsMasterList.grasshat);
                //chest
                zoneIs.equippable.chest.push(shopItemsMasterList.cottonshirt);
                zoneIs.equippable.chest.push(shopItemsMasterList.cottonshirt);
                //legs
                zoneIs.equippable.legs.push(shopItemsMasterList.overalls);
                zoneIs.equippable.legs.push(shopItemsMasterList.overalls);
                //feet
                zoneIs.equippable.feet.push(shopItemsMasterList.strawshoes);
                zoneIs.equippable.feet.push(shopItemsMasterList.strawshoes);
            //stat
            zoneIs.stat.push(shopItemsMasterList.greenapple);
            zoneIs.stat.push(shopItemsMasterList.redapple);
            zoneIs.stat.push(shopItemsMasterList.chocolatebar);
            zoneIs.stat.push(shopItemsMasterList.proteinshake);
            zoneIs.stat.push(shopItemsMasterList.grapefruit);
        break;
    }
}