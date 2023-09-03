class Beneficiary extends Player {
    constructor(type) {
        super(type);
        this.name = 'ben';
        this.hp = 100;
        this.maxhp = 100;
        this.dmg = 1;
        this.arm = 0;
        this.regen = 0;
        this.levelheal = 10;
        this.income = 0;
        this.as = 0;
        this.dodge = 0;
        this.gold = 25;
    }

    giveGift(zoneNum) {
        let prevZone = zoneNum - 1;
        if (prevZone !== 0) {
            this.changeMaxHp(prevZone * 25);
            this.changeStat('levelheal', prevZone * 15);
            notify('You feel a surge of strength enter your body; a mysterious gift from the mysterious watcher');
        } else {
            notify('You sense that you are being watched, but there is no malice behind the watching eyes');
        }
    }
}



/* You are ben. You don't have any solid memory of how exactly you ended up in the zones, but you do know it was some kind of horrible mistake. You are scared, but in spite of your
fear you feel the comforting presence of someone or something which is trying to help you in your journey.
*/