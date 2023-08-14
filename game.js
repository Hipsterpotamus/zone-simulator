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
        'cEnemy':0,
        'cTick':0
    }
    g.path = generatePath();
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
        this.aS = 100;
        this.aSLvl = 0;
        this.lifedrain = 0;
        this.antiRegen = 0;
        this.critChance = 0;
        this.dodge= 0;
        this.inv = {
            'item':[],
            'weapon':[],
            'head':[],
            'chest':[],
            'legs':[],
            'feet':[],
        }
        switch(character){
            case 'ben':
                
            break;
        }

        
    }
    findAttackSpeed() {
        let cpas = calcPlayerAS(this);

        if (cpas >= 85){
            cpas -= 85;
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
