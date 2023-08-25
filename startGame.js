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
        let game;

        //stick any listeners that need to access game here or they won't work

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

        //item dropdowns
        $('.select').on('change', function() {
            let metatype = $(this).attr('title');
            let newItem = $(this).val();
            game.player.inv[metatype][1].forEach(item => {
                if (item.name == newItem) {
                    game.player.changeSelectedItem(item);
                }
            });
        });

        //use usable button
        $('#use-usable').on('click',function(){
            game.player.getByType('usable').attemptUse();
        })

        //debug instant button
        $('#instant-battle-debug').on('click',function(){
            if (game.combat.delay > 0) {
                game.combat.delay = 0;
            } else {
                game.combat.delay = 20;
            }
        })

        //debug infinite money
        $('#infinite-money-debug').on('click',function(){
            game.player.changeGold(10000000);
        })

        //advance space
        $(document).on('click', '#go-next-debug', function() { game.path.advancePath(); });
        $(document).on('click', '.floating-next', function() { game.path.advancePath(); });
    });
}

startGame();