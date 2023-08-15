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
        this.inv = {
            'item':[],
            'weapon':[],
            'head':[],
            'chest':[],
            'legs':[],
            'feet':[],
        }
        if(complexStats){
            if(complexStats.lifedrain){
                this.lifedrain=complexStats.lifedrain;
            }
            if(complexStats.thorn){
                this.thorn = complexStats.thorn;
            }
            if(complexStats.antiheal){
                this.antiheal = complexStats.antiheal;
            }
            if(complexStats.dodge){
                this.dodge = complexStats.dodge;
            }
        }
    }
    calcDmg(){
       return (this.getByType('weapon','dmg')+this.getByType('head','dmg')+this.getByType('chest','dmg')+this.getByType('legs','dmg')+this.getByType('feet','dmg'));
    }
    calcArm(){
        return (this.getByType('weapon','armor')+this.getByType('head','armor')+this.getByType('chest','armor')+this.getByType('legs','armor')+this.getByType('feet','armor'));
    }
    calcRegen(){
        return (this.getByType('weapon','regen')+this.getByType('head','regen')+this.getByType('chest','regen')+this.getByType('legs','regen')+this.getByType('feet','regen'));
    }
    calcAs() { // Attack Speed
        let rawAS = (this.aSLvl+this.getByType('weapon','attack speed')+this.getByType('head','attack speed')+this.getByType('chest','attack speed')+this.getByType('legs','attack speed')+this.getByType('feet','attack speed'));

        if (rawAS >= 85){
            rawAS -= 85;
            if (rawAS <= 2){// each successive decrease in attack speed length requires a growth in the raw stat by the next segment in the fibonacci sequence
                this.aS = 15;
            }else if(rawAS <= 3){
                this.aS = 14;
            }else if(rawAS<= 5){
                this.aS = 13;
            }else if(rawAS <= 8){
                this.aS = 12;
            }else if(rawAS<= 13){
                this.aS = 11;
            }else if(rawAS <= 21){
                this.aS = 10;
            }else if(rawAS<= 34){
                this.aS = 9;
            }else if(rawAS<= 55){
                this.aS = 8;
            }else if(rawAS <= 89){
                this.aS = 7;
            }else if(rawAS <= 144){
                this.aS = 6;
            }else if (rawAS<=233){
                this.aS = 5;
            }else if (rawAS<=377){
                this.aS = 4;
            }else if (rawAS<=610){
                this.aS = 3;
            }else if (rawAS<=987){
                this.aS = 2;
            }else{
                this.aS = 1;
            }
        } else{
            this.aS = 100-cpas;
        }
    }
    getByType(type,stat){
        let foundEquip;
        // This will do the same thing without all of the cases
        for(let x = 0;x<this.inv[type].length;x+=1){
            if(this.inv[type][x].equipped == true){
                foundEquip = this.inv[type][x]
            }
        }
          // This also does the same thing and is easier to read than the for loop, it's slower but the performance difference is negligible
        // this.inv[type].forEach((item)=>{
        //     if(item.equipped == true){
        //         foundEquip = item;
        //     }
        // })

        // switch(type){
        //     case 'weapon':
        //         for(let x = 0;x<this.inv.weapon.length;x+=1){
        //             if(this.inv.weapon[x].equipped == true){
        //                 foundEquip = this.inv.weapon[x]
        //             }
        //         }
        //     break;
        //     case 'head':
        //         for(let y = 0;y<this.inv.head.length;y+=1){
        //             if(this.inv.head[y].equipped == true){
        //                 foundEquip = this.inv.head[y]
        //             }
        //         }
        //     break;
        //     case 'chest':
        //         for(let z = 0;z<this.inv.chest.length;z+=1){
        //             if(this.inv.chest[z].equipped == true){
        //                 foundEquip = this.inv.chest[z]
        //             }
        //         }
        //     break;
        //     case 'legs':
        //         for(let a = 0;a<this.inv.legs.length;a+=1){
        //             if(this.inv.legs[a].equipped == true){
        //                 foundEquip = this.inv.legs[a]
        //             }
        //         }
        //     break;
        //     case 'feet':
        //         for(let b = 0;b<this.inv.feet.length;b+=1){
        //             if(this.inv.feet[b].equipped == true){
        //                 foundEquip = this.inv.feet[b]
        //             }
        //         }
        //     break;
        // }
        if(stat){
            switch(stat){
                case 'dmg':
                    return foundEquip.dmg;
                case 'armor':
                    return foundEquip.arm;
                case 'regen':
                    return foundEquip.regen;
                case 'attack speed':
                    return foundEquip.aSChange;
            }
        }else{
            return foundEquip;
        }
    }
    gainHp(healAmount){
        this.hp += healAmount;
        if(this.maxhp<this.hp){
            this.hp = this.maxhp;
        }
    }
}
