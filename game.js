let g; //game

function startGame(characterClass){
    g = {
        'g':0,
        'zone': new Grasslands(),
        'player': new characterClass('human'),
        'path': new Path(0),
        'combat': new Combat(20), //change this value to change combat/tick speed
        'level': 1,
        'xp': 0,
        'areaCompletion':false
    }
    g.player.playerInit();
    g.zone.zoneInit();
    g.path.generatePath(...g.zone.pathGen);
}