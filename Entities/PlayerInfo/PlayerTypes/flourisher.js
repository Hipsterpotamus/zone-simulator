class Flourisher extends Player {
    constructor(type) {
        super(type);
        this.name = 'florence'; //implemented gold changes but no bosses yet
    }

    gainGold(inBattle, amount) {
        if (inBattle) {
            this.gold += Math.floor(amount * 1.5);
        } else {
            this.gold += amount;
        }
    }
}