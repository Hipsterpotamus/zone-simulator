class Robot extends Player {
    constructor(type) {
        super(type);
        this.name = 'Robert'; //fully implemented
        this.levelheal = 'max';
    }

    changeHp(healAmount){
        if(healAmount == 'max') {
            this.hp = this.maxhp;
        } else {
            this.hp = Math.min(this.hp, this.hp + amount);
        }

        if (this.hp <= 0) {
            this.hp = 0;
            this.death;
        }
    }
}