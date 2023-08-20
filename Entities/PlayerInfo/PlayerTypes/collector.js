class Collector extends Player {
    constructor(type) {
        super(type);
        this.name = 'colette'; //implemented level heal changes, gonna wait till items are more fleshed out for double items
    }

    changeLvlHeal(amount) {
        this.levelheal += amount * 0;
    }
}