class Game {
    constructor(characterClass) {
        this.zone = new Grasslands;
        this.player = new characterClass('human');
        this.path = new Path();
        this.combat = new Combat();
        this.purchaseHistory = [];
    }

    startGame() {
        this.path.generatePath(...this.zone.pathGen);
    }
}