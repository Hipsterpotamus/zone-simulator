class Entity{
    constructor(player, name, type, health, attackspeed, damage, armor, gold, regen, complexStats) { 
        this.name = name;
        this.type = type;
        this.hp = health;
        this.maxhp = health;
        this.aS = 0; 
        this.aSLvl = attackspeed;
        this.dmg = damage;
        this.arm = armor;
        this.gold = gold;
        this.regen = regen;
        this.lifedrain = 0;
        this.thorn = 0;
        this.antiheal = 0;
        this.dodge = 0;        
        this.regenRate = 50;
        this.inv = {
            'item':[],
            'weapon':[new Equippable(true, player, 'none', 'weapon', 'none', 0, 0, 0, 0)],
            'head':[new Equippable(true, player, 'none', 'head', 'none', 0, 0, 0, 0)],
            'chest':[new Equippable(true, player, 'none', 'chest', 'none', 0, 0, 0, 0)],
            'legs':[new Equippable(true, player, 'none', 'legs', 'none', 0, 0, 0, 0)],
            'feet':[new Equippable(true, player, 'none', 'feet', 'none', 0, 0, 0, 0)],
        }
        if(complexStats){
            // This does the same thing, and allows for more complex stats to be added without having to add them
            Object.keys(complexStats).forEach((stat)=>{
                this[stat] = complexStats[stat];
            });
        }
    }
    calcDmg(){ 
       return (this.dmg+this.getByType('weapon').dmg+this.getByType('head').dmg+this.getByType('chest').dmg+this.getByType('legs').dmg+this.getByType('feet').dmg);
    }
    calcArm(){
        return (this.arm+this.getByType('weapon').arm+this.getByType('head').arm+this.getByType('chest').arm+this.getByType('legs').arm+this.getByType('feet').arm);
    }
    calcRegen(){
        return (this.regen+this.getByType('weapon').regen+this.getByType('head').regen+this.getByType('chest').regen+this.getByType('legs').regen+this.getByType('feet').regen);
    }

    calcAs() { // Attack Speed
        const rawAS = this.aSLvl + this.getByType('weapon').aSChange + this.getByType('head').aSChange + this.getByType('chest').aSChange + this.getByType('legs').aSChange + this.getByType('feet').aSChange;
        const fibonacci = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
        if(rawAS > 85){
            for(let x = (fibonacci.length-1);x>=0;x-=1){
                if((rawAS-85) > fibonacci[x]){
                    this.aS = fibonacci.length-x;
                    x=-1;
                }
            }
        }else{
            this.aS = 100 - rawAS;
        }
        return this.aS;
    }


    getByType(type){
        let foundEquip;
        for(let x = 0;x<this.inv[type].length;x+=1){
            if(this.inv[type][x].equipped == true){
                foundEquip = this.inv[type][x]
            }
        }
        // SUGGESTION: This also does the same thing and is easier to read than the for loop, it's slower but the performance difference is negligible
        // this.inv[type].forEach((item)=>{
        //     if(item.equipped == true){
        //         foundEquip = item;
        //     }
        // })

        return foundEquip;
    }
    gainHp(healAmount){
        if(healAmount == 'max'){
            this.hp = this.maxhp;
        }else{
            this.hp += healAmount;
            if(this.maxhp<this.hp){
                this.hp = this.maxhp;
            }
        }
        
    }
       // SUGGESTION: This does the same thing but never overloads HP
    // gainHp(healAmount) {
    //     this.hp = Math.min(this.maxhp, this.hp + healAmount);
    // }
}
