class Forest extends Zone {
    constructor(zoneLevel = 1) {
        super(zoneLevel);
        this.maxZoneLevel = 9;
        this.shopCode = [3,3,3,2,1]; //shop gen [weaponNumber, armorNumber, statNumber, usableNumber]
        this.pathGen = [20, //max spaces,
            [['shop', 50, 15, 0], //[shop start, shop grow, shop reset],
            ['event', 30, 15, 0], //[event start, event grow, event reset],
            ['rest', 5, 5, 5], //[rest start, rest grow, rest reset],
            ['enemy', 50, 15, 35]], //[enemy start, enemy grow, enemy reset],
            { // set consistent levels here
                0 : 'empty',
                16 : 'pathEvent',
                20 : 'boss'
            }];
        this.zoneLable = 'forest';
        this.zoneMessage = 'A narrow path, surrounded by trees...';
        //could also do this through classes if you wanted to add more complex behavior to individual enemies
        this.enemyStats = {
            //zoneLevel : [
            //  [name, type, health, attackspeed, damage, armor, gold, regen, difficultyChange, complexStats]
            //  ...
            ///]
            0: [
                ['large worm', 'bug', 45, 0, 7, 1, 11, 2, 0],
                ['bark beetle', 'bug', 25, 5, 8, 5, 13, 1, 0],
                ['shieldbug', 'bug', 36, -24, 6, 5, 12, 1, 0],
                ['hawk', 'bird', 42, 5, 5, 1, 15, 2, 0, {'dodge':18}],
                ['owl', 'bird', 60, -15, 5, 2, 14, 1, 0, {'dodge':10}],
                ['bat', 'bird', 28, -90, 15, 1, 12, 1, 0, {'dodge':25}]
            ],
            1: [
                ['boar', 'critter', 60, 50, 7, 1, 14, 2, 0, {'tear':1}],
                ['elk', 'hoofed', 72, -30, 7, 3, 17, 0, 0],
                ['wolf', 'critter', 68, 120, 6, 0, 16, 0, 0],
                ['falcon', 'bird', 48, -75, 9, 2, 15, 1, 0, {'dodge':25}],
                ['red fox', 'critter', 46, -20, 8, 1, 14, 3, 0],
                ['koala', 'critter', 52, -95, 12, 0, 6, 4, 0]
            ],
            2: [
                ['green slime', 'slime', 65, 0, 11, 1, 18, 4, 0],
                ['lime slime', 'slime', 65, 0, 11, 4, 20, 1, 0],
                ['shrunk elf', 'elf', 45, 80, 8, 0, 19, 5, 0],
                ['little goblin', 'goblin', 60, 130, 7, 1, 18, 3, 0],
                ['reindeer', 'hoofed', 85, -65, 18, 1, 21, 3, 0],
                ['massic termite', 'bug', 75, -33, 13, 3, 22, 0, 0]
            ],
            3: [
                ['brown bear', 'critter', 100, -90, 22, 6, 25, 1, 0, {'tear':2}],
                ['black bear', 'critter', 100, -70, 18, 6, 25, 1, 0, {'tear':2}],
                ['moose', 'critter', 120, 55, 16, 3, 29, 3, 0, {'shatter':2}],
                ['gorilla', 'critter', 95, -30, 17, 7, 26, 1, 0, {'shatter':8}],
                ['chimpanzee', 'critter', 75, 33, 17, 5, 33, 3, 0, {'dodge':40}],
                ['anaconda', 'snake', 168, -225, 34, 9, 28, 1, 0, {'shatter':80}]
            ],
            4: [
                ['elven scout', 'elf', 80, 45, 16, 0, 38, 4, 0, {'dodge':25}],
                ['elven gatherer', 'elf', 185, 44, 23, 1, 44, 7, 0],
                ['elven rancher', 'elf', 120, -100, 30, 1, 46, 7, 0, {'dodge':15}],
                ['goblin', 'goblin', 105, 120, 14, 2, 42, 5, 0, {'dodge':16}],
                ['forest snuffler', 'critter', 170, -130, 26, 2, 8, 4, 0, {'tear':3,'shatter':50}],
                ['living sap-ooze', 'slime', 120, 200, 6, 0, 33, 4, 0, {'shatter':8}]
            ],
            5: [
                ['pixie', 'fairy', 5, 0, 28, 1, 65, 1, 0, {'dodge':85}],
                ['sentry bird', 'bird', 115, 100, 21, 1, 42, 3, 0, {'dodge':25}],
                ['goblin clawer', 'goblin', 105, 45, 27, 5, 47, 1, 0, {'tear':1}],
                ['elven charger', 'elf', 140, -150, 36, 1, 46, 4, 0, {'dodge':11,'shatter':50}],
                ['mint slime', 'slime', 110, 0, 28, 1, 49, 4, 0, {'lifedrain':10}],
                ['forest-green slime', 'slime', 100, 0, 32, 7, 48, 1, 0, {'lifedrain':10}]
            ],
            6: [
                ['leaf wisp', 'wisp', 88, -44, 44, -12, 51, 12, 0, {'dodge':12}],
                ['tree wisp', 'wisp', 88, -22, 44, -14, 53, 9, 0, {'dodge':12}],
                ['mist wisp', 'wisp', 88, -44, 44, -12, 52, 12, 0, {'dodge':12}],
                ['spirit snake', 'snake', 65, 55, 27, 2, 53, 2, 0, {'lifedrain':45}],
                ['goblin ranger', 'goblin', 160, -50, 39, 5, 51, 4, 0, {'dodge':25}],
                ['walking weed', 'plant', 160, -33, 25, 4, 53, 1, 0,{'lifedrain':25,'shatter':33}]
            ],
            7: [
                ['tribal dryad', 'dryad', 136, 50, 36, 8, 59, 4, 0, {'tear':3}],
                ['hunter dryad', 'dryad', 136, -33, 41, 12, 58, 2, 0, {'shatter':40}],
                ['harvesting dryad', 'dryad', 136, -150, 65, 3, 65, 8, 0, {'lifedrain':8}],
                ['healer dryad', 'dryad', 136, -60, 50, 2, 58, 6, 0,{'lifedrain':28}],
                ['sprinter dryad', 'dryad', 136, 75, 29, 4, 57, 3, 0, {'dodge':30}],
                ['knight dryad', 'dryad', 136, -33, 34, 13, 60, 1, 0, {"shatter":80}]
            ],
            8: [
                ['goblin commander', 'goblin', 170, 50, 33, 1, 82, -2, 0],
                ['elf chieftain', 'elf', 170, -120, 33, 4, 83, 2, 0, {'dodge':25}],
                ['forest wisp', 'wisp', 160, 16, 44, -18, 81, 7, 0, {'dodge':12}],
                ['dryad prince', 'dryad', 190, -45, 45, 3, 83, 9, 0, {'lifedrain':8}],
                ['possessed grizzly', 'critter', 200, -180, 76, 6, 84, -4, 0, {'tear':4}],
                ['forest slime', 'slime', 150, 65, 12, 0, 86, 6, 0,{'shatter':8,'lifedrain':25}]
            ]
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

        this.bossStats = [
            ['the goblin king', 'goblin', 240, -95, 65, 8, 120, 3, 0, {'shatter':55}],//Once we've established the systems for multiple enemies, this fight will primarily revolve around weak goblins high attack rate goblins being summoned by the king with a low attack rate
            ['the elven mystic', 'elf', 186, 0, 36, 2, 120, 8, 0, {'dodge':30,'tear':1}],
            ['the dryad oracle', 'dryad', 280, -80, 42, 20, 120, 3, 0, {'lifedrain':55,'shatter':30}]
        ];

        this.bossRewards = [
            'bossRewardItem1',
            'bossRewardItem2',
            'bossRewardItem3'
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