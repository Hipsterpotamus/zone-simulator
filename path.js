function generatePath(){
    let path = [];
    let numE = 15;
    
    let appendFront = ['enemy'];

    let shopStartP = 0.85; // will be parameters in a future more sophisticated version of this function
    let shopGrowP = 0.15;
    let shopResetP = 0.0;
    
    
    let eventStartP = 0.15; // will be parameters in a future more sophisticated version of this function
    let eventGrowP = 0.09;
    let eventResetP = 0.08;
   

    let restStartP = 0.05; // will be parameters in a future more sophisticated version of this function
    let restGrowP = 0.05;
    let restResetP = 0.15;
    
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
    elementUp();
    g.space+=1;
    $('#content-central-box').empty();
    if(g.space%3==0){g.zone.changeZoneLevel(1);console.log('diff up')}
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
    }
}

$(function() {
    $('#go-next').on('click',advancePath);
    $('.floating-next').on('click',advancePath);
    
});
function genEnemy(){
    // $('#go-next').addClass('hidden');
    $('.floating-next').addClass('hide');
    $('.floating-next').removeClass('show');

    $('#combatTimer').removeClass('hidden');

    $('#large-tab-title').text('Enemy Encounter');
    g.inCombat = true;
    const copy = g.zone.getRandomEnemy();
    g.cEnemy = new Enemy(copy.name, copy.type, copy.hp, copy.aSLvl, copy.dmg, copy.arm, copy.gold, copy.regen, copy.diffC, copy.complexStats) 
    //A sloppy way to bypass having to create a true deep copy which would maintain methods. Necessary because of the intermingling of DOM elements and data elements makes a traditional deep copy difficult without libraries. 
    timeoutCombatLoop = setInterval(function () {combatTick()}, 20);
}
let eventInfo;
function genEvent(eventPath){
    // $('#go-next').addClass('hidden');
    $('.floating-next').addClass('hide');
    $('.floating-next').removeClass('show');

    if(eventPath){
        $('#large-tab-title').text('A Forkroad');
        eventInfo = g.zone.getZoneEvent();
    }else{
        $('#large-tab-title').text('Event');
        eventInfo = g.zone.getRandomEvent(g.space);
    }
    eventInfo.createElements();
}
function genShop(){
    $('#large-tab-title').text('Shop');
    fillShop(g.zone.getShopType());
}
function genRest(){
    // $('#go-next').addClass('hidden');
    $('.floating-next').removeClass('show');
    $('.floating-next').addClass('hide');
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
    $('.floating-next').addClass('hide');
    $('.floating-next').removeClass('show');

    $('#large-tab-title').text('Boss Battle!');

    $('#combatTimer').removeClass('hidden');

    g.inCombat = true;
    const copy = g.zone.getBoss();
    g.cEnemy = new Enemy(copy.name, copy.type, copy.hp, copy.aSLvl, copy.dmg, copy.arm, copy.gold, copy.regen, copy.diffC, copy.complexStats) 
    //A sloppy way to bypass having to create a true deep copy which would maintain methods. Necessary because of the intermingling of DOM elements and data elements makes a traditional deep copy difficult without libraries. 
    timeoutCombatLoop = setInterval(function () {combatTick()}, 20);
}