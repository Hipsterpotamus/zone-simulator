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

class entity{
    constructor(name, type, health, attackspeed, damage, armor, gold, regen, complexStats) {
        this.name = name;
        this.type = type;
        this.hp = health;
        this.maxhp = health;
        this.aS = 0; 
        this.aSLvl = attackspeed;
        this.dmg = damage;
        this.arm = armor;
        this.gold = gold;
        this.regen = regen;
        this.lifedrain = 0;
        this.thorn = 0;
        this.antiheal = 0;
        this.dodge = 0;        
        this.regenRate = 50;
        this.inv = {
            'item':[],
            'weapon':[],
            'head':[],
            'chest':[],
            'legs':[],
            'feet':[],
        }
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
    calcDmg(){
       return (this.getByType('weapon','dmg')+this.getByType('head','dmg')+this.getByType('chest','dmg')+this.getByType('legs','dmg')+this.getByType('feet','dmg'));
    }
    calcArm(){
        return (this.getByType('weapon','armor')+this.getByType('head','armor')+this.getByType('chest','armor')+this.getByType('legs','armor')+this.getByType('feet','armor'));
    }
    calcRegen(){
        return (this.getByType('weapon','regen')+this.getByType('head','regen')+this.getByType('chest','regen')+this.getByType('legs','regen')+this.getByType('feet','regen'));
    }
    calcAs() {
        let rawAS = (this.aSLvl+this.getByType('weapon','attack speed')+this.getByType('head','attack speed')+this.getByType('chest','attack speed')+this.getByType('legs','attack speed')+this.getByType('feet','attack speed'));

        if (rawAS >= 85){
            rawAS -= 85;
            if (rawAS <= 2){
                this.aS = 15;
            }else if(rawAS <= 3){
                this.aS = 14;
            }else if(rawAS<= 5){
                this.aS = 13;
            }else if(rawAS <= 8){
                this.aS = 12;
            }else if(rawAS<= 13){
                this.aS = 11;
            }else if(rawAS <= 21){
                this.aS = 10;
            }else if(rawAS<= 34){
                this.aS = 9;
            }else if(rawAS<= 55){
                this.aS = 8;
            }else if(rawAS <= 89){
                this.aS = 7;
            }else if(rawAS <= 144){
                this.aS = 6;
            }else if (rawAS<=233){
                this.aS = 5;
            }else if (rawAS<=377){
                this.aS = 4;
            }else if (rawAS<=610){
                this.aS = 3;
            }else if (rawAS<=987){
                this.aS = 2;
            }else{
                this.aS = 1;
            }
        } else{
            this.aS = 100-cpas;
        }
    }
    getByType(type,stat){
        let foundEquip;
        switch(type){
            case 'weapon':
                for(let x = 0;x<this.inv.weapon.length;x+=1){
                    if(this.inv.weapon[x].equipped == true){
                        foundEquip = this.inv.weapon[x]
                    }
                }
            break;
            case 'head':
                for(let y = 0;y<this.inv.head.length;y+=1){
                    if(this.inv.head[y].equipped == true){
                        foundEquip = this.inv.head[y]
                    }
                }
            break;
            case 'chest':
                for(let z = 0;z<this.inv.chest.length;z+=1){
                    if(this.inv.chest[z].equipped == true){
                        foundEquip = this.inv.chest[z]
                    }
                }
            break;
            case 'legs':
                for(let a = 0;a<this.inv.legs.length;a+=1){
                    if(this.inv.legs[a].equipped == true){
                        foundEquip = this.inv.legs[a]
                    }
                }
            break;
            case 'feet':
                for(let b = 0;b<this.inv.feet.length;b+=1){
                    if(this.inv.feet[b].equipped == true){
                        foundEquip = this.inv.feet[b]
                    }
                }
            break;
        }
        if(stat){
            switch(stat){
                case 'dmg':
                    return foundEquip.dmg;
                case 'armor':
                    return foundEquip.arm;
                case 'regen':
                    return foundEquip.regen;
                case 'attack speed':
                    return foundEquip.aSChange;
            }
        }else{
            return foundEquip;
        }
    }
    gainHp(healAmount){
        this.hp += healAmount;
        if(this.maxhp<this.hp){
            this.hp = this.maxhp;
        }
    }
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
        this.regenRate = 50;
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
        this.regenRate = 50;
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
    constructor(startEquipped, name, metatype, type, dmg, armor, regen, attackSpeedChange, complexStats){
        this.equipped = startEquipped;
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
