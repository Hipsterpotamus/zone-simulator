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
