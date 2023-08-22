let g; //game

function startGame(characterClass){
    g = {
        'g':0,
        'zone': new Grasslands(),
        'zoneNum':1,
        'space':0,
        'player':new characterClass('human'), //change this class to change character
        'path':[],
        'inCombat': false,
        'level': 1,
        'xp': 0,
        'cEnemy':0,
        'cTick':0,
        'areaCompletion':false
    }
    g.player.playerInit();
    g.zone.zoneInit();
    g.path = generatePath(g.zone.pathGen);
}