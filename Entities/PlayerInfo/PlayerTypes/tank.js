class Tank extends Player {
    constructor(type) {
        super(type);
        this.name = 'tanner'; //fully implemented
    }

    calcArm() {
        return (this.dmg+this.getByType('weapon').dmg+this.getByType('head').dmg+this.getByType('chest').dmg+this.getByType('legs').dmg+this.getByType('feet').dmg) * 2;
    }

    calcAs() { // Attack Speed
        const rawAS = (this.aSLvl + this.getByType('weapon').aSChange + this.getByType('head').aSChange + this.getByType('chest').aSChange + this.getByType('legs').aSChange + this.getByType('feet').aSChange) / 2;
        const adjRoot = 3; //functionally similar to fibonacci with cleaner code
        const adjScalingMult = 4;
        if (rawAS > 85) {
            this.aS = Math.max(Math.floor(Math.pow((rawAS - 85) * adjScalingMult, 1/adjRoot)), 1);
        } else {
            this.aS = 100 - rawAS;
        }
        return this.aS;
    }
}