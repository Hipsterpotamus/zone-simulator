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
                ['coachwhip', 'reptile', 100, 40, 45, 8, 59, 2, 0, {'bleed':20}],
                ['turtlean scout', 'turtlean', 130, -28, 50, 12, 58, 1, 0, {'dodge':40}],
                ['turtlean healer', 'turtlean', 130, -100, 65, 8, 55, 8, 0, {'lifedrain':40}]
            ],
            4: [
                ['crabwalker officer', 'crabwalker', 130, 75, 35, 12, 62, 4, 0, {'bleed':30,'lifedrain':25,'shatter':30}],
                ['crabwalker vanguard', 'crabwalker', 130, 75, 35, 4, 63, 12, 0], {'bleed':30,'lifedrain':25,'shatter':30},
                ['crabwalker tactician', 'crabwalker', 110, 75, 35, 3, 61, 9, 0, {'dodge':40,'bleed':30,'lifedrain':25,'shatter':30}],
                ['crabwalker sailor', 'crabwalker', 130, 45, 48, 12, 60, 8, 0, {'bleed':30,'lifedrain':12,'shatter':15}],
                ['crabwalker footsoldier', 'crabwalker', 130, -75, 90, 4, 66, 10, 0, {'bleed':30,'lifedrain':25,'shatter':90}],
                ['crabwalker legionnaire ', 'crabwalker', 130, 75, 35, 9, 65, 4, 0, {'tear':4,'bleed':50,'lifedrain':25,'shatter':30}]
            ],
            5: [
                ['mermaid prole', 'mermaid', 160, 0, 70, 5, 67, 12, 0, {'dodge':15}],
                ['mermaid watchman', 'mermaid', 160, -50, 105, 6, 66, 12, 0, {'dodge':15}],
                ['mermaid spear-man', 'mermaid', 160, 25, 56, 6, 68, 12, 0, {'tear':3}],
                ['mermaid guard', 'mermaid', 180, -30, 85, 10, 67, 12, 0, {'dodge':20}],
                ['beach slime ', 'slime', 140, 130, 30, 4, 65, 13, 0, {'shatter':50}],
                ['sand slime', 'slime', 140, 130, 30, 13, 68, 4, 0, {'shatter':50}]
            ],
            6: [
                ['crabwalker admiral', 'crabwalker', 230, 75, 50, 13, 66, 4, 0, {'bleed':20}],
                ['crabwalker corporal', 'crabwalker', 210, 75, 50, 13, 68, 6, 0, {'bleed':20}],
                ['crabwalker lieutenant', 'crabwalker', 220, 75, 50, 14, 67, 5, 0, {'bleed':20}],
                ['turtlean rider', 'turtlean', 240, -250, 150, 22, 53, 4, 0, {'lifedrain':45}],
                ['turtlean strongman', 'turtlean', 240, -350, 150, 22, 51, 4, 0, {'dodge':25}],
                ['turtlean enbalmer', 'turtlean', 240, -350, 150, 22, 53, 4, 0,{'lifedrain':25,'shatter':33}]
            ],
            7: [
                ['beach thief', 'human', 210, 33, 61, 8, 71, 5, 0, {'bleed':20,'tear':6}],
                ['evil surfer', 'human', 230, -50, 73, 12, 72, 10, 0, {'dodge':15}],
                ['mermaid lancer', 'dryad', 220, -200, 129, 8, 73, 14, 0, {'shatter':80}],
                ['mermaid catapulter', 'dryad', 260, -340, 250, 24, 71, 4, 0,{'shatter':150}],
                ['sea cobra', 'reptile', 240, 50, 60, 4, 72, 14, 0, {'lifedrain':30,'bleed':60}],
                ['giant urchin', 'dryad', 270, -44, 68, 3, 70, 14, 0, {"thorns":40}]
            ],
            8: [
                ['turtlean headman', 'turtlean', 320, -250, 190, 38, 82, 2, 0,{'thorns':10}],
                ['mermaid knight', 'elf', 290, 30, 80, 12, 83, 15, 0, {'bleed':55}],
                ['beach wisp', 'wisp', 222, 111, 66, -22, 81, 16, 0, {'dodge':18}],
                ['possessed shipwreck', 'object', 450, -35, 65, 26, 83, 0, 0, {'shatter':50,'bleed':50}],
                ['washed up pirate', 'pirate', 220, 85, 80, 3, 94, 8, 0, {'bleed':60,'tear':5}],
                ['massive scorpo-lobster', 'bug', 280, 100, 80, 5, 86, 14, 0,{'shatter':20,'lifedrain':25}]
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
            'mermaid javelin',
            'mermaid water-sling',
            'turtle boomerang',
            'driftwood club',
            'whale tooth axe',
            'iron helmet',
            'steel helmet',

            'sailor cap',
            'pirate hat',
            'mermaid headress',
            'turtle shell-met',
            'razor seaweed hair',
            'rubber boot hat',
            'crabwalker beret',
            'paperboat hat',
            'crabwalker fedora',
            'fisherman bucket hat',
            'coconut helmet',

            'iron chestplate',
            'steel chestplate',
            'seashell chestplate',
            'sharkskin vest',
            'coral chestplate',
            'turtlean shell',
            'seaweed wrap',
            'taped water bags',
            'rubber tire',
            'swim shirt',
            'pirate captain coat',
            
            'iron leggings',
            'steel leggings',
            'mermaid scale leggings',
            'turtle skin joggers',
            'swim trunks',
            'triple layer jeans',
            'floatie',
            'crabwalker-shed loins',
            'turtlean leg garb',
            'urchin patch pants',
            'dolphin leather pants',
            'fisherman overalls',
            'pirate pants',
            
            'iron boots',
            'steel boots',
            'water shoes',
            'coral sandals',
            'sharkskin boots',
            'turtle shell shoes',
            'crab feet shoes',
            'mermaid fin sandals',
            'sandbag shoes',
            'pirate boots',
            'peglegs',
            'coconut shoes',
            
            'yellow apple',
            'cooked apple',
            'sea smoothie',
            'coconut',
            'crabstew',
            'delicious lobster',
            'tasty crab',
            'popsicle',
            'blue oyster',
            'red oyster',
            'black oyster',
            'green oyster',
            'orange oyster',
            'grey oyster',
            'golden oyster',
            'shrimp pallette',
            'edible sand',
            'turtle shell soup',
            'magic seashell',
            'playing cards',
            'pelican heart',
            'mystic sand dollar',
            'watermelon',
            'pineapple',
            'mango',
            'kiwi',
            'beach bond',
            
            'shell attachments',
            'clam attachments',
            'urchin attachments',
            'health bundle',
            'throwing sand',
            'throwing shells',
            'mermaid ointment',
            'pirate bag',
            'crab legs',
            'mermaid gill potion',
            'turtlean shell potion',

            'sand wave',
            'beach day',
            'seashell summon',
            'blood suck',
            'sea chill',
            'heal pull',
            'mental sharpen',
            'blood infusion'
            
        ];

        this.zoneEvents = [
            //[first possible space, last possible space, event id]
            [1, 4, 'A Campfire'],
            [3, 5, "The Abandoned Surfboards"],
            [4, 7, "The Rock Bank"],
            [6, 10, 'A Sandstorm'],
            [8, 13, 'Very Happy Tourists'],
            [10, 15, 'A Growing Beach Mold'],
            [12, 19, 'The Life-sized Sand Castle'],
            [16, 19, 'A Turtlean Birth']
            
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