class Grasslands extends Zone {
    constructor(zoneLevel = 1) {
        super(zoneLevel);
        this.maxZoneLevel = 9;
        this.shopCode = [3,2,2,1,1]; //shop gen [weaponNumber, armorNumber, statNumber, usableNumber, magicNumber]
        this.pathGen = [20, //max spaces,
            [['shop', 85, 15, 0, 2], //[shop start, shop grow, shop reset, shop burn],
            ['event', 15, 10, 0, 2], //[event start, event grow, event reset, event burn],
            ['rest', 5, 5, 5, 2], //[rest start, rest grow, rest reset, rest burn],
            ['enemy', 50, 25, 30, 0]], //[enemy start, enemy grow, enemy reset, enemy burn],
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
        this.zoneEnemies = {
            0: ['lady bug', 'ant', 'cricket', 'grasshopper', 'fly', 'worm'],
            1: ['caterpillar', 'centipede', 'flea', 'mantis', 'dragon fly', 'moth'],
            2: ['black beetle', 'blue beetle', 'red beetle', 'green beetle', 'yellow beetle', 'brown beetle'],
            3: ['rabbit', 'bunny', 'hare', 'bunny-rabbit', 'guinea pig', 'pika'],
            4: ['mole', 'prairie dog', 'gopher', 'ground squirrel', 'mole-rat', 'meerkat'],
            5: ['sparrow', 'swallow', 'lark', 'dove', 'burrow owl', 'quail'],
            6: ['prairie dog', 'badger', 'ferret', 'jackrabbit', 'skunk', 'weasel'],
            7: ['deer', 'antelope', 'impala', 'wildebeast', 'pronghorn', 'gazelle'],
            8: ['fox', 'coyote', 'mongoose', 'bobcat', 'jackal', 'hyena']
        };

        this.xpDist = {
            0 : 8,
            1 : 8,
            2 : 8,
            3 : 9,
            4 : 9,
            5 : 9,
            6 : 10,
            7 : 10,
            8 : 10
        }
        this.bossXp = 20;

        this.zoneBosses = [
            'hairy g.o.a.t.',
            'big fat bison'
        ];

        this.bossWeapon = [
            'hooved javelin',
            'long grass wand',
            'barbed wire blade',
            'golden garden hoe'
        ]

        this.bossUsable = [
            'animal fat bomb',
            'ground enforcements'
        ]

        this.bossMagic = [
            'speed sap',
            'skin graft'
        ]

        this.bossArmor = [
            'fat fur coat',
            'tight straw pants'
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