class Game {
    constructor() {
        this.purchaseHistory;
        this.player;
        this.combat;
        this.zone;
        this.path;
    }

    startNewGame(characterClass) {
        this.purchaseHistory = [];
        this.player = new characterClass('human');
        this.combat = new Combat();
        this.zone = new Grasslands(this);
        this.path = new Path(this);
        this.path.generatePath(...this.zone.pathGen);
    }
}