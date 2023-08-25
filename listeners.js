$(function() {

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
});