// all stats:
// dmg: how many hit points foe loses each attack
// armor: how much damage is blocked for each attack by foe
// regen: how much hp is regained every regen cycle 
// attack speed: how many ticks it takes for your next attack
// level heal: how much hp you regain upon the end of a combat
// dodge: chance your foes's attack does no damage
// accuracy: subtracts (or adds) to your opponent's dodge chance
// regen rate: how many ticks it takes to achieve next regen
// lifedrain: proportion of your dmg dealt which you reabsorb as health
// thorn: damage dealt to opponent on taking damage (bypasses armor)
// shatter: chance to break 1 of your oppponents armor on attack (5 shatter means 50%, 10 shatter means 100%, 15 shatter means guaranteed -1 and a 50% chance for -2). Armor regained after combat
// bleed: chance to remove 1 of your opponents regen on attack (5 bleed means 50%, 10 bleed means 100%, 15 bleed means guaranteed -1 and a 50% chance for -2). Regen regained after combat
// tear: how much max hp is removed from foe on attack (applied after normal attack, bypasses armor) does NOT regain after combat.
// anti heal: removes a flat amount of regen from opponent at start of combat
// super armor: additional armor which blocks thorn and tear
// more to come:








function combatTick(){
    g.cTick += 1;
    if(g.cTick%g.cEnemy.calcAs()==0){
        if(Math.random()>( g.player.dodge*0.01)){
            let enemyDMG = g.cEnemy.calcDmg();
            if(g.player.status.shatterApplied<g.player.calcArm()){
                enemyDMG -= (g.player.calcArm()-g.player.status.shatterApplied);
            }
            if (enemyDMG < 0){enemyDMG = 0;}
            g.player.hp-=enemyDMG;
            updatePlayerHealthBar(enemyDMG, g.player.hp, g.player.maxhp); // this will need to be moved into new function for taking damage
            g.cEnemy.gainHp(Math.floor(enemyDMG*(g.cEnemy.calcLifeDrain()/100)))
            let cleanShatter = Math.floor(g.cEnemy.calcShatter()/10); // shatter application
            if(Math.random()<((g.cEnemy.calcShatter()%10)/10)){cleanShatter+=1;}
            g.player.status.shatterApplied+=cleanShatter;
            g.player.maxhp -= g.cEnemy.tear;
            if(g.player.hp>g.player.maxhp){g.player.hp=g.player.maxhp}
            g.cEnemy.hp-=g.cEnemy.calcThorn();
        }

    }
    if(g.cTick% g.player.calcAs()==0){
        if(Math.random()>(g.cEnemy.dodge*0.01)){
            let playerDMG =  g.player.calcDmg();
            if(g.cEnemy.status.shatterApplied<g.cEnemy.calcArm()){
                playerDMG -= (g.cEnemy.calcArm()-g.cEnemy.status.shatterApplied);
            }
            if (playerDMG < 0) {playerDMG = 0;}
            g.cEnemy.hp-=playerDMG;
            g.player.gainHp(Math.floor(playerDMG*(g.player.calcLifeDrain()/100)))
            let cleanShatter = Math.floor(g.player.calcShatter()/10); // shatter application
            if(Math.random()<((g.player.calcShatter()%10)/10)){cleanShatter+=1;}
            g.cEnemy.status.shatterApplied+=cleanShatter;
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
    setBroadcastTitleText('Victory!', true)
    g.inCombat = false;
    g.player.gainGold(true, g.cEnemy.gold);
    g.zone.changeZoneLevel(g.cEnemy.diffC);
    g.player.status = new CleanStatus();
    g.cTick = 0;
     g.player.gainHp( g.player.levelheal);
    clearInterval(timeoutCombatLoop);
    $('#go-next').removeClass('hidden');
    setNextButtonVisible(true);

    $('#combatTimer').addClass('hidden');

    elementUp();
}

class CleanStatus {
    constructor(){
        this.shatterApplied = 0;
        this.bleedApplied = 0;
    }
}

