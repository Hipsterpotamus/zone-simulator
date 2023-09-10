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
        this.killBug = false;

        this.tempDmg = false;
        this.tempArm = false;
        this.tempRegen = false;
        this.tempSpeed = false;
        
        this.applyWeak = false;


        if(itemInfo){
            Object.keys(itemInfo).forEach((stat)=>{
                this[stat] = itemInfo[stat];
            });
        }

        if (this.game.player.name === 'colette') {this.uses = this.uses * 2};
    }

    genShopDesc() {
        let displayUses = this.uses;
        if (this.game.player.levelInfo.activeCharacteristics.has('mechanical')) {
            displayUses = CHARACTERISTICS['mechanical'].onItemUses(this.uses);
            return '(' + '<del>' + this.uses + '</del> ' + displayUses + 'x Item: ' + this.shortDescription + ')';
        }
        return '[' + displayUses + 'x Item: ' + this.shortDescription + ']';
    }

    appendToSelect() {
        this.usableButton = $('<button>', {
            'class': 'usable-button primary on-primary-text shadow hover',
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

        this.usableButton.hover(() => {
            this.usableButtonDesc.text(this.longDescription);
        }, () => {
            this.usableButtonName.text(this.name);
            this.usableButtonDesc.text(this.shortDescription);
        });

    }

    displayDescription(description) {
        
    }

    onBuy() {
        if (this.game.player.levelInfo.activeCharacteristics.has('mechanical')) {
            this.uses = CHARACTERISTICS['mechanical'].onItemUses(this.uses);
        }
        this.game.player.addItem(this, this.game.path.itemShop, true);
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
        const calculateDamage = (baseDamage) => {
            if (this.game.player.levelInfo.activeCharacteristics.has('precise')) {
                return CHARACTERISTICS['precise'].onCalculateDamage(baseDamage);
            }
            return baseDamage;
        };
    
        // Damage to enemy
        if (this.attack) {
            const damageToEnemy = -calculateDamage(this.attack);
            this.game.combat.selectedEnemy.changeHp(damageToEnemy);
        }
    
        // Damage to enemy, but not if it's a goblin
        if (this.attackNonGoblin && this.game.combat.selectedEnemy.type !== 'goblin') {
            const damageToNonGoblinEnemy = -calculateDamage(this.attackNonGoblin);
            this.game.combat.selectedEnemy.changeHp(damageToNonGoblinEnemy);
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

        if (this.weaponEat){
            this.game.player.changeGold(this.weaponEat);
        }


        if (this.tempDmg){
            this.game.player.changeTempStat('dmg',this.tempDmg);
        }
        if (this.tempArm){
            this.game.player.changeTempStat('ar,',this.tempArm);
        }
        if (this.tempRegen){
            this.game.player.changeTempStat('regen',this.tempRegen);
        }
        if (this.tempSpeed){
            this.game.player.changeTempStat('as',this.tempSpeed);
        }

        if (this.applyWeak){
            this.game.combat.selectedEnemy.changeTimedStat('dmg', -40, (this.applyWeak*50), 'percent');
        }

        if(this.killBug & this.game.combat.selectedEnemy.type == 'bug'){
            this.game.combat.selectedEnemy.changeHp(-99999);
        }

        // 


    }
}