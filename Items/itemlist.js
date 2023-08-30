//zone conventions:

//grasslands -> wooden and stone, all basic stats +dodge, mostly animals
//forest -> copper and bronze, +shatter +lifedrain, elf-dryad-goblin
//beach -> iron and steel, +bleed +accuracy +thorn, pirate-mermaid-crabwalkers-turtlemen


const ITEMLIST = {
//EQUIPPABLES

//equippable grasslands
    'branch': {'metatype': 'weapon', 'price': 5, 'type': 'sword', 'dmg': 2, 'as': -12},
    'thistle knife': {'metatype': 'weapon', 'price': 6, 'type': 'knife', 'dmg': 1, 'as': 60},
    'small dagger': {'metatype': 'weapon', 'price': 5, 'type': 'knife', 'dmg': 3},
    'broom': {'metatype': 'weapon', 'price': 5, 'type': 'club', 'dmg': 4, 'as': -10},
    'grass whip': {'metatype': 'weapon', 'price': 15, 'type': 'whip', 'dmg': 2, 'as': 80},
    'wooden sword': {'metatype': 'weapon', 'price': 12, 'type': 'sword', 'dmg': 6, 'as': -15},
    'bristly twig': {'metatype': 'weapon', 'price': 13, 'type': 'whip', 'dmg': 5, 'regen': -1, 'as': 40},
    'wooden axe': {'metatype': 'weapon', 'price': 24, 'type': 'axe', 'dmg': 18, 'as': -100},
    'thick rod': {'metatype': 'weapon', 'price': 18, 'type': 'club', 'dmg': 8},
    'cobblestone sword': {'metatype': 'weapon', 'price': 28, 'type': 'sword', 'dmg': 11},
    'rock on stick': {'metatype': 'weapon', 'price': 19, 'type': 'club', 'dmg': 7, 'arm': 1},
    'boxing gloves': {'metatype': 'weapon', 'price': 19, 'type': 'gloves', 'dmg': 2, 'arm': 2, 'as': 4},
    'stone short sword': {'metatype': 'weapon', 'price': 15, 'type': 'sword', 'dmg': 4, 'as': 24},
    'stone long sword': {'metatype': 'weapon', 'price': 22, 'type': 'sword', 'dmg': 8, 'arm': 1, 'as': -12},
    'grass knuckles': {'metatype': 'weapon', 'price': 21, 'type': 'gloves', 'dmg': 5, 'arm': 2, 'regen': -1, 'as': 30},
    'glass bar': {'metatype': 'weapon', 'price': 30, 'type': 'club', 'dmg': 4, 'arm': -1, 'as': 84},

    'grass hat': {'metatype': 'head', 'price': 7, 'type': 'hat', 'arm': 1},
    'ballcap': {'metatype': 'head', 'price': 9, 'type': 'hat', 'as': 14},
    'mud helmet': {'metatype': 'head', 'price': 21, 'type': 'helmet', 'arm': 2},
    'propeller hat': {'metatype': 'head', 'price': 16, 'type': 'hat', 'arm': 1, 'as': 28},
    'headband': {'metatype': 'head', 'price': 18, 'type': 'helmet', 'regen': 1},

    'cotton shirt': {'metatype': 'chest', 'price': 5, 'type': 'shirt', 'arm': 1},
    'grass robe': {'metatype': 'chest', 'price': 9, 'type': 'robe', 'as': 24},
    'leather tunic': {'metatype': 'chest', 'price': 14, 'type': 'shirt', 'arm': 3},
    'wooden chestplate': {'metatype': 'chest', 'price': 28, 'type': 'chestplate', 'arm': 5, 'as': -25},
    'animal pelt': {'metatype': 'chest', 'price': 14, 'type': 'misc', 'regen': 1, 'as': 16},

    'overalls': {'metatype': 'legs', 'price': 6, 'type': 'pants', 'arm': 1},
    'grass skirt': {'metatype': 'legs', 'price': 14, 'type': 'skirt', 'arm': 1, 'as': 12},
    'hiking pants': {'metatype': 'legs', 'price': 18, 'type': 'pants', 'arm': 2, 'as': 4},
    'basic shorts': {'metatype': 'legs', 'price': 17, 'type': 'shorts', 'arm': 1, 'as': 10},
    'hoola hoop': {'metatype': 'legs', 'price': 27, 'type': 'misc', 'regen': 2, 'as': -22},
    'jorts': {'metatype': 'legs', 'price': 12, 'type': 'shorts', 'regen': 1, 'as': 10},

    'straw shoes': {'metatype': 'feet', 'price': 6, 'type': 'shoes', 'arm': 1},
    'running shoes': {'metatype': 'feet', 'price': 14, 'type': 'shoes', 'as': 30},
    'walking beets': {'metatype': 'feet', 'price': 38, 'type': 'misc', 'dmg': 2, 'arm': 2},
    'soccer cleats': {'metatype': 'feet', 'price': 45, 'type': 'shoes', 'dmg': 3, 'as': 20},
    'hiking shoes': {'metatype': 'feet', 'price': 32, 'type': 'shoes', 'arm': 3},
    'work boots': {'metatype': 'feet', 'price': 29, 'type': 'boots', 'arm': 4, 'as': -10},

//equippables forest
    'copper hand axe': {'metatype': 'weapon', 'price': 38, 'type': 'axe', 'dmg': 18, 'as': 20},
    'copper battle axe': {'metatype': 'weapon', 'price': 40, 'type': 'axe', 'dmg': 29, 'arm': 1, 'as': -50, 'shatter': 10},
    'copper short sword': {'metatype': 'weapon', 'price': 26, 'type': 'sword', 'dmg': 13, 'as': 36},
    'copper long sword': {'metatype': 'weapon', 'price': 33, 'type': 'sword', 'dmg': 26, 'arm': 2, 'as': -36},
    'bronze hand axe': {'metatype': 'weapon', 'price': 56, 'type': 'axe', 'dmg': 25, 'as': 36, 'shatter': 5},
    'bronze battle axe': {'metatype': 'weapon', 'price': 70, 'type': 'axe', 'dmg': 37, 'arm': 2, 'as': -50, 'shatter': 50},
    'bronze short sword': {'metatype': 'weapon', 'price': 44, 'type': 'sword', 'dmg': 20, 'as': 72},
    'bronze long sword': {'metatype': 'weapon', 'price': 58, 'type': 'sword', 'dmg': 33, 'arm': 6, 'as': -40},
    'bark bat': {'metatype': 'weapon', 'price': 29, 'type': 'club', 'dmg': 22, 'as': -30},
    'elven gloves': {'metatype': 'weapon', 'price': 35, 'type': 'gloves', 'dmg': 14, 'arm': 4, 'regen': 1, 'as': 16},
    'goblin claws': {'metatype': 'weapon', 'price': 37, 'type': 'gloves', 'dmg': 26, 'regen': -2, 'as': 32},
    'charcoal spear': {'metatype': 'weapon', 'price': 29, 'type': 'spear', 'dmg': 16, 'as': 40},
    'ornate dagger': {'metatype': 'weapon', 'price': 32, 'type': 'knife', 'dmg': 11, 'as': 90},
    'elven dagger': {'metatype': 'weapon', 'price': 58, 'type': 'knife', 'dmg': 22, 'regen': 2, 'as': 66},
    'bark cleaver': {'metatype': 'weapon', 'price': 37, 'type': 'knife', 'dmg': 21, 'as': -33},
    'water oak staff': {'metatype': 'weapon', 'price': 50, 'type': 'staff', 'dmg': 31, 'arm': 2, 'regen': 3, 'as': -120, 'manaGen': 1},
    'dryad staff': {'metatype': 'weapon', 'price': 75, 'type': 'staff', 'dmg': 29, 'arm': 6, 'as': -40, 'lifedrain': 15, 'manaGen': 1},
    'leaf-rope whip': {'metatype': 'weapon', 'price': 31, 'type': 'whip', 'dmg': 12, 'arm': 1, 'as': 70, 'lifedrain': 15},
    'elf whip': {'metatype': 'weapon', 'price': 65, 'type': 'whip', 'dmg': 24, 'regen': 2, 'as': 60, 'dodge': 16},
    'dryad sleeve': {'metatype': 'weapon', 'price': 70, 'type': 'gloves', 'dmg': 20, 'regen': 4, 'as': 30, 'dodge': 16, 'lifedrain': 15},

    'leather cap': {'metatype': 'head', 'price': 36, 'type': 'hat', 'arm': 3},
    'leaf beret': {'metatype': 'head', 'price': 22, 'type': 'hat', 'arm': 1, 'as': 32},
    'bark helmet': {'metatype': 'head', 'price': 42, 'type': 'helmet', 'arm': 4},
    'forest turban': {'metatype': 'head', 'price': 33, 'type': 'turban', 'arm': 3, 'as': -6, 'lifedrain': 8},
    'leaf headband': {'metatype': 'head', 'price': 27, 'type': 'headband', 'regen': 2, 'dodge': 6},
    'elven visor': {'metatype': 'head', 'price': 31, 'type': 'hat', 'regen': 4, 'as': 10},
    'crystal headdress': {'metatype': 'head', 'price': 52, 'type': 'headband', 'dmg': 3, 'arm': 4, 'regen': 3, 'as': -20},
    'dryad bonnet': {'metatype': 'head', 'price': 52, 'type': 'hat', 'arm': 2, 'dodge': 8},
    'pinecone helmet': {'metatype': 'head', 'price': 43, 'type': 'helmet', 'arm': 4, 'regen': 1, 'as': -5},
    'wrapped snake': {'metatype': 'head', 'price': 62, 'type': 'turban', 'dmg': 5, 'lifedrain': 15},

    'copper chestplate': {'metatype': 'chest', 'price': 51, 'type': 'chestplate', 'arm': 8, 'as': -12},
    'bronze chestplate': {'metatype': 'chest', 'price': 63, 'type': 'chestplate', 'arm': 10, 'as': -8},
    'bark chestplate': {'metatype': 'chest', 'price': 43, 'type': 'chain mail', 'arm': 12, 'as': -40},
    'elven robes': {'metatype': 'chest', 'price': 49, 'type': 'robe', 'arm': 2, 'regen': 2, 'as': 44, 'dodge': 5},
    'wolf pelt': {'metatype': 'chest', 'price': 68, 'type': 'misc', 'as': 50},
    'dryad coat': {'metatype': 'chest', 'price': 57, 'type': 'coat', 'arm': 6, 'lifedrain': 8},
    'razor leaf coat': {'metatype': 'chest', 'price': 60, 'type': 'coat', 'dmg': 5, 'arm': 5, 'as': -5},
    'goblin garment': {'metatype': 'chest', 'price': 46, 'type': 'shirt', 'dmg': 5, 'arm': 2, 'as': 20},
    'sewed leaf shirt': {'metatype': 'chest', 'price': 35, 'type': 'shirt', 'arm': 5, 'as': 16},
    'pinecone chain mail': {'metatype': 'chest', 'price': 50, 'type': 'chain mail', 'arm': 8, 'regen': 1, 'as': -12},

    'copper leggings': {'metatype': 'legs', 'price': 47, 'type': 'leggings', 'arm': 6, 'as': -10},
    'bronze leggings': {'metatype': 'legs', 'price': 59, 'type': 'leggings', 'arm': 8, 'as': -7},
    'leafy pants': {'metatype': 'legs', 'price': 36, 'type': 'pants', 'arm': 5},
    'bark shinguards': {'metatype': 'legs', 'price': 42, 'type': 'leggings', 'arm': 7, 'as': -20},
    'elven skirt': {'metatype': 'legs', 'price': 39, 'type': 'skirt', 'arm': 4, 'regen': 1, 'as': 24},
    'dryad stockings': {'metatype': 'legs', 'price': 45, 'type': 'misc', 'arm': 3, 'regen': 3, 'lifedrain': 6},
    'goblin skin-leggings': {'metatype': 'legs', 'price': 50, 'type': 'misc', 'dmg': 4, 'arm': 2, 'as': 24},
    'camouflage pants': {'metatype': 'legs', 'price': 38, 'type': 'pants', 'dmg': 1, 'arm': 3, 'regen': 1, 'dodge': 5},
    'pineneedle pants': {'metatype': 'legs', 'price': 42, 'type': 'pants', 'arm': 8, 'regen': 2, 'as': -12},

    'forest sandals': {'metatype': 'feet', 'price': 32, 'type': 'sandals', 'arm': 4, 'as': -5},
    'leather boots': {'metatype': 'feet', 'price': 44, 'type': 'boots', 'arm': 5, 'as': 4},
    'steel-toed boots': {'metatype': 'feet', 'price': 42, 'type': 'boots', 'dmg': 2, 'arm': 4},
    'bark clogs': {'metatype': 'feet', 'price': 48, 'type': 'shoes', 'arm': 7, 'regen': 1, 'as': -20},
    'bronze boots': {'metatype': 'feet', 'price': 50, 'type': 'boots', 'arm': 6, 'as': 10},
    'goblin loafers': {'metatype': 'feet', 'price': 50, 'type': 'shoes', 'dmg': 3, 'arm': 3, 'as': 20},
    'elven shoes': {'metatype': 'feet', 'price': 41, 'type': 'shoes', 'arm': 4, 'as': 20, 'dodge': 8},
    'dryad boots': {'metatype': 'feet', 'price': 58, 'type': 'boots', 'arm': 6, 'regen': 2, 'as': 10, 'lifedrain': 8},
    'hollowed out fish': {'metatype': 'feet', 'price': 41, 'type': 'misc', 'arm': 5, 'regen': 4, 'as': -12},
    'locust wrap feet': {'metatype': 'feet', 'price': 32, 'type': 'misc', 'arm': 3, 'regen': 2, 'as': 10},
    'maple leef sandals': {'metatype': 'feet', 'price': 27, 'type': 'sandals', 'arm': 4, 'lifedrain': 2},
    'hardened sap shoes': {'metatype': 'feet', 'price': 53, 'type': 'shoes', 'arm': 9, 'as': -30},

//equippables beach
    'iron short sword': {'metatype': 'weapon', 'price': 62, 'type': 'sword', 'dmg': 28, 'arm': 0, 'regen': 0, 'as': 44},
    'iron long sword': {'metatype': 'weapon', 'price': 85, 'type': 'sword', 'dmg': 51, 'arm': 9, 'regen': 0, 'as': -40},
    'iron hand axe': {'metatype': 'weapon', 'price': 85, 'type': 'axe', 'dmg': 34, 'arm': 0, 'regen': 0, 'as': 36, 'shatter': 15},
    'iron battle axe': {'metatype': 'weapon', 'price': 109, 'type': 'axe', 'dmg': 59, 'arm': 5, 'regen': 0, 'as': -50, 'shatter': 90},
    'iron sabre': {'metatype': 'weapon', 'price': 78, 'type': 'sword', 'dmg': 25, 'arm': 0, 'regen': 0, 'as': 70, 'bleed': 5},
    'iron trident': {'metatype': 'weapon', 'price': 81, 'type': 'spear', 'dmg': 38, 'arm': 3, 'regen': 0, 'as': -35, 'bleed': 35},
    'steel short sword': {'metatype': 'weapon', 'price': 93, 'type': 'sword', 'dmg': 38, 'arm': 0, 'regen': 0, 'as': 40},
    'steel long sword': {'metatype': 'weapon', 'price': 126, 'type': 'sword', 'dmg': 62, 'arm': 12, 'regen': 0, 'as': -30},
    'steel hand axe': {'metatype': 'weapon', 'price': 129, 'type': 'axe', 'dmg': 49, 'arm': 0, 'regen': 0, 'as': 36, 'shatter': 25},
    'steel battle axe': {'metatype': 'weapon', 'price': 171, 'type': 'axe', 'dmg': 130, 'arm': 7, 'regen': 0, 'as': -60, 'shatter': 120},
    'steel sabre': {'metatype': 'weapon', 'price': 120, 'type': 'sword', 'dmg': 37, 'arm': 0, 'regen': 0, 'as': 70, 'bleed': 8},
    'steel trident': {'metatype': 'weapon', 'price': 136, 'type': 'spear', 'dmg': 72, 'arm': 4, 'regen': 0, 'as': -45, 'bleed': 55},
    'coral mace': {'metatype': 'weapon', 'price': 76, 'type': 'club', 'dmg': 38, 'arm': 0, 'regen': 2, 'as': -38, 'shatter': 14},
    'shark tooth dagger': {'metatype': 'weapon', 'price': 96, 'type': 'knife', 'dmg': 30, 'arm': 0, 'regen': 0, 'as': 40, 'bleed': 15},
    'pirate cutlass': {'metatype': 'weapon', 'price': 148, 'type': 'sword', 'dmg': 27, 'arm': 0, 'regen': 0, 'as': 50, 'bleed': 10, 'income': 4},
    'seaweed whip': {'metatype': 'weapon', 'price': 80, 'type': 'whip', 'dmg': 36, 'arm': 0, 'regen': 0, 'as': 48},
    'pirate cannon': {'metatype': 'weapon', 'price': 225, 'type': 'misc', 'dmg': 300, 'arm': 0, 'regen': 0, 'as': -400, 'shatter': 100},
    'mermaid gloves': {'metatype': 'weapon', 'price': 130, 'type': 'gloves', 'dmg': 60, 'arm': 0, 'regen': 0, 'as': -20, 'lifedrain': 25},
    'crabwalker claws': {'metatype': 'weapon', 'price': 150, 'type': 'gloves', 'dmg': 40, 'arm': 0, 'regen': -5, 'as': 40, 'shatter': 20, 'bleed': 80},
    'turtle shell club': {'metatype': 'weapon', 'price': 135, 'type': 'club', 'dmg': 90, 'arm': 0, 'regen': 0, 'as': -40, 'lifedrain': 20},
    'mermaid javelin': {'metatype': 'weapon', 'price': 160, 'type': 'spear', 'dmg': 120, 'arm': 4, 'regen': 0, 'as': -120, 'lifedrain': 25},
    'mermaid water-sling': {'metatype': 'weapon', 'price': 120, 'type': 'spear', 'dmg': 55, 'arm': -4, 'regen': 0, 'as': -120, 'shatter': 20, 'lifedrain': 20},
    'turtle boomerang': {'metatype': 'weapon', 'price': 180, 'type': 'boomerang', 'dmg': 160, 'arm': 16, 'regen': 0, 'as': -100, 'shatter': 100},
    'driftwood club': {'metatype': 'weapon', 'price': 100, 'type': 'club', 'dmg': 88, 'arm': 0, 'regen': 0, 'as': -85, 'shatter': 25},
    'whale tooth axe': {'metatype': 'weapon', 'price': 135, 'type': 'axe', 'dmg': 70, 'arm': 0, 'regen': 3, 'as': -25, 'shatter': 160},
    
    'iron helmet': {'metatype': 'head', 'price': 55, 'type': 'hat', 'dmg': 0, 'arm': 8, 'regen': 0, 'as': -10},
    'steel helmet': {'metatype': 'head', 'price': 80, 'type': 'hat', 'dmg': 0, 'arm': 12, 'regen': 0, 'as': -10},
    'sailor cap': {'metatype': 'head', 'price': 60, 'type': 'hat', 'dmg': 0, 'arm': 3, 'regen': 0, 'as': 30},
    'pirate hat': {'metatype': 'head', 'price': 90, 'type': 'hat', 'dmg': 15, 'arm': 6, 'regen': 0, 'as': 30, 'income': 3},
    'mermaid headress': {'metatype': 'head', 'price': 110, 'type': 'headband', 'dmg': 0, 'arm': 0, 'regen': 15, 'as': -10},
    'turtle shell-met': {'metatype': 'head', 'price': 95, 'type': 'helmet', 'dmg': 0, 'arm': 30, 'regen': 0, 'as': -50},
    'razor seaweed hair': {'metatype': 'head', 'price': 78, 'type': 'hair', 'dmg': 0, 'arm': 8, 'regen': 0, 'as': 10, 'thorn': 12},
    'rubber boot hat': {'metatype': 'head', 'price': 40, 'type': 'hat', 'dmg': 0, 'arm': 5, 'regen': 0, 'as': 20},
    'crabwalker beret': {'metatype': 'head', 'price': 80, 'type': 'hat', 'dmg': 0, 'arm': 7, 'regen': 0, 'as': 0, 'lifedrain': 15, 'thorn': 8},
    'paperboat hat': {'metatype': 'head', 'price': 64, 'type': 'hat', 'dmg': 5, 'arm': 5, 'regen': 0, 'as': 0, 'shatter': 5},
    'crabwalker fedora': {'metatype': 'head', 'price': 80, 'type': 'hat', 'dmg': 0, 'arm': 11, 'regen': 0, 'as': 40, 'thorn': 8},
    'fisherman bucket hat': {'metatype': 'head', 'price': 75, 'type': 'hat', 'dmg': 6, 'arm': 9, 'regen': 6, 'as': -10, 'income': 2},
    'coconut helmet': {'metatype': 'head', 'price': 99, 'type': 'hat', 'dmg': 0, 'arm': 16, 'regen': 0, 'as': -15, 'lifedrain': 10},
    
    'iron chestplate': {'metatype': 'chest', 'price': 80, 'type': 'chestplate', 'dmg': 0, 'arm': 14, 'regen': 0, 'as': -12},
    'steel chestplate': {'metatype': 'chest', 'price': 105, 'type': 'chestplate', 'dmg': 0, 'arm': 19, 'regen': 0, 'as': -8},
    'seashell chestplate': {'metatype': 'chest', 'price': 100, 'type': 'chestplate', 'dmg': 0, 'arm': 16, 'regen': 0, 'as': -8, 'thorn': 5},
    'sharkskin vest': {'metatype': 'chest', 'price': 120, 'type': 'vest', 'dmg': 0, 'arm': 15, 'regen': 0, 'as': -20, 'bleed': 10},
    'coral chestplate': {'metatype': 'chest', 'price': 95, 'type': 'chestplate', 'dmg': 0, 'arm': 18, 'regen': 0, 'as': -40, 'thorn': 12},
    'turtlean shell': {'metatype': 'chest', 'price': 140, 'type': 'chestplate', 'dmg': 0, 'arm': 50, 'regen': 0, 'as': -80},
    'seaweed wrap': {'metatype': 'chest', 'price': 20, 'type': 'misc', 'dmg': 0, 'arm': 11, 'regen': 0, 'as': 0, 'lifedrain': 5},
    'taped water bags': {'metatype': 'chest', 'price': 100, 'type': 'chest', 'dmg': 0, 'arm': 20, 'regen': 0, 'as': 0, 'dodge': 11},
    'rubber tire': {'metatype': 'chest', 'price': 150, 'type': 'chest', 'dmg': 0, 'arm': 26, 'regen': 6, 'as': 0, 'dodge': 22},
    'swim shirt': {'metatype': 'chest', 'price': 55, 'type': 'shirt', 'dmg': 0, 'arm': 9, 'regen': 2, 'as': 40},
    'pirate captain coat': {'metatype': 'chest', 'price': 250, 'type': 'jacket', 'dmg': 10, 'arm': 25, 'regen': 10, 'as': 0, 'income': 8},
    
    'iron leggings': {'metatype': 'legs', 'price': 70, 'type': 'leggings', 'dmg': 0, 'arm': 11, 'regen': 0, 'as': -8},
    'steel leggings': {'metatype': 'legs', 'price': 88, 'type': 'leggings', 'dmg': 0, 'arm': 15, 'regen': 0, 'as': -6},
    'mermaid scale leggings': {'metatype': 'legs', 'price': 103, 'type': 'leggings', 'dmg': 0, 'arm': 8, 'regen': 7, 'as': 2},
    'turtle skin joggers': {'metatype': 'legs', 'price': 110, 'type': 'pants', 'dmg': 0, 'arm': 8, 'regen': 0, 'as': 25},
    'swim trunks': {'metatype': 'legs', 'price': 45, 'type': 'shorts', 'dmg': 0, 'arm': 0, 'regen': 1, 'as': 33},
    'triple layer jeans': {'metatype': 'legs', 'price': 90, 'type': 'pants', 'dmg': 0, 'arm': 20, 'regen': 1, 'as': -33},
    'floatie': {'metatype': 'legs', 'price': 90, 'type': 'misc', 'dmg': 6, 'arm': 2, 'regen': 5, 'as': -18},
    'crabwalker-shed loins': {'metatype': 'legs', 'price': 125, 'type': 'pants', 'dmg': 0, 'arm': 10, 'regen': 2, 'as': 5, 'bleed':25},
    'turtlean leg garb': {'metatype': 'legs', 'price': 160, 'type': 'pants', 'dmg': 0, 'arm': 24, 'regen': 2, 'as': -25, 'thorn':5},
    'urchin patch pants': {'metatype': 'legs', 'price': 130, 'type': 'pants', 'dmg': 4, 'arm': 6, 'regen': 8, 'as': 10, 'thorn':24},
    'dolphin leather pants': {'metatype': 'legs', 'price': 102, 'type': 'pants', 'dmg': -3, 'arm': 12, 'regen': 3, 'as': 60},
    'fisherman overalls': {'metatype': 'legs', 'price': 83, 'type': 'pants', 'dmg': 4, 'arm': 10, 'regen': 0, 'as': 20},
    'pirate pants': {'metatype': 'legs', 'price': 200, 'type': 'pants', 'dmg': 12, 'arm': 12, 'regen': -1, 'as': 25, 'bleed':25},

    'iron boots': {'metatype': 'feet', 'price': 51, 'type': 'boots', 'dmg': 0, 'arm': 7, 'regen': 0, 'as': 4},
    'steel boots': {'metatype': 'feet', 'price': 80, 'type': 'boots', 'dmg': 0, 'arm': 10, 'regen': 0, 'as': 6},
    'water shoes': {'metatype': 'feet', 'price': 78, 'type': 'shoes', 'dmg': 0, 'arm': 6, 'regen': 0, 'as': 30},
    'coral sandals': {'metatype': 'feet', 'price': 93, 'type': 'sandals', 'dmg': 3, 'arm': 9, 'regen': 0, 'as': -25, 'thorn':8,'shatter': 10},
    'sharkskin boots': {'metatype': 'feet', 'price': 125, 'type': 'boots', 'dmg': 8, 'arm': 8, 'regen': 0, 'as': 0, 'bleed': 35},
    'turtle shell shoes': {'metatype': 'feet', 'price': 125, 'type': 'shoes', 'dmg': -2, 'arm': 25, 'regen': 0, 'as': -68},
    'crab feet shoes': {'metatype': 'feet', 'price': 110, 'type': 'shoes', 'dmg': 6, 'arm': 8, 'regen': 2, 'as': 50, 'bleed':10},
    'mermaid fin sandals': {'metatype': 'feet', 'price': 140, 'type': 'sandals', 'dmg': 0, 'arm': 10, 'regen': 5, 'as': 15, 'lifedrain':25},
    'sandbag shoes': {'metatype': 'feet', 'price': 70, 'type': 'shoes', 'dmg': 0, 'arm': 18, 'regen': 0, 'as': -70, 'shatter':10},
    'pirate boots': {'metatype': 'feet', 'price': 130, 'type': 'boots', 'dmg': 0, 'arm': 10, 'regen': 0, 'as': 20, 'bleed':15, 'income':1},
    'peglegs': {'metatype': 'feet', 'price': 150, 'type': 'misc', 'dmg': 0, 'arm': 12, 'regen': 0, 'as': 14, 'bleed':25, 'income':4, 'accuracy':-15},
    'coconut shoes': {'metatype': 'feet', 'price': 110, 'type': 'shoes', 'dmg': 0, 'arm': 15, 'regen': 4, 'as': -20},

//STATS

//stats grasslands
    'green apple': {'metatype': 'stat', 'price': 5, 'maxhp': 5},
    'red apple': {'metatype': 'stat', 'price': 6, 'maxhp': 6},
    'chocolate bar': {'metatype': 'stat', 'price': 10, 'maxhp': -2, 'as': 5},
    'protein shake': {'metatype': 'stat', 'price': 10, 'dmg': 1},
    'grapefruit': {'metatype': 'stat', 'price': 14, 'regen': 1},
    'strawberry': {'metatype': 'stat', 'price': 18, 'maxhp': 2, 'regen': 1},
    'ice cube': {'metatype': 'stat', 'price': 4, 'hp': 10},
    'water bottle': {'metatype': 'stat', 'price': 10, 'levelheal': 3},
    "morsel o' meat": {'metatype': 'stat', 'price': 24, 'dmg': 1, 'arm': 1},
    'honey comb': {'metatype': 'stat', 'price': 21, 'maxhp': 12},
    'beef stew': {'metatype': 'stat', 'price': 26, 'maxhp': 8, 'hp': 'max'},
    'artichoke': {'metatype': 'stat', 'price': 20, 'arm': 1},
    'dragonfruit': {'metatype': 'stat', 'price': 38, 'arm': 1, 'regen': 1},
    'cheese burger': {'metatype': 'stat', 'price': 38, 'maxhp': 5, 'dmg': 1, 'regen': 1, 'as': 3},
    'leaflet scarf': {'metatype': 'stat', 'price': 15, 'dodge': 4},
    'banana': {'metatype': 'stat', 'price': 18, 'maxhp': 14, 'as': 2},
    'apricot': {'metatype': 'stat', 'price': 18, 'maxhp': 16, 'as': -2},
    'small bond': {'metatype': 'stat', 'price': 10, 'income': 1},
    'pamphlet': {'metatype': 'stat', 'price': 20, 'income': 1, 'regen': 1},
    'blue rock': {'metatype': 'stat', 'price': 12, 'maxMana': 5},
    'magic charm': {'metatype': 'stat', 'price': 18, 'manaGen': 1},
    'tiny gold rune': {'metatype': 'stat', 'price': 27, 'income': 1, 'manaGen': 1},

//stats forest
    'shiny apple': {'metatype': 'stat', 'price': 27, 'maxhp': 30},
    'dark red apple': {'metatype': 'stat', 'price': 25, 'maxhp': 25, 'hp': 3},
    'white chocolate bar': {'metatype': 'stat', 'price': 18, 'maxhp': -6, 'as': 18},
    'milk': {'metatype': 'stat', 'price': 15, 'dmg': 2},
    'water canteen': {'metatype': 'stat', 'price': 22, 'levelheal': 8},
    'bass fish': {'metatype': 'stat', 'price': 16, 'maxhp': 4, 'dmg': 2},
    'cat fish': {'metatype': 'stat', 'price': 16, 'maxhp': 4, 'as': 10},
    'perch fish': {'metatype': 'stat', 'price': 16, 'maxhp': 4, 'arm': 2},
    'trout': {'metatype': 'stat', 'price': 16, 'maxhp': 4, 'regen': 1},
    'salmon': {'metatype': 'stat', 'price': 16, 'maxhp': 4, 'levelheal': 3},
    'blood acorn': {'metatype': 'stat', 'price': 29, 'lifedrain': 3, 'levelheal': 2},
    'elven trinket': {'metatype': 'stat', 'price': 21, 'dodge': 3},
    'sluggish mushrooms': {'metatype': 'stat', 'price': 31, 'maxhp': 40, 'as': -10},
    'pinecone pudding': {'metatype': 'stat', 'price': 31, 'maxhp': 25, 'levelheal': 8},
    'heal ointment': {'metatype': 'stat', 'price': 34, 'levelheal': 12},
    'cooked chicken': {'metatype': 'stat', 'price': 25, 'maxhp': 8, 'shatter': 4},
    'battle blood': {'metatype': 'stat', 'price': 45, 'dmg': 5, 'shatter': 10},
    'bucket of ice': {'metatype': 'stat', 'price': 22, 'hp': 30},
    'carrot': {'metatype': 'stat', 'price': 36, 'regen': 3, 'as': 6},
    'medium bond': {'metatype': 'stat', 'price': 25, 'income': 2},
    'golden fish': {'metatype': 'stat', 'price': 45, 'maxhp': 25, 'income': 1},
    'bark pamphlette': {'metatype': 'stat', 'price': 40, 'regen': 2, 'income': 2},
    'small gold rune': {'metatype': 'stat', 'price': 45, 'income': 2, 'manaGen': 1},
    'charcoal tonic': {'metatype': 'stat', 'price': 36, 'manaGen': 1, 'arm': 2},
    'dryad scrap': {'metatype': 'stat', 'price': 20, 'maxMana': 8, 'as': -3},
    'transfixed sap': {'metatype': 'stat', 'price': 33, 'maxhp': 18, 'maxMana': 5},

//stats beach
    'yellow apple': {'metatype': 'stat', 'price': 30, 'maxhp': 35},
    'cooked apple': {'metatype': 'stat', 'price': 34, 'maxhp': 28, 'hp': 8},
    'sea smoothie': {'metatype': 'stat', 'price': 48, 'maxhp': 15, 'levelheal': 15, 'regen':5, 'dmg':4},
    'coconut': {'metatype': 'stat', 'price': 55, 'armor': 4, 'levelheal': 25, 'hp':30},
    'crabstew': {'metatype': 'stat', 'price': 50, 'maxhp': 20, 'regen':4},
    'delicious lobster': {'metatype': 'stat', 'price': 60, 'dmg':3, 'maxhp': 25, 'levelheal':10},
    'tasty crab': {'metatype': 'stat', 'price': 56, 'dmg':5, 'maxhp': 15, 'regen':3},
    'popsicle': {'metatype': 'stat', 'price': 80, 'hp':50, 'regen':4},
    'blue oyster': {'metatype': 'stat', 'price': 36, 'maxhp':15, 'speed':16},
    'red oyster': {'metatype': 'stat', 'price': 36, 'maxhp':15, 'regen':4},
    'black oyster': {'metatype': 'stat', 'price': 36, 'maxhp':15, 'dmg':7},
    'green oyster': {'metatype': 'stat', 'price': 36, 'maxhp':15, 'levelheal':14},
    'orange oyster': {'metatype': 'stat', 'price': 36, 'maxhp':15, 'arm':6},
    'grey oyster': {'metatype': 'stat', 'price': 36, 'maxhp':15, 'shatter':20},
    'golden oyster': {'metatype': 'stat', 'price': 36, 'maxhp':15, 'income':2},
    'shrimp pallette': {'metatype': 'stat', 'price': 72, 'as': 18},
    'edible sand': {'metatype': 'stat', 'price': 80, 'arm': 6, 'maxhp': 20},
    'turtle shell soup': {'metatype': 'stat', 'price': 92, 'arm': 20, 'regen':3, 'as': -10},
    'magic seashell': {'metatype': 'stat', 'price': 100, 'maxMana': 15, 'manaGen':1, 'as':-10},
    'playing cards': {'metatype': 'stat', 'price': 60, 'income': 2, 'bleed':15},
    'pelican heart': {'metatype': 'stat', 'price': 130, 'regen': 8, 'bleed':30},
    'mystic sand dollar': {'metatype': 'stat', 'price': 80, 'income': 3, 'manaGen':1},
    'watermelon': {'metatype': 'stat', 'price': 63, 'regen': 2, 'maxhp':20},
    'pineapple': {'metatype': 'stat', 'price': 59, 'regen': 6, 'thorns':10},
    'mango': {'metatype': 'stat', 'price': 62, 'maxhp': 25, 'levelheal':15},
    'kiwi': {'metatype': 'stat', 'price': 61, 'hp': 50, 'levelheal':22},
    'beach bond': {'metatype': 'stat', 'price': 65, 'income': 5},





//USABLES

//usables grasslands
    'firecracker': {'metatype': 'usable', 'price': 5, 'uses': 1, 'shortDescription': 'deal 20 dmg, lose 2 hp', 'longDescription': 'During combat, use to deal 20 damage (bypasses armor) to the current enemy, lose 2 hp', 'type': 'combat', 'attack': 20, 'hp': -2},
    'throwing eggs': {'metatype': 'usable', 'price': 7, 'uses': 3, 'shortDescription': 'current enemy loses 3 armor', 'longDescription': "During combat, lower the current enemy's armor by 3", 'type': 'combat', 'enemyArm': -3},
    'bandages': {'metatype': 'usable', 'price': 9, 'uses': 4, 'shortDescription': 'heal 5 hp', 'longDescription': 'Heal 5 hp', 'type': 'all', 'hp': 5},
    'first aid kit': {'metatype': 'usable', 'price': 8, 'uses': 1, 'shortDescription': 'heal 20 hp', 'longDescription': 'Heal 20 hp', 'type': 'all', 'hp': 20},
    'sharpening stone': {'metatype': 'usable', 'price': 26, 'uses': 3, 'shortDescription': '+2 dmg on weapon', 'longDescription': 'Your currently equipped weapon gains +2 dmg', 'type': 'all', 'weaponDmg': 2},

//usables forest
    'goblin bomb': {'metatype': 'usable', 'price': 20, 'uses': 1, 'shortDescription': 'deal 50 dmg to non-goblin. gain 5 gold', 'longDescription': 'During combat, use to deal 50 dmg (bypasses armor) to the current enemy. If the current enemy is of the goblin type, instead deal 0 damage. Gain 5 gold', 'type': 'combat', 'attackNonGoblin': 50, 'gold': 5},
    'dryad throwing leaves': {'metatype': 'usable', 'price': 41, 'uses': 4, 'shortDescription': 'deal 10 dmg, heal 10', 'longDescription': 'During combat, deal 10 dmg to an enemy (bypasses armor), and heal 10', 'type': 'combat', 'attack': 10, 'hp': 10},
    'elf bandages': {'metatype': 'usable', 'price': 48, 'uses': 15, 'shortDescription': 'heal 10 hp', 'longDescription': 'Heal 10', 'type': 'all', 'hp': 10},
    'elven battle book': {'metatype': 'usable', 'price': 18, 'uses': 1, 'shortDescription': 'if enemy has lower attackspeed, gain 3% dodge permanetly', 'longDescription': 'During combat, if enemy has a lower total attackspeed than you, gain 3% permanent dodge', 'type': 'combat', 'conditionalDodge': 3},
    'dryad battle book': {'metatype': 'usable', 'price': 22, 'uses': 1, 'shortDescription': 'if enemy has a higher attackspeed, gain 3% lifedrain permanetly', 'longDescription': 'During combat, if enemy has a higher total attackspeed than you, gain 3% permanent lifedrain', 'type': 'combat', 'conditionalLifedrain': 3},
    'goblin sacks': {'metatype': 'usable', 'price': 30, 'uses': 4, 'shortDescription': 'gain 20% of enemy gold payout', 'longDescription': 'During combat, gain 20% of the current enemy\'s gold pay out', 'type': 'combat', 'enemyGoldPayout': 0.2},
    'dryad berries': {'metatype': 'usable', 'price': 61, 'uses': 4, 'shortDescription': 'heal 15 hp and gain 1 regen permantely', 'longDescription': 'Heal 15 hp and gain 1 regen permanetly', 'type': 'all', 'hp': 15, 'regen': 1},
    'pine needle attachments': {'metatype': 'usable', 'price': 58, 'uses': 4, 'shortDescription': '+5 dmg on weapon', 'longDescription': 'Your currently equipped weapon gains +5 dmg', 'type': 'all', 'weaponDmg': 5},
    'pine cone attachments': {'metatype': 'usable', 'price': 62, 'uses': 5, 'shortDescription': '+3 shatter on weapon', 'longDescription': 'Your currently equipped weapon gains +3 shatter', 'type': 'all', 'weaponShatter': 3},
    'elven nectar': {'metatype': 'usable', 'price': 45, 'uses': 2, 'shortDescription': 'remove all shatter applied by opponent', 'longDescription': 'During combat, all armor you have lost due to your opponent\'s shatter this combat is removed. However, more shatter can still be gained', 'type': 'combat', 'removeShatter': true},
    'dryad root potion': {'metatype': 'usable', 'price': 70, 'uses': 1, 'shortDescription': 'current enemy armor doubles, but their attack speed halves', 'longDescription': 'During combat, the enemy\'s base armor grows by the amount of effective armor they currently have (armor - shatter applied). Their attackspeed is set to half.', 'type': 'combat', 'enemyArmDouble': true, 'enemyAsHalf': true},

//usables beach
    'shell attachments': {'metatype': 'usable', 'price': 105, 'uses': 5, 'shortDescription': '+6 dmg on weapon', 'longDescription': 'Your currently equipped weapon gains +6 dmg', 'type': 'all', 'weaponDmg': 6},
    'clam attachments': {'metatype': 'usable', 'price': 95, 'uses': 3, 'shortDescription': '+8 shatter on weapon', 'longDescription': 'Your currently equipped weapon gains +8 shatter', 'type': 'all', 'weaponShatter': 8},
    'urchin attachments': {'metatype': 'usable', 'price': 110, 'uses': 5, 'shortDescription': '+5 bleed on weapon', 'longDescription': 'Your currently equipped weapon gains +5 bleed', 'type': 'all', 'weaponBleed': 5},
    'health bundle': {'metatype': 'usable', 'price': 80, 'uses': 2, 'shortDescription': 'heal 100 hp', 'longDescription': 'Heal 100', 'type': 'all', 'hp': 100},
    'throwing sand': {'metatype': 'usable', 'price':67, 'uses': 4, 'shortDescription': 'current enemy loses 10 armor', 'longDescription': "During combat, lower the current enemy's armor by 10", 'type': 'combat', 'enemyArm': -10},
    'throwing shells': {'metatype': 'usable', 'price': 75, 'uses': 4, 'shortDescription': 'deal 40 dmg, enemy loses 5 regen', 'longDescription': 'During combat, deal 40 dmg to an enemy (bypasses armor), and apply 5 bleed to enemy\'s regen', 'type': 'combat', 'attack': 40, 'applyBleed': 5},
    'mermaid ointment': {'metatype': 'usable', 'price': 55, 'uses': 2, 'shortDescription': 'remove all bleed applied by opponent', 'longDescription': 'During combat, all regen you have lost due to your opponent\'s bleed this combat is removed. However, more bleed can still be gained', 'type': 'combat', 'removeBleed': true},
    'pirate bag': {'metatype': 'usable', 'price': 53, 'uses': 3, 'shortDescription': 'gain 25% of enemy gold payout, deal 5 dmg', 'longDescription': 'During combat, gain 25% of the current enemy\'s gold pay out, then deal 5 dmg (bypasses armor).', 'type': 'combat', 'enemyGoldPayout': 0.25},
    'crab legs': {'metatype': 'usable', 'price': 70, 'uses': 5, 'shortDescription': 'heal 50 hp, lose 1 regen', 'longDescription': 'Heal 50 hp and lose 1 regen permanetly', 'type': 'all', 'hp': 50, 'regen': -1},
    'mermaid gill potion': {'metatype': 'usable', 'price': 89, 'uses': 2, 'shortDescription': 'gain 12 regen, lose 10 armor', 'longDescription': 'Gain 12 regen, lose 10 armor, can go negative.', 'type': 'all', 'regen':12, 'armor':-10},
    'turtlean shell potion': {'metatype': 'usable', 'price': 83, 'uses': 2, 'shortDescription': 'gain 15 armor, lose 10 regen', 'longDescription': 'Gain 15 armor, lose 10 regen, can go negative.', 'type': 'all', 'armor':15, 'regen':-10},

//MAGIC

//magic grasslands
    'shock': {'metatype': 'magic', 'price': 15, 'shortDescription': 'deal 10 dmg', 'longDescription': 'Deal 10 dmg to the current enemy. Does not bypass armor or dodge. Infinite uses', 'manaCost': 12, 'attack': 10},
    'growth spurt': {'metatype': 'magic', 'price': 20, 'shortDescription': 'gain 3 max hp', 'longDescription': 'Gain 3 max hp, includes gain of 3 hp. Infinite uses', 'manaCost': 15, 'maxhp': 3},
    'blood splash': {'metatype': 'magic', 'price': 13, 'shortDescription': 'heal 4', 'longDescription': 'Gain 4 hp, does not go over max hp. Infinite uses', 'manaCost': 8, 'hp': 4},
    'grass disarm': {'metatype': 'magic', 'price': 13, 'shortDescription': 'enemy loses one armor', 'longDescription': 'Enemy receives -1 armor, can go negative. Does not interact with shatter. Infinite uses', 'manaCost': 5, 'enemyArm': -1},
    'blood let': {'metatype': 'magic', 'price': 26, 'shortDescription': 'lose 20 hp, +1 dmg, +1 armor', 'longDescription': 'Lose 20 hp, gain a permanent stat buff of +1 dmg and +1 armor. Infinite uses', 'manaCost': 15, 'hp': -20, 'dmg': 1, 'arm': 1},
    'chill': {'metatype': 'magic', 'price': 14, 'shortDescription': 'enemy loses 5 attack speed', 'longDescription': 'Enemy receives -5 attack speed. Infinite uses', 'manaCost': 10, 'enemyAs': -5},

//magic forest
    'spirit invocation': {'metatype': 'magic', 'price': 25, 'shortDescription': 'gain 5 max mana', 'longDescription': 'Gain 5 max mana permanently, does not come with 5 mana on use. Infinite uses', 'manaCost': 15, 'maxMana': 5},
    'goblin fire dance': {'metatype': 'magic', 'price': 36, 'shortDescription': 'you & enemy lose 10 hp. you gain +2 dmg, and enemy loses 2 dmg', 'longDescription': 'Deal 10 dmg to the current enemy and yourself (bypasses armor and dodge). You gain a permanent +2 dmg increase as does the current enemy. Infinite uses', 'manaCost': 15, 'hp': -10, 'enemyHp': -10, 'dmg': 2, 'enemyDmg': 2},
    'grass overgrowth': {'metatype': 'magic', 'price': 26, 'shortDescription': 'gain 3 max hp, 1 armor, and lose 1 attack speed', 'longDescription': 'Permanently gain 3 max hp, 1 armor, and permanently lose 1 attack speed. Infinite uses', 'manaCost': 20, 'maxhp': 3, 'arm': 1, 'as': -1},
    'elf rumination': {'metatype': 'magic', 'price': 31, 'shortDescription': 'gain 1 max hp, heal 12', 'longDescription': 'Permanently gain 1 max hp and gain this hp, heal 12. Infinite uses', 'manaCost': 10, 'maxhp': 1, 'hp': 12},
    'dryad pose': {'metatype': 'magic', 'price': 28, 'shortDescription': 'gain 1 armor and 1 max mana', 'longDescription': 'Permanently gain 1 armor and 1 max mana. Infinite uses', 'manaCost': 12, 'arm': 1, 'maxMana': 1},
    'armor recover': {'metatype': 'magic', 'price': 38, 'shortDescription': 'regain 4 armor lost from shatter', 'longDescription': 'Remove the effects of shatter for up to four armor lost. Does not go positive. Infinite uses', 'manaCost': 6, 'shatterRecovered': 4},
    'daydream': {'metatype': 'magic', 'price': 40, 'shortDescription': '+1 to dmg, arm, regen, & speed', 'longDescription': 'Permanently gain +1 dmg, +1 armor, +1 regen, and +1 attack speed. Infinite uses', 'manaCost': 22, 'dmg': 1, 'arm': 1, 'regen': 1, 'as': 1},
    'rock drop': {'metatype': 'magic', 'price': 38, 'shortDescription': 'deal 40 dmg', 'longDescription': 'Deal 40 dmg to the current enemy. Does not bypass armor or dodge. Infinite uses', 'manaCost': 15, 'attack': 40},

//magic beach
    'sand wave': {'metatype': 'magic', 'price': 50, 'shortDescription': 'deal 50 dmg, apply 5 shatter', 'longDescription': 'Deal 50 dmg to the current enemy. Does not bypass armor or dodge. Then, apply 5 shatter. Infinite uses', 'manaCost': 18, 'attack': 50},
    'beach day': {'metatype': 'magic', 'price': 60, 'shortDescription': '+5 to armor and regen', 'longDescription': 'Permanently gain +5 armor +5 regen. Infinite uses', 'manaCost': 25, 'arm': 5, 'regen': 5},
    'seashell summon': {'metatype': 'magic', 'price': 38, 'shortDescription': 'regain 10 armor from shatter, +2 dmg', 'longDescription': 'Remove the effects of shatter for up to ten armor lost. Does not go positive. Gain 2 dmg permanetly. Infinite uses', 'manaCost': 20, 'shatterRecovered': 10, 'dmg': 2},
    'blood suck': {'metatype': 'magic', 'price': 65, 'shortDescription': 'lose 25 hp, enemy loses 15 armor', 'longDescription': 'You lose 25 hp, enemy loses 15 armor. Infinite uses', 'manaCost': 18, 'hp': -25, 'enemyArm': -15},
    'sea chill': {'metatype': 'magic', 'price': 45, 'shortDescription': 'enemy loses 25 attack speed', 'longDescription': 'Enemy receives -25 attack speed. Infinite uses', 'manaCost': 30, 'enemyAs': -25},
    'heal pull': {'metatype': 'magic', 'price': 52, 'shortDescription': 'heal 20% of enemy hp', 'longDescription': 'You heal 20% of the enemy\'s current hp. Rounds down. Infinite uses', 'manaCost': 18, 'healProportion': 0.2},
    'mental sharpen': {'metatype': 'magic', 'price': 39, 'shortDescription': '+1 dmg on current weapon', 'longDescription': 'The weapon you currently have selected gains 1 dmg. Infinite uses', 'manaCost': 5, 'weaponDmg': 1},
    'blood infusion': {'metatype': 'magic', 'price': 43, 'shortDescription': 'lose 5 hp, current weapon +5 bleed', 'longDescription': 'Lose 5 hp; the weapon you currently have selected gains 5 bleed. Infinite uses', 'manaCost': 5, 'hp': -5, 'weaponBleed':5},
    
    //BOSS ITEMS

//boss items grasslands
    'hooved javelin': {'metatype': 'weapon', 'price': 0, 'type': 'spear', 'dmg': 32, 'arm' : 5, 'as': -100, 'message': 'A fleshy javelin emerges from the wreckage of battle. Powerful, but clunky'},
    'long grass wand': {'metatype': 'weapon', 'price': 0, 'type': 'wand', 'dmg': 19, 'regen': 3, 'as': 10, 'manaGen': 1, 'message': 'Pushing past the carcass of the defeated beast, you notice a stick of grass twine bound tightly together. A Simple Magic Wand'},
    'barbed wire blade': {'metatype': 'weapon', 'price': 0, 'type': 'knife', 'dmg': 15, 'regen': -2, 'as': 66, 'bleed' : 20, 'message': 'In the calamity of combat, a barbed wire fence has been bound up tightly into a blade. Razor sharp, even on the handle'},
    'golden garden hoe': {'metatype': 'weapon', 'price': 0, 'type': 'sword', 'dmg': 24, 'as': -20, 'income': 2, 'message': 'Rooting through the carnage, you notice the glimmer of gold surprisingly fashioned to an ordinary tool. Basic, but shiny'},

    'bossUsableExample': {'metatype': 'usable', 'price': 0, 'uses': 0, 'longDescription': 'description', 'type': 'none'},
    'bossMagicExample': {'metatype': 'magic', 'price': 0, 'shortDescription': 'shortDescription', 'longDescription': 'longDescription', 'manaCost': 0},
    'bossStatExample': {'metatype': 'stat', 'price': 0},
//boss items forest
    //TBD

//boss items beach
    //TBD
}