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
            elementUp();
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
    'thistleknife': new ShopItem('thistle knife','thistleknife','weapon','(1 dmg +30 speed dagger)', 6, 0, function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'thistleknife', 'weapon', 'knife', 1, 0, 0 ,30));
    },'common'),
    'smalldagger':new ShopItem('small dagger','smalldagger','weapon','(3 dmg dagger)', 5, 0, function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'small dagger', 'weapon', 'dagger', 3, 0, 0 ,0));
    },'common'),
    'broom':new ShopItem('broom','broom','weapon','(4 dmg -10 speed club)', 5, 0, function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'broom', 'weapon', 'club', 4, 0, 0 ,-10));
    },'common'),
    'grasswhip':new ShopItem('grass whip','grasswhip','weapon','(2 dmg +40 speed whip)', 15, 0, function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'grass whip', 'weapon', 'whip', 2, 0, 0 , 40));
    },'common'),
    'woodensword':new ShopItem('wooden sword','woodensword','weapon','(6 dmg -15 speed sword)', 12, 0, function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'wooden sword', 'weapon', 'sword', 6, 0, 0 , -15));
    },'common'),
    'bristlytwig':new ShopItem('bristly twig','bristlytwig','weapon','(5 dmg +20 speed -1 regen whip)', 13, 0, function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'bristly twig', 'weapon', 'whip', 5, 0, -1, 20));
    },'common'),
    'woodenaxe':new ShopItem('wooden axe','woodenaxe','weapon','(14 dmg -100 speed axe)', 21, 0, function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'wooden axe', 'weapon', 'axe', 14, 0, 0, -100));
    },'common'),
    'thickrod':new ShopItem('thick rod','thickrod','weapon','(8 dmg club)',18, 0,function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'thick rod', 'weapon', 'club', 8, 0, 0, 0));
    },'common'),
    'cobblestonesword':new ShopItem('cobblestone sword','cobblestonesword','weapon','(11 dmg sword)',24, 0,function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'cobblestone sword', 'weapon', 'sword', 11, 0, 0, 0));
    },'common'),
    'rockonstick':new ShopItem('rock on stick','rockonstick','weapon','(7 dmg +1 armor club)',19, 0,function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'rock on stick', 'weapon', 'club', 7, 1, 0, 0));
    },'common'),
    'boxinggloves':new ShopItem('boxing gloves','boxinggloves','weapon','(2 dmg +2 armor +2 speed gloves)',19, 0,function(){
        g.p.inv.weapon.push(new Equippable(true, true, 'boxing gloves', 'weapon', 'gloves', 2, 2, 0, 2));
    },'common'),


    //grassland hat
    'grasshat':new ShopItem('grass hat','grasshat','head','(1 armor hat)', 7, 0, function(){
        g.p.inv.head.push(new Equippable(true, true, 'grass hat', 'head', 'hat', 0, 1, 0, 0));
    },'common'),
    'ballcap':new ShopItem('ballcap','ballcap','head','(+7 speed hat)', 9, 0, function(){
        g.p.inv.head.push(new Equippable(true, true, 'ballcap', 'head', 'hat', 0, 0, 0, 7));
    },'common'),
    'mudhelmet':new ShopItem('mud helmet','mudhelmet','head','(2 armor helmet)', 21, 0, function(){
        g.p.inv.head.push(new Equippable(true, true, 'mud helmet', 'head', 'helmet', 0, 2, 0, 0));
    },'common'),
    'propellerhat':new ShopItem('propeller hat','propellerhat','head','(1 armor +14 speed helmet)', 16, 0, function(){
        g.p.inv.head.push(new Equippable(true, true, 'propeller hat', 'head', 'helmet', 0, 1, 0, 14));
    },'common'),
    'headband': new ShopItem('headband','headband','head','(+1 regen headband)', 18, 0, function(){
        g.p.inv.head.push(new Equippable(true, true, 'propeller hat', 'head', 'helmet', 0, 0, 1, 0));
    },'common'),
    //grassland chest
    'cottonshirt':new ShopItem('cotton shirt','cottonshirt','chest','(1 armor shirt)', 5, 0, function(){
        g.p.inv.chest.push(new Equippable(true, true, 'cotton shirt', 'chest', 'shirt', 0, 1, 0, 0));
    },'common'),
    'grassrobe':new ShopItem('grass robe','grassrobe','chest','(+12 speed robe)', 9, 0, function(){
        g.p.inv.chest.push(new Equippable(true, true, 'grass robe', 'chest', 'robe', 0, 0, 0, 12));
    },'common'),
    'leathertunic':new ShopItem('leather tunic','leathertunic','chest','(+3 armor shirt)', 14, 0, function(){
        g.p.inv.chest.push(new Equippable(true, true, 'leather tunic', 'chest', 'shirt', 0, 3, 0, 0));
    },'common'),
    'woodenchestplate': new ShopItem('wooden chestplate','woodenchestplate','chest','(+5 armor -25 speed chestplate)', 28, 0, function(){
        g.p.inv.chest.push(new Equippable(true, true, 'wooden chestplate', 'chest', 'chestplate', 0, 5, 0, -25));
    }),
    'animalpelt': new ShopItem('animal pelt','animalpelt','chest','(+1 regen +8 speed)', 14, 0, function(){
        g.p.inv.chest.push(new Equippable(true, true, 'animal pelt', 'chest', 'misc', 0, 0, 1, 8));
    }),
    //grassland legs
    'overalls':new ShopItem('overalls','overalls','legs','(1 armor pants)', 6, 0, function(){
        g.p.inv.legs.push(new Equippable(true, true, 'overalls', 'legs', 'pants', 0, 1, 0, 0));
    },'common'),
    'grassskirt':new ShopItem('grass skirt','grassskirt','legs','(1 armor +6 speed skirt)', 14, 0, function(){
        g.p.inv.legs.push(new Equippable(true, true, 'grass skirt', 'legs', 'skirt', 0, 1, 0, 6));
    },'common'),
    'hikingpants':new ShopItem('hiking pants','hikingpants','legs','(2 armor +2 speed pants)', 18, 0, function(){
        g.p.inv.legs.push(new Equippable(true, true, 'hiking pants', 'legs', 'pants', 0, 2, 0, 2));
    },'common'),
    'basicshorts':new ShopItem('basic shorts','basicshorts','legs','(1 armor +5 speed shorts)', 17, 0, function(){
        g.p.inv.legs.push(new Equippable(true, true, 'basic shorts', 'legs', 'shorts', 0, 1, 0, 5));
    },'common'),
    'hoolahoop':new ShopItem('hoola hoop','hoolahoop','legs','(+2 regen -22 speed legs)', 27, 0, function(){
        g.p.inv.legs.push(new Equippable(true, true, 'hoolahoop', 'legs', 'misc', 0, 0, 2, -22));
    },'common'),
    'jorts':new ShopItem('jorts','jorts','legs','(1 regen +5 speed shorts)', 12, 0, function(){
        g.p.inv.legs.push(new Equippable(true, true, 'jorts', 'legs', 'shorts', 0, 0, 1, 5));
    },'common'),
    //grassland feet
    'strawshoes':new ShopItem('straw shoes','strawshoes','feet','(1 armor shoes)', 6, 0, function(){
        g.p.inv.feet.push(new Equippable(true, true, 'straw shoes', 'feet', 'shoes', 0, 1, 0, 0));
    },'common'),
    'runningshoes':new ShopItem('running shoes','runningshoes','feet','(+15 speed shoes)', 14, 0, function(){
        g.p.inv.feet.push(new Equippable(true, true, 'running shoes', 'feet', 'shoes', 0, 0, 0, 15));
    },'common'),
    'walkingbeets':new ShopItem('walking beets','walkingbeets','feet','(+2 armor +2 dmg feet)', 38, 0, function(){
        g.p.inv.feet.push(new Equippable(true, true, 'walking beets', 'feet', 'misc', 2, 2, 0, 0));
    },'common'),
    'soccercleats':new ShopItem('soccer cleats','soccercleats','feet','(+3 dmg +10 speed shoes)', 45, 0, function(){
        g.p.inv.feet.push(new Equippable(true, true, 'soccer cleats', 'feet', 'shoes', 3, 0, 0, 10));
    },'common'),
    'hikingshoes':new ShopItem('hiking shoes', 'hikingshoes','feet','(+3 armor shoes)', 32, 0, function(){
        g.p.inv.feet.push(new Equippable(true, true, 'hiking shoes', 'feet', 'shoes', 0, 3, 0, 0));
    },'common'),
    'workboots':new ShopItem('work boots', 'workboots','feet','(+4 armor -10 speed boots)', 29, 0, function(){
        g.p.inv.feet.push(new Equippable(true, true, 'work boots', 'feet', 'boots', 0, 4, 0, -10));
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
        g.p.regen+=1;
    },'common'),
    'strawberry':new ShopItem('strawberry','strawberry','statUp','(+2 max hp +1 regen)', 18, 0, function(){
        g.p.maxhp+=5;
        g.p.hp+=5;
    },'common'),
    'icecube':new ShopItem('ice cube','icecube','statUp','(heal 10 on purchase)',4,0,function(){
        g.p.gainHp(10);
    },'common'),
    'waterbottle':new ShopItem('water bottle','waterbottle','statUp','(+3 level heal)',10, 0, function(){
        g.p.levelheal+=3;
    },'common'),
    'morselofmeat':new ShopItem("morsel o' meat",'morselofmeat','statUp','(+1 dmg +1 armor)',24, 0, function(){
        g.p.dmg+=1;
        g.p.arm+=1;
    },'common'),
    'honeycomb':new ShopItem("honey comb",'honeycomb','statUp','(+12 max hp)',21, 0, function(){
        g.p.maxhp+=12;
        g.p.hp+=12;
    },'common'),
    'beefstew':new ShopItem("beef stew",'beefstew','statUp','(+8 max hp + full heal)',26, 0, function(){
        g.p.maxhp+=8;
        g.p.gainHp('max');
    },'common'),
    'artichoke':new ShopItem("artichoke",'artichoke','statUp','(+1 armor)',20, 0, function(){
        g.p.arm+=1;
    },'common'),
    'dragonfruit':new ShopItem("dragonfruit",'dragonfruit','statUp','(+1 armor +1 regen)',38, 0, function(){
        g.p.arm+=1;
        g.p.regen+=1;
    },'common'),
    'cheeseburger':new ShopItem("cheese burger",'cheeseburger','statUp','(+5 max hp +1 dmg +1 regen +3 speed)',38, 0, function(){
        g.p.maxhp+=5;
        g.p.hp+=5;
        g.p.dmg+=1;
        g.p.regen+=1;
        g.p.asLvl+=3;
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