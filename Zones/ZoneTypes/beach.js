class Beach extends Zone {
    constructor(zoneLevel = 1) {
        super(zoneLevel);
        this.maxZoneLevel = 9;
        this.shopCode = [3,3,3,2,1]; //shop gen [weaponNumber, armorNumber, statNumber, usableNumber]
        this.pathGen = [20, //max spaces,
            [['shop', 50, 15, 0], //[shop start, shop grow, shop reset],
            ['event', 30, 15, 0], //[event start, event grow, event reset],
            ['rest', 5, 5, 5], //[rest start, rest grow, rest reset],
            ['enemy', 50, 20, 10]], //[enemy start, enemy grow, enemy reset],
            { // set consistent levels here
                0 : 'empty',
                10 : 'pathEvent',
                20 : 'boss'
            }];
        this.zoneLable = 'beach';
        this.zoneMessage = 'The smell of sea, and a sandy beach...';
        //could also do this through classes if you wanted to add more complex behavior to individual enemies
        this.enemyStats = {
            //zoneLevel : [
            //  [name, type, health, attackspeed, damage, armor, gold, regen, difficultyChange, complexStats]
            //  ...
            ///]
            0: [
                ['spiky sand dollar', 'object', 75, 18, 32, 3, 36, 6, 0, {'thorn':6}],
                ['seastar', 'object', 95, -25, 40, 6, 35, 5, 0, {'thorn':3}],
                ['living seashell', 'object', 86, -180, 66, 0, 33, 10, 0, {'lifedrain':10,'thorn':4}],
                ['living sea moss', 'object', 45, -20, 40, 3, 36, 14, 0, {'thorn':2}],
                ['possessed flotsam', 'object', 60, -15, 28, 2, 35, 11, 0, {'dodge':25,'shatter':30}],
                ['enchanted sea fossil', 'object', 90, -120, 50, 1, 32, 5, 0, {'dodge':25,'lifedrain':15}]
            ],
            1: [
                ['massive pelican', 'bird', 120, -140, 70, 6, 42, 8, 0, {'shatter':30}],
                ['massive seagull', 'bird', 120, -140, 76, 12, 41, 4, 0, {'shatter':40, 'dodge':10}],
                ['violent flamingo', 'bird', 90, 100, 40, 2, 43, 9, 0,{'dodge':15}],
                ['heroic heron', 'bird', 90, -75, 52, 2, 40, 10, 0, {'dodge':25}],
                ['demon plover', 'bird', 90, 250, 28, 1, 41, 3, 0, {'dodge':28,'bleed':10}],
                ['large albatross', 'bird', 120, -95, 82, 0, 48, 5, 0,{'dodge':10}]
            ],
            2: [
                ['red lobster', 'bug', 120, 0, 50, 1, 53, 10, 0,{'bleed':25}],
                ['black lobster', 'bug', 110, 0, 51, 10, 52, 1, 0,{'bleed':25}],
                ['brown lobster', 'bug', 120, 10, 48, 6, 54, 6, 0,{'bleed':25}],
                ['red scorpion', 'bug', 90, -80, 90, 3, 57, 8, 0,{'bleed':45}],
                ['black scorpion', 'bug', 85, -85, 98, 3, 57, 8, 0,{'bleed':45}],
                ['brown scorpion', 'bug', 80, -80, 93, 3, 57, 8, 0,{'bleed':45}]
            ],
            3: [
                ['iguana', 'reptile', 140, -70, 66, 11, 57, 4, 0, {'tear':2}],
                ['sea turtle', 'reptile', 230, -400, 100, 20, 59, 0, 0, {'lifedrain':50}],
                ['sea snake', 'reptile', 140, 120, 42, 5, 56, 7, 0, {'dodge':12}],
                ['coachwhip', 'reptile', 110, 80, 50, 8, 59, 2, 0, {'bleed':20}],
                ['turtlean scout', 'reptile', 130, 28, 50, 8, 58, 4, 0, {'dodge':40}],
                ['turtlean healer', 'reptile', 130, -100, 70, -2, 55, 10, 0, {'lifedrain':40}]
            ],
            4: [
                ['elven scout', 'elf', 90, 33, 16, 0, 38, 4, 0, {'dodge':25}],
                ['elven gatherer', 'elf', 115, 22, 23, 1, 44, 7, 0],
                ['elven rancher', 'elf', 130, -100, 30, 1, 46, 7, 0, {'dodge':15}],
                ['goblin', 'goblin', 115, 66, 14, 2, 42, 5, 0, {'dodge':16}],
                ['forest snuffler', 'critter', 180, -300, 26, 2, 8, 4, 0, {'tear':3,'shatter':50}],
                ['living sap-ooze', 'slime', 120, 70, 6, 0, 33, 4, 0, {'shatter':8}]
            ],
            5: [
                ['pixie', 'fairy', 7, 0, 28, 1, 65, 1, 0, {'dodge':85}],
                ['sentry bird', 'bird', 140, 50, 21, 1, 42, 3, 0, {'dodge':25}],
                ['goblin clawer', 'goblin', 125, 25, 27, 5, 47, 1, 0, {'tear':1}],
                ['elven charger', 'elf', 170, -200, 36, 1, 46, 4, 0, {'dodge':11,'shatter':50}],
                ['mint slime', 'slime', 130, 0, 28, 1, 49, 4, 0, {'lifedrain':10}],
                ['forest-green slime', 'slime', 130, 0, 32, 9, 48, 1, 0, {'lifedrain':10}]
            ],
            6: [
                ['leaf wisp', 'wisp', 88, -22, 44, -2, 51, 14, 0, {'dodge':12}],
                ['tree wisp', 'wisp', 88, 22, 44, -4, 53, 14, 0, {'dodge':12}],
                ['mist wisp', 'wisp', 88, -22, 44, -2, 52, 14, 0, {'dodge':12}],
                ['spirit snake', 'snake', 65, 30, 27, 2, 53, 2, 0, {'lifedrain':45}],
                ['goblin ranger', 'goblin', 180, -50, 39, 5, 51, 4, 0, {'dodge':25}],
                ['walking weed', 'plant', 190, -33, 25, 4, 53, 1, 0,{'lifedrain':25,'shatter':33}]
            ],
            7: [
                ['tribal dryad', 'dryad', 156, 33, 36, 8, 59, 5, 0, {'tear':3}],
                ['hunter dryad', 'dryad', 156, -33, 41, 12, 58, 3, 0, {'shatter':40}],
                ['harvesting dryad', 'dryad', 156, -220, 69, 3, 65, 9, 0, {'lifedrain':8}],
                ['healer dryad', 'dryad', 156, -60, 50, 2, 58, 7, 0,{'lifedrain':28}],
                ['sprinter dryad', 'dryad', 156, 43, 33, 4, 57, 4, 0, {'dodge':30}],
                ['knight dryad', 'dryad', 156, -33, 38, 13, 60, 2, 0, {"shatter":80}]
            ],
            8: [
                ['goblin commander', 'goblin', 170, 50, 44, 2, 82, 2, 0],
                ['elf chieftain', 'elf', 170, -120, 60, 4, 83, 4, 0, {'dodge':25}],
                ['forest wisp', 'wisp', 160, 33, 44, -8, 81, 7, 0, {'dodge':12}],
                ['dryad prince', 'dryad', 190, -25, 50, 3, 83, 11, 0, {'lifedrain':16}],
                ['possessed grizzly', 'critter', 200, -280, 96, 6, 84, -4, 0, {'tear':4}],
                ['forest slime', 'slime', 150, 72, 12, 0, 86, 6, 0,{'shatter':8,'lifedrain':25}]
            ]
        };

        this.xpDist = {
            0 : 13,
            1 : 13,
            2 : 13,
            3 : 14,
            4 : 14,
            5 : 14,
            6 : 15,
            7 : 15,
            8 : 15
        }
        this.bossXp = 40;

        this.bossStats = [
            ['hairy g.o.a.t.', 'critter', 115, -25, 13, 2, 75, 1, 0, {'tear':2}]
        ];

        this.bossWeapon = [
            'hooved javelin',
            'long grass wand',
            'barbed wire blade',
            'golden garden hoe'
        ]

        this.bossUsable = [
            'bossUsableExample'
        ]

        this.bossMagic = [
            'bossMagicExample'
        ]

        this.bossStat = [
            'bossStatExample'
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
                        
            'iron short sword',
            'iron long sword',
            'iron hand axe',
            'iron battle axe',
            'iron sabre',
            'iron trident',
            'steel short sword',
            'steel long sword',
            'steel hand axe',
            'steel battle axe',
            'steel sabre',
            'steel trident',
            'coral mace',
            'shark tooth dagger',
            'pirate cutlass',
            'seaweed whip',
            'pirate cannon',
            'mermaid gloves',
            'crabwalker claws',
            'turtle shell club',

        
            'sailor cap',
            'seashell beret',
            'coral helmet',
            'pirate bandana',
            'beach visor',
            'mermaid tiara',
            'shark fin hat',
            'crab shell bonnet',
            'surfboard helmet',
            'fisherman hat',
        
            'sailor uniform',
            'beach robe',
            'sharkskin vest',
            'coral chestplate',
            'mermaid gown',
            'dolphin leather jacket',
            'crab shell coat',
            'seaweed wrap',
            'fisherman shirt',
            'surfboard chestplate',
        
            'sailor trousers',
            'beach shorts',
            'sharkskin leggings',
            'coral greaves',
            'mermaid tail',
            'dolphin leather pants',
            'crab leg guards',
            'seaweed wrap skirt',
            'fisherman overalls',
            'surfboard leggings',
            
            'flip-flops',
            'water shoes',
            'sharkskin boots',
            'coral sandals',
            'surfboard shoes',
            'pirate boots',
            'jellyfish slippers',
            'crab claw clogs',
            'seashell sandals',
            'fisherman waders',
            'dolphin fin flippers',
            'sunken treasure boots',
            
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
            'dryad root potion'
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
        setBackgroundZone(4);
        return new Forest(this.game);
    }
}