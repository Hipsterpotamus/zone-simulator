function generatePath(zoneArray){
    let path = [];
    let numE = zoneArray[0];
    
    let appendFront = ['enemy'];

    let shopStartP = zoneArray[1]; // will be parameters in a future more sophisticated version of this function
    let shopGrowP = zoneArray[2];
    let shopResetP = zoneArray[3];
    
    
    let eventStartP = zoneArray[4]; // will be parameters in a future more sophisticated version of this function
    let eventGrowP = zoneArray[5];
    let eventResetP = zoneArray[6];
   

    let restStartP = zoneArray[7]; // will be parameters in a future more sophisticated version of this function
    let restGrowP = zoneArray[8];
    let restResetP = zoneArray[9];
    
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
    g.space+=1;
    g.player.changeGold(g.player.calcStat('income'));
    
    $('#content-central-box').empty();
    if(g.space%3==0){g.zone.changeZoneLevel(1)}
    switch (g.path[(g.space-1)]){
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
        case 'boss':
            genBoss();
        break;
        default: //none of the above are filled so the path is finished, advances to next zone
            g.zone.advanceToNextZone();
            g.space = 0;
            g.zoneNum+=1;
            g.zone.zoneInit();
            g.path = generatePath(g.zone.pathGen);
        break;

    }
    elementUp();
}

$(function() {
    $('#go-next-debug').on('click',advancePath);
    $('.floating-next').on('click',advancePath);
    
});
function genEnemy(){
    // $('#go-next-debug').addClass('hidden');
    setNextButtonVisible(false);

    $('#combatTimer').removeClass('hidden');

    $('#large-tab-title').text('Enemy Encounter');
    setBroadcastTitleText('Enemy Encounter', true);
    enemy = g.zone.getRandomEnemy();
    g.combat.startCombat(g.player, enemy);
}
let eventInfo;
function genEvent(eventPath){
    setNextButtonVisible(false);

    if(eventPath){
        setBroadcastTitleText('A Forkroad');
        eventInfo = g.zone.getZoneEvent();
    }else{
        setBroadcastTitleText('Event');
        eventInfo = g.zone.getRandomEvent(g.space);
    }
    eventInfo.createElements();
}
function genShop(){
    setBroadcastTitleText('Shop');
    g.zone.fillShop()
}
function genRest(){
    setNextButtonVisible(false);
    let rnd = Math.random();
    if (rnd < 0.4) {
        eventInfo = eventList['A Cozy Village'];
    } else if (rnd < 0.8) {
        eventInfo = eventList['A Pond'];
    } else {
        eventInfo = eventList['A Hut'];
    }
    eventInfo.createElements();
}
function genBoss(){
    setNextButtonVisible(false);
    
    setBroadcastTitleText('Boss Battle!', true);

    $('#combatTimer').removeClass('hidden');

    enemy = g.zone.getBoss();
    g.combat.startCombat(g.player, enemy);
}