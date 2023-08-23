class Physician extends Player {
    constructor(type) {
        super(type);
        this.name = 'phillip'; //implimented heal modifier but cannot find bleed
    }

    changeHp(amount){
        if(amount == 'max') {
            this.hp = this.maxhp;
        } else if (amount > 0) {
            this.hp = Math.min(this.maxhp, this.hp + amount * 1.3);
        } else {
            this.hp = Math.min(this.maxhp, this.hp + amount);
        }

        if (this.hp <= 0) {
            this.hp = 0;
            this.death;
        }
    }
}