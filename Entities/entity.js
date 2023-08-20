class Entity{
    constructor(name, type, health, attackspeed, damage, armor, gold, regen, complexStats) { 
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
        if(complexStats){
            // This does the same thing, and allows for more complex stats to be added without having to add them
            Object.keys(complexStats).forEach((stat)=>{
                this[stat] = complexStats[stat];
            });
        }
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
