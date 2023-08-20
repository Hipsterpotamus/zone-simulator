class Benefactor extends Player {
    constructor(type) {
        super(type);
        //i'm not sure if these are default stats for each class or just ben
        //you can move this to the parent class if they're the same for each
        this.name = 'ben';
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
    }
}