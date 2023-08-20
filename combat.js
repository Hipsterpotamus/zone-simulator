function combatTick(){
    g.cTick += 1;
    if(g.cTick%g.cEnemy.calcAs()==0){
        if(Math.random()>( g.player.dodge*0.01)){
            let enemyDMG = (g.cEnemy.calcDmg()- g.player.calcArm());
            if (enemyDMG < 0){enemyDMG = 0;}
             g.player.hp-=enemyDMG;
        }

    }
    if(g.cTick% g.player.calcAs()==0){
        if(Math.random()>(g.cEnemy.dodge*0.01)){
            let playerDMG =  g.player.calcDmg();
            playerDMG -= g.cEnemy.calcArm();
            if (playerDMG<0) {playerDMG=0;}
            g.cEnemy.hp-=playerDMG;
             g.player.hp-=g.cEnemy.thorn;
        }
    }

    if(g.cTick% g.player.regenRate==0){
         g.player.gainHp( g.player.calcRegen())
    }
    if(g.cTick%g.cEnemy.regenRate==0){
        g.cEnemy.gainHp(g.cEnemy.calcRegen())
    }

    if( g.player.hp<=0){
        playerDeath();
        return;
    }
    if(g.cEnemy.hp<=0){
        combatWin();
        return;
    }
    elementUp();
}  


function playerDeath(){
    g.inCombat = false;
    g.cTick = 0;
    clearInterval(timeoutCombatLoop);
    elementUp();
}

function combatWin(){
    g.inCombat = false;
     g.player.gold += g.cEnemy.gold;
    g.zone.changeZoneLevel(g.cEnemy.diffC);
    g.cTick = 0;
     g.player.gainHp( g.player.levelheal);
    clearInterval(timeoutCombatLoop);
    $('#go-next').removeClass('hidden');
    $('.floating-next').removeClass('hide');
    $('.floating-next').addClass('show');
    elementUp();
}