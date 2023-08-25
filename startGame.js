let game; //game
function startGame() {
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
            game = new Game(characterClass);
            game.startGame()
            $('#game-screen').removeClass('hidden');
            $('#start-screen').addClass('hidden');
        });
    });
}

startGame();