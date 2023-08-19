function combatTick(){
    g.cTick += 1;
    if(g.cTick%g.cEnemy.calcAs()==0){
        if(Math.random()>(g.p.dodge*0.01)){
            let enemyDMG = (g.cEnemy.calcDmg()-g.p.calcArm());
            if (enemyDMG < 0){enemyDMG = 0;}
            g.p.hp-=enemyDMG;
        }

    }
    if(g.cTick%g.p.calcAs()==0){
        if(Math.random()>(g.cEnemy.dodge*0.01)){
            let playerDMG = g.p.calcDmg();
            playerDMG -= g.cEnemy.calcArm();
            if (playerDMG<0) {playerDMG=0;}
            g.cEnemy.hp-=playerDMG;
            g.p.hp-=g.cEnemy.thorn;
        }
    }

    if(g.cTick%g.p.regenRate==0){
        g.p.gainHp(g.p.calcRegen())
    }
    if(g.cTick%g.cEnemy.regenRate==0){
        g.cEnemy.gainHp(g.cEnemy.calcRegen())
    }

    if(g.p.hp<=0){
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
    g.p.gold += g.cEnemy.gold;
    g.zone.increaseZoneLevel(g.cEnemy.diffC);
    g.cTick = 0;
    g.p.gainHp(g.p.levelheal);
    clearInterval(timeoutCombatLoop);
    $('#go-next').removeClass('hidden');
    $('.floating-next').removeClass('hide');
    $('.floating-next').addClass('show');
    elementUp();
}