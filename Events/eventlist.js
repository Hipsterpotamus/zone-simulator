//all event ids:
// 'A Tall Tree', 'Clothes Cast Aside', 'The Traveler', 'A Gemstone?', 'The Horn', 'Wild Fire', 'Oil Fissure', 
//'A Fork In The Road', 'A Cozy Village', 'A Pond', 'A Hut'

const eventList = {
    'A Tall Tree' :
    new Event('A Tall Tree', 'A handful of precarious branches extend from the top of an immaculate fruit tree. Will you make the climb?', {
        climb: {
            text: 'Climb: gain 5 max hp, lose 10 hp',
            effect: function () {
                g.player.maxhp += 5;
                g.player.hp -= 10;
                if (g.player.hp <= 0) { playerDeath(); }
                eventFunctionSuffix('+5 max hp. -10 hp');
            }
        },
        walkPast: {
            text: 'Walk past: heal 4 hp',
            effect: function () {
                g.player.gainHp(4);
                eventFunctionSuffix('4 hp healed');
            }
        }
    }), 
    'Clothes Cast Aside' :
    new Event('Clothes Cast Aside', 'You find some clothing cast aside in the grass. They are dirty but servicable.', {
        gainClothing: {
            text: 'Gain Clothing: gain two armor pieces, lose 1 level heal',
            effect: function () {
                g.player.inv.chest.push(new Equippable(true, true, 'dirty shirt', 'chest', 'shirt', 0, 1, 0, 0));
                g.player.inv.legs.push(new Equippable(true, true, 'dirty pants', 'legs', 'pants', 0, 1, 0, 0));
                g.player.changeLvlHeal(-1);
                eventFunctionSuffix('dirty shirt & pants gained');
            }
        },
        walkPast: {
            text: 'Walk past: heal 1 hp',
            effect: function () {
                g.player.gainHp(1);
                eventFunctionSuffix('1 hp healed');
            }
        }
    }),
    'The Traveler' :
    new Event('The Traveler', 'A grizzled traveler pushing a cart passes by. He grumbles about dead weight in his cart and offers you a garden hoe for a few gold', {
        accept: {
            text: 'Accept: Gain a garden hoe, lose 3 gold',
            effect: function () {
                if (g.player.gold < 3) { eventFunctionSuffix('not enough gold!'); return; }
                g.player.gold -= 3;
                g.player.inv.weapon.push(new Equippable(true, true, 'garden hoe', 'weapon', 'none', 3, 0, 0, 0));
                eventFunctionSuffix('garden hoe obtained');
            }
        },
        reject: {
            text: 'Reject: gain nothing',
            effect: function () {
                eventFunctionSuffix();
            }
        }
    }),
    'A Gemstone?' :
    new Event('A Gemstone?', 'Lying in the middle of the road is a peculiar looking rock. You try to pry it open to see if anything valuable is inside. Attempt to break', {
        attemptToOpen: {
            text: 'Attempt to Open: -6 gold, 40% chance to gain 20 gold',
            effect: function () {
                if (g.player.gold < 6) { eventFunctionSuffix('not enough gold!'); return; }
                g.player.gold -= 6;
                if (Math.random() < 0.4) { g.player.gainGold(false, 20); }
                eventFunctionSuffix('Success! +20 gold');
            }
        },
        ignore: {
            text: 'Ignore: gain nothing',
            effect: function () {
                eventFunctionSuffix();
            }
        }
    }),
    'The Horn' :
    new Event('The Horn', "You look down to see a strange cone at your feet. It's a horn of some kind–useful in combat, but it's clogged with mud. Blowing the horn will alert danger, but with the mud it's useless", {
        blowAndWear: {
            text: 'Blow and Wear: alert enemies, gain horn helmet',
            effect: function () {
                g.zone.changeZoneLevel(2);
                g.player.inv.head.push(new Equippable(true, true, 'horn helmet', 'head', 'helmet', 2, 0, 0, 0));
                eventFunctionSuffix('horn helmet acquired');
            }
        },
        blowAndWield: {
            text: 'Blow and wield: alert enemies, gain horn sling',
            effect: function () {
                g.zone.changeZoneLevel(2);
                g.player.inv.weapon.push(new Equippable(true, true, 'horn sling', 'weapon', 'sling', 4, 0, 0, 25));
                eventFunctionSuffix('horn sling acquired');
            }
        },
        dropIt: {
            text: 'Drop it: gain nothing',
            effect: function () {
                eventFunctionSuffix();
            }
        }
    }),
    'Wild Fire' :
    new Event('Wild Fire', 'A rapidly growing fire has broken out behind you. Stay behind to heat and increase the lethality of your weapons', {
        stayBehind: {
            text: 'Stay behind: +4 damage on current equipped weapon, lose 22 hp',
            effect: function () {
                g.player.getByType('weapon').dmg += 4;
                g.player.hp -= 22;
                if (g.player.hp <= 0) { playerDeath(); }
                eventFunctionSuffix(g.player.getByType('weapon').name + ' gained 4 dmg');
            }
        },
        run: {
            text: 'Run: lose 3 hp',
            effect: function () {
                g.player.hp -= 3;
                if (g.player.hp <= 0) { playerDeath(); }
                eventFunctionSuffix();
            }
        }
    }),
    'Oil Fissure' :
    new Event('Oil Fissure', 'You notice a small stream of oil erupting from the ground. You bottle it up. What do you do?', {
        oilYourGear: {
            text: 'Oil your Gear: +10 speed',
            effect: function () {
                g.player.aSLvl += 10;
                eventFunctionSuffix('+10 speed');
            }
        },
        treatInjuries: {
            text: 'Treat Injuries: heal 16 hp',
            effect: function () {
                g.player.gainHp(16);
                eventFunctionSuffix('16 healed');
            }
        },
        sell: {
            text: 'Sell: gain 10 gold',
            effect: function () {
                g.player.gainGold(false, 10);
                eventFunctionSuffix('+10 gold');
            }
        }
    }),
    'A Fork In The Road' :
    new Event('A Fork In The Road', 'There are two paths ahead, which will you take?', {
        theGauntlet: {
            text: 'The Gauntlet: Howls indicate extensive monsters–and gold–ahead',
            effect: function () {
                let pathAhead = ['enemy', 'enemy', 'enemy', 'shop', 'boss'];
                for (let a in pathAhead) {
                    g.path.push(pathAhead[a]);
                }
                eventFunctionSuffix();
            }
        },
        theEncampment: {
            text: 'The Encampment: Bright lights signal opportunities for rest ahead',
            effect: function () {
                let pathAhead = ['rest', 'enemy', 'shop', 'rest', 'boss'];
                for (let a in pathAhead) {
                    g.path.push(pathAhead[a]);
                }
                eventFunctionSuffix();
            }
        }
    }),
    'A Cozy Village' :
    new Event('A Cozy Village', 'You come to a cozy village', {
        rest: {
            text: 'Rest: heal 15 hp',
            effect: function () {
                g.player.gainHp(15);
                eventFunctionSuffix();
            }
        },
        work: {
            text: 'Work: gain 8 gold',
            effect: function () {
                g.player.gainGold(false, 8);
                eventFunctionSuffix();
            }
        }
    }),
    'A Pond' :
    new Event('A Pond', 'You come to a refreshing, secluded pond', {
        diveIn: {
            text: 'Dive in: heal 15 hp',
            effect: function () {
                g.player.gainHp(15);
                eventFunctionSuffix();
            }
        },
        sharpenWeapon: {
            text: 'Sharpen Weapon: +25% dmg on current weapon',
            effect: function () {
                g.player.getByType('weapon').dmg = (1 + Math.floor(g.player.getByType('weapon').dmg * 1.25));
                eventFunctionSuffix();
            }
        }
    }),
    'A Hut' :
    new Event('A Hut', 'You come to an abandoned hut perched on a small hill', {
        sleep: {
            text: 'Sleep: heal 15 hp',
            effect: function () {
                g.player.gainHp(15);
                eventFunctionSuffix();
            }
        },
        train: {
            text: 'Train: +1 dmg',
            effect: function () {
                g.player.dmg += 1;
                eventFunctionSuffix();
            }
        }
    })
};