let g; //game


function startGame(){
    g = {
        'g':0,
        'zone':'farm',
        'zoneNum':1,
        'stage':1,
        'p':new Player('ben', 'human'),
        'path':[],
        'inCombat': false,
        'level': 1,
        'xp': 0,
        'cEnemy':0,
        'cTick':0
    }
    g.path = generatePath();
}


<<<<<<< HEAD
class Equippable{
    constructor(startEquipped, name, metatype, type, dmg, armor, regen, attackSpeedChange, complexStats){
        this.equipped = startEquipped;
        this.name = name;
        this.metatype = metatype;
        this.type = type;
        this.dmg = dmg;
        this.arm = armor;
        this.regen = regen;
        this.aSChange = attackSpeedChange;
        this.income = 0;
        this.element;
        
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

=======
>>>>>>> 2e73fa70a3ce82028e3617f0df7f1d03910d86a4
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
