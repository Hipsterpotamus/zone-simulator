let g; //game


function startGame(){
    g = {
        'g':0,
        'zone':'grassland',
        'zoneNum':1,
        'stage':1,
        'difficulty':1,
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
