class Robot extends Player {
    constructor(type) {
        super(type);
        this.name = 'Robert'; //fully implemented
        self.levelheal = 'max';
    }

    gainHp(healAmount){
        if(healAmount == 'max') {
            this.hp = this.maxhp;
        }
    }
}