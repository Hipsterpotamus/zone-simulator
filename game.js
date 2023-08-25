class Game {
    constructor(characterClass) {
        this.zone = new Grasslands;
        this.player = new characterClass('human');
        this.path = new Path();
        this.combat = new Combat(20); //change this value to change combat/tick speed
        this.purchaseHistory = [];
    }

    startGame() {
        this.path.generatePath(...this.zone.pathGen);
    }
}


let g; //game

function startGame(characterClass){
    g = {
        'zone': new Grasslands(),
        'player': new characterClass('human'),
        'path': new Path(0),
        'combat': new Combat(20), //change this value to change combat/tick speed
        'purchaseHistory':[]
    }
    g.path.generatePath(...g.zone.pathGen);
}

$(function() {
    const CHARACTER_CLASSES = {
        "char-button-beneficiary": Beneficiary,
        "char-button-ninja": Ninja,
        "char-button-wisp": Wisp,
        "char-button-avatar": Avatar,
        "char-button-gambler": Gambler,
        "char-button-blob": BlobCharacter,
        "char-button-collector": Collector,
        "char-button-robot": Robot,
        "char-button-tank": Tank,
        "char-button-flourisher": Flourisher,
        "char-button-physician": Physician,
        "char-button-magnificent": Magnificent
    };

    let characterClass = Beneficiary;

    //char selection buttons
    $(".char-button").click(function() {
        $(".char-button").removeClass("selected-char");
        $(this).addClass("selected-char");
    
        const buttonId = $(this).attr("id");
        characterClass = CHARACTER_CLASSES[buttonId];
    });

    //start game button
    $('#start-game').on('click',function(){
        startGame(characterClass);
        $('#game-screen').removeClass('hidden');
        $('#start-screen').addClass('hidden');
    });
});