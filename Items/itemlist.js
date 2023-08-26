//zone conventions:

//grasslands -> wooden and stone, all basic stats +dodge, mostly animals
//forest -> copper and bronze, +shatter +lifedrain, elf-dryad-goblin
//beach -> iron and steel, +bleed +accuracy +thorn, pirate-mermaid-crabwalkers-turtlemen


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
    'wooden axe': [24, '(20 dmg -100 speed axe)', 'weapon', ['axe', 18, 0, 0, -100]],
    'thick rod': [18, '(8 dmg club)', 'weapon', ['club', 8, 0, 0, 0]],
    'cobblestone sword': [28, '(11 dmg sword)', 'weapon', ['sword', 11, 0, 0, 0]],
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
    'animal pelt': [14, '(+1 regen +8 speed)', 'chest', ['misc', 0, 0, 1, 8]],

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
    function(game){
        game.player.changeMaxHp(5);
    }]],
    'red apple': [6, '(+6 max hp)', 'stat', [
    function(game){
        game.player.changeMaxHp(6);
    }]],
    'chocolate bar': [10, '(-2 max hp +5 speed)', 'stat', [
    function(game){
        game.player.changeMaxHp(-2);
        game.player.changeStat('as', 5);
    }]],
    'protein shake': [10, '(+1 dmg)', 'stat', [
    function(game){
        game.player.changeStat('dmg', 1);
    }]],
    'grapefruit': [14, '(+1 regen)', 'stat', [
    function(game){
        game.player.changeStat('regen', 1);
    }]],
    'strawberry': [18, '(+2 max hp +1 regen)', 'stat', [
    function(game){
        game.player.changeMaxHp(2);
        game.player.changeStat('regen', 1);
    }]],
    'ice cube': [4, '(heal 10 on purchase)', 'stat', [
    function(game){
        game.player.changeHp(10);
    }]],
    'water bottle': [10, '(+3 level heal)', 'stat', [
    function(game){
        game.player.changeStat('levelheal', 3);
    }]],
    "morsel o' meat": [24, '(+1 dmg +1 armor)', 'stat', [
    function(game){
        game.player.changeStat('dmg', 1);
        game.player.changeStat('arm', 1);
    }]],
    'honey comb': [21, '(+12 max hp)', 'stat', [
    function(game){
        game.player.changeMaxHp(12);
    }]],
    'beef stew': [26, '(+8 max hp + full heal)', 'stat', [
    function(game){
        game.player.changeMaxHp(8);
        game.player.changeHp('max');
    }]],
    'artichoke': [20, '(+1 armor)', 'stat', [
    function(game){
        game.player.changeStat('arm', 1);
    }]],
    'dragonfruit': [38, '(+1 armor +1 regen)', 'stat', [
    function(game){
        game.player.changeStat('arm', 1);
        game.player.changeStat('regen', 1);
    }]],
    'cheese burger': [38, '(+5 max hp +1 dmg +1 regen +3 speed)', 'stat', [
    function(game){
        game.player.changeMaxHp(5);
        game.player.changeStat('dmg', 1);
        game.player.changeStat('regen', 1);
        game.player.changeStat('as', 3);
    }]],
    'leaflet scarf': [15, '(+4% dodge)', 'stat', [
    function(game){
        game.player.changeStat('dodge', 4);
    }]],
    'banana': [18, '(+14 max hp +2 speed)', 'stat', [
    function(game){
        game.player.changeMaxHp(14);
        game.player.changeStat('as', 2);
    }]],
    'apricot': [18, '(+16 max hp -2 speed)', 'stat', [
    function(game){
        game.player.changeMaxHp(16);
        game.player.changeStat('as', -2);
    }]],
    'small bond': [10, '(+1 income)', 'stat', [
    function(game){
        game.player.changeStat('income', 1);
    }]],
    'pamphlet': [20, '(+1 income +1 regen)', 'stat', [
    function(game){
        game.player.changeStat('income', 1);
        game.player.changeStat('regen', 1);
    }]],
    'blue rock': [12, '(+5 max mana)', 'stat', [
    function(game){
        game.player.changeStat('maxMana', 5);
    }]],
    'magic charm': [18, '(+1 mana gen)', 'stat', [
    function(game){
        game.player.changeStat('manaGen', 1);
    }]],
    'tiny gold rune': [27, '(+1 income +1 mana gen)', 'stat', [
    function(game){
        game.player.changeStat('income', 1);
        game.player.changeStat('manaGen', 1);
    }]],

  //usable
  //name : [price, shopDesc, metatype, [type, usableDesc, onUse, complexStats]]
  'firecracker': [5, '(item: deal 20 dmg, lose 2 hp)', 'usable', ['combat', 'During combat, use to deal 20 damage (bypasses armor) to the current enemy, lose 2 hp', 1, 
    function(game){
        game.combat.enemy.changeHp(-20);
        game.player.changeHp(-2);
  }]],
  
  'throwing eggs': [7, '(3x item: current enemy loses 3 armor)', 'usable', ['combat', "During combat, lower the current enemy's armor by 3", 3, 
    function(game){
        game.combat.enemy.arm -= 3;
  }]],
  
  'bandages': [9, '(4x item: heal 5 hp)', 'usable', ['all', "Heal 5", 4, 
    function(game){
        game.player.changeHp(5);
  }]],
  
  'first aid kit': [8, '(item: heal 20)', 'usable', ['all', "Heal 20", 1, 
    function(game){
        game.player.changeHp(20);
  }]],
  
  'sharpening stone': [26, '(3x item: +2 dmg on weapon)', 'usable', ['all', "Your currently equipped weapon gains +2 dmg", 3, 
    function(game){
        game.player.getByType('weapon').changeStat('dmg', 2);
  }]],
  
  
  // magic : [price, shopDesc, metatype, [type, shortDescription, longDescription, manaCost, spell, coolDown, usesFinite, complexStats]]


  'shock': [25, '(spell: 12 mana -> deal 10 dmg)', 'magic', ['electric','hit','deal 10 dmg','Deal 10 dmg to the current enemy. Does not bypass armor or dodge. Infinite uses', 12, function(game){
        game.combat.enemy.receiveNonHitDmg(10,game.player);
  }, 0, 0]],
  'growth spurt': [30, '(spell: 15 mana -> gain 3 max hp)', 'magic', ['plant','buff','gain 3 max hp','Gain 3 max hp, includes gain of 3 hp. Infinite uses', 15, function(game){
        game.player.changeMaxHp(3);
  }, 0, 0]],
  'blood splash': [18, '(spell: 8 mana -> heal 4)', 'magic', ['blood','heal','heal 4','Gain 4 hp, does not go over max hp. Infinite uses', 8, function(game){
        game.player.changeHp(4);
  }, 0, 0]],
  'grass disarm': [18, '(spell: 5 mana -> remove 1 enemy armor)', 'magic', ['plant','debuff','enemy loses one armor','Enemy receives -1 armor, can go negative. Does not interact with shatter. Infinite uses', 5, function(game){
        game.combat.enemy.changeStat('arm',-1);
  }, 0, 0]],
  'blood let': [38, '(spell: 15 mana -> lose 10 hp, +1 dmg, +1 armor)', 'magic', ['blood','buff','lose 10 hp, +1 dmg, +1 armor','Lose 10 hp, gain a permanent stat buff of +1 dmg and +1 armor. Infinite uses', 15, function(game){
        game.player.changeHp(-10);
        game.player.changeStat('dmg', 1);
        game.player.changeStat('arm', 1);
  }, 0, 0]],
  'chill': [26, '(spell: 10 mana -> enemy loses 5 attack speed)', 'magic', ['ice','debuff','enemy loses 5 attack speed','Enemy receives -5 attack speed. Infinite uses', 10, function(game){
        game.combat.enemy.changeStat('as',-5);
  }, 0, 0]],



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
  'water oak staff': [50, '(31 dmg +2 armor +3 regen -120 speed +1 mana gen staff),', 'weapon',['staff', 31, 2, 3, -120, {'manaGen':1}]],
  'dryad staff': [75, '(29 dmg +6 armor -40 speed +15 lifedrain +1 mana gen staff),', 'weapon',['staff', 29, 6, 0, -40, {'lifedrain':15,'manaGen':1}]],
  'leaf-rope whip': [31, '(12 dmg +1 armor +35 speed whip),', 'weapon',['whip', 12, 1, 0, 35, {'lifedrain':15}]],
  'elf whip': [65, '(24 dmg +2 regen +30 speed +16 dodge whip),', 'weapon',['whip', 24, 0, 2, 30, {'dodge':16}]],
  'dryad sleeve': [70, '(20 dmg +4 regen +15 speed +16 dodge +15 lifedrain gloves),', 'weapon',['gloves', 20, 0, 4, 15, {'dodge':16,'lifedrain':15}]],


  'leather cap': [36, '(3 armor hat)', 'head', ['hat', 0, 3, 0, 0]],
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
  'locust wrap feet': [32, '(3 armor +2 regen +5 speed feet)', 'feet', ['misc', 0, 3, 2, 5]],
  'maple leef sandals': [27, '(4 armor +2 lifedrain sandals)', 'feet', ['sandals', 0, 4, 0, 0, {'lifedrain':2}]],
  'hardened sap shoes': [53, '(9 armor -30 speed shoes)', 'feet', ['shoes', 0, 9, 0, -30]],

  //stat 
  //name : [price, shopDesc, metatype, [onUse, complexStats]]
  'shiny apple': [27, '(+30 max hp)', 'stat', [
  function(game){
      game.player.changeMaxHp(30);
  }]],
  'dark red apple': [25, '(+25 max hp, heal 3 on purchase)', 'stat', [
  function(game){
      game.player.changeMaxHp(25);
      game.player.changeHp(3);
  }]],
  'white chocolate bar': [18, '(-6 max hp +9 speed)', 'stat', [
  function(game){
      game.player.changeMaxHp(-6);
      game.player.changeStat('as', 9);
  }]],
  'milk': [15, '(+2 dmg)', 'stat', [
  function(game){
        game.player.changeStat('dmg', 2);
  }]],
  'water canteen': [22, '(+8 level heal)', 'stat', [
  function(game){
      game.player.changeStat('levelheal', 8);
  }]],
  'bass fish': [16, '(+4 max hp +2 dmg)', 'stat', [
  function(game){
      game.player.changeMaxHp(4);
      game.player.changeStat('dmg', 2);
  }]],
  'cat fish': [16, '(+4 max hp +5 speed)', 'stat', [
  function(game){
      game.player.changeMaxHp(4);
      game.player.changeStat('stat', 5);
  }]],
  'perch fish': [16, '(+4 max hp +2 armor)', 'stat', [
  function(game){
      game.player.changeMaxHp(4);
      game.player.changeStat('arm', 2);
  }]],
  'trout': [16, '(+4 max hp +1 regen)', 'stat', [
  function(game){
      game.player.changeMaxHp(4);
      game.player.changeStat('regen', 1);
  }]],
  'salmon': [16, '(+4 max hp +3 level heal)', 'stat', [
  function(game){
      game.player.changeMaxHp(4);
      game.player.changeStat('levelheal', 3);
  }]],
  'blood acorn': [29, '(+3 lifedrain +2 level heal)', 'stat', [
  function(game){
      game.player.changeStat('lifedrain', 3);
      game.player.changeStat('levelheal', 2);
  }]],
  'elven trinket': [21, '(+3 dodge)', 'stat', [
  function(game){
      game.player.changeStat('dodge, 3');
  }]],
  'sluggish mushrooms': [31, '(+40 max hp -10 speed)', 'stat', [
  function(game){
      game.player.changeMaxHp(40);
      game.player.changeStat('as', -10);
  }]],
  'pinecone pudding': [31, '(+25 max hp +8 level heal)', 'stat', [
  function(game){
      game.player.changeMaxHp(25);
      game.player.changeStat('levelheal', 8);
  }]],
  'heal ointment': [34, '(+12 level heal)', 'stat', [
  function(game){
      game.player.changeStat('levelheal', 12);
  }]],
  'cooked chicken': [25, '(+8 max hp +4 shatter)', 'stat', [
  function(game){
      game.player.changeMaxHp(8);
      game.player.changeStat('shatter', 4);
  }]],
  'battle blood': [45, '(+5 dmg +10 shatter)', 'stat', [
  function(game){
      game.player.changeStat('dmg', 5);
      game.player.changeStat('shatter', 10);
  }]],
  'bucket of ice': [22, '(heal 30 on purchase)', 'stat', [
  function(game){
      game.player.changeHp(30);
  }]],
  'carrot': [36, '(+3 regen +3 speed)', 'stat', [
  function(game){
      game.player.changeStat('regen', 3);
      game.player.changeStat('as', 3);
  }]],
  'medium bond': [25, '(+2 income)', 'stat', [
  function(game){
      game.player.changeStat('income', 2);
  }]],
  'golden fish': [45, '(+25 max hp +1 income)', 'stat', [
  function(game){
      game.player.changeMaxHp(25);
      game.player.changeStat('income', 1);
  }]],
  'bark pamphlette': [40, '(+2 regen +2 income)', 'stat', [
  function(game){
      game.player.changeStat('regen', 2);
      game.player.changeStat('income', 2);
  }]],
  'small gold rune': [45, '(+2 income +1 mana gen)', 'stat', [
  function(game){
      game.player.changeStat('income', 2);
      game.player.changeStat('manaGen', 1);
  }]],
  'charcoal tonic': [36, '(+1 mana gen +2 armor)', 'stat', [
  function(game){
      game.player.changeStat('manaGen', 1);
      game.player.changeStat('arm', 2);
  }]],
  'dryad scrap': [20, '(+8 max mana -3 speed)', 'stat', [
  function(game){
      game.player.changeStat('maxMana', 8);
      game.player.changeStat('as', -3);
  }]],
  'transfixed sap': [33, '(+18 max hp +5 max mana)', 'stat', [
  function(game){
      game.player.changeMaxHp(18);
      game.player.changeStat('maxMana', 5);
  }]],

  //usable
  //name : [price, shopDesc, metatype, [type, usableDesc, onUse, complexStats]]
  'goblin bomb': [20, '(item: deal 50 dmg to non-goblin. gain 5 gold)', 'usable', ['combat', 'During combat, use to deal 50 dmg (bypasses armor) to the current enemy. If the current enemy is of the goblin type, instead deal 0 damage. Gain 5 gold', 1, 
    function(game){
        if(game.combat.enemy.type != 'goblin'){
          game.combat.enemy.changeHp(-50);
        }
        game.player.changeGold(5);
  }]],
  'dryad throwing leaves': [28, '(4x item: deal 10 dmg, heal 10)', 'usable', ['combat', "During combat, deal 10 dmg to an enemy (bypasses armor), and heal 10", 4,
  function(game){
    game.combat.enemy.changeHp(-10);
    game.player.changeHp(10);
  }]],
  'elf bandages': [35, '(15x item: heal 10 hp)', 'usable', ['all', "Heal 10", 15, 
  function(game){
      game.player.changeHp(10);
  }]],
  'elven battle book': [18, '(item: if enemy has lower attackspeed, gain 3% dodge permanetly)', 'usable', ['combat', "During combat, if enemy has a lower total attackspeed than you, gain 3% permanent dodge", 1, 
  function(game){
      if(game.combat.enemy.calcAs()<game.player.calcAs()){
        game.player.changeStat('dodge', 3);
      }
  }]],
  'dryad battle book': [22, '(item: if enemy has a higher attackspeed, gain 3% lifedrain permanetly)', 'usable', ['combat', "During combat, if enemy has a higher total attackspeed than you, gain 3% permanent lifedrain", 1, 
    function(game){
        if(game.combat.enemy.calcAs()<game.player.calcAs()){
          game.player.changeStat('lifedrain', 3);
        }
  }]],
  'goblin sacks': [30, '(4x item: gain 20% of enemy gold payout)', 'usable', ['combat', "During combat, gain 20% of the current enemy's gold pay out", 4, 
    function(game){
        game.player.changeGold(Math.floor(game.combat.enemy.gold*0.2));
  }]],
  'dryad berries': [41, '(4x item: heal 15 hp and gain 1 regen permantely)', 'usable', ['all', "Heal 15 hp and gain 1 regen permanetly",4, 
    function(game){
        game.player.changeHp(15);
        game.player.changeStat('regen', 1);
  }]],
  'pine needle attachments': [58, '(4x item: +5 dmg on weapon)', 'usable', ['all', "Your currently equipped weapon gains +5 dmg", 4, 
  function(game){
      game.player.getByType('weapon').changeStat('dmg', 5);
  }]],
  'pine cone attachments': [62, '(5x item: +3 shatter on weapon)', 'usable', ['all', "Your currently equipped weapon gains +3 shatter", 5, 
  function(game){
      game.player.getByType('weapon').changeStat('shatter', 3);
  }]],
  'elven nectar': [45, '(2x item: remove all shatter applied by opponent)', 'usable', ['combat', "During combat, all armor you have lost due to your opponent's shatter this combat is removed. However, more shatter can still be gained", 2, 
  function(game){
      game.player.changeStat('shatterApplied', -game.player.shatterApplied)
  }]],
  'dryad root potion': [70, '(item: current enemy armor doubles, but their attack speed halves)', 'usable', ['combat', "During combat, the enemy's base armor grows by the amount of effective armor they currently have (armor - shatter applied). Their attackspeed is set to half.", 1, 
  function(game){
      if(game.combat.enemy.calcStat('arm')<0){
        game.combat.enemy.arm+=game.combat.enemy.calcStat('arm')
      }else{
        game.combat.enemy.arm += Math.max(game.combat.enemy.calcStat('arm')-game.combat.enemy.shatterApplied, 0)
      }
  }]],

  //magic
  // magic : [price, shopDesc, metatype, [type, shortDescription, longDescription, manaCost, spell, coolDown, usesFinite, complexStats]]

  'spirit invocation': [25, '(spell: 15 mana -> gain 5 max mana)', 'magic', ['spirit','buff','gain 5 max mana','Gain 5 max mana permanently, does not come with 3 mana on use. Infinite uses', 15, function(game){
      game.player.changeStat('maxMana', 5);
  }, 0, 0]],
  'goblin fire dance': [36, '(spell: 15 mana -> you & enemy lose 10 hp. +2 dmg, enemy -2 dmg)', 'magic', ['fire','buff','you & enemy lose 10 hp. you gain +2 dmg, and enemy loses 2 dmg','Deal 10 dmg to the current enemy and yourself (bypasses armor and dodge). You gain a permanent +2 dmg increase as does the current enemy. Infinite uses', 15, function(game){
      game.player.changeHp(-10);
      game.combat.enemy.changeHp(-10);
      game.player.changeStat('dmg', 2);
      game.combat.enemy.changeStat('dmg', -2);
  }, 0, 0]],
  'grass overgrowth': [26, '(spell: 20 mana -> +3 max hp +1 armor -1 speed)', 'magic', ['plant', 'buff','gain 3 max hp, 1 armor, and lose 1 attack speed','Permanently gain 3 max hp, 1 armor, and permanently lose 1 attack speed. Infinite uses', 20, function(game){
      game.player.changeMaxHp(3);
      game.player.changeStat('arm', 1);
      game.player.changeStat('as', -1);
  }, 0, 0]],
  'elf rumination': [31, '(spell: 10 mana -> +1 max hp heal 12)', 'magic', ['plant', 'heal', 'gain 1 max hp, heal 12','Permanently gain 1 max hp and gain this hp, heal 12. Infinite uses', 10, function(game){
      game.player.changeMaxHp(1);
      game.player.changeHp(12);
  }, 0, 0]],
  'dryad pose': [28, '(spell: 12 mana -> +1 armor +1 max mana)', 'magic', ['plant', 'buff', 'gain 1 armor and 1 max mana','Permanently gain 1 armor and 1 max mana. Infinite uses', 12, function(game){
      game.player.changeStat('arm', 1);
      game.player.changeStat('maxMana', 1);
  }, 0, 0]],
  'armor recover': [38, '(spell: 6 mana -> regain 4 armor lost from shatter)', 'magic', ['plant', 'status', 'regain 4 armor lost from shatter','Remove the effects of shatter for up to four armor lost. Does not go positive. Infinite uses', 6, function(game){
      game.player.shatterApplied -= 4;
      if(game.player.shatterApplied < 0){game.player.shatterApplied = 0;}
  }, 0, 0]],
  'daydream': [40, '(spell: 22 mana -> +1 to dmg, arm, regen, & speed)', 'magic', ['spirit', 'buff', '+1 to dmg, arm, regen, & speed','Permanently gain +1 dmg, +1 armor, +1 regen, and +1 attack speed. Infinite uses', 22, function(game){
      game.player.changeStat('dmg', 1);  
      game.player.changeStat('arm', 1);
      game.player.changeStat('regen', 1);
      game.player.changeStat('as', 1);
  }, 0, 0]],
  'rock drop': [38, '(spell: 15 mana -> deal 40 dmg)', 'magic', ['rock', 'status','deal 40 dmg','Deal 40 dmg to the current enemy. Does not bypass armor or dodge. Infinite uses', 15, function(game){
      game.combat.enemy.receiveNonHitDmg(40, game.player);
  }, 0, 0]],



   //BEACH

   //WEAPONS


  'iron short sword': [62, '(28 dmg +22 speed sword)','weapon',['sword',28,0,0,22]],
  'iron long sword': [85, '(51 dmg +9 armor -40 speed sword)','weapon',['sword',51,9,0,-40]],
  'iron hand axe': [85, '(34 dmg +18 speed +15 shatter axe)','weapon',['axe',34,0,0,18,{'shatter':15}]],
  'iron battle axe': [109, '(59 dmg +5 armor -50 speed +90 shatter axe)','weapon',['axe',59,5,0,-50,{'shatter':90}]],
  'iron sabre': [78, '(25 dmg +35 speed +5 bleed sword)', 'weapon', ['sword', 25, 0, 0, 35, {'bleed':5}]],
  'iron trident': [81, '(38 dmg +3 armor -35 speed 35 bleed spear)', 'weapon', ['spear', 38, 3, 0, -35, {'bleed':35}]],
  'steel short sword': [93, '(38 dmg +20 speed sword)','weapon',['sword',38,0,0,20]],
  'steel long sword': [126, '62 dmg +12 armor -30 speed sword)','weapon',['sword',62,12,0,-30]],
  'steel hand axe': [129, '49 dmg +18 speed +25 shatter axe)','weapon',['axe',49,0,0,18,{'shatter':25}]],
  'steel battle axe': [171, '(130 dmg +7 armor -60 speed +120 shatter axe)','weapon',['axe',130,7,0,-60,{'shatter':120}]],
  'steel sabre': [120, '(37 dmg +35 speed +8 bleed sword)', 'weapon', ['sword', 37, 0, 0, 35, {'bleed':8}]],
  'steel trident': [136, '(72 dmg +4 armor -45 speed 55 bleed spear)', 'weapon', ['spear', 72, 4, 0, -45, {'bleed':55}]],
  'coral mace': [76, '(38 dmg -38 speed +2 regen +14 shatter club)', 'weapon', ['club', 38, 0, 2, -38, {'shatter':14}]],
  'shark tooth dagger': [96, '(30 dmg +20 speed +15 bleed knife)', 'weapon', ['knife', 30, 0, 0, 20, {'bleed':15}]],
  'pirate cutlass': [148, '(40 dmg +25 speed +10 bleed +4 income sword)', 'weapon', ['sword', 27, 0, 0, 25, {'bleed':10,'income':4}]],
  'seaweed whip': [80, '(36 dmg +24 speed whip)', 'weapon', ['whip', 36, 0, 0, 24]],
  'pirate cannon': [225, '(300 dmg -400 speed +100 shatter weapon)', 'weapon', ['misc', 300, 0, 0, -400, {'shatter':100}]],
  'mermaid gloves': [130, '(60 dmg -20 speed +25 lifedrain gloves)', 'weapon', ['gloves', 60, 0, 0, -20, {'lifedrain':25}]],
  'crabwalker claws': [150, '(40 dmg +20 speed -5 regen +20 shatter +80 bleed gloves)', 'weapon', ['gloves', 40, 0, -5, 20, {'shatter':20,'bleed':80}]],
  'turtle shell club': [135, '(90 dmg -40 speed +10 shatter +20 lifedrain club)', 'weapon', ['club', 90, 0, 0, -40, {'lifedrain':20}]],
  'mermaid javelin': [160, '(120 dmg +4 armor -120 speed +25 lifedrain spear),','weapon',['spear',120,4,0,-120,{'lifedrain':25}]],
  'mermaid water-sling': [120, '(55 dmg -4 armor +20 speed +20 shatter +20 lifedrain spear),','weapon',['spear',55,-4,0,-120,{'shatter':20,'lifedrain':20}]],
  'turtle boomerang': [180, '(160 dmg +16 armor -100 speed +100 shatter boomerang),','weapon',['boomerang',160,16,0,-100,{'shatter':100}]],
  'driftwood club': [100, '(88 dmg -85 speed +25 shatter club)','weapon',['club',88,0,0,-85, {'shatter':25}]],

  'sailor cap': [60, '(5 armor hat)', 'head', ['hat', 0, 5, 0, 0]],
  'seashell beret': [40, '(2 armor +20 speed hat)', 'head', ['hat', 0, 2, 0, 20]],
  'coral helmet': [70, '(6 armor helmet)', 'head', ['helmet', 0, 6, 0, 0]],
  'pirate bandana': [55, '(4 armor -10 speed +10 lifedrain bandana)', 'head', ['bandana', 0, 4, 0, -10, {'lifedrain':10}]],
  'beach visor': [45, '(+3 regen +8 dodge visor)', 'head', ['visor', 0, 0, 3, 0, {'dodge':8}]],
  'mermaid tiara': [65, '(+5 regen +7 speed tiara)', 'head', ['tiara', 0, 0, 5, 7]],
  'shark fin hat': [88, '(+5 armor +4 dmg +4 regen -25 speed hat)', 'head', ['hat', 4, 5, 4, -25]],
  'crab shell bonnet': [70, '(+3 armor +10 thorn bonnet)', 'head', ['bonnet', 0, 3, 0, 0, {'thorn':10}]],
  'surfboard helmet': [72, '(+5 armor +2 regen +5 speed helmet)', 'head', ['helmet', 0, 5, 2, 5]],
  'fisherman hat': [82, '(+6 dmg +2 income)', 'head', ['hat', 6, 0, 0, 0, { 'income':2}]],

  'sailor uniform': [85, '(13 armor -15 speed uniform)', 'chest', ['uniform', 0, 13, 0, -15]],
  'beach robe': [65, '(3 armor +30 speed +5 dodge robe)', 'chest', ['robe', 0, 3, 0, 30, {'dodge':5}]],
  'sharkskin vest': [90, '(15 armor -20 speed +5 bleed vest)', 'chest', ['vest', 0, 15, 0, -20, {'bleed':5}]],
  'coral chestplate': [115, '(18 armor -50 speed +10 thorns chestplate)', 'chest', ['chestplate', 0, 18, 0, -50, {'thorn':10}]],
  'mermaid gown': [75, '(4 armor +3 regen +28 speed +7 dodge gown)', 'chest', ['gown', 0, 4, 3, 28, {'dodge':7}]],
  'dolphin leather jacket': [110, '(10 armor +35 speed +5 accuracy jacket)', 'chest', ['jacket', 0, 10, 0, 35, {'accuracy':5}]],
  'crab shell coat': [95, '(12 armor +12 lifedrain +5 thorn coat)', 'chest', ['coat', 0, 12, 0, 0, {'lifedrain':12, 'thorn':5}]],
  'seaweed wrap': [80, '(7 armor +6 dmg -8 speed +5 lifedrain wrap)', 'chest', ['wrap', 6, 7, 0, -8, {'lifedrain':5}]],
  'fisherman shirt': [78, '(8 armor +12 speed +3 income shirt)', 'chest', ['shirt', 0, 8, 0, 12, {'income':3}]],
  'surfboard chestplate': [105, '(14 armor +2 regen -20 speed +10 shatter chestplate)', 'chest', ['chestplate', 0, 14, 2, -20, {'shatter':10}]],

  'sailor trousers': [80, '(10 armor -15 speed trousers)', 'legs', ['trousers', 0, 10, 0, -15]],
  'beach shorts': [60, '(6 armor +18 speed +5 dodge shorts)', 'legs', ['shorts', 0, 6, 0, 18, {'dodge':5}]],
  'sharkskin leggings': [95, '(13 armor -25 speed +10 bleed leggings)', 'legs', ['leggings', 0, 13, 0, -25, {'bleed':10}]],
  'coral greaves': [100, '(15 armor -30 speed +15 shatter greaves)', 'legs', ['greaves', 0, 15, 0, -30, {'shatter':15}]],
  'mermaid tail': [70, '(5 armor +4 regen +25 speed +8 dodge tail)', 'legs', ['tail', 0, 5, 4, 25, {'dodge':8}]],
  'dolphin leather pants': [85, '(8 armor +35 speed +5 accuracy pants)', 'legs', ['pants', 0, 8, 0, 35, {'accuracy':5}]],
  'crab leg guards': [90, '(12 armor +10 lifedrain +10 thorn leg guards)', 'legs', ['leg guards', 0, 12, 0, 0, {'lifedrain':10, 'thorn':10}]],
  'seaweed wrap skirt': [75, '(8 armor +5 dmg -10 speed +5 lifedrain skirt)', 'legs', ['skirt', 5, 8, 0, -10, {'lifedrain':5}]],
  'fisherman overalls': [78, '(9 armor +10 speed overalls, +3 income)', 'legs', ['overalls', 0, 9, 0, 10, {'income':3}]],
  'surfboard leggings': [95, '(14 armor +3 regen -20 speed +10 shatter leggings)', 'legs', ['leggings', 0, 14, 3, -20, {'shatter':10}]],

  'flip-flops': [40, '(5 armor +10 speed sandals)', 'feet', ['sandals', 0, 5, 0, 10]],
  'water shoes': [52, '(6 armor +20 speed shoes)', 'feet', ['shoes', 0, 6, 0, 20]],
  'sharkskin boots': [70, '(8 armor +5 dmg +5 bleed boots)', 'feet', ['boots', 5, 8, 0, 0, {'bleed':5}]],
  'coral sandals': [60, '(9 armor -25 speed +10 shatter sandals)', 'feet', ['sandals', 0, 9, 0, -25, {'shatter':10}]],
  'surfboard shoes': [55, '(6 armor +30 speed shoes)', 'feet', ['shoes', 0, 6, 0, 30]],
  'pirate boots': [75, '(10 armor +5 speed +5 dodge +2 income boots)', 'feet', ['boots', 0, 10, 0, 5, {'dodge':5, 'income':2}]],
  'jellyfish slippers': [65, '(7 armor +15 speed +10 lifedrain slippers)', 'feet', ['slippers', 0, 7, 0, 15, {'lifedrain':10}]],
  'crab claw clogs': [80, '(12 armor -20 speed +15 thorn clogs)', 'feet', ['clogs', 0, 12, 0, -20, {'thorn':15}]],
  'seashell sandals': [70, '(8 armor +5 regen +10 accuracy sandals)', 'feet', ['sandals', 0, 8, 5, 0, {'accuracy':10}]],
  'fisherman waders': [68, '(9 armor +5 speed +3 income waders)', 'feet', ['waders', 0, 9, 0, 5, {'income':3}]],
  'dolphin fin flippers': [60, '(7 armor +40 speed +5 dodge flippers)', 'feet', ['flippers', 0, 7, 0, 40, {'dodge':5}]],
  'sunken treasure boots': [85, '(13 armor -30 speed +20 shatter +5 income boots)', 'feet', ['boots', 0, 13, 0, -30, {'shatter':20, 'income':5}]],
}