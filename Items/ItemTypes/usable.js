class Usable extends Item {
    constructor(game, name, itemInfo){
        super(game, name);
        this.itemInfo = itemInfo;
        this.type = false;
        this.shortDescription = '';
        this.longDescription = '';
        this.uses = 0;
        this.usableButtonUses;
        this.usableButtonInfo;
        this.usableButtonName;
        this.usableButtonDesc;
        

        //possible onUse defaults
        this.enemyDmg = false;
        this.hp = false;
        this.armor = false;
        this.enemyArm = false;
        this.weaponDmg = false;
        this.count = false;
        this.enemyDmgNonGoblin = false;
        this.gold = false;
        this.conditionalDodge = false;
        this.conditionalLifedrain = false;
        this.enemyGoldPayout = false;
        this.regen = false;
        this.weaponShatter = false;
        this.weaponBleed = false;
        this.removeShatter = false;
        this.removeBleed = false;
        this.enemyArmDouble = false;
        this.enemyAsHalf = false;
        
        if(itemInfo){
            Object.keys(itemInfo).forEach((stat)=>{
                this[stat] = itemInfo[stat];
            });
        }
    }

    genShopDesc() {
        if (this.game.player.levelInfo.characteristics.mechanical) {
            return '(' + '<del>' + this.uses + '</del> ' + this.uses * 2 + 'x Item: ' + this.shortDescription + ')';
        } else {
            return '[' + this.uses + 'x Item: ' + this.shortDescription + ']';
        };
    }

    appendToSelect() {
        this.usableButton = $('<button>', {
            'class': 'usable-button primary on-primary-text hover shadow',
            'id': this.name.replace(/\s/g, '') + '-button'
        });

        this.usableButtonUses = $('<div>', {
            'class': 'usable-item-uses',
            'id': this.name.replace(/\s/g, '') + '-uses'
        });
        this.usableButtonUses.text(this.uses);
        this.usableButtonUses.appendTo(this.usableButton);

        this.usableButtonInfo = $('<div>', {
            'class': 'usable-item-info',
            'id': this.name.replace(/\s/g, '') + '-info'
        });
        this.usableButtonInfo.appendTo(this.usableButton);

        this.usableButtonName = $('<div>', {
            'class': 'usable-item-name',
            'id': this.name.replace(/\s/g, '') + '-name'
        });
        this.usableButtonName.text(this.name);
        this.usableButtonName.appendTo(this.usableButtonInfo);

        this.usableButtonDesc = $('<div>', {
            'class': 'usable-item-desc',
            'id': this.name.replace(/\s/g, '') + '-desc'
        });
        this.usableButtonDesc.text(this.shortDescription);
        this.usableButtonDesc.appendTo(this.usableButtonInfo);

        this.usableButton.appendTo('.items-container');

        this.usableButton.on('click', () => {
            this.attemptUse();
        });

    }

    onBuy() {
        if (this.game.player.levelInfo.characteristics.mechanical) {
            this.uses = this.uses * 2;
        };
        this.game.player.addSelectableItem(this, this.game.path.itemShop, true);
    }

    attemptUse(){
        if(this.uses > 0){
            if(this.type == 'combat'){
                if(this.game.combat.inCombat){
                    this.uses -= 1;
                    this.onUse(this.game);
                    this.game.player.combatStats.itemsUsed += 1;
                    this.game.player.gameCombatStats.itemsUsed += 1;
                }else{notify('You must be in combat to use ' + this.name + '.')
                }
            }else if(this.type == 'all'){
                this.uses -= 1;
                this.onUse(this.game);
            }
            this.updateItemInfo();

        }else{
            notify('You are out of uses of ' + this.name + '.')
        }
    }

    updateItemInfo() {
        this.usableButtonUses.text(this.uses);
        if (this.uses <= 0) {
            this.usableButton.remove();
        }
    }

    onUse() {
        // Damage to enemy
        if (this.attack) {
            if (this.game.player.levelInfo.characteristics.precise) {
                this.game.combat.selectedEnemy.changeHp(Math.floor(-this.attack * 1.8));
            } else {
                this.game.combat.selectedEnemy.changeHp(-this.attack);
            }
        }
    
        // Damage to enemy, but not if it's a goblin
        if (this.attackNonGoblin && this.game.combat.selectedEnemy.type !== 'goblin') {
            if (this.game.player.levelInfo.characteristics.precise) {
                this.game.combat.selectedEnemy.changeHp(Math.floor(-this.attackNonGoblin * 1.8));
            } else {
                this.game.combat.selectedEnemy.changeHp(-this.attackNonGoblin);
            }
        }
    
        // Change player HP
        if (this.hp) {
            this.game.player.changeHp(this.hp);
        }
        if (this.armor) {
            this.game.player.changeStat('arm',this.armor);
        }
    
        // Change enemy armor
        if (this.enemyArm) {
            this.game.combat.selectedEnemy.arm += this.enemyArm;
        }
    
        // Change weapon damage
        if (this.weaponDmg) {
            this.game.player.getByType('weapon').changeStat('dmg', this.weaponDmg);
        }
    
        // Gain gold
        if (this.gold) {
            this.game.player.changeGold(this.gold);
        }
    
        // Conditional dodge
        if (this.conditionalDodge && this.game.combat.selectedEnemy.calcAs() < this.game.player.calcAs()) {
            this.game.player.changeStat('dodge', this.conditionalDodge);
        }
    
        // Conditional lifedrain
        if (this.conditionalLifedrain && this.game.combat.selectedEnemy.calcAs() > this.game.player.calcAs()) {
            this.game.player.changeStat('lifedrain', this.conditionalLifedrain);
        }
    
        // Enemy gold payout
        if (this.enemyGoldPayout) {
            this.game.player.changeGold(Math.floor(game.combat.selectedEnemy.gold * this.enemyGoldPayout));
        }
    
        // Regeneration
        if (this.regen) {
            this.game.player.changeStat('regen', this.regen);
        }
    
        // Weapon shatter
        if (this.weaponShatter) {
            this.game.player.getByType('weapon').changeStat('shatter', this.weaponShatter);
        }
 


        // Remove shatter
        if (this.removeShatter) {
            this.game.player.changeStat('shatterApplied', -game.player.shatterApplied);
        }
    
        // Double enemy armor
        if (this.enemyArmDouble) {
            let effectiveArmor = Math.max(game.combat.selectedEnemy.calcStat('arm') - this.game.combat.selectedEnemy.shatterApplied, 0);
            this.game.combat.selectedEnemy.arm += effectiveArmor;
        }
    
        // Halve enemy attack speed
        if (this.enemyAsHalf) {
            this.game.combat.selectedEnemy.changeStat('attackSpeed', this.game.combat.selectedEnemy.calcStat('attackSpeed') / 2);
        }

        // Apply Bleed
        if (this.applyBleed){
           this.game.combat.selectedEnemy.bleedApplied += this.applyBleed;
        }

        // Weapon Bleed
        if (this.weaponBleed){
            this.game.player.getByType('weapon').changeStat('shatter', this.weaponBleed);
        }

        // Remove bleed
        if (this.removeBleed) {
            this.game.player.changeStat('bleedApplied', -game.player.bleedApplied);
        }

        // 
    }
}