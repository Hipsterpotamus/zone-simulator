class Player extends Entity{
    constructor(type) {
        super(type);
        //default stats- can be specified further in char classes
        this.hp = 100;
        this.maxhp = 100;
        this.dmg = 1;
        this.arm = 0;
        this.regen = 0;
        this.levelheal = 5;
        this.income = 0;
        this.aS = 100; //i'm not sure what the point of setting this stat is
        this.aSLvl = 0;
        this.dodge = 0;
        this.gold = 25;
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
            this.aS = Math.max(15 - Math.floor(Math.pow((rawAS - 85) * adjScalingMult, 1/adjRoot)), 1) ;
        } else {
            this.aS = 100 - rawAS;
        }
        return this.aS;
    }
    calcDodge() {
        return (this.dodge+this.getByType('weapon').dodge+this.getByType('head').dodge+this.getByType('chest').dodge+this.getByType('legs').dodge+this.getByType('feet').dodge);
    }
    calcThorn() {
        return (this.thorn+this.getByType('weapon').thorn+this.getByType('head').thorn+this.getByType('chest').thorn+this.getByType('legs').thorn+this.getByType('feet').thorn);
    }
    calcShatter() {
        return (this.shatter+this.getByType('weapon').shatter+this.getByType('head').shatter+this.getByType('chest').shatter+this.getByType('legs').shatter+this.getByType('feet').shatter);
    }
    calcIncome() {
        return (this.income+this.getByType('weapon').income+this.getByType('head').income+this.getByType('chest').income+this.getByType('legs').income+this.getByType('feet').thorn);
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

    gainGold(inBattle, amount) {
        this.gold += amount;
    }

    changeLvlHeal(amount) {
        this.levelheal += amount;
    }
}