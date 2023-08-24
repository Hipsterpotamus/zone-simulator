//all event ids:
// 'A Tall Tree', 'Clothes Cast Aside', 'The Traveler', 'A Gemstone?', 'The Horn', 'Wild Fire', 'Oil Fissure', 
//'A Fork In The Road', 'A Cozy Village', 'A Pond', 'A Hut'

const eventList = {
    'A Tall Tree': new Event('A Tall Tree', 'A handful of precarious branches extend from the top of an immaculate fruit tree. Will you make the climb?', [
        {
            text: 'Climb: gain 5 max hp, lose 10 hp',
            effect: function () {
                g.player.changeMaxHp(5);
                g.player.changeHp(-10);
            }
        },
        {
            text: 'Walk past: heal 4 hp',
            effect: function () {
                g.player.changeHp(4);
            }
        }
    ]),
    'Clothes Cast Aside': new Event('Clothes Cast Aside', 'You find some clothing cast aside in the grass. They are dirty but servicable.', [
        {
            text: 'Gain Clothing: gain two armor pieces, lose 1 level heal',
            effect: function () {
                g.player.inv.chest.push(new Equippable('dirty shirt', 'chest', 'shirt', 0, 1, 0, 0));
                g.player.inv.legs.push(new Equippable('dirty pants', 'legs', 'pants', 0, 1, 0, 0));
                g.player.changeStat('levelheal', -1);
            }
        },
        {
            text: 'Walk past: heal 1 hp',
            effect: function () {
                g.player.changeHp(1);
            }
        }
    ]),
    'The Traveler': new Event('The Traveler', 'A grizzled traveler pushing a cart passes by. He grumbles about dead weight in his cart and offers you a garden hoe for a few gold', [
        {
            text: 'Accept: Gain a garden hoe, lose 3 gold',
            effect: function () {
                if (g.player.gold < 3) { return;}
                g.player.changeGold(-3);
                g.player.inv.weapon.push(new Equippable('garden hoe', 'weapon', 'none', 3, 0, 0, 0));
            }
        },
        {
            text: 'Reject: gain nothing',
            effect: function () {
                
            }
        }
    ]),
    'A Gemstone?': new Event('A Gemstone?', 'Lying in the middle of the road is a peculiar looking rock. You try to pry it open to see if anything valuable is inside. Attempt to break', [
        {
            text: 'Attempt to Open: -6 gold, 40% chance to gain 20 gold',
            effect: function () {
                if (g.player.gold < 6) { return; }
                g.player.changeGold(-6);
                if (Math.random() < 0.4) { g.player.changeGold(20); }
            }
        },
        {
            text: 'Ignore: gain nothing',
            effect: function () {
                
            }
        }
    ]),
    'The Horn': new Event('The Horn', "You look down to see a strange cone at your feet. It's a horn of some kind–useful in combat, but it's clogged with mud. Blowing the horn will alert danger, but with the mud it's useless", [
        {
            text: 'Blow and Wear: alert enemies, gain horn helmet',
            effect: function () {
                g.zone.changeZoneLevel(2);
                g.player.inv.head.push(new Equippable('horn helmet', 'head', 'helmet', 2, 0, 0, 0));
            }
        },
        {
            text: 'Blow and wield: alert enemies, gain horn sling',
            effect: function () {
                g.zone.changeZoneLevel(2);
                g.player.inv.weapon.push(new Equippable('horn sling', 'weapon', 'sling', 4, 0, 0, 25));
            }
        },
        {
            text: 'Drop it: gain nothing',
            effect: function () {
                
            }
        }
    ]),
    'Wild Fire': new Event('Wild Fire', 'A rapidly growing fire has broken out behind you. Stay behind to heat and increase the lethality of your weapons', [
        {
            text: 'Stay behind: +4 damage on current equipped weapon, lose 22 hp',
            effect: function () {
                g.player.getByType('weapon').dmg += 4;
                g.player.changeHp(-22);
                g.player.getByType('weapon').updateItemInfo();
            }
        },
        {
            text: 'Run: lose 3 hp',
            effect: function () {
                g.player.changeHp(-3);
                
            }
        }
    ]),
    'Oil Fissure': new Event('Oil Fissure', 'You notice a small stream of oil erupting from the ground. You bottle it up. What do you do?', [
        {
            text: 'Oil your Gear: +10 speed',
            effect: function () {
                g.player.as += 10;
            }
        },
        {
            text: 'Treat Injuries: heal 16 hp',
            effect: function () {
                g.player.changeHp(16);
            }
        },
        {
            text: 'Sell: gain 10 gold',
            effect: function () {
                g.player.changeGold(10);
            }
        }
    ]),
    'A Cozy Village': new Event('A Cozy Village', 'You come to a cozy village', [
        {
            text: 'Rest: heal 15 hp',
            effect: function () {
                g.player.changeHp(15);
                
            }
        },
        {
            text: 'Work: gain 8 gold',
            effect: function () {
                g.player.changeGold(8);
                
            }
        }
    ]),
    'A Pond': new Event('A Pond', 'You come to a refreshing, secluded pond', [
        {
            text: 'Dive in: heal 15 hp',
            effect: function () {
                g.player.changeHp(15);
                
            }
        },
        {
            text: 'Sharpen Weapon: +25% dmg on current weapon',
            effect: function () {
                g.player.getByType('weapon').dmg = (Math.ceil(g.player.getByType('weapon').dmg * 1.25));
                g.player.getByType('weapon').updateItemInfo();
                
            }
        }
    ]),
    'A Hut': new Event('A Hut', 'You come to an abandoned hut perched on a small hill', [
        {
            text: 'Sleep: heal 15 hp',
            effect: function () {
                g.player.changeHp(15);
                
            }
        },
        {
            text: 'Train: +2 dmg',
            effect: function () {
                g.player.changeStat('dmg', 2);
                
            }
        }
    ]),

    // Grasslands PATH EVENT

    'A Fork In The Road': new Event('A Fork In The Road', "The road you've been following for a while breaks into two separate dirt paths, which will you take?", [
        {
            text: 'The Gauntlet: Howls indicate extensive monsters–and gold–ahead',
            effect: function () {
                g.path.nextSpace = 'enemy';
                g.path.typeInfo[3][1] = 100;
                g.path.typeInfo[3][2] = 20;
                g.path.typeInfo[3][3] = 60;
            }
        },
        {
            text: 'The Encampment: Bright lights signal opportunities for rest ahead',
            effect: function () {
                g.path.nextSpace = 'rest';
                g.path.typeInfo[2][1] = 100;
                g.path.typeInfo[2][2] = 20;
                g.path.typeInfo[2][3] = 20;
            }
        }
    ]),
    // FOREST EVENTS




    'A Long River': new Event('A Long River', 'Ahead of you is a river cool to the touch. Jumping in looks refreshing, and will wisk you away to a new part of a forest. You notice a scenic bridge in the distance too.', [
        {
            text: 'Jump in: enemies randomized, +5 speed',
            effect: function() {
                let enemyRand = Math.floor(1.5-(Math.random()*4))
                g.zone.changeZoneLevel(enemyRand);
            }
        },
        {
            text: 'Take the bridge: +8 max hp',
            effect: function() {
                g.player.changeMaxHp(8);
                
            }
        }
    ]),
    "The Wanderer's Trailmix": new Event("The Wanderer's Trailmix", 'A wandering hiker spots you on a trail. He offers you two bright bags filled with mythical goodies.', [
        {
            text: 'Magic Nuts: +25 max hp',
            effect: function() {
                g.player.changeMaxHp(25);
                
            }
        },
        {
            text: 'Magic Sweets: +3 dmg +3 armor',
            effect: function() {
                g.player.changeStat('dmg', 3);
                g.player.changeStat('arm', 3);
                
            }
        }
    ]),
    "A Bird's Nest": new Event("A Bird's Nest", 'Atop a tree you see an innocent looking bird nest about to fall. Saving the birds will improve moral, but is it worth the climb?', [
        {
            text: 'Save the Nest: -25 hp +10 speed',
            effect: function() {
                g.player.changeHp(-25);
                g.player.changeStat('speed',10);
                
            }
        },
        {
            text: 'Walk past: Heal 15',
            effect: function() {
                g.player.changeHp(15);
                
            }
        }
    ]),
    "The Trapped Totem": new Event("The Trapped Totem", "You notice a small golden figure atop an noticably trapped stone mantel. The totem is worth a pretty penny, but it looks certain that you'll take some damage grabbing it.", [
        {
            text: 'Grab it: Gain 40 gold, lose anywhere from 10-30 hp.',
            effect: function() {
                let damageTakenR = (Math.floor(Math.random()*21)+10);
                g.player.changeHp(-damageTakenR);
                g.player.changeGold(40);
            }
        },
        {
            text: 'Grab a small nugget instead: Gain 5 gold',
            effect: function() {
                g.player.changeGold(5);
            
            }
        }
    ]),
    "Friendly Elves": new Event("Friendly Elves", "An encampment of numerous friendly elves sits around a fire. Surprisingly, they notice you and beckon you towards them rather than take up arms. They notice your gold sack and offer to sell some elven trinkets, but cultural practice forbids you from buying more than one.", [
        {
            text: 'Buy a Red Trinket: Lose 6 gold, gain +6 dmg',
            effect: function() {
                if(g.player.gold<6){
                }else{
                    g.player.changeGold(-6);
                    g.player.changeStat('dmg',6);
                }
            }
        },
        {
            text: 'Buy a Green Trinket: Lose 3 gold, gain +3 regen',
            effect: function() {
                if(g.player.gold<3){
                }else{
                    g.player.changeGold(-3);
                    g.player.changeStat('regen',3);
                }
            }
        },
        {
            text: 'Buy an Orange Trinket: Lose 4 gold, gain +4 arm',
            effect: function() {
                if(g.player.gold<4){
                }else{
                    g.player.changeGold(-4);
                    g.player.changeStat('arm',4);
                }
            }
        },
        {
            text: 'Buy a Black Trinket: Lose 3 gold, gain 3 dodge',
            effect: function() {
                if(g.player.gold<3){
                }else{
                    g.player.changeGold(-3);
                    g.player.changeStat('dodge',3);
                }
            }
        },
        {
            text: 'Politely Decline: gain nothing',
            effect: function() {
            }
        }
    ]),
    "A Deep Fog": new Event("A Deep Fog", "A thick mist of fog grows over you, blocking your entire vision. You want to keep moving forward, but you can't see more than a foot in front of you. You decide to stay put for the time being. How do you kill the time?", [
        {
            text: 'Meditate: +4 dodge +5 level heal',
            effect: function() {
                g.player.changeStat('dodge', 4);
                g.player.changeStat('levelheal', 5);
            }
        },
        {
            text: 'Train: +8 armor +5 level heal',
            effect: function() {
                g.player.changeStat('armor',8);
                g.player.changeStat('levelheal',5);
            }
        }
    ]),
    "The Cave Shrine": new Event("The Cave Shrine", "You explore an old cave and trip on a strange rock formation. You look back and notice the the rock you tripped on has begun to glow, you approach and realize it's actually an ancient shrine. It begins to speak and offers you a dramatic choice", [
        {
            text: 'Embrace the Violence: +15 dmg, -10 speed, -10 level heal',
            effect: function() {
                g.player.changeStat('dmg',15);
                g.player.changeStat('as',-10);
                g.player.changeStat('levelheal',-10);
            }
        },
        {
            text: 'Reject the Violence: -10 dmg, +8 regen, +10 level heal',
            effect: function() {
                g.player.changeStat('dmg',-10);
                g.player.changeStat('regen',8);
                g.player.changeStat('levelheal',10);
            }
        }
    ]),
    "The Goblin Village": new Event("The Goblin Village", "You notice a large goblin village in the distance. The goblins are all gathered around a massive bonfire, burning alive their captured prisoners of war. You notice two bags lying unguarded outside the town square, but you only have the time and strength to carry one. What do you do?", [
        {
            text: 'The Bag of Gold: +45 gold',
            effect: function() {
                g.player.changeGold(45);
            }
        },
        {
            text: 'The Bag of Flesh: +3 dmg +30 max hp',
            effect: function() {
                g.player.changeStat('dmg',3);
                g.player.changeMaxHp(30);
            }
        },
        {
            text: '[UNIMPLEMENTED] Intervene in the Bonfire: Start a difficult combat with multiple goblins, but gain both bags and more',   
            effect: function(){
                //starts a combat with three goblins simultaneously
                //the reward for combat is both bags contents *1.5 and a helmet called, (The Goblin Vanquisher) which endows a large damage increase. 
            } 
        }
    ]),


    // FOREST REST

    'A Tree House': new Event("A Tree House", "You come to an abandoned tree house which stretches high into the air with multiple levels of buildings. You come to a cozy bedroom, but notice an expansive jungle gym above.", [
        {
            text: 'Rest: Heal 35 hp',
            effect: function() {
                g.player.changeHp(35);
            }
        },
        {
            text: "Play: Gain +20 max hp, but without gaining 20 hp.",
            effect: function() {
                g.player.changeMaxHp(20);
                g.player.changeHp(-20);
            }
        }
    ]),
    'A Dryad Temple': new Event("Dryad Temple", "You notice an empty dryad temple nestled discreetly between a bundle of trees.", [
        {
            text: 'Pray: Gain +15 max hp and heal 10',
            effect: function() {
                g.player.changeMaxHp(15);
                g.player.changeHp(10);
            }
        },
        {
            text: "Blood Sacrifice: lose 5 hp, +25% dmg on current weapon",
            effect: function() {
                g.player.changeHp(-5);
                g.player.getByType('weapon').dmg = (Math.ceil(g.player.getByType('weapon').dmg * 1.25));
            }
        },
        {
            text: "Flesh Sacrifice: lose 5 max hp, +25% armor on chest and legs equipment",
            effect: function() {
                g.player.changeMaxHp(-5);
                g.player.getByType('chest').arm = (Math.ceil(g.player.getByType('chest').arm * 1.25));
                g.player.getByType('legs').arm = (Math.ceil(g.player.getByType('legs').arm * 1.25));
            }
        }
    ]),
    'A Dam': new Event("A Dam", "In the distance, a beaver dam built up at least 30 feet tall.", [
        {
            text: 'Wade in Water: Gain +20 max hp',
            effect: function() {
                g.player.changeMaxHp(35);
            }
        },
        {
            text: "Study Dam: Gain +5 armor",
            effect: function() {
                g.player.changeStat('armor',5);
            }
        }
    ]),
    "Friendly Elves": new Event("Friendly Elves", "An encampment of numerous friendly elves sits around a fire. Surprisingly, they notice you and beckon you towards them rather than take up arms. They notice your gold sack and offer to sell some elven trinkets, but cultural practice forbids you from buying more than one.", [
        {
            text: 'Buy a Red Trinket: Lose 6 gold, gain +6 dmg',
            effect: function() {
                if(g.player.gold<6){
                }else{
                    g.player.changeGold(-6);
                    g.player.changeStat('dmg',6);
                }
            }
        },
        {
            text: 'Buy a Green Trinket: Lose 3 gold, gain +3 regen',
            effect: function() {
                if(g.player.gold<3){
                }else{
                    g.player.changeGold(-3);
                    g.player.changeStat('regen',3);
                }
            }
        },
        {
            text: 'Buy an Orange Trinket: Lose 4 gold, gain +4 arm',
            effect: function() {
                if(g.player.gold<4){
                }else{
                    g.player.changeGold(-4);
                    g.player.changeStat('arm',4);
                }
            }
        },
        {
            text: 'Buy a Black Trinket: Lose 3 gold, gain 3 dodge',
            effect: function() {
                if(g.player.gold<3){
                }else{
                    g.player.changeGold(-3);
                    g.player.changeStat('dodge',3);
                }
            }
        },
        {
            text: 'Politely Decline: gain nothing',
            effect: function() {
            }
        }
    ]),
    "A Deep Fog": new Event("A Deep Fog", "A thick mist of fog grows over you, blocking your entire vision. You want to keep moving forward, but you can't see more than a foot in front of you. You decide to stay put for the time being. How do you kill the time?", [
        {
            text: 'Meditate: +4 dodge +5 level heal',
            effect: function() {
                g.player.changeStat('dodge', 4);
                g.player.changeStat('levelheal', 5);
            }
        },
        {
            text: 'Train: +8 armor +5 level heal',
            effect: function() {
                g.player.changeStat('armor',8);
                g.player.changeStat('levelheal',5);
            }
        }
    ]),
    "The Cave Shrine": new Event("The Cave Shrine", "You explore an old cave and trip on a strange rock formation. You look back and notice the the rock you tripped on has begun to glow, you approach and realize it's actually an ancient shrine. It begins to speak and offers you a dramatic choice", [
        {
            text: 'Embrace the Violence: +15 dmg, -10 speed, -10 level heal',
            effect: function() {
                g.player.changeStat('dmg',15);
                g.player.changeStat('as',-10);
                g.player.changeStat('levelheal',-10);
            }
        },
        {
            text: 'Reject the Violence: -10 dmg, +8 regen, +10 level heal',
            effect: function() {
                g.player.changeStat('dmg',-10);
                g.player.changeStat('regen',8);
                g.player.changeStat('levelheal',10);
            }
        }
    ]),
    "The Goblin Village": new Event("The Goblin Village", "You notice a large goblin village in the distance. The goblins are all gathered around a massive bonfire, burning alive their captured prisoners of war. You notice two bags lying unguarded outside the town square, but you only have the time and strength to carry one. What do you do?", [
        {
            text: 'The Bag of Gold: +45 gold',
            effect: function() {
                g.player.changeGold(45);
            }
        },
        {
            text: 'The Bag of Flesh: +3 dmg +30 max hp',
            effect: function() {
                g.player.changeStat('dmg',3);
                g.player.changeMaxHp(30);
            }
        },
        {
            text: '[UNIMPLEMENTED] Intervene in the Bonfire: Start a difficult combat with multiple goblins, but gain both bags and more',   
            effect: function(){
                //starts a combat with three goblins simultaneously
                //the reward for combat is both bags contents *1.5 and a helmet called, (The Goblin Vanquisher) which endows a large damage increase. 
            } 
        }
    ]),


    // FOREST REST

    'A Tree House': new Event("A Tree House", "You come to an abandoned tree house which stretches high into the air with multiple levels of buildings. You come to a cozy bedroom, but notice an expansive jungle gym above.", [
        {
            text: 'Rest: Heal 35 hp',
            effect: function() {
                g.player.changeHp(35);
            }
        },
        {
            text: "Play: Gain +20 max hp, but without gaining 20 hp.",
            effect: function() {
                g.player.changeMaxHp(20);
                g.player.changeHp(-20);
            }
        }
    ]),
    'A Dryad Temple': new Event("Dryad Temple", "You notice an empty dryad temple nestled discreetly between a bundle of trees.", [
        {
            text: 'Pray: Gain +15 max hp and heal 10',
            effect: function() {
                g.player.changeMaxHp(15);
                g.player.changeHp(10);
            }
        },
        {
            text: "Blood Sacrifice: lose 5 hp, +25% dmg on current weapon",
            effect: function() {
                g.player.changeHp(-5);
                g.player.getByType('weapon').dmg = (Math.ceil(g.player.getByType('weapon').dmg * 1.25));
            }
        },
        {
            text: "Flesh Sacrifice: lose 5 max hp, +25% armor on chest and legs equipment",
            effect: function() {
                g.player.changeMaxHp(-5);
                g.player.getByType('chest').arm = (Math.ceil(g.player.getByType('chest').arm * 1.25));
                g.player.getByType('legs').arm = (Math.ceil(g.player.getByType('legs').arm * 1.25));
            }
        }
    ]),
    'A Dam': new Event("A Dam", "In the distance, a beaver dam built up at least 30 feet tall.", [
        {
            text: 'Wade in Water: Gain +20 max hp',
            effect: function() {
                g.player.changeMaxHp(35);
            }
        },
        {
            text: "Study Dam: Gain +5 armor",
            effect: function() {
                g.player.changeStat('armor',5);
            }
        }
    ]),
    // Grasslands PATH EVENT


    'The End of the Forest': new Event('The End of the Forest', "By this point in the forest the cover of the trees has become so dense that only meager scraps of light break through from the sky above. With the direction of dirt trails long gone, you are now guided by your ears. Ahead are two distinct clumps of sound, which will you take?", [
        {
            text: 'The Sounds of Violence: The gnarls of gnashing teeth and drooling mouths indicates a flurry of powerful monsters ahead.',
            effect: function () {
                g.path.nextSpace = 'enemy';
                g.path.typeInfo[3][1] = 100;
                g.path.typeInfo[3][2] = 20;
                g.path.typeInfo[3][3] = 60;
            }
        },
        {
            text: 'The Sounds of Serenity: A lack of noise points ahead to a more scenic route with oppportunities for shops and rest.',
            effect: function () {
                g.path.nextSpace = 'rest';
                g.path.typeInfo[2][1] = 100;
                g.path.typeInfo[2][2] = 20;
                g.path.typeInfo[2][3] = 20;

                g.path.typeInfo[1][1] += 20;
                g.path.typeInfo[1][2] = 20;
                g.path.typeInfo[1][3] = 20;
            }
        }
    ]),
};