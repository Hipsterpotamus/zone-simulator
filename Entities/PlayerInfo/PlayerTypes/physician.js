class Physician extends Player {
    constructor(type) {
        super(type);
        this.name = 'phillip'; //implimented heal modifier but cannot find bleed
    }

    gainHp(healAmount){
        if(healAmount == 'max') {
            this.hp = this.maxhp;
        } else {
                this.hp = Math.min(this.maxhp, this.hp + healAmount * 1.3);
        }
    }
}