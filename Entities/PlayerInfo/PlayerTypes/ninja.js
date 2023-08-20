class Ninja extends Player {
    constructor(type) {
        super(type);
        this.name = 'nina'; //fully implemented
        this.dodge = 33;
    }

    calcArm(){
        return Math.floor((this.arm+this.getByType('weapon').arm+this.getByType('head').arm+this.getByType('chest').arm+this.getByType('legs').arm+this.getByType('feet').arm) / 2);
    }

    calcDmg() {
        return Math.floor((this.dmg+this.getByType('weapon').dmg+this.getByType('head').dmg+this.getByType('chest').dmg+this.getByType('legs').dmg+this.getByType('feet').dmg) * 1.2);
    }
}