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
    'A Fork In The Road': new Event('A Fork In The Road', 'There are two paths ahead, which will you take?', [
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
                g.player.getByType('weapon').dmg = (1 + Math.floor(g.player.getByType('weapon').dmg * 1.25));
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


    // FOREST EVENTS




    'A Long River': new Event('A Long River', 'Ahead of you is a river cool to the touch. Jumping in looks refreshing, and will wisk you away to a new part of a forest. You notice a scenic bridge in the distance too.', [
        {
            text: 'Jump in: enemies randomized, +5 speed',
            effect: function() {
                g.zone.changeZoneLevel(Math.floor(1.5-(Math.random()*4)));
                
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
    ])
};