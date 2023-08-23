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
    g.player.gold += g.player.calcIncome();
    
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
    $('#go-next').on('click',advancePath);
    $('.floating-next').on('click',advancePath);
    
});
function genEnemy(){
    // $('#go-next').addClass('hidden');
    setNextButtonVisible(false);

    $('#combatTimer').removeClass('hidden');

    $('#large-tab-title').text('Enemy Encounter');
    setBroadcastTitleText('Enemy Encounter', true);
    g.inCombat = true;
    const copy = g.zone.getRandomEnemy();
    g.cEnemy = new Enemy(copy.name, copy.type, copy.hp, copy.aSLvl, copy.dmg, copy.arm, copy.gold, copy.regen, copy.diffC, copy.complexStats) 
    //A sloppy way to bypass having to create a true deep copy which would maintain methods. Necessary because of the intermingling of DOM elements and data elements makes a traditional deep copy difficult without libraries. 
    timeoutCombatLoop = setInterval(function () {combatTick()}, 20);
}
let eventInfo;
function genEvent(eventPath){
    // $('#go-next').addClass('hidden');
    setNextButtonVisible(false);

    if(eventPath){
        // $('#large-tab-title').text('A Forkroad');
        setBroadcastTitleText('A Forkroad');
        eventInfo = g.zone.getZoneEvent();
    }else{
        // $('#large-tab-title').text('Event');
        setBroadcastTitleText('Event');
        eventInfo = g.zone.getRandomEvent(g.space);
    }
    eventInfo.createElements();
}
function genShop(){
    // $('#large-tab-title').text('Shop');
    setBroadcastTitleText('Shop');
    g.zone.fillShop()
}
function genRest(){
    // $('#go-next').addClass('hidden');
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
    
    // $('#large-tab-title').text('Boss Battle!');
    setBroadcastTitleText('Boss Battle!', true);

    $('#combatTimer').removeClass('hidden');

    g.inCombat = true;
    const copy = g.zone.getBoss();
    g.cEnemy = new Enemy(copy.name, copy.type, copy.hp, copy.aSLvl, copy.dmg, copy.arm, copy.gold, copy.regen, copy.diffC, copy.complexStats) 
    //A sloppy way to bypass having to create a true deep copy which would maintain methods. Necessary because of the intermingling of DOM elements and data elements makes a traditional deep copy difficult without libraries. 
    timeoutCombatLoop = setInterval(function () {combatTick()}, 20);
}