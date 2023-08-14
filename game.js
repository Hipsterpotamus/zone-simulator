let g; //game


function startGame(){
    g = {
        'g':0,
        'zone':'farm',
        'zoneNum':1,
        'stage':1,
        'p':new player(),
        'path':[],
        'inCombat': false,
        'level': 1,
        'xp': 0,
        'weapon':[],
        'owned-weapon':[],
        'head':[],
        'owned-head':[],
        'chest':[],
        'owned-chest':[],
        'legs':[],
        'owned-legs':[],
        'feet':[],
        'owned-feet':[],
        'cEnemy':0
    }
    g.path = generatePath();
}


function generatePath(){
    let path = [];
    let numE = 15;
    
    let appendFront = ['enemy'];

    let shopStartP = 0.85;
    let shopGrowP = 0.15;
    let shopResetP = 0.0;
    
    
    let eventStartP = 0.15;
    let eventGrowP = 0.09;
    let eventResetP = 0.08;
   
    let restStartP = 0.05;
    let restGrowP = 0.05;
    let restResetP = 0.15;
    
    let currentP = shopStartP;
    for (let i = 0; i<(numE-2); i++){
        path.push('enemy');
    }
    for (x in path){
        if(Math.random()<currentP){
            currentP = shopResetP;
            path[x] = 'shop';
        }else{
            currentP += shopGrowP;
        }
    }
    currentP = eventStartP;
    for (y in path){
        if(path[y]=='enemy'){
            if(Math.random()<currentP){
                currentP = eventResetP;
                path[y] = 'event';
            }else{
                currentP += eventGrowP;
            }
        }
    }
    currentP = restStartP;
    for (z in path){
        if(path[z]=='enemy'){
            if(Math.random()<currentP){
                currentP = restResetP;
                path[z] = 'rest';
            }else{
                currentP += restGrowP;
            }
        }
    }

    path.push('event - path');
    for(a in path){
        appendFront.push(path[a])
    }
    
    path = appendFront;
    return path;
}

function advancePath(){
    g.stage+=1;
    switch (g.path[g.stage]){
        case 'enemy':
            genEnemy();
        break;
        case 'event':
            genEvent(false);
        break;
        case 'event - path':
            genEvent(true);
        break;
        case 'shop':
            genShop();
        break;
        case 'rest':
            genRest();
        break;
    }
}

function genEnemy(){
    $('#large-tab-title').text('Enemy Encounter');
}
function genEvent(eventPath){
    if(eventPath){
        $('#large-tab-title').text('A Forkroad');
    }else{
        $('#large-tab-title').text('Event');
    }
}
function genShop(){
    $('#large-tab-title').text('Shop');
}
function genRest(){
    $('#large-tab-title').text('A Rest Place');
}

class player{
    constructor(character) {
        this.hp = 10;
        this.maxhp = 10;
        this.dmg = 1;
        this.arm = 0;
        this.regen = 0;
        this.levelheal = 10;
        this.income = 0;
        this.aS = 50;
        this.aSLvl = 0;
        this.lifedrain = 0;
        this.antiRegen = 0;
        this.critChance = 0;
        this.dodge= 0;
        switch(character){
            case 'ben':
                
            break;
        }

        
    }
    findAttackSpeed() {
        let cpas = calcPlayerAS(this);

        if (cpas >= 35){
            cpas -= 35;
            if (cpas <= 2){
                this.aS = 15;
            }else if(cpas <= 3){
                this.aS = 14;
            }else if(cpas<= 5){
                this.aS = 13;
            }else if(cpas <= 8){
                this.aS = 12;
            }else if(cpas<= 13){
                this.aS = 11;
            }else if(cpas <= 21){
                this.aS = 10;
            }else if(cpas<= 34){
                this.aS = 9;
            }else if(cpas<= 55){
                this.aS = 8;
            }else if(cpas <= 89){
                this.aS = 7;
            }else if(cpas <= 144){
                this.aS = 6;
            }else if (cpas<=233){
                this.aS = 5;
            }else if (cpas<=377){
                this.aS = 4;
            }else if (cpas<=610){
                this.aS = 3;
            }else if (cpas<=987){
                this.aS = 2;
            }else{
                this.aS = 1;
            }
        } else{
            this.aS = 50-calcPlayerAS(this);
        }
    }
}
class enemy{
    constructor(name, type, health, attackspeed, damage, armor, gold, regen, complexStats) {
        this.name = name;
        this.type = type;
        this.hp = health;
        this.maxhp = health;
        this.aS = attackspeed; 
        this.dmg = damage;
        this.arm = armor;
        this.gold = gold;
        this.regen = regen;
        this.lifedrain = 0;
        this.thorn = 0;
        this.antiheal = 0;
        this.dodge = 0;        
        this.weapon;

        if(complexStats){
            if(complexStats.lifedrain){
                this.lifedrain=complexStats.lifedrain;
            }
            if(complexStats.thorn){
                this.thorn = complexStats.thorn;
            }
            if(complexStats.antiheal){
                this.antiheal = complexStats.antiheal;
            }
            if(complexStats.dodge){
                this.dodge = complexStats.dodge;
            }
        }
    }
}

class equipable{
    constructor(name, metatype, type, dmg, armor, regen, attackSpeedChange, complexStats){
        this.name = name;
        this.metatype = metatype;
        this.type = type;
        this.dmg = dmg;
        this.arm = armor;
        this.regen = regen;
        this.aSChange = attackSpeedChange;
        this.complexity = complexity;
        this.income = 0;
        this.element;
        this.initElement = initElement;
        
        this.appendElement();
        
        if(complexStats){
            if(complexStats.income){
                this.income = complexStats.income;
            }
        }
    }
    appendElement() {
        this.element = $('<option>', {
                'value':this.name,
                'id':'#'+this.name+'-select'
        })
        this.element.appendTo('#'+this.type+'-select');
        let textToShow = this.name+':';
        if(this.metatype == 'weapon'){
            if(this.dmg!=0){
                textToShow+=' '+displayWithSign(this.dmg)+' dmg';
            }
            if(this.arm!=0){
                textToShow+=' '+displayWithSign(this.armor)+' armor';
            }
        }else{
            if(this.arm!=0){
                textToShow+=' '+displayWithSign(this.armor)+' armor';
            }
            if(this.dmg!=0){
                textToShow+=' '+displayWithSign(this.dmg)+' dmg';
            }
        }
        if(this.regen!=0){
            textToShow+=' '+displayWithSign(this.regen)+' regen';
        }
        if(this.aSChange!=0){
            textToShow+=' '+displayWithSign(this.aSChange)+ ' speed';
        }
        if(this.income!=0){
            textToShow+=' '+displayWithSign(this.income)+ ' income';
        }
        if(this.name=='none'){
            textToShow = 'none';
        }
        this.element.text(textToShow);
    }
}

class lvlUpAbil{
    constructor(name, startUpAction,){
        this.name = name;
        this.startUp = startUpAction;
        this.startUp();
    }
}

function displayWithSign(number){
    if (number<0){
        return "-"+(-number);
    }else{
        return "+"+number;
    }
}
