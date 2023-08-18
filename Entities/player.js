
class Player extends Entity{
    constructor(name, type) {
        super(true, name, type);
        this.hp = 100;
        this.maxhp = 100;
        this.dmg = 1;
        this.arm = 0;
        this.regen = 0;
        this.levelheal = 5;
        this.income = 0;
        this.aS = 100;
        this.aSLvl = 0;
        this.dodge = 0;
        this.gold = 25;
        
        switch(name){
            case 'ben':
                
            break;
        }
    }
}