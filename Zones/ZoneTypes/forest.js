class Forest extends Zone {
    constructor(zoneLevel = 1) {
        super(zoneLevel);
        this.maxZoneLevel = 9;
        this.shopCode = [3,3,3,2,1]; //shop gen [weaponNumber, armorNumber, statNumber, usableNumber]
        this.pathGen = [20, //max spaces,
            [['shop', 50, 15, 0, 2], //[shop start, shop grow, shop reset, shop burn],
            ['event', 30, 15, 0, 2], //[event start, event grow, event reset, event burn],
            ['rest', 5, 5, 5, 2], //[rest start, rest grow, rest reset, rest burn],
            ['enemy', 50, 15, 35, 0]], //[enemy start, enemy grow, enemy reset, enemy burn],
            { // set consistent levels here
                0 : 'empty',
                16 : 'pathEvent',
                20 : 'boss'
            }];
        this.zoneLable = 'forest';
        this.zoneMessage = 'A narrow path, surrounded by trees...';
        //could also do this through classes if you wanted to add more complex behavior to individual enemies
        this.zoneEnemies = {
            0: ['large worm', 'bark beetle', 'shieldbug', 'hawk', 'owl', 'bat'],
            1: ['boar', 'elk', 'wolf', 'falcon', 'red fox', 'koala'],
            2: ['green slime', 'lime slime', 'shrunk elf', 'little goblin', 'reindeer', 'massic termite'],
            3: ['brown bear', 'black bear', 'moose', 'gorilla', 'chimpanzee', 'anaconda'],
            4: ['elven scout', 'elven gatherer', 'elven rancher', 'goblin', 'forest snuffler', 'living sap-ooze'],
            5: ['pixie', 'sentry bird', 'goblin clawer', 'elven charger', 'mint slime', 'forest-green slime'],
            6: ['leaf wisp', 'tree wisp', 'mist wisp', 'spirit snake', 'goblin ranger', 'walking weed'],
            7: ['tribal dryad', 'hunter dryad', 'harvesting dryad', 'healer dryad', 'sprinter dryad', 'knight dryad'],
            8: ['goblin commander', 'elf chieftain', 'forest wisp', 'dryad prince', 'possessed grizzly', 'forest slime']
        };

        this.xpDist = {
            0 : 10,
            1 : 10,
            2 : 10,
            3 : 11,
            4 : 11,
            5 : 11,
            6 : 12,
            7 : 12,
            8 : 12
        }
        this.bossXp = 30;

        this.zoneBosses = [
            'the goblin king',
            'the elven mystic',
            'the dryad oracle'
        ];

        this.bossWeapon = [
            'magic thick rod',
            'long grass wand',
            'barbed wire blade',
            'elven dryad staff'
        ]

        this.bossUsable = [
            'razor paper stars',
            'the hungry bag'
        ]

        this.bossMagic = [
            'river draft',
            'wood chuck'
        ]

        this.bossArmor = [
            'magician\'s vest',
            'light leave leggings'
        ]

        //could assign this in the parent class if this distribution holds across zones
        this.levelDifficultyDist = {
            //zoneLevel : [easyPercent, mediumPercent] (hard is excluded because it is defaulted to)
            1: [0.50, 1.00],
            2: [0.28, 0.85],
            3: [0.28, 0.85],
            4: [0.28, 0.90],
            5: [0.28, 0.90],
            6: [0.28, 0.85],
            7: [0.35, 0.75],
            8: [0, 0.25],
            9: [0, 0]
        }

        this.zoneItems = [
            'copper hand axe',
            'copper battle axe',
            'copper short sword',
            'copper long sword',
            'bronze hand axe',
            'bronze battle axe',
            'bronze short sword',
            'bronze long sword',
            'bark bat',
            'elven gloves',
            'goblin claws',
            'charcoal spear',
            'ornate dagger',
            'elven dagger',
            'bark cleaver',
            'water oak staff',
            'dryad staff',
            'leaf-rope whip',
            'elf whip',
            'dryad sleeve',
            
            'leather cap',
            'leaf beret',
            'bark helmet',
            'forest turban',
            'leaf headband',
            'elven visor',
            'crystal headdress',
            'dryad bonnet',
            'pinecone helmet',
            'wrapped snake',
            
            'copper chestplate',
            'bronze chestplate',
            'bark chestplate',
            'elven robes',
            'wolf pelt',
            'dryad coat',
            'razor leaf coat',
            'goblin garment',
            'sewed leaf shirt',
            'pinecone chain mail',
            
            'copper leggings',
            'bronze leggings',
            'leafy pants',
            'bark shinguards',
            'elven skirt',
            'dryad stockings',
            'goblin skin-leggings',
            'camouflage pants',
            'pineneedle pants',
            
            'forest sandals',
            'leather boots',
            'steel-toed boots',
            'bark clogs',
            'bronze boots',
            'goblin loafers',
            'elven shoes',
            'dryad boots',
            'hollowed out fish',
            'locust wrap feet',
            'maple leef sandals',
            'hardened sap shoes',
            
            'shiny apple',
            'dark red apple',
            'white chocolate bar',
            'milk',
            'water canteen',
            'bass fish',
            'cat fish',
            'perch fish',
            'trout',
            'salmon',
            'blood acorn',
            'elven trinket',
            'sluggish mushrooms',
            'pinecone pudding',
            'heal ointment',
            'cooked chicken',
            'battle blood',
            'bucket of ice',
            'carrot',
            'medium bond',
            'golden fish',
            'bark pamphlette',
            'small gold rune',
            'charcoal tonic',
            'dryad scrap',
            'transfixed sap',

            'goblin bomb',
            'dryad throwing leaves',
            'elf bandages',
            'elven battle book',
            'dryad battle book',
            'goblin sacks',
            'dryad berries',
            'pine needle attachments',
            'pine cone attachments',
            'elven nectar',
            'dryad root potion',

            'spirit invocation',
            'goblin fire dance',
            'grass overgrowth',
            'elf rumination',
            'dryad pose',
            'armor recover',
            'daydream',
            'rock drop'
        ];

        this.zoneEvents = [
            //[first possible space, last possible space, event id]
            [1, 5, 'A Long River'],
            [3, 6, "The Wanderer's Trailmix"],
            [5, 8, "A Bird's Nest"],
            [6, 10, 'The Trapped Totem'],
            [9, 12, 'Friendly Elves'],
            [11, 14, 'A Deep Fog'],
            [12, 19, 'The Cave Shrine'],
            [16, 19, 'The Goblin Village']
            
        ];

        this.zoneRests = [
            [1, 19, 'A Tree House', 0.33],
            [1, 19, 'A Dryad Temple', 0.66],
            [1, 19, 'A Dam', 1]
        ];

        this.pathEvent = 'The End of the Forest';
    }
    
    advanceToNextZone(){
        setBackgroundZone(3); 
        return new Beach(this.game);
    }
}