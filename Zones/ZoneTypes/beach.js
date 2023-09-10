class Beach extends Zone {
    constructor(zoneLevel = 1) {
        super(zoneLevel);
        this.maxZoneLevel = 9;
        this.shopCode = [3,3,3,2,1]; //shop gen [weaponNumber, armorNumber, statNumber, usableNumber]
        this.pathGen = [20, //max spaces,
            [['shop', 50, 15, 0, 1], //[shop start, shop grow, shop reset, shop burn],
            ['event', 30, 15, 0, 1], //[event start, event grow, event reset, event burn],
            ['rest', 5, 5, 5, 1], //[rest start, rest grow, rest reset, rest burn],
            ['enemy', 50, 20, 10, 0]], //[enemy start, enemy grow, enemy reset, enemy burn],
            { // set consistent levels here
                0 : 'empty',
                10 : 'pathEvent',
                20 : 'boss'
            }];
        this.zoneLable = 'beach';
        this.zoneMessage = 'The smell of sea, and a sandy beach...';
        //could also do this through classes if you wanted to add more complex behavior to individual enemies
        this.zoneEnemies = {
            0: ['spiky sand dollar', 'seastar', 'living seashell', 'living sea moss', 'possessed flotsam', 'enchanted sea fossil'],
            1: ['massive pelican', 'massive seagull', 'violent flamingo', 'heroic heron', 'demon plover', 'large albatross'],
            2: ['red lobster', 'black lobster', 'brown lobster', 'red scorpion', 'black scorpion', 'brown scorpion'],
            3: ['iguana', 'sea turtle', 'sea snake', 'coachwhip', 'turtlean scout', 'turtlean healer'],
            4: ['crabwalker officer', 'crabwalker vanguard', 'crabwalker tactician', 'crabwalker sailor', 'crabwalker footsoldier', 'crabwalker legionnaire'],
            5: ['mermaid prole', 'mermaid watchman', 'mermaid spear-man', 'mermaid guard', 'beach slime', 'sand slime'],
            6: ['crabwalker admiral', 'crabwalker corporal', 'crabwalker lieutenant', 'turtlean rider', 'turtlean strongman', 'turtlean enbalmer'],
            7: ['beach thief', 'evil surfer', 'mermaid lancer', 'mermaid catapulter', 'sea cobra', 'giant urchin'],
            8: ['turtlean headman', 'mermaid knight', 'beach wisp', 'possessed shipwreck', 'washed up pirate', 'massive scorpo-lobster']
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

        this.zoneBosses = [
            'hairy g.o.a.t.'
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
            [1, 19, 'A Coconut Tree', 0.33],
            [1, 19, 'A Scenic Lookout', 0.75],
            [1, 19, 'Lazy River', 1]
        ];

        this.pathEvent = 'A Desert on the Horizon';
    }
    
    advanceToNextZone(){
        setBackgroundZone(4);
        return new Forest(this.game);
    }
}