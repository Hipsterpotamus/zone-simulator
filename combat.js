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
        g.player.receiveHit(g.cEnemy);

    }
    if(g.cTick% g.player.calcAs()==0){
        g.cEnemy.receiveHit(g.player);
    }

    if(g.cTick% g.player.regenRate==0){
         g.player.changeHp( g.player.calcRegen())
    }
    if(g.cTick%g.cEnemy.regenRate==0){
        g.cEnemy.changeHp(g.cEnemy.calcRegen())
    }

    if( g.player.hp<=0) {
        return;
    }
    if (g.cEnemy.hp<=0) {
        return;
    }
    elementUp();
}

