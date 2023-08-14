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
    g.stage+=1;
    switch (g.path[g.stage]){
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
    }
}

function genEnemy(){
    $('#large-tab-title').text('Enemy Encounter');
}
function genEvent(eventPath){
    if(eventPath){
        $('#large-tab-title').text('A Forkroad');
    }else{
        $('#large-tab-title').text('Event');
    }
}
function genShop(){
    $('#large-tab-title').text('Shop');
}
function genRest(){
    $('#large-tab-title').text('A Rest Place');
}