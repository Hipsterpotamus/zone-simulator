//zone conventions:

//grasslands -> wooden and stone, all basic stats +dodge
//forest -> copper and bronze, +shatter +lifedrain 
//beach -> iron and steel, +bleed +accuracy +thorn


const ITEMLIST = {
    //equippable 
    //name : [price, shopDesc, metatype, [type, damage, armor, regen, attackSpeedChange, complexStats]]
    'branch': [5, '(2 dmg -12 speed sword)', 'weapon', ['sword', 2, 0, 0, -12]],
    'thistle knife': [6, '(1 dmg +30 speed knife)', 'weapon', ['knife', 1, 0, 0, 30]],
    'small dagger': [5, '(3 dmg knife)', 'weapon', ['knife', 3, 0, 0, 0]],
    'broom': [5, '(4 dmg -10 speed club)', 'weapon', ['club', 4, 0, 0, -10]],
    'grass whip': [15, '(2 dmg +40 speed whip)', 'weapon', ['whip', 2, 0, 0, 40]],
    'wooden sword': [12, '(6 dmg -15 speed sword)', 'weapon', ['sword', 6, 0, 0, -15]],
    'bristly twig': [13, '(5 dmg +20 speed -1 regen whip)', 'weapon', ['whip', 5, 0, -1, 20]],
    'wooden axe': [21, '(14 dmg -100 speed axe)', 'weapon', ['axe', 14, 0, 0, -100]],
    'thick rod': [18, '(8 dmg club)', 'weapon', ['club', 8, 0, 0, 0]],
    'cobblestone sword': [24, '(11 dmg sword)', 'weapon', ['sword', 11, 0, 0, 0]],
    'rock on stick': [19, '(7 dmg +1 armor club)', 'weapon', ['club', 7, 1, 0, 0]],
    'boxing gloves': [19, '(2 dmg +2 armor +2 speed gloves)', 'weapon', ['gloves', 2, 2, 0, 2]],
    'stone short sword': [15, '(4 dmg +12 speed sword)', 'weapon', ['sword', 4, 0, 0, 12]],
    'stone long sword': [22, '(8 dmg +1 armor -12 speed sword)', 'weapon', ['sword', 8, 1, 0, -12]],
    'grass knuckles': [21, '(5 dmg +2 armor -1 regen +15 speed gloves)', 'weapon', ['gloves', 5, 2, -1, 15]],
    'glass bar': [30, '(4 dmg -1 armor +42 speed club)', 'weapon', ['club', 4, -1, 0, 42]],


    'grass hat': [7, '(1 armor hat)', 'head', ['hat', 0, 1, 0, 0]],
    'ballcap': [9, '(+7 speed hat)', 'head', ['hat', 0, 0, 0, 7]],
    'mud helmet': [21, '(2 armor helmet)', 'head', ['helmet', 0, 2, 0, 0]],
    'propeller hat': [16, '(1 armor +14 speed helmet)', 'head', ['hat', 0, 1, 0, 14]],
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
        g.player.changeMaxHp(5);
    }]],
    'red apple': [6, '(+6 max hp)', 'stat', [
    function(){
        g.player.changeMaxHp(6);
    }]],
    'chocolate bar': [10, '(-2 max hp +5 speed)', 'stat', [
    function(){
        g.player.changeMaxHp(-2);
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
        g.player.changeMaxHp(2);
        g.player.regen += 1;
    }]],
    'ice cube': [4, '(heal 10 on purchase)', 'stat', [
    function(){
        g.player.changeHp(10);
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
        g.player.changeMaxHp(12);
    }]],
    'beef stew': [26, '(+8 max hp + full heal)', 'stat', [
    function(){
        g.player.changeMaxHp(8);
        g.player.changeHp('max');
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
        g.player.changeMaxHp(5);
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
        g.player.changeMaxHp(14);
        g.player.aSLvl += 2;
    }]],
    'apricot': [18, '(+16 max hp -2 speed)', 'stat', [
    function(){
        g.player.changeMaxHp(16);
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
  'firecracker': [5, '(item: deal 20 dmg, lose 2 hp)', 'usable', ['combat', 'During combat, use to deal 20 damage (bypasses armor) to the current enemy, lose 2 hp', 1, 
    function(){
        g.cEnemy.changeHp(-20);
        g.player.changeHp(-2);
  }]],
  
  'throwing eggs': [7, '(3x item: current enemy loses 3 armor)', 'usable', ['combat', "During combat, lower the current enemy's armor by 3", 3, 
    function(){
        g.cEnemy.arm -= 3;
  }]],
  
  'bandages': [9, '(4x item: heal 5 hp)', 'usable', ['all', "Heal 5", 4, 
    function(){
        g.player.changeHp(5);
  }]],
  
  'first aid kit': [8, '(item: heal 20)', 'usable', ['all', "Heal 20", 1, 
    function(){
        g.player.changeHp(20);
  }]],
  
  'sharpening stone': [26, '(3x item: +2 dmg on weapon)', 'usable', ['all', "Your currently equipped weapon gains +2 dmg", 3, 
    function(){
        g.player.getByType('weapon').dmg += 2;
        g.player.getByType('weapon').updateItemInfo();
  }]],




  // Forest Items
  //equippable 
  //name : [price, shopDesc, metatype, [type, damage, armor, regen, attackSpeedChange, complexStats]]

  'copper hand axe': [38, '(18 dmg +10 speed axe),', 'weapon',['axe', 18, 0, 0, 10]],
  'copper battle axe': [40, '(29 dmg +1 armor -50 speed +10 shatter axe),', 'weapon',['axe', 29, 1, 0, -50, {'shatter':10}]],
  'copper short sword': [26, '(13 dmg +18 speed sword),', 'weapon',['sword', 13, 0, 0, 18]],
  'copper long sword': [33, '(26 dmg +2 armor -36 speed sword),', 'weapon',['sword', 26, 2, 0, -36]],
  'bronze hand axe': [56, '(25 dmg +18 speed +5 shatter axe),', 'weapon',['axe', 25, 0, 0, 18, {'shatter':5}]],
  'bronze battle axe': [70, '(37 dmg +2 armor -50 speed +50 shatter axe),', 'weapon',['axe', 37, 2, 0, -50, {'shatter':50}]],
  'bronze short sword': [44, '(20 dmg +36 speed sword),', 'weapon',['sword', 20, 0, 0, 36]],
  'bronze long sword': [58, '(33 dmg +6 armor -40 speed sword),', 'weapon',['sword', 33, 6, 0, -40]],
  'bark bat': [29, '(22 dmg -30 speed club),', 'weapon',['club', 22, 0, 0, -30]],
  'elven gloves': [35, '(14 dmg +4 armor +1 regen +8 speed gloves),', 'weapon',['gloves', 14, 4, 1, 8]],
  'goblin claws': [37, '(26 dmg -2 regen +16 speed gloves),', 'weapon',['gloves', 26, 0, -2, 16]],
  'charcoal spear': [29, '(16 dmg +20 speed spear),', 'weapon',['spear', 16, 0, 0, 20]],
  'ornate dagger': [32, '(11 dmg +45 speed knife),', 'weapon',['knife', 11, 0, 0, 45]],
  'elven dagger': [58, '(22 dmg +2 regen +33 speed knife),', 'weapon',['knife', 22, 0, 2, 33]],
  'bark cleaver': [37, '(21 dmg -33 speed knife),', 'weapon',['knife', 21, 0, 0, -33]],
  'water oak staff': [50, '(31 dmg +2 armor +5 regen -120 speed staff),', 'weapon',['staff', 31, 2, 5, -120]],
  'dryad staff': [75, '(29 dmg +6 armor -10 speed +15 lifedrain staff),', 'weapon',['staff', 29, 6, 0, -10, {'lifedrain':15}]],
  'leaf-rope whip': [31, '(12 dmg +1 armor +35 speed whip),', 'weapon',['whip', 12, 1, 0, 35, {'lifedrain':15}]],
  'elf whip': [65, '(24 dmg +2 regen +30 speed +16 dodge whip),', 'weapon',['whip', 24, 0, 2, 30, {'dodge':16}]],
  'dryad sleeve': [70, '(20 dmg +4 regen +15 speed +16 dodge +15 lifedrain gloves),', 'weapon',['gloves', 20, 0, 4, 15, {'dodge':16,'lifedrain':15}]],


  'leather cap': [36, '(3 armor hat)', 'head', ['hat', 0, 1, 0, 0]],
  'leaf beret': [22, '(1 armor +16 speed hat)', 'head', ['hat', 0, 0, 0, 7]],
  'bark helmet': [42, '(4 armor helmet)', 'head', ['helmet', 0, 4, 0, 0]],
  'forest turban': [33, '(3 armor -6 speed +8 lifedrain turban)', 'head', ['turban', 0, 3, 0, -6, {'lifedrain':8}]],
  'leaf headband': [27, '(+2 regen +6 dodge headband)', 'head', ['headband', 0, 0, 2, 0, {'dodge':6}]],
  'elven visor': [31, '(+4 regen +5 speed hat)', 'head', ['hat', 0, 0, 4, 5]],
  'crystal headdress': [52, '(+4 armor +3 dmg +3 regen -20 speed headband)', 'head', ['headband',3, 4, 3, -20]],
  'dryad bonnet': [52, '(+2 armor +8 dodge hat)', 'head', ['hat',2, 0, 0, 0, {'dodge':8}]],
  'pinecone helmet': [43, '(+4 armor +1 regen -5 speed helmet)', 'head', ['helmet',0, 4, 0, -5]],
  'wrapped snake': [62, '(+5 dmg +15 lifedrain turban)', 'head', ['turban',5, 0, 0, 0,{'lifedrain':15}]],


  'copper chestplate': [51, '(8 armor -12 speed chestplate)', 'chest', ['chestplate', 0, 8, 0, -12]],
  'bronze chestplate': [63, '(10 armor -8 speed chestplate)', 'chest', ['chestplate', 0, 10, 0, -8]],
  'bark chestplate': [43, '(12 armor -40 speed chestplate)', 'chest', ['chain mail', 0, 12, 0, -40]],
  'elven robes': [49, '(2 armor +2 regen +22 speed +5 dodge robe)', 'chest', ['robe', 0, 2, 2, 22, {'dodge':5}]],
  'wolf pelt': [68, '(+25 speed chest)', 'chest', ['misc', 0, 0, 0, 25]],
  'dryad coat': [57, '(6 armor +8 lifedrain coat)', 'chest', ['coat', 0, 6, 0, 0,{'lifedrain':8}]],
  'razor leaf coat': [60, '(+5 armor +5 dmg -5 speed coat)', 'chest', ['coat', 5, 5, 0, -5]],
  'goblin garment': [46, '(2 armor +5 dmg +10 speed shirt)', 'chest', ['shirt', 5, 2, 0, 10]],
  'sewed leaf shirt': [35, '(5 armor +8 speed shirt)', 'chest', ['shirt', 0, 5, 0, 8]],
  'pinecone chain mail': [50, '(8 armor +1 regen -16 speed chain mail)', 'chest', ['chain mail', 0, 8, 1, -12]],
  
  'copper leggings': [47, '(6 armor -10 speed leggings)', 'legs', ['leggings', 0, 6, 0, -10]],
  'bronze leggings': [59, '(8 armor -7 speed leggings)', 'legs', ['leggings', 0, 8, 0, -7]],
  'leafy pants': [36, '(5 armor pants)', 'legs', ['pants', 0, 5, 0, 0]],
  'bark shinguards': [42, '(7 armor -20 speed leggings)', 'legs', ['leggings', 0, 7, 0, -20]],
  'elven skirt': [39, '(4 armor +1 regen +12 speed leggings)', 'legs', ['skirt', 0, 4, 1, 12]],
  'dryad stockings': [45, '(3 armor +3 regen +6 lifedrain legs)', 'legs', ['misc', 0, 3, 3, 0,{'lifedrain':6}]],
  'goblin skin-leggings': [50, '(2 armor +4 dmg +12 speed legs)', 'legs', ['misc', 4, 2, 0, 12]],
  'camouflage pants': [38, '(3 armor +1 dmg +1 regen +5 dodge pants)', 'legs', ['pants', 1, 3, 1, 0,{'dodge':5}]],
  'pineneedle pants': [42, '(8 armor +2 regen -12 speed pants)', 'legs', ['pants', 0, 8, 2, -12]],

  'forest sandals': [32, '(4 armor -5 speed sandals)', 'feet', ['sandals', 0, 4, 0, -5]],
  'leather boots': [44, '(5 armor +2 speed boots)', 'feet', ['boots', 0, 5, 0, 2]],
  'steel-toed boots': [42, '(4 armor +2 dmg boots)', 'feet', ['boots', 2, 4, 0, 0]],
  'bark clogs': [48, '(7 armor +1 regen -20 speed shoes)', 'feet', ['shoes', 0, 7, 1, -20]],
  'bronze boots': [50, '(6 armor +5 speed boots)', 'feet', ['boots', 0, 6, 0, 5]],
  'goblin loafers': [50, '(3 armor +3 dmg +10 speed boots)', 'feet', ['shoes', 3, 3, 0, 10]],
  'elven shoes': [41, '(4 armor +10 speed +8 dodge boots)', 'feet', ['shoes', 0, 4, 0, 10, {'dodge':8}]],
  'dryad boots': [58, '(6 armor +2 regen +5 speed +8 lifesteal boots)', 'feet', ['boots', 0, 6, 2, 5, {'lifedrain':8}]],
  'hollowed out fish': [41, '(5 armor +4 regen -12 speed feet)', 'feet', ['misc', 0, 5, 4, -12]],
  'locust wrap feet': [32, '(3 armor +2 regem +5 speed feet)', 'feet', ['misc', 0, 3, 2, 5]],
  'maple leef sandals': [27, '(4 armor +2 lifedrain sandals)', 'feet', ['sandals', 0, 4, 0, 0, {'lifedrain':2}]],
  'hardened sap shoes': [53, '(9 armor -30 speed shoes)', 'feet', ['shoes', 0, 9, 0, -30]],
}