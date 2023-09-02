class Magic extends Item {
    constructor(game, name, itemInfo){
        super(game, name);
        this.itemInfo = itemInfo;
        this.type = false;
        this.shortDescription = false;
        this.longDescription = false;
        this.manaCost = false;
        this.coolDown = false;
        this.usesFinite = false;

        //possible onUse defaults
        this.attack = false;
        this.enemyDmg = false;
        this.hp = false;
        this.enemyArm = false;
        this.maxhp = false;
        this.dmg = false;
        this.arm = false;
        this.as = false;
        this.enemyAs = false;
        this.maxMana = false;
        this.regen = false;
        this.shatterRecovered = false;
        this.healProportion = false;

        if(itemInfo){
            Object.keys(itemInfo).forEach((stat) => {
                this[stat] = itemInfo[stat];
            });
        }
    }

    genShopDesc() {
        return '[Spell: ' + this.manaCost + ' mana - >' + this.shortDescription + ']';
    }

    onBuy() {
        this.game.player.addSelectableItem(this, this.game.path.itemShop, true);
    }

    attemptUse(){
        if(this.game.combat.inCombat){
            if(this.game.player.mana>=this.manaCost){
                this.game.player.changeMana(-this.manaCost);
                this.game.player.combatStats.manaUsed += this.manaCost;
                this.game.player.combatStats.spellsCast += 1;
                this.game.player.gameCombatStats.manaUsed += this.manaCost;
                this.game.player.gameCombatStats.spellsCast += 1;
                this.onUse(this.game);
            }else{
                notify('not enough mana!');
            }
        }else{
            notify('magic spells can only be used during combat!')
        }
    }

    appendToSelect() {
        this.selectElement = $('<button>', {
            'value': this.name,
            'id': this.name + '-spell-use',
            'class': 'magic-spell'
        });
        this.selectElement.appendTo('#spell-container');
        let magicHtml = '';
        magicHtml += this.name + '<br>';
        magicHtml += this.manaCost + ' mana <br>';
        magicHtml += this.shortDescription;
        this.selectElement.html(magicHtml);
        this.selectElement.on('click', () => { 
            this.attemptUse();
        });
    }

    updateItemInfo() {
        //add stuff here if you want any selectable/equippable behavior for magic items
    }

    onUse(game) {
        // Damage to enemy
        if (this.attack) {
            if (this.game.player.levelInfo.characteristics.precise) {
                this.game.combat.selectedEnemy.receiveNonHitDmg(Math.ceil(this.attack * 1.8), this.game.player);
            } else {
                this.game.combat.selectedEnemy.receiveNonHitDmg(this.attack, this.game.player);
            }
        }
    
        // Change player and enemy HP
        if (this.hp) {
            this.game.player.changeHp(this.hp);
        }
        if (this.enemyHp) {
            if (this.game.player.levelInfo.characteristics.precise) {
                this.game.combat.selectedEnemy.changeHp(Math.ceil(this.hp * 1.8));
            } else {
                this.game.combat.selectedEnemy.changeHp(this.hp);
            }
        }
    
        // Change player max HP
        if (this.maxhp) {
            this.game.player.changeMaxHp(this.maxhp);
        }
    
        // Change player and enemy damage
        if (this.dmg) {
            this.game.player.changeStat('dmg', this.dmg);
        }
        if (this.enemyDmg) {
            this.game.combat.selectedEnemy.changeStat('dmg', this.enemyDmg);
        }
    
        // Change player and enemy armor
        if (this.arm) {
            this.game.player.changeStat('arm', this.arm);
        }
        if (this.enemyArm) {
            this.game.combat.selectedEnemy.changeStat('arm', this.enemyArm);
        }
    
        // Change player and enemy attack speed
        if (this.as) {
            this.game.player.changeStat('as', this.as);
        }
        if (this.enemyAs) {
            this.game.combat.selectedEnemy.changeStat('as', this.enemyAs);
        }
    
        // Change player max mana
        if (this.maxMana) {
            this.game.player.changeStat('maxMana', this.maxMana);
        }
    
        // Change player regen
        if (this.regen) {
            this.game.player.changeStat('regen', this.regen);
        }
    
        // Recover shatter
        if (this.shatterRecovered) {
            this.game.player.changeStat('shatterApplied', -Math.min(this.game.player.shatterApplied, this.shatterRecovered));
        }

        // Heal Proportion
        if (this.healProportion){
            this.game.player.changeHp(Math.floor(this.healProportion*this.game.combat.enemy.hp))
        }

        // Weapon dmg
        if (this.weaponDmg) {
            this.game.player.getByType('weapon').changeStat('dmg', this.weaponDmg);
        }

        // Weapon bleed
        if (this.weaponBleed) {
            this.game.player.getByType('weapon').changeStat('bleed', this.weaponBleed);
        }
    }
}