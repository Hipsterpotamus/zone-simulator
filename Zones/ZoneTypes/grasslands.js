class Grasslands extends Zone {
    constructor(zoneLevel = 1) {
        super(zoneLevel);
        this.maxZoneLevel = 9;
        this.shopCode = [3,2,2,1,1]; //shop gen [weaponNumber, armorNumber, statNumber, usableNumber, magicNumber]
        this.pathGen = [20, //max spaces,
            [['shop', 85, 15, 0], //[shop start, shop grow, shop reset],
            ['event', 15, 10, 0], //[event start, event grow, event reset],
            ['rest', 5, 5, 5], //[rest start, rest grow, rest reset],
            ['enemy', 50, 25, 30]], //[enemy start, enemy grow, enemy reset],
            { // set consistent levels here
                0 : 'empty',
                1 : 'enemy',
                2 : 'shop',
                14 : 'pathEvent',
                20 : 'boss'
            }];
        this.zoneLable = 'grassland';
        this.zoneMessage = 'Flowing grass, and a dusty trail...';
        //could also do this through classes if you wanted to add more complex behavior to individual enemies
        this.enemyStats = {
            //zoneLevel : [
            //  [name, type, health, attackspeed, damage, armor, gold, regen, difficultyChange, complexStats]
            //  ...
            ///]
            0: [
                ['lady bug', 'bug', 6, -10, 1, 0, 5, 0, 0],
                ['ant', 'bug', 4, 20, 1, 0, 6, 0, 0],
                ['cricket', 'bug', 4, 10, 1, 0, 5, 0, 0],
                ['grasshopper', 'bug', 5, 0, 1, 0, 5, 0, 0],
                ['fly', 'bug', 3, 35, 1, 0, 5, 0, 0],
                ['worm', 'bug', 11, -150, 2, 0, 6, 0, 0]
            ],
            1: [
                ['caterpillar', 'bug', 12, 0, 1, 0, 7, 0, 0],
                ['centipede', 'bug', 16, -30, 1, 0, 7, 0, 0],
                ['flea', 'bug', 8, 0, 2, 0, 6, 0, 0],
                ['mantis', 'bug', 9, 35, 2, 0, 7, 0, 0],
                ['dragon fly', 'bug', 13, -40, 2, 0, 8, 0, 0],
                ['moth', 'bug', 8, 40, 1, 0, 6, 0, 0]
            ],
            2: [
                ['black beetle', 'bug', 14, 0, 1, 1, 8, 0, 0],
                ['blue beetle', 'bug', 13, 5, 1, 1, 8, 0, 0],
                ['red beetle', 'bug', 12, 10, 1, 1, 8, 0, 0],
                ['green beetle', 'bug', 15, -5, 1, 1, 8, 0, 0],
                ['yellow beetle', 'bug', 16, -10, 1, 1, 8, 0, 0],
                ['brown beetle', 'bug', 17, -15, 1, 1, 8, 0, 0]
            ],
            3: [
                ['rabbit', 'critter', 18, 20, 2, 0, 8, 0, 0],
                ['bunny', 'critter', 14, 45, 2, 0, 6, 0, 0],
                ['hare', 'critter', 21, 0, 2, 0, 8, 0, 0],
                ['bunny-rabbit', 'critter', 16, 32, 2, 0, 7, 0, 0],
                ['guinea pig', 'critter', 25, 0, 1, 0, 9, 0, 0],
                ['pika', 'critter', 15, 70, 1, 0, 8, 0, 0]
            ],
            4: [
                ['mole', 'critter', 20, -100, 5, 0, 8, 0, 0],
                ['prairie dog', 'critter', 20, 45, 3, 0, 8, 0, 0],
                ['gopher', 'critter', 20, -100, 3, 1, 8, 0, 0],
                ['ground squirrel', 'critter', 20, -120, 4, 1, 8, 0, 0],
                ['mole-rat', 'critter', 20, -160, 5, 1, 8, 0, 0],
                ['meerkat', 'critter', 20, -70, 2, 0, 8, 1, 0]
            ],
            5: [
                ['sparrow', 'bird', 24, 0, 4, 1, 8, 0, 0, {'dodge':25}],
                ['swallow', 'bird', 27, 20, 4, 1, 9, 0, 0, {'dodge':25}],
                ['lark', 'bird', 22, 25, 3, 2, 11, 0, 0, {'dodge':33}],
                ['dove', 'bird', 18, -15, 3, 1, 12, 0, 0, {'dodge':51}],
                ['burrow owl', 'bird', 21, -120, 5, 1, 9, 1, 0, {'dodge':33}],
                ['quail', 'bird', 30, -20, 5, 2, 12, 1, 0]
            ],
            6: [
                ['prairie dog', 'critter', 30, -80, 6, 1, 8, 1, 0],
                ['badger', 'critter', 32, 20, 4, 2, 11, 0, 0],
                ['ferret', 'critter', 38, -30, 5, 2, 10, 0, 0],
                ['jackrabbit', 'critter', 28, 25, 4, 1, 10, 1, 0, {'dodge':10}],
                ['skunk', 'critter', 29, -700, 20, 2, 12, 1, 0],
                ['weasel', 'critter', 26, 40, 5, 2, 10, 1, 0]
            ],
            7: [
                ['deer', 'hoofed', 48, 10, 4, 2, 13, 1, 0, {"dodge":20}],
                ['antelope', 'hoofed', 52, -10, 5, 1, 13, 1, 0],
                ['impala', 'hoofed', 54, 25, 3, 1, 10, 1, 0],
                ['wildebeast', 'hoofed', 65, -60, 7, 2, 18, 1, 0],
                ['pronghorn', 'hoofed', 50, 20, 4, 1, 10, 2, 0],
                ['gazelle', 'hoofed', 42, 20, 3, 2, 13, 1, 0, {"dodge":40}]
            ],
            8: [
                ['fox', 'critter', 56, 25, 5, 2, 15, 1, 0],
                ['coyote', 'critter', 62, -33, 7, 0, 16, 3, 0],
                ['mongoose', 'critter', 40, 15, 6, 0, 12, 2, 0],
                ['bobcat', 'critter', 80, 10, 10, 2, 24, 1, -1],
                ['jackal', 'critter', 50, 10, 7, 1, 12, 1, 0, {'dodge':20}],
                ['hyena', 'critter', 70, 0, 9, 1, 20, 2, 0]
            ]
        };

        this.xpDist = {
            0 : 2,
            1 : 3,
            2 : 4,
            3 : 5,
            4 : 6,
            5 : 7,
            6 : 8,
            7 : 9,
            8 : 10
        }
        this.bossXp = 20;

        this.bossStats = [
            ['hairy g.o.a.t.', 'critter', 115, -25, 13, 2, 55, 1, 0, {'tear':2}],
            ['big fat bison', 'hoofed', 140, -125, 15, 3, 60, 1, 0]
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
            2: [0.35, 0.80],
            3: [0.35, 0.80],
            4: [0.35, 0.80],
            5: [0.35, 0.85],
            6: [0.35, 0.80],
            7: [0.30, 0.75],
            8: [0, 0.25],
            9: [0, 0]
        }
        
        this.zoneItems = [
            'branch',
            'thistle knife',
            'small dagger',
            'broom',
            'grass whip',
            'wooden sword',
            'bristly twig',
            'wooden axe',
            'thick rod',
            'cobblestone sword',
            'rock on stick',
            'boxing gloves',
            'stone short sword',
            'stone long sword',
            'grass knuckles',
            'glass bar',

            'grass hat',
            'ballcap',
            'mud helmet',
            'propeller hat',
            'headband',

            'cotton shirt',
            'grass robe',
            'leather tunic',
            'wooden chestplate',
            'animal pelt',

            'overalls',
            'grass skirt',
            'hiking pants',
            'basic shorts',
            'hoola hoop',
            'jorts',

            'straw shoes',
            'running shoes',
            'walking beets',
            'soccer cleats',
            'hiking shoes',
            'work boots',

            'green apple',
            'red apple',
            'chocolate bar',
            'protein shake',
            'grapefruit',
            'strawberry',
            'ice cube',
            'water bottle',
            "morsel o' meat",
            'honey comb',
            'beef stew',
            'artichoke',
            'dragonfruit',
            'cheese burger',
            'leaflet scarf',
            'banana',
            'apricot',
            'small bond',
            'pamphlet',
            'blue rock',
            'magic charm',
            'tiny gold rune',

            'firecracker',
            'throwing eggs',
            'bandages',
            'first aid kit',
            'sharpening stone',

            'shock',
            'growth spurt',
            'blood splash',
            'grass disarm',
            'blood let',
            'chill'
        ];

        this.zoneEvents = [
            //[first possible space, last possible space, event id]
            [1, 3, 'A Tall Tree'],
            [3, 6, 'Clothes Cast Aside'],
            [2, 5, 'The Traveler'],
            [4, 9, 'A Gemstone?'],
            [8, 12, 'The Horn'],
            [11, 17, 'Wild Fire'],
            [14, 19, 'Oil Fissure']
        ];

        this.zoneRests = [
            [1, 19, 'A Cozy Village', 0.4],
            [1, 19, 'A Pond', 0.8],
            [1, 19, 'A Hut', 1]
        ];

        this.pathEvent = 'A Fork In The Road';
    }
    advanceToNextZone(){
        setBackgroundZone(2); 
        return new Forest(this.game);
    }
}