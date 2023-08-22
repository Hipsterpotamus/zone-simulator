const itemList = {
    //equippable 
    //name : [price, shopDesc, metatype, [type, damage, armor, regen, attackSpeedChange, complexStats]]
    'branch': [5, '(2 dmg -12 speed sword)', 'weapon', ['sword', 2, 0, 0, -12]],
    'thistle knife': [6, '(1 dmg +30 speed dagger)', 'weapon', ['knife', 1, 0, 0, 30]],
    'small dagger': [5, '(3 dmg dagger)', 'weapon', ['dagger', 3, 0, 0, 0]],
    'broom': [5, '(4 dmg -10 speed club)', 'weapon', ['club', 4, 0, 0, -10]],
    'grass whip': [15, '(2 dmg +40 speed whip)', 'weapon', ['whip', 2, 0, 0, 40]],
    'wooden sword': [12, '(6 dmg -15 speed sword)', 'weapon', ['sword', 6, 0, 0, -15]],
    'bristly twig': [13, '(5 dmg +20 speed -1 regen whip)', 'weapon', ['whip', 5, 0, -1, 20]],
    'wooden axe': [21, '(14 dmg -100 speed axe)', 'weapon', ['axe', 14, 0, 0, -100]],
    'thick rod': [18, '(8 dmg club)', 'weapon', ['club', 8, 0, 0, 0]],
    'cobblestone sword': [24, '(11 dmg sword)', 'weapon', ['sword', 11, 0, 0, 0]],
    'rock on stick': [19, '(7 dmg +1 armor club)', 'weapon', ['club', 7, 1, 0, 0]],
    'boxing gloves': [19, '(2 dmg +2 armor +2 speed gloves)', 'weapon', ['gloves', 2, 2, 0, 2]],
    'short sword': [15, '(4 dmg +12 speed sword)', 'weapon', ['sword', 4, 0, 0, 12]],
    'long sword': [22, '(8 dmg +1 armor -12 speed sword)', 'weapon', ['sword', 8, 1, 0, -12]],
    'grass knuckles': [21, '(5 dmg +2 armor -1 regen +15 speed gloves)', 'weapon', ['gloves', 5, 2, -1, 15]],
    'glass bar': [30, '(4 dmg -1 armor +42 speed club)', 'weapon', ['club', 4, -1, 0, 42]],
    'grass hat': [7, '(1 armor hat)', 'head', ['hat', 0, 1, 0, 0]],
    'ballcap': [9, '(+7 speed hat)', 'head', ['hat', 0, 0, 0, 7]],
    'mud helmet': [21, '(2 armor helmet)', 'head', ['helmet', 0, 2, 0, 0]],
    'propeller hat': [16, '(1 armor +14 speed helmet)', 'head', ['helmet', 0, 1, 0, 14]],
    'headband': [18, '(+1 regen headband)', 'head', ['helmet', 0, 0, 1, 0]],
    'cotton shirt': [5, '(1 armor shirt)', 'chest', ['shirt', 0, 1, 0, 0]],
    'grass robe': [9, '(+12 speed robe)', 'chest', ['robe', 0, 0, 0, 12]],
    'leather tunic': [14, '(+3 armor shirt)', 'chest', ['shirt', 0, 3, 0, 0]],
    'wooden chestplate': [28, '(+5 armor -25 speed chestplate)', 'chest', ['chestplate', 0, 5, 0, -25]],
    'animal pelt': [14, '(+1 regen +8 speed)', 'legs', ['misc', 0, 0, 1, 8]],
    'overalls': [6, '(1 armor pants)', 'legs', ['pants', 0, 1, 0, 0]],
    'grass skirt': [14, '(1 armor +6 speed skirt)', 'legs', ['skirt', 0, 1, 0, 6]],
    'hiking pants': [18, '(2 armor +2 speed pants)', 'legs', ['pants', 0, 2, 0, 2]],
    'basic shorts': [17, '(1 armor +5 speed shorts)', 'legs', ['shorts', 0, 1, 0, 5]],
    'hoola hoop': [27, '(+2 regen -22 speed legs)', 'legs', ['misc', 0, 0, 2, -22]],
    'jorts': [12, '(1 regen +5 speed shorts)', 'legs', ['shorts', 0, 0, 1, 5]],
    'straw shoes': [6, '(1 armor shoes)', 'feet', ['shoes', 0, 1, 0, 0]],
    'running shoes': [14, '(+15 speed shoes)', 'feet', ['shoes', 0, 0, 0, 15]],
    'walking beets': [38, '(+2 armor +2 dmg feet)', 'feet', ['misc', 2, 2, 0, 0]],
    'soccer cleats': [45, '(+3 dmg +10 speed shoes)', 'feet', ['shoes', 3, 0, 0, 10]],
    'hiking shoes': [32, '(+3 armor shoes)', 'feet', ['shoes', 0, 3, 0, 0]],
    'work boots': [29, '(+4 armor -10 speed boots)', 'feet', ['boots', 0, 4, 0, -10]],

    //stat 
    //name : [price, shopDesc, metatype, [onUse, complexStats]]
    'green apple': [5, '(+5 max hp)', 'stat', [
    function(){
        g.player.maxhp += 5;
        g.player.hp += 5;
    }]],
    'red apple': [6, '(+6 max hp)', 'stat', [
    function(){
        g.player.maxhp += 6;
        g.player.hp += 6;
    }]],
    'chocolate bar': [10, '(-2 max hp +5 speed)', 'stat', [
    function(){
        g.player.maxhp -= 2;
        g.player.hp -= 2;
        if(g.player.hp < 0){ playerDeath(); }
        g.player.aSLvl += 5;
    }]],
    'protein shake': [10, '(+1 dmg)', 'stat', [
    function(){
        g.player.dmg += 1;
    }]],
    'grapefruit': [14, '(+1 regen)', 'stat', [
    function(){
        g.player.regen += 1;
    }]],
    'strawberry': [18, '(+2 max hp +1 regen)', 'stat', [
    function(){
        g.player.maxhp += 2;
        g.player.hp += 2;
        g.player.regen += 1;
    }]],
    'ice cube': [4, '(heal 10 on purchase)', 'stat', [
    function(){
        g.player.gainHp(10);
    }]],
    'water bottle': [10, '(+3 level heal)', 'stat', [
    function(){
        g.player.changeLvlHeal(3);
    }]],
    "morsel o' meat": [24, '(+1 dmg +1 armor)', 'stat', [
    function(){
        g.player.dmg += 1;
        g.player.arm += 1;
    }]],
    'honey comb': [21, '(+12 max hp)', 'stat', [
    function(){
        g.player.maxhp += 12;
        g.player.hp += 12;
    }]],
    'beef stew': [26, '(+8 max hp + full heal)', 'stat', [
    function(){
        g.player.maxhp += 8;
        g.player.gainHp('max');
    }]],
    'artichoke': [20, '(+1 armor)', 'stat', [
    function(){
        g.player.arm += 1;
    }]],
    'dragonfruit': [38, '(+1 armor +1 regen)', 'stat', [
    function(){
        g.player.arm += 1;
        g.player.regen += 1;
    }]],
    'cheese burger': [38, '(+5 max hp +1 dmg +1 regen +3 speed)', 'stat', [
    function(){
        g.player.maxhp += 5;
        g.player.hp += 5;
        g.player.dmg += 1;
        g.player.regen += 1;
        g.player.aSLvl += 3;
    }]],
    'leaflet scarf': [15, '(+4% dodge)', 'stat', [
    function(){
        g.player.dodge += 4;
    }]],
    'banana': [18, '(+14 max hp +2 speed)', 'stat', [
    function(){
        g.player.maxhp += 14;
        g.player.hp += 14;
        g.player.aSLvl += 2;
    }]],
    'apricot': [18, '(+16 max hp -2 speed)', 'stat', [
    function(){
        g.player.maxhp += 16;
        g.player.hp += 16;
        g.player.aSLvl -= 2;
    }]],
    'bond': [10, '(+1 income)', 'stat', [
    function(){
        g.player.income += 1;
    }]],
    'pamphlet': [20, '(+1 income +1 regen)', 'stat', [
    function(){
        g.player.income += 1;
        g.player.regen += 1;
    }]],

  //usable
  //name : [price, shopDesc, metatype, [type, usableDesc, onUse, complexStats]]
  'firecracker': [5, '(item: deal 20 dmg, lose 2 hp)', 'usable', ['combat', 'During combat, use to deal 20 damage (bypasses armor) to the current enemy, lose 2 hp', 
    function(){
        g.cEnemy.hp -= 20;
        g.player.hp -= 2;
  }]],
  
  'throwing eggs': [7, '(3x item: current enemy loses 3 armor)', 'usable', ['combat', "During combat, lower the current enemy's armor by 3", 
    function(){
        g.cEnemy.arm -= 3;
  }]],
  
  'bandages': [9, '(4x item: heal 5 hp)', 'usable', ['all', "Heal 5", 
    function(){
        g.player.gainHp(5);
  }]],
  
  'first aid kit': [8, '(item: heal 20)', 'usable', ['all', "Heal 20", 
    function(){
        g.player.gainHp(20);
  }]],
  
  'sharpening stone': [26, '(3x item: +2 dmg on weapon)', 'usable', ['all', "Your currently equipped weapon gains +2 dmg", 
    function(){
        g.player.getByType('weapon').dmg += 2;
        g.player.getByType('weapon').updateItemInfo();
  }]]
}