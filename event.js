class EventOB{
    constructor(choiceCount, title, description, oNEBText, oNEEffect, tWOBText, tWOEffect, tHREEText, tHREEEffect, fOURText, fOUREffect, fIVEText, fIVEEffect){
        this.title = title;
        this.description = description;

        this.oNEBText = oNEBText;
        this.tWOBText = tWOBText;
        this.tHREEText = tHREEText;
        this.fOURText = fOURText;
        this.fIVEText = fIVEText;

        this.oNEEffect = oNEEffect;
        this.tWOEffect = tWOEffect;
        this.tHREEEffect = tHREEEffect;
        this.fOUREffect = fOUREffect;
        this.fIVEEffect = fIVEEffect;

        this.titleE;
        this.descriptionE;

        this.oNEBE;
        this.tWOBE;
        this.tHREEBE;
        this.fOURBE;
        this.fIVEBE;

        this.choiceCount = choiceCount;
    }
    createElements(){
        this.titleE = $('<p>', {
            'class': '.event-title'
        });
        this.titleE.text(this.title);
        this.titleE.appendTo('#content-central-box');
        this.descriptionE = $('<p>', {
            'class': '.event-description'
        });
        this.descriptionE.text(this.description);
        this.descriptionE.appendTo('#content-central-box');
        this.oNEBE = $('<button>', {
            'class': '.event-oNE-button-two'
        });
        this.oNEBE.text(''+this.oNEBText);
        this.oNEBE.on('click',this.oNEEffect);
        this.oNEBE.appendTo('#content-central-box');
        this.tWOBE = $('<button>', {
            'class': '.event-tWO-button-two'
        });
        this.tWOBE.text(''+this.tWOBText);
        this.tWOBE.on('click',this.tWOEffect);
        this.tWOBE.appendTo('#content-central-box');
        if(this.choiceCount>2){
            this.tHREEBE = $('<button>', {
                'class': '.event-tHREE-button-two'
            });
            this.tHREEBE.text(''+this.tHREEText);
            this.tHREEBE.on('click',this.tHREEEffect);
            this.tHREEBE.appendTo('#content-central-box');
            if(this.choiceCount>3){
                this.fOURBE = $('<button>', {
                    'class': '.event-fOUR-button-two'
                });
                this.fOURBE.text(''+this.fOURText);
                this.fOURBE.on('click',this.fOUREffect);
                this.fOURBE.appendTo('#content-central-box');
                if(this.choiceCount>4){
                    this.fIVEBE = $('<button>', {
                        'class': '.event-fIVE-button-two'
                    });
                    this.fIVEBE.text(''+this.fIVEText);
                    this.fIVEBE.on('click',this.fIVEEffect);
                    this.fIVEBE.appendTo('#content-central-box');
                }
            }
        }
    }
}

class EventFourC{

}

function eventPull(){
    console.log(g.space)
    let e;
    switch(g.zone.getZoneLable()){
        case 'grassland':
            switch(g.space){
                case 2:
                    e = new EventOB(2, 'A Tall Tree', 'A handful of precarious branches extend from the top of an immaculate fruit tree. Will you make the climb?', 'Climb: gain 5 max hp, lose 10 hp', function(){
                        g.p.maxhp+=5;
                        g.p.hp-=10;
                        if(g.p.hp<=0){playerDeath();}eventFunctionSuffix('+5 max hp. -10 hp');
                    },'Walk past: heal 4 hp',function(){
                        g.p.gainHp(4);eventFunctionSuffix('4 hp healed');
                    });
                    return e;
                case 3:
                    e = new EventOB(2, 'A Tall Tree', 'A handful of precarious branches extend from the top of an immaculate fruit tree. Will you make the climb?', 'Climb: gain 5 max hp, lose 10 hp', function(){
                        g.p.maxhp+=5;
                        g.p.hp-=10;
                        if(g.p.hp<=0){playerDeath();}eventFunctionSuffix('+5 max hp. -10 hp');
                    },'Walk past: heal 4 hp',function(){
                        g.p.gainHp(4);eventFunctionSuffix('4 hp healed');
                    });
                    return e;
                case 4:
                    e = new EventOB(2, 'Clothes Cast Aside', 'You find some clothing cast aside in the grass. They are dirty but servicable.', 'Gain Clothing: gain two armor pieces, lose 1 level heal', function(){
                        g.p.inv.chest.push(new Equippable(true, true, 'dirty shirt', 'chest', 'shirt', 0, 1, 0, 0));
                        g.p.inv.legs.push(new Equippable(true, true, 'dirty pants', 'legs', 'pants', 0, 1, 0, 0));
                        g.p.levelheal-=1;eventFunctionSuffix('dirty shirt & pants gained');
                    },'Walk past: heal 1 hp',function(){
                        g.p.gainHp(1);eventFunctionSuffix('1 hp healed');
                    });
                    return e;
                case 5:
                    e = new EventOB(2, 'Clothes Cast Aside', 'You find some clothing cast aside in the grass. They are dirty but servicable.', 'Gain Clothing: gain two armor pieces, lose 1 level heal', function(){
                        g.p.inv.chest.push(new Equippable(true, true, 'dirty shirt', 'chest', 'shirt', 0, 1, 0, 0));
                        g.p.inv.chest.push(new Equippable(true, true, 'dirty pants', 'legs', 'pants', 0, 1, 0, 0));
                        g.p.levelheal-=1;eventFunctionSuffix('dirty shirt & pants gained');
                    },'Walk past: heal 1 hp',function(){
                        g.p.gainHp(1);eventFunctionSuffix('1 hp healed');
                    });
                    return e;
                case 6:
                    e = new EventOB(2, 'The Traveler', 'A grizzled traveler pushing a cart passes by. He grumbles about dead weight in his cart and offers you a garden hoe for a few gold', 'Accept: Gain a garden hoe, lose 3 gold', function(){
                        if(g.p.gold<3){eventFunctionSuffix('not enough gold!');return;}g.p.gold-=3;
                        g.p.inv.weapons.push(new Equippable(true, true, 'garden hoe', 'weapon', 'none', 3, 0, 0, 0));eventFunctionSuffix('garden hoe obtained');
                    },'Reject: gain nothing',function(){
                        eventFunctionSuffix();
                    });
                    return e;
                case 7:
                    e = new EventOB(2, 'The Traveler', 'A grizzled traveler pushing a cart passes by. He grumbles about dead weight in his cart and offers you a garden hoe for a few gold', 'Accept: Gain a garden hoe, lose 3 gold', function(){
                        if(g.p.gold<3){eventFunctionSuffix('not enough gold!');return;}g.p.gold-=3;
                        g.p.inv.weapons.push(new Equippable(true, true, 'garden hoe', 'weapon', 'none', 3, 0, 0, 0));eventFunctionSuffix('garden hoe obtained');
                    },'Reject: gain nothing',function(){
                        eventFunctionSuffix();
                    });
                    return e;
                case 8:
                    e = new EventOB(2, 'A Gemstone?', 'Lying in the middle of the road is a peculiar looking rock. You try to pry it open to see if anything valuable is inside. Attempt to break ', 'Attempt to Open: -6 gold, 40% chance to gain 20 gold', function(){
                        if(g.p.gold<6){eventFunctionSuffix('not enough gold!');return;}g.p.gold-=6;
                        if(Math.random()<0.4){g.p.gold+=20}eventFunctionSuffix('Success! +20 gold');
                    },'Ignore: gain nothing',function(){
                        eventFunctionSuffix();
                    });
                    return e;
                case 9:
                    e = new EventOB(2, 'A Gemstone?', 'Lying in the middle of the road is a peculiar looking rock. You try to pry it open to see if anything valuable is inside. Attempt to break ', 'Attempt to Open: -6 gold, 40% chance to gain 20 gold', function(){
                        if(g.p.gold<6){eventFunctionSuffix('not enough gold!');return;}g.p.gold-=6;
                        if(Math.random()<0.4){g.p.gold+=20}eventFunctionSuffix('Success! +20 gold');
                    },'Ignore: gain nothing',function(){
                        eventFunctionSuffix();
                    });
                    return e;
                case 10:
                    e = new EventOB(3, 'The Horn', "You look down to see a strange cone at your feet. It's a horn of some kind–useful in combat, but it's clogged with mud. Blowing the horn will alert danger, but with the mud it's useless", 'Blow and Wear: alert enemies, gain horn helmet', function(){
                        g.zone.increaseZoneLevel(2);
                        g.p.inv.head.push(new Equippable(true, true, 'horn helmet', 'head', 'helmet', 2, 0, 0, 0));eventFunctionSuffix('horn helmet acquired');
                    },'Blow and wield: alert enemies, gain horn sling',function(){
                        g.zone.increaseZoneLevel(2);
                        g.p.inv.head.push(new Equippable(true, true, 'horn sling', 'weapon', 'sling', 4, 0, 0, 25));eventFunctionSuffix('horn sling acquired');
                    },'Drop it: gain nothing',function(){
                        eventFunctionSuffix();
                    });
                    return e;
                case 11:
                    e = new EventOB(3, 'The Horn', "You look down to see a strange cone at your feet. It's a horn of some kind–useful in combat, but it's clogged with mud. Blowing the horn will alert danger, but with the mud it's useless", 'Blow and Wear: alert enemies, gain horn helmet', function(){
                        g.zone.increaseZoneLevel(2);
                        g.p.inv.head.push(new Equippable(true, true, 'horn helmet', 'head', 'helmet', 2, 0, 0, 0));eventFunctionSuffix('horn helmet acquired');
                    },'Blow and wield: alert enemies, gain horn sling',function(){
                        g.zone.increaseZoneLevel(2);
                        g.p.inv.weapon.push(new Equippable(true, true, 'horn sling', 'weapon', 'sling', 4, 0, 0, 25));eventFunctionSuffix('horn sling acquired');
                    },'Drop it: gain nothing',function(){
                        eventFunctionSuffix();
                    });
                    return e;
                case 12:
                    e = new EventOB(2, 'Wild Fire', 'A rapidly growing fire has broken out behind you. Stay behind to heat and increase the lethality of your weapons', 'Stay behind: +4 damage on current equipped weapon, lose 22 hp', function(){
                        g.p.getByType('weapon').dmg+=4;
                        g.p.getByType('weapon').name = 'hot '+g.p.getByType('weapon').name;
                        g.p.hp-=22;
                        if(g.p.hp<=0){playerDeath();}eventFunctionSuffix(''+g.p.getByType('weapon').name+' gained 4 dmg');
                    },'Run: lose 3 hp',function(){
                        g.p.hp-=3;
                        if(g.p.hp<=0){playerDeath();}eventFunctionSuffix();                    
                    });
                    return e;
                case 13:
                    e = new EventOB(2, 'Wild Fire', 'A rapidly growing fire has broken out behind you. Stay behind to heat and increase the lethality of your weapons', 'Stay behind: +4 damage on current equipped weapon, lose 22 hp', function(){
                        g.p.getByType('weapon').dmg+=4;
                        g.p.hp-=22;
                        if(g.p.hp<=0){playerDeath();}eventFunctionSuffix(''+g.p.getByType('weapon').name+' gained 4 dmg');
                    },'Run: lose 3 hp',function(){
                        g.p.hp-=3;
                        if(g.p.hp<=0){playerDeath();}eventFunctionSuffix();                    
                    });
                    return e;
                case 14:
                    e = new EventOB(3, 'Oil Fissure', 'You notice a small stream of oil erupting from the ground. You bottle it up. What do you do?', 'Oil your Gear: +10 speed', function(){
                        g.p.aSLvl += 10;eventFunctionSuffix('+10 speed');
                    },'Treat Injuries: heal 16 hp',function(){
                        g.p.gainHp(16);eventFunctionSuffix('16 healed');                    
                    },'Sell: gain 10 gold',function(){
                        g.p.gold+=10;eventFunctionSuffix('+10 gold');                    
                    });
                    return e;
                case 16:
                    e = new EventOB(3, 'Oil Fissure', 'You notice a small stream of oil erupting from the ground. You bottle it up. What do you do?', 'Oil your Gear: +10 speed', function(){
                        g.p.aSLvl += 10;eventFunctionSuffix('+10 speed');
                    },'Treat Injuries: heal 16 hp',function(){
                        g.p.gainHp(16);eventFunctionSuffix('16 healed');                    
                    },'Sell: gain 10 gold',function(){
                        g.p.gold+=10;eventFunctionSuffix('+10 gold');                    
                    });
                    return e;
                case 17:
                    e = new EventOB(2, 'Oil Fissure', 'You notice a small stream of oil erupting from the ground. You bottle it up. What do you do?', 'Oil your Gear: +10 speed', function(){
                        g.p.aSLvl += 10;eventFunctionSuffix('+10 speed');
                    },'Treat Injuries: heal 16 hp',function(){
                        g.p.gainHp(16);eventFunctionSuffix('16 healed');                    
                    },'Sell: gain 10 gold',function(){
                        g.p.gold+=10;eventFunctionSuffix('+10 gold');                    
                    });
                    return e;
                case 18:
                    e = new EventOB(2, 'Oil Fissure', 'You notice a small stream of oil erupting from the ground. You bottle it up. What do you do?', 'Oil your Gear: +10 speed', function(){
                        g.p.aSLvl += 10;eventFunctionSuffix('+10 speed');
                    },'Treat Injuries: heal 16 hp',function(){
                        g.p.gainHp(16);eventFunctionSuffix('16 healed');                    
                    },'Sell: gain 10 gold',function(){
                        g.p.gold+=10;eventFunctionSuffix('+10 gold');                    
                    });
                    return e;
        }
    }
}


function pathEventPull(){
    let ep;
    switch(g.zone.getZoneLable()){
        case 'grassland':
            ep = new EventOB(2, 'A Fork In The Road','There are two paths ahead, which will you take?','The Gauntlet: Howls indicate extensive monsters–and gold–ahead', function(){
                let pathAhead = ['enemy', 'enemy', 'enemy','shop','boss'];
                for(a in pathAhead){
                    g.path.push(pathAhead[a])
                }
                eventFunctionSuffix();
            },'The Encampment: Bright lights signal opportunities for rest ahead', function(){
                let pathAhead = ['rest', 'enemy', 'shop', 'rest', 'boss'];
                for(a in pathAhead){
                    g.path.push(pathAhead[a])
                }
                eventFunctionSuffix();
            });    
            return ep;
    }
}

function eventFunctionSuffix(){
    $('#content-central-box').empty();
    $('#go-next').removeClass('hidden');
    elementUp();
}