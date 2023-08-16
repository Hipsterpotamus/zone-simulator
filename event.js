class EventTwoC{
    constructor(title, description, leftBText, rightBText, leftEffect, rightEffect){
        this.title = title;
        this.description = description;
        this.leftBText = leftBText;
        this.rightBText = rightBText;
        this.leftEffect = leftEffect;
        this.rightEffect = rightEffect;
        this.titleE;
        this.descriptionE;
        this.leftBE;
        this.rightBE;
    }
    createElements(){
        this.titleE = $('<p>', {
            'class': '.event-title'
        });
        this.titleE.text(this.title);
        this.titleE.appendTo('#content-central-box');
        this.descriptionE = $('<p>', {
            'class': '.event-title'
        });
        this.descriptionE.text(this.description);
        this.descriptionE.appendTo('#content-central-box');
        this.leftBE = $('<button>', {
            'class': '.event-title'
        });
        this.leftBE.text(this.leftBText);
        this.leftBE.on('click',this.leftEffect);
        this.leftBE.appendTo('#content-central-box');
        this.rightBE = $('<button>', {
            'class': '.event-title'
        });
        this.rightBE.text(this.rightBText);
        this.rightBE.on('click',this.rightEffect);
        this.rightBE.appendTo('#content-central-box');
    }
}

function eventPull(){
    let e;
    switch(g.zone){
        case 'grassland':
            switch(g.space){
                case 1:
                    e = new EventTwoC('A Tree','A handful of precarious branches extend from the top of an immaculate fruit tree. Will you make the climb?','Climb: gain 2 max hp, lose 3 hp','Walk past: heal 1 hp',function(){
                        g.p.maxhp+=2;
                        g.p.hp-=3;
                        if(g.p.hp<=0){playerDeath();}eventFunctionSuffix();
                    },function(){
                        g.p.gainHp(1);eventFunctionSuffix();
                    });
                    return e;
                case 2:
                    e = new EventTwoC('A Tree','A handful of precarious branches extend from the top of an immaculate fruit tree. Will you make the climb?','Climb: gain 2 max hp, lose 3 hp','Walk past: heal 1 hp',function(){
                        g.p.maxhp+=2;
                        g.p.hp-=3;
                        if(g.p.hp<=0){playerDeath();}eventFunctionSuffix();
                    },function(){
                        g.p.gainHp(1);eventFunctionSuffix();
                    });
                    return e;
                case 3:
                    e = new EventTwoC('A Tree','A handful of precarious branches extend from the top of an immaculate fruit tree. Will you make the climb?','Climb: gain 2 max hp, lose 3 hp','Walk past: heal 1 hp',function(){
                        g.p.maxhp+=2;
                        g.p.hp-=3;
                        if(g.p.hp<=0){playerDeath();}eventFunctionSuffix();
                    },function(){
                        g.p.gainHp(1);eventFunctionSuffix();
                    });
                    return e;
                case 4:
                    e = new EventTwoC('A Tree','A handful of precarious branches extend from the top of an immaculate fruit tree. Will you make the climb?','Climb: gain 2 max hp, lose 3 hp','Walk past: heal 1 hp',function(){
                        g.p.maxhp+=2;
                        g.p.hp-=3;
                        if(g.p.hp<=0){playerDeath();}eventFunctionSuffix();
                    },function(){
                        g.p.gainHp(1);eventFunctionSuffix();
                    });
                    return e;
                case 5:
                    e = new EventTwoC('A Tree','A handful of precarious branches extend from the top of an immaculate fruit tree. Will you make the climb?','Climb: gain 2 max hp, lose 3 hp','Walk past: heal 1 hp',function(){
                        g.p.maxhp+=2;
                        g.p.hp-=3;
                        if(g.p.hp<=0){playerDeath();}eventFunctionSuffix();
                    },function(){
                        g.p.gainHp(1);eventFunctionSuffix();
                    });
                    return e;
        }
    }
}


function pathEventPull(){
    let ep;
    switch(g.zone){
        case 'grassland':
            ep = new EventTwoC('A Fork In The Road','There are two paths ahead, which will you take?','The Gauntlet: Howls indicate extensive monsters–and gold–ahead','The Encampment: Bright lights signal opportunities for rest ahead', function(){
                let pathAhead = ['enemy', 'enemy', 'enemy','shop','boss'];
                for(a in pathAhead){
                    g.path.push(pathAhead[a])
                }
                eventFunctionSuffix();
            }, function(){
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
    elementUp();
}