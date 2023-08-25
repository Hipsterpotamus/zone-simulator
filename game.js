class Game {
    constructor(characterClass) {
        this.purchaseHistory = [];
        this.player = new characterClass('human');
        this.combat = new Combat();
        this.zone = new Grasslands(this);
        this.path = new Path(this);
    }

    startGame() {
        this.path.generatePath(...this.zone.pathGen);
    }
}