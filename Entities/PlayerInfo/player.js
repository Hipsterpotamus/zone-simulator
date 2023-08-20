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
        const fibonacci = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
        if(rawAS > 85){
            for(let x = (fibonacci.length-1);x>=0;x-=1){
                if((rawAS-85) > fibonacci[x]){
                    this.aS = fibonacci.length-x;
                    x=-1;
                }
            }
        }else{
            this.aS = 100 - rawAS;
        }
        return this.aS;
    }
}