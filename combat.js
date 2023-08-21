// all stats:
// dmg: how many hit points foe loses each attack
// armor: how much damage is blocked for each attack by foe
// regen: how much hp is regained every regen cycle 
// attack speed: how many ticks it takes for your next attack
// level heal: how much hp you regain upon the end of a combat
// dodge: chance your foes's attack does no damage
// regen rate: how many ticks it takes to achieve next regen
// lifedrain: proportion of your dmg dealt which you reabsorb as health
// thorn: damage dealt to opponent on taking damage (bypasses armor)
// bash: chance to break 1 of your oppponents armor on attack (5 bash means 50%, 10 bash means 100%, 15 bash means guaranteed -1 and a 50% chance for -2). Armor regained after combat
// bleed: chance to remove 1 of your opponents regen on attack (5 bleed means 50%, 10 bleed means 100%, 15 bleed means guaranteed -1 and a 50% chance for -2). Regen regained after combat
// tear: how much max hp is removed from foe on attack (applied after normal attack, bypasses armor) does NOT regain after combat.
// anti heal: removes a flat amount of regen from opponent at start of combat
// super armor: additional armor which blocks thorn and tear
// more to come:








function combatTick(){
    g.cTick += 1;
    if(g.cTick%g.cEnemy.calcAs()==0){
        if(Math.random()>( g.player.dodge*0.01)){
            let enemyDMG = (g.cEnemy.calcDmg()- g.player.calcArm());
            if (enemyDMG < 0){enemyDMG = 0;}
            g.player.hp-=enemyDMG;
            g.player.maxhp -= g.cEnemy.tear;
            if(g.player.hp>g.player.maxhp){g.player.hp=g.player.maxhp}
            g.cEnemy.hp-=g.cEnemy.calcThorn();
        }

    }
    if(g.cTick% g.player.calcAs()==0){
        if(Math.random()>(g.cEnemy.dodge*0.01)){
            let playerDMG =  g.player.calcDmg();
            playerDMG -= g.cEnemy.calcArm();
            if (playerDMG<0) {playerDMG=0;}
            g.cEnemy.hp-=playerDMG;
            g.cEnemy.maxhp -= g.player.tear;
            if(g.cEnemy.hp>g.cEnemy.maxhp){g.cEnemy.hp=g.cEnemy.maxhp}
            g.player.hp-=g.cEnemy.calcThorn();
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
     g.player.gainGold(true, g.cEnemy.gold);
    g.zone.changeZoneLevel(g.cEnemy.diffC);
    g.cTick = 0;
     g.player.gainHp( g.player.levelheal);
    clearInterval(timeoutCombatLoop);
    $('#go-next').removeClass('hidden');
    $('.floating-next').removeClass('hide');
    $('.floating-next').addClass('show');

    $('#combatTimer').addClass('hidden');

    elementUp();
}