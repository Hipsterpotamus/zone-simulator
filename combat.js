function combatTick(){
    g.cTick += 1;
    if(g.cTick%g.cEnemy.aS==0){
        if(Math.random()>(g.p.dodge*0.01)){
            let enemyDMG = (g.cEnemy.calcDmg()-calcPlayerArm(player));
            if (enemyDMG < 0){enemyDMG = 0;}
            g.p.hp-=enemyDMG;
        }

    }
    if(g.cTick%g.p.aS==0){
        if(Math.random()>(cEnemy.dodge*0.01)){
            let playerDMG = g.p.calcDmg();
            playerDMG -= cEnemy.arm;
            if (playerDMG<0) {playerDMG=0;}
            g.cEnemy.hp-=playerDMG;
            g.p.hp-=cEnemy.thorn;
        }
    }

    if(g.cTick%g.p.regenRate==0){

    }
}  

function calcPlayerArm(){
    return g.p.arm;
}
function calcPlayerDmg(){
    return g.p.dmg;
}
// function combatRun(){
//     combatTick+=1;

//     if(combatTick%cEnemy.aS==0){
//         if(Math.random()>(player.dodge*0.01)){
//             let enemyDMG = cEnemy.dmg-calcPlayerARM(player);
//             if (enemyDMG < 0){enemyDMG = 0;}
//             player.hp-=enemyDMG;
//         }
//     }
    
//     if(combatTick%player.aS==0){
//         if(Math.random()>(cEnemy.dodge*0.01)){
//             let playerDMG = calcPlayerDMG(player);
//             playerDMG -= cEnemy.arm;
//             if (playerDMG<0) {playerDMG=0;}
//             cEnemy.hp-=playerDMG;
//             player.hp-=cEnemy.thorn;
//         }
//     }

//     if(combatTick%50==0){
//         cEnemy.hp-=player.lifedrain;
//         player.hp-=cEnemy.lifedrain;
//         cEnemy.hp = gainHP(cEnemy.hp, cEnemy.maxhp, cEnemy.lifedrain, false);
//     }

//     if (player.hp<=0){
//         elementUp();
//         clearInterval(timeoutCombatLoop);
//         playerDeath();
//         return;
//     }

//     if (cEnemy.hp <= 0) {
//         elementUp();
//         clearInterval(timeoutCombatLoop);
//         playerWin(cEnemy.gold);
//         return;
//     }

    
//     if(combatTick%25==0){
//         player.hp = gainHP(player.hp, player.maxhp, (player.regen-cEnemy.antiheal), true);
//         cEnemy.hp = gainHP(cEnemy.hp, cEnemy.maxhp, cEnemy.regen, false);
//     }

//     elementUp();
// }
// let nextAreaOpen = false;
// function playerWin(goldWon){
//     inCombat = false;
    
//     gold+=goldWon;
//     gold+=calcIncome(player);
    
//     player.hp = gainHP(player.hp, player.maxhp, player.cFR, true);
    
//     if(stage!=10){
//         stage++;
//         $("#startBTL").show();                
//         shopUpdate();
//     }else{
//         nextAreaOpen = true;
//         $("#startBTL").hide();
//         $("#advanceNextArea").show();
//     }
//     elementUp();
// }

// function gainHP(hp, maxhp, regen, isplayer){
//     if(isplayer){
//         if(((hp+regen)>maxhp)){return maxhp;}else{return(hp+regen)}
//     }else{
//         if(((hp+regen)>maxhp)){return maxhp;}else{return(hp+regen)}
//     }
// }
// function calcIncome(plyr){
//     let incGold = 0;
//     incGold+=plyr.income;
//     if(plyr.head){
//         incGold+=plyr.head.income;
//     }    
//     if(plyr.chest){
//         incGold+=plyr.chest.income;
//     }
//     if(plyr.legs){
//         incGold+=plyr.legs.income;
//     }
//     if(plyr.feet){
//         incGold+=plyr.feet.income;
//     }
//     return incGold;
// }