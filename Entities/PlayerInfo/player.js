class Player extends Entity{
    constructor(type) {
        super(type);
        this.inv = {
            'item':[],
            'weapon':[new Equippable(true, true, 'none', 'weapon', 'none', 0, 0, 0, 0)],
            'head':[new Equippable(true, true, 'none', 'head', 'none', 0, 0, 0, 0)],
            'chest':[new Equippable(true, true, 'none', 'chest', 'none', 0, 0, 0, 0)],
            'legs':[new Equippable(true, true, 'none', 'legs', 'none', 0, 0, 0, 0)],
            'feet':[new Equippable(true, true, 'none', 'feet', 'none', 0, 0, 0, 0)],
        }
    }

    calcDmg(){ 
        return (this.dmg+this.getByType('weapon').dmg+this.getByType('head').dmg+this.getByType('chest').dmg+this.getByType('legs').dmg+this.getByType('feet').dmg);
    }

    calcArm(){
        return (this.arm+this.getByType('weapon').arm+this.getByType('head').arm+this.getByType('chest').arm+this.getByType('legs').arm+this.getByType('feet').arm);
    }

    calcRegen(){
        return (this.regen+this.getByType('weapon').regen+this.getByType('head').regen+this.getByType('chest').regen+this.getByType('legs').regen+this.getByType('feet').regen);
    }

    calcAs() { // Attack Speed
        const rawAS = this.aSLvl + this.getByType('weapon').aSChange + this.getByType('head').aSChange + this.getByType('chest').aSChange + this.getByType('legs').aSChange + this.getByType('feet').aSChange;
        const adjRoot = 3; //functionally similar to fibonacci with cleaner code
        const adjScalingMult = 4;
        if (rawAS > 85) {
            this.aS = Math.max(Math.floor(Math.pow((rawAS - 85) * adjScalingMult, 1/adjRoot)), 1);
        } else {
            this.aS = 100 - rawAS;
        }
        return this.aS;
    }

    getByType(type){
        let foundEquip;
        this.inv[type].forEach((item)=>{
             if(item.equipped == true){
                 foundEquip = item;
             }
        })
        return foundEquip;
    }
}