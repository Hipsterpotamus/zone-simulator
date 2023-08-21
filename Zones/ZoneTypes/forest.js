class Forest extends Zone {
    constructor(zoneLevel = 1) {
        super(zoneLevel);
        this.maxZoneLevel = 9;
        this.shopType = [3,2,3,1]; //shop gen [weaponNumber, armorNumber, statNumber, itemNumber]
        this.pathGen = [14, 0.50, 0.15, 0, 0.15, 0.09, 0, 0.05, 0.05, 0.05]; //path gen, shop start, shop grow, shop reset, event start, event grow, event reset, rest start, rest grow, rest reset
        this.zoneLable = 'forest';
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
                ['boar', 'critter', 60, 35, 7, 1, 14, 2, 0, {'tear':1}],
                ['elk', 'hoofed', 72, -30, 7, 3, 17, 0, 0],
                ['wolf', 'critter', 68, 65, 6, 0, 16, 0, 0],
                ['falcon', 'bird', 48, -75, 9, 2, 15, 1, 0, {'dodge':25}],
                ['red fox', 'critter', 46, -20, 8, 1, 14, 3, 0],
                ['koala', 'critter', 52, -95, 12, 0, 6, 4, 0]
            ],
            2: [
                ['green slime', 'slime', 70, 0, 11, 1, 18, 4, 0],
                ['lime slime', 'slime', 70, 0, 11, 4, 20, 1, 0],
                ['shrunk elf', 'elf', 50, 40, 8, 0, 19, 5, 0],
                ['little goblin', 'goblin', 65, 66, 7, 1, 18, 3, 0],
                ['reindeer', 'hoofed', 90, -65, 18, 1, 21, 3, 0],
                ['massic termite', 'bug', 80, -33, 13, 3, 22, 0, 0]
            ],
            3: [
                ['brown bear', 'critter', 100, -90, 24, 6, 25, 1, 0, {'tear':2}],
                ['black bear', 'critter', 100, -70, 20, 6, 25, 1, 0, {'tear':2}],
                ['moose', 'critter', 140, 33, 16, 3, 29, 3, 0],
                ['gorilla', 'critter', 90, -25, 19, 7, 26, 1, 0],
                ['chimpanzee', 'critter', 85, 28, 17, 5, 33, 3, 0, {'dodge':40}],
                ['anaconda', 'snake', 188, -350, 35, 9, 28, 1, 0]
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
        this.bossStats = [
            ['hairy g.o.a.t.', 'critter', 115, -25, 13, 2, 75, 1, 0, {'tear':2}]
        ];
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
            //[class, item]
            ['weapon', 'branch'],
            ['weapon', 'thistleknife'],
            ['weapon', 'smalldagger'],
            ['weapon', 'grasswhip'],
            ['weapon', 'woodensword'],
            ['weapon', 'bristlytwig'],
            ['weapon', 'woodenaxe'],
            ['weapon', 'thickrod'],
            ['weapon', 'cobblestonesword'],
            ['weapon', 'rockonstick'],
            ['weapon', 'boxinggloves'],
            ['weapon', 'shortsword'],
            ['weapon', 'longsword'],
            ['weapon', 'grassknuckles'],
            ['weapon', 'glassbar'],
            ['head', 'grasshat'],
            ['head', 'ballcap'],
            ['head', 'mudhelmet'],
            ['head', 'propellerhat'],
            ['head', 'headband'],
            ['chest', 'cottonshirt'],
            ['chest', 'grassrobe'],
            ['chest', 'leathertunic'],
            ['chest', 'woodenchestplate'],
            ['chest', 'animalpelt'],
            ['legs', 'overalls'],
            ['legs', 'grassskirt'],
            ['legs', 'hikingpants'],
            ['legs', 'basicshorts'],
            ['legs', 'hoolahoop'],
            ['legs', 'jorts'],
            ['feet', 'strawshoes'],
            ['feet', 'runningshoes'],
            ['feet', 'walkingbeets'],
            ['feet', 'soccercleats'],
            ['feet', 'hikingshoes'],
            ['feet', 'workboots'],
            ['stat', 'greenapple'],
            ['stat', 'redapple'],
            ['stat', 'chocolatebar'],
            ['stat', 'proteinshake'],
            ['stat', 'grapefruit'],
            ['stat', 'strawberry'],
            ['stat', 'icecube'],
            ['stat', 'waterbottle'],
            ['stat', 'morselofmeat'],
            ['stat', 'honeycomb'],
            ['stat', 'beefstew'],
            ['stat', 'artichoke'],
            ['stat', 'dragonfruit'],
            ['stat', 'cheeseburger'],
            ['item', 'firecracker'],
            ['item', 'throwingegg'],
            ['item', 'bandages'],
            ['item', 'firstaidkit'],
            ['item', 'sharpeningstone']
        ];
        this.pushZoneItems();

        this.zoneEvents = [
            //[first possible space, last possible space, event id]
            [2, 3, 'A Tall Tree'],
            [4, 5, 'Clothes Cast Aside'],
            [6, 7, 'The Traveler'],
            [8, 9, 'A Gemstone?'],
            [10, 11, 'The Horn'],
            [12, 13, 'Wild Fire'],
            [14, 19, 'Oil Fissure']
        ];

        this.pathEvent = 'A Fork In The Road';
    }
}