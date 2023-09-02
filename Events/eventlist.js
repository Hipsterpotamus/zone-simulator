// eventName : [eventDescription, [{text : choiceText, effect : choiceEffect}, {text : choiceText, effect : choiceEffect}, ...]]

const EVENTLIST = {
    'A Tall Tree': ['A handful of precarious branches extend from the top of an immaculate fruit tree. Will you make the climb?', [
        {
            text: 'Climb: gain 5 max hp, lose 10 hp',
            effect: function(game) {
                game.player.changeMaxHp(5);
                game.player.changeHp(-10);
            }
        },
        {
            text: 'Walk past: heal 4 hp',
            effect: function(game) {
                game.player.changeHp(4);
            }
        }
    ]],
    'Clothes Cast Aside': ['You find some clothing cast aside in the grass. They are dirty but servicable.', [
        {
            text: 'Gain Clothing: gain two armor pieces, lose 1 level heal',
            effect: function(game) {
                game.player.addSelectableItem(new Equippable(game, 'dirty shirt', {'metatype': 'chest', 'type': 'shirt', 'arm': 1}));
                game.player.addSelectableItem(new Equippable(game, 'dirty pants', {'metatype': 'legs', 'type': 'pants', 'arm': 1}));
                game.player.changeStat('levelheal', -1);
            }
        },
        {
            text: 'Walk past: heal 1 hp',
            effect: function(game) {
                game.player.changeHp(1);
            }
        }
    ]],
    'The Traveler': ['A grizzled traveler pushing a cart passes by. He grumbles about dead weight in his cart and offers you some old items he no longer has a use for', [
        {
            text: 'Buy Garden Hoe: Gain a garden hoe, lose 7 gold',
            effect: function(game) {
                if (game.player.gold < 7) { return;}
                game.player.changeGold(-7);
                game.player.addSelectableItem(new Equippable(game, 'garden hoe', {'metatype': 'weapon', 'type': 'none', 'dmg': 8, 'as':-15}));
            }
        },
        {
            text: 'Buy Farmer Hat: Gain a farmer hat, lose 4 gold',
            effect: function(game) {
                if (game.player.gold < 4) { return;}
                game.player.changeGold(-4);
                game.player.addSelectableItem(new Equippable(game, 'garden hoe', {'metatype': 'head', 'type': 'hat', 'arm': 2}));
            }
        },
        {
            text: 'Buy Nothing: gain nothing',
            effect: function(game) {
                
            }
        }
    ]],
    'A Gemstone?': ['Lying in the middle of the road is a peculiar looking rock. You try to pry it open to see if anything valuable is inside. Attempt to break', [
        {
            text: 'Attempt to Open: -6 gold, 40% chance to gain 20 gold',
            effect: function(game) {
                if (game.player.gold < 6) { return; }
                game.player.changeGold(-6);
                if (Math.random() < 0.4) { game.player.changeGold(20); }
            }
        },
        {
            text: 'Ignore: gain nothing',
            effect: function(game) {
                
            }
        }
    ]],
    'The Horn': ["You look down to see a strange cone at your feet. It's a horn of some kind–useful in combat, but it's clogged with mud. Blowing the horn will alert danger, but with the mud it's useless", [
        {
            text: 'Blow and Wear: alert enemies, gain horn helmet',
            effect: function(game) {
                game.zone.changeZoneLevel(2);
                game.player.addSelectableItem(new Equippable(game, 'horn helmet', {'metatype': 'head', 'type': 'helmet', 'dmg': 2}));
            }
        },
        {
            text: 'Blow and wield: alert enemies, gain horn sling',
            effect: function(game) {
                game.zone.changeZoneLevel(2);
                game.player.addSelectableItem(new Equippable(game, 'horn sling', {'metatype': 'weapon', 'type': 'sling', 'dmg': 4, 'as': 50}));
            }
        },
        {
            text: 'Drop it: gain nothing',
            effect: function(game) {
                
            }
        }
    ]],
    'Wild Fire': ['A rapidly growing fire has broken out behind you. Stay behind to heat and increase the lethality of your weapons', [
        {
            text: 'Stay behind: +4 damage on current equipped weapon, lose 22 hp',
            effect: function(game) {
                game.player.getByType('weapon').changeStat('dmg', 4);
                game.player.changeHp(-22);
            }
        },
        {
            text: 'Run: lose 3 hp',
            effect: function(game) {
                game.player.changeHp(-3);
                
            }
        }
    ]],
    'Oil Fissure': ['You notice a small stream of oil erupting from the ground. You bottle it up. What do you do?', [
        {
            text: 'Oil your Gear: +10 speed',
            effect: function(game) {
                game.player.as += 10;
            }
        },
        {
            text: 'Treat Injuries: heal 16 hp',
            effect: function(game) {
                game.player.changeHp(16);
            }
        },
        {
            text: 'Sell: gain 10 gold',
            effect: function(game) {
                game.player.changeGold(10);
            }
        }
    ]],
    'A Cozy Village': ['You come to a cozy village', [
        {
            text: 'Rest: heal 15 hp',
            effect: function(game) {
                game.player.changeHp(15);
                
            }
        },
        {
            text: 'Work: gain 8 gold',
            effect: function(game) {
                game.player.changeGold(8);
                
            }
        }
    ]],
    'A Pond': ['You come to a refreshing, secluded pond', [
        {
            text: 'Dive in: heal 15 hp',
            effect: function(game) {
                game.player.changeHp(15);
                
            }
        },
        {
            text: 'Sharpen Weapon: +25% dmg on current weapon',
            effect: function(game) {
                game.player.getByType('weapon').changeStat('dmg',Math.ceil(game.player.getByType('weapon').dmg * 0.25));
                
            }
        }
    ]],
    'A Hut': ['You come to an abandoned hut perched on a small hill', [
        {
            text: 'Sleep: heal 15 hp',
            effect: function(game) {
                game.player.changeHp(15);
                
            }
        },
        {
            text: 'Train: +2 dmg',
            effect: function(game) {
                game.player.changeStat('dmg', 2);
                
            }
        }
    ]],

    // Grasslands PATH EVENT

    'A Fork In The Road': ["The road you've been following for a while breaks into two separate dirt paths, which will you take?", [
        {
            text: 'The Gauntlet: Howls indicate extensive monsters–and gold–ahead',
            effect: function(game) {
                game.path.nextSpace = 'enemy';
                game.path.typeInfo[3][1] = 100;
                game.path.typeInfo[3][2] = 20;
                game.path.typeInfo[3][3] = 60;
            }
        },
        {
            text: 'The Encampment: Bright lights signal opportunities for rest ahead',
            effect: function(game) {
                game.path.nextSpace = 'rest';
                game.path.typeInfo[2][1] = 100;
                game.path.typeInfo[2][2] = 20;
                game.path.typeInfo[2][3] = 20;
            }
        }
    ]],
    // FOREST EVENTS




    'A Long River': ['Ahead of you is a river cool to the touch. Jumping in looks refreshing, and will wisk you away to a new part of a forest. You notice a scenic bridge in the distance too.', [
        {
            text: 'Jump in: enemies randomized, +5 speed',
            effect: function(game) {
                let enemyRand = Math.floor(1.5-(Math.random()*4))
                game.zone.changeZoneLevel(enemyRand);
            }
        },
        {
            text: 'Take the bridge: +8 max hp',
            effect: function(game) {
                game.player.changeMaxHp(8);
                
            }
        }
    ]],
    "The Wanderer's Trailmix": ['A wandering hiker spots you on a trail. He offers you two bright bags filled with mythical goodies.', [
        {
            text: 'Magic Nuts: +25 max hp',
            effect: function(game) {
                game.player.changeMaxHp(25);
                
            }
        },
        {
            text: 'Magic Sweets: +3 dmg +3 armor',
            effect: function(game) {
                game.player.changeStat('dmg', 3);
                game.player.changeStat('arm', 3);
                
            }
        }
    ]],
    "A Bird's Nest": ['Atop a tree you see an innocent looking bird nest about to fall. Saving the birds will improve moral, but is it worth the climb?', [
        {
            text: 'Save the Nest: -25 hp +10 speed',
            effect: function(game) {
                game.player.changeHp(-25);
                game.player.changeStat('speed',10);
                
            }
        },
        {
            text: 'Walk past: Heal 15',
            effect: function(game) {
                game.player.changeHp(15);
                
            }
        }
    ]],
    "The Trapped Totem": ["You notice a small golden figure atop an noticably trapped stone mantel. The totem is worth a pretty penny, but it looks certain that you'll take some damage grabbing it.", [
        {
            text: 'Grab it: Gain 40 gold, lose anywhere from 10-30 hp.',
            effect: function(game) {
                let damageTakenR = (Math.floor(Math.random()*21)+10);
                game.player.changeHp(-damageTakenR);
                game.player.changeGold(40);
            }
        },
        {
            text: 'Grab a small nugget instead: Gain 5 gold',
            effect: function(game) {
                game.player.changeGold(5);
            
            }
        }
    ]],
    "Friendly Elves": ["An encampment of numerous friendly elves sits around a fire. Surprisingly, they notice you and beckon you towards them rather than take up arms. They notice your gold sack and offer to sell some elven trinkets, but cultural practice forbids you from buying more than one.", [
        {
            text: 'Buy a Red Trinket: Lose 6 gold, gain +6 dmg',
            effect: function(game) {
                if(game.player.gold<6){
                }else{
                    game.player.changeGold(-6);
                    game.player.changeStat('dmg',6);
                }
            }
        },
        {
            text: 'Buy a Green Trinket: Lose 3 gold, gain +3 regen',
            effect: function(game) {
                if(game.player.gold<3){
                }else{
                    game.player.changeGold(-3);
                    game.player.changeStat('regen',3);
                }
            }
        },
        {
            text: 'Buy an Orange Trinket: Lose 4 gold, gain +4 arm',
            effect: function(game) {
                if(game.player.gold<4){
                }else{
                    game.player.changeGold(-4);
                    game.player.changeStat('arm',4);
                }
            }
        },
        {
            text: 'Buy a Black Trinket: Lose 3 gold, gain 3 dodge',
            effect: function(game) {
                if(game.player.gold<3){
                }else{
                    game.player.changeGold(-3);
                    game.player.changeStat('dodge',3);
                }
            }
        },
        {
            text: 'Politely Decline: gain nothing',
            effect: function(game) {
            }
        }
    ]],
    "A Deep Fog": ["A thick mist of fog grows over you, blocking your entire vision. You want to keep moving forward, but you can't see more than a foot in front of you. You decide to stay put for the time beinthis. How do you kill the time?", [
        {
            text: 'Meditate: +4 dodge +5 level heal',
            effect: function(game) {
                game.player.changeStat('dodge', 4);
                game.player.changeStat('levelheal', 5);
            }
        },
        {
            text: 'Train: +8 armor +5 level heal',
            effect: function(game) {
                game.player.changeStat('arm',8);
                game.player.changeStat('levelheal',5);
            }
        }
    ]],
    "The Cave Shrine": ["You explore an old cave and trip on a strange rock formation. You look back and notice the the rock you tripped on has begun to glow, you approach and realize it's actually an ancient shrine. It begins to speak and offers you a dramatic choice", [
        {
            text: 'Embrace the Violence: +15 dmg, -10 speed, -10 level heal',
            effect: function(game) {
                game.player.changeStat('dmg',15);
                game.player.changeStat('as',-10);
                game.player.changeStat('levelheal',-10);
            }
        },
        {
            text: 'Reject the Violence: -10 dmg, +8 regen, +10 level heal',
            effect: function(game) {
                game.player.changeStat('dmg',-10);
                game.player.changeStat('regen',8);
                game.player.changeStat('levelheal',10);
            }
        }
    ]],
    "The Goblin Village": ["You notice a large goblin village in the distance. The goblins are all gathered around a massive bonfire, burning alive their captured prisoners of war. You notice two bags lying unguarded outside the town square, but you only have the time and strength to carry one. What do you do?", [
        {
            text: 'The Bag of Gold: +45 gold',
            effect: function(game) {
                game.player.changeGold(45);
            }
        },
        {
            text: 'The Bag of Flesh: +3 dmg +30 max hp',
            effect: function(game) {
                game.player.changeStat('dmg',3);
                game.player.changeMaxHp(30);
            }
        },
        {
            text: '[UNIMPLEMENTED] Intervene in the Bonfire: Start a difficult combat with multiple goblins, but gain both bags and more',   
            effect: function(game){
                //starts a combat with three goblins simultaneously
                //the reward for combat is both bags contents *1.5 and a helmet called, (The Goblin Vanquisher) which endows a large damage increase. 
            } 
        }
    ]],


    // FOREST REST

    'A Tree House': ["You come to an abandoned tree house which stretches high into the air with multiple levels of buildings. You come to a cozy bedroom, but notice an expansive jungle gym above.", [
        {
            text: 'Rest: Heal 35 hp',
            effect: function(game) {
                game.player.changeHp(35);
            }
        },
        {
            text: "Play: Gain +20 max hp, but without gaining 20 hp.",
            effect: function(game) {
                game.player.changeMaxHp(20);
                game.player.changeHp(-20);
            }
        }
    ]],
    'A Dryad Temple': ["You notice an empty dryad temple nestled discreetly between a bundle of trees.", [
        {
            text: 'Pray: Gain +15 max hp and heal 10',
            effect: function(game) {
                game.player.changeMaxHp(15);
                game.player.changeHp(10);
            }
        },
        {
            text: "Blood Sacrifice: lose 5 hp, +25% dmg on current weapon",
            effect: function(game) {
                game.player.changeHp(-5);
                game.player.getByType('weapon').changeStat('dmg', Math.ceil(game.player.getByType('weapon').dmg * 0.25));
            }
        },
        {
            text: "Flesh Sacrifice: lose 5 max hp, +25% armor on chest and legs equipment",
            effect: function(game) {
                game.player.changeMaxHp(-5);
                game.player.getByType('chest').changeStat('arm', Math.ceil(game.player.getByType('chest').arm * 0.25));
                game.player.getByType('legs').changeStat('arm', Math.ceil(game.player.getByType('legs').arm * 0.25));
            }
        }
    ]],
    'A Dam': ["In the distance, a beaver dam built up at least 30 feet tall.", [
        {
            text: 'Wade in Water: Gain +25 max hp',
            effect: function(game) {
                game.player.changeMaxHp(25);
            }
        },
        {
            text: "Study Dam: Gain +5 armor",
            effect: function(game) {
                game.player.changeStat('arm',5);
            }
        }
    ]],
    // forest PATH EVENT


    'The End of the Forest': ["By this point in the forest the cover of the trees has become so dense that only meager scraps of light break through from the sky above. With the direction of dirt trails long gone, you are now guided by your ears. Ahead are two distinct clumps of sound, which will you take?", [
        {
            text: 'The Sounds of Violence: The gnarls of gnashing teeth and drooling mouths indicates a flurry of powerful monsters ahead.',
            effect: function(game) {
                game.path.nextSpace = 'enemy';
                game.path.typeInfo[3][1] = 100;
                game.path.typeInfo[3][2] = 20;
                game.path.typeInfo[3][3] = 60;
            }
        },
        {
            text: 'The Sounds of Serenity: A lack of noise points ahead to a more scenic route with oppportunities for shops and rest.',
            effect: function(game) {
                game.path.nextSpace = 'rest';
                game.path.typeInfo[2][1] = 100;
                game.path.typeInfo[2][2] = 20;
                game.path.typeInfo[2][3] = 20;

                game.path.typeInfo[1][1] += 20;
                game.path.typeInfo[1][2] = 20;
                game.path.typeInfo[1][3] = 20;
            }
        }
    ]],

    // BEACH EVENTS
    'A Campfire': ['You come to a cozy looking campfire looks like an ample opportunity for rest. However, with the tide at its lowest point you wonder if you can really afford time to rest', [
        {
            text: 'Relax: Heal 55 hp, enemies became stronger',
            effect: function(game) {
                let enemyRand = Math.floor(5-(Math.random()*4))
                game.zone.changeZoneLevel(enemyRand);
                game.player.changeHp(55);
            }
        },
        {
            text: 'Journey Onward: Gain 5 max hp',
            effect: function(game) {
                game.player.changeMaxHp(5);
                
            }
        }
    ]],
    'The Abandoned Surfboards': ['An abandoned surfboard washes onto the shore with little of note beyond two golden fins. Further out in the tattered water of the ocean is another abandoned surfboard which looks far more ornate, although you\'re not sure.', [
        {
            text: 'Scrap The First Board: Gain 20 gold',
            effect: function(game) {
                game.player.changeGold(20);
            }
        },
        {
            text: 'Retreive the Second Board: Lose anywhere from 30 to 80 hp, gain 50 to 60 gold',
            effect: function(game) {
                let goldObtain = Math.floor(11*Math.random());
                goldObtain += 50;
                game.player.changeGold(goldObtain);
                let hpLoss = Math.floor(51*Math.random());
                hpLoss += 30;
                hpLoss = -hpLoss
                game.player.changeHp(hpLoss);                
            }
        }
    ]],
    'The Rock Bank': ['Turning the corner of the beach, you see a large bank of rocks being battered by a torrent of tall waves. Under the beating of the water you notice a pile of delectable sea food coalescing together.', [
        {
            text: 'Seize The Food: Take anywhere from 40-60 hp. Gain 30 max hp, 8 dmg, 8 armor, and 4 lifedrain',
            effect: function(game) {
                let hpLoss = Math.floor(21*Math.random());
                hpLoss += 40;
                hpLoss = -hpLoss
                game.player.changeHp(hpLoss); 
                game.player.changeMaxHp(30);
                game.player.changeStat('dmg',8);
                game.player.changeStat('arm',8); 
                game.player.changeStat('lifedrain',4); 
            }
        },
        {
            text: 'Take the Way Around: Heal 20 hp, gain 5 level heal',
            effect: function(game) {
                game.player.changeHp(20); 
                game.player.changeStat('levelheal',5);       
            }
        }
    ]],
    'A Sandstorm': ['A brutal, but brief sandstorm begins forming around you. What will you do?', [
        {
            text: 'Bunker Down: lose 6 armor',
            effect: function(game) {
                game.player.changeStat('arm',-6);
            }
        },
        {
            text: 'Keep Moving: lose 40 hp',
            effect: function(game) {
                game.player.changeHp(-40); 
                
            }
        }
    ]],
    'Very Happy Tourists': ['You\'re shocked to see what look like day-trippers on this hostile beach. They encourage you to join them for some fun on the beach.', [
        {
            text: 'Find an Easy Way Out: Heal 10 hp and 10 level heal.',
            effect: function(game) {
                game.player.changeHp(10); 
                game.player.changeStat('levelheal',10);       
            }
        },
        {
            text: 'One Way Ticket To Fun: Gain +3 Mana Gen, +10 Max Mana, and add anywhere from +5 to -4 to all of the following stats independently: dmg, arm, regen, max Hp, dodge, lifedrain',
            effect: function(game) {
                game.player.changeStat('manaGen',3);
                game.player.changeStat('maxMana',10);
                let randDMG = Math.floor(6-(Math.random()*9)) 
                game.player.changeStat('dmg',randDMG);
                let randARM = Math.floor(6-(Math.random()*9)) 
                game.player.changeStat('arm',randARM);
                let randREGEN = Math.floor(6-(Math.random()*9)) 
                game.player.changeStat('regen',randREGEN);
                let randMAXHP = Math.floor(6-(Math.random()*9)) 
                game.player.changeMaxHp(randMAXHP);
                let randDODGE = Math.floor(6-(Math.random()*9)) 
                game.player.changeStat('dodge',randDODGE);
                let randLIFEDRAIN = Math.floor(6-(Math.random()*9)) 
                game.player.changeStat('lifedrain',randLIFEDRAIN);
            }
        }
    ]],
    'A Growing Beach Mold': ['A growing fungus suddenly emerges from the sand and tries to grab hold of your legs. You hesitate for a moment and wonder if you should fight back.', [
        {
            text: 'Run: Lose 8 hp',
            effect: function(game) {
                game.player.changeHp(-8); 
            }
        },
        {
            text: 'Fight back: Lose 55 hp and 10 level heal, gain 10 lifedrain',
            effect: function(game) {
                game.player.changeHp(-55); 
                game.player.changeStat('levelheal',-10);  
                game.player.changeStat('lifedrain',10);
            }
        },
        {
            text: 'Jump Inside: Lose 50% of current hp and 10 level heal, gain 12 armor',
            effect: function(game) {
                game.player.changeHp(-Math.floor(game.player.hp*0.5)); 
                game.player.changeStat('levelheal',-10);  
                game.player.changeStat('armor',12);
            }
        }
    ]],
    'The Life-sized Sand Castle': ['What looked like a dune in the distance was actually a massive man-made(?) sandcastle towering into the sky. You survey the grounds, and question what you should do.', [
        {
            text: 'Raid the Vaults: Gain 50 gold',
            effect: function(game) {
                game.player.changeGold(50); 
            }
        },
        {
            text: 'Swim the Moat: Heal 40 hp, gain 5 level heal',
            effect: function(game) {
                game.player.changeHp(40); 
                game.player.changeStat('levelheal',5);  
            }
        },
        {
            text: 'Raid the Armory: All currently equipped armor pieces gain +4 armor',
            effect: function(game) {
                game.player.getByType('head').changeStat('arm',4);
                game.player.getByType('chest').changeStat('arm',4);
                game.player.getByType('legs').changeStat('arm',4);
                game.player.getByType('feet').changeStat('arm',4);
            }
        },
        {
            text: 'Knock it Over: Anger Enemies, lose 20 hp, gain 10 dmg',
            effect: function(game) {
                game.zone.changeZoneLevel(3);
                game.player.changeHp(-20);
                game.player.changeStat('dmg',10);
            }
        }
    ]],
    'A Turtlean Birth': ['It is late in the evening when you notice what look to be small turtles erupting from the ground. They number in the tenths of thousands, but many are trampling and killing each other in the race to the ocean. You scurry away and watch from afar as the carcasses form a macabre pile. Hours later, you notice a handful of these turtles found their way into your bag. They are still alive, and have already grown a remarkable amount. What do you do?', [
        {
            text: 'Furnish Gear: +4 armor on all currently equipped weapons and armor',
            effect: function(game) {
                game.player.getByType('weapon').changeStat('arm',4);
                game.player.getByType('head').changeStat('arm',4);
                game.player.getByType('chest').changeStat('arm',4);
                game.player.getByType('legs').changeStat('arm',4);
                game.player.getByType('feet').changeStat('arm',4);
            }
        },
        {
            text: 'Eat: Gain +50 max hp',
            effect: function(game) {
                game.player.changeMaxHp(50);
            }
        },
        {
            text: 'Spare: Nothing',
            effect: function(game) {
            }
        }
    ]],

    // BEACH REST

    'A Coconut Tree': ["You come to a coconut tree filled to the brim with ripe coconuts.", [
        {
            text: 'Rest and Drink: Heal 60 hp',
            effect: function(game) {
                game.player.changeHp(35);
            }
        },
        {
            text: "Fashion Coconuts: Gain 8 armor",
            effect: function(game) {
                game.player.changeMaxHp(20);
                game.player.changeHp(-20);
            }
        }
    ]],
    'A Scenic Lookout': ["After scaling a slight cliff, you come to a beautiful view.", [
        {
            text: 'Relax: Heal 45 hp, Gain 10 max hp',
            effect: function(game) {
                game.player.changeMaxHp(10);
                game.player.changeHp(45);
            }
        },
        {
            text: "Yoga: Gain 5 level heal and +10 speed",
            effect: function(game) {
                game.player.changeStat('levelheal', 5);
                game.player.changeStat('as', 10);
            }
        },
        {
            text: "Throw Rocks: Gain +5 dmg",
            effect: function(game) {
                game.player.changeStat('dmg', 5);
            }
        }
    ]],
    'Lazy River': ["You come to a river steadily moving forward at a brisk pace. You hop in looking to cool down.", [
        {
            text: 'Wade in Water: Gain +35 max hp',
            effect: function(game) {
                game.player.changeMaxHp(25);
            }
        },
        {
            text: "Train your Swimming: +10 speed +5 dmg",
            effect: function(game) {
                game.player.changeStat('as',10);
                game.player.changeStat('dmg',5);
            }
        }
    ]],

    //BEACH PATH EVENT
    'A Desert on the Horizon': ["The heat of the beach increases as the remaining bits of shoreline begin to dissipate. You're faced with a dilemma, continue on land into the harsh sun of the desert, or take advantage of a serendipitously placed raft and head towards the ocean.", [
        {
            text: 'The Desert: A harsh, but manageable environment ahead',
            effect: function(game) {
                game.path.nextSpace = 'rest';
                game.path.typeInfo[3][1] = 50;
                game.path.typeInfo[3][2] = 20;
                game.path.typeInfo[3][3] = 40;
                // method to give land based boss fight
            }
        },
        {
            text: "The Ocean: An unpredictable torrent of events and extreme enemies",
            effect: function(game) {
                game.path.nextSpace = 'rest';
                game.path.typeInfo[3][1] = 80;
                game.path.typeInfo[3][2] = 20;
                game.path.typeInfo[3][3] = 60;
                // method to give a water based boss fight
            }
        }
    ]],
};