let g; //game

function startGame(){
    g = {
        'g':0,
        'zone':'grassland',
        'zoneNum':1,
        'space':0,
        'difficulty':1,
        'p':new Player('ben', 'human'),
        'path':[],
        'inCombat': false,
        'level': 1,
        'xp': 0,
        'cEnemy':0,
        'cTick':0,
        'areaCompletion':false
    }
    g.path = generatePath();
}

$(function() {
    $('#start-game').on('click',function(){
        startGame();
        $('#game-screen').removeClass('hidden');
        $('#start-screen').addClass('hidden');
    });
});


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


