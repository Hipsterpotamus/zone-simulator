class Flourisher extends Player {
    constructor(type) {
        super(type);
        this.name = 'florence'; //implemented gold changes but no bosses yet
    }

    changeGold(amount, inBattle) {
        if (inBattle) {
            this.gold += Math.floor(amount * 1.5);
        } else {
            this.gold += amount;
        }
    }
}