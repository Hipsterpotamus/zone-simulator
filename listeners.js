$(function() {

    //item dropdowns
    const METATYPES = ['weapon','head','chest','legs','feet', 'usable'];
    for (let metatype of METATYPES) {
        $('#' + metatype + '-select').on('change', function() {
            let newItem = $(this).val();
            g.player.inv[metatype][1].forEach(item => {
                if (item.name == newItem) {
                    g.player.changeSelectedItem(item);
                }
            });
        });
    }

    //use usable button
    $('#use-usable').on('click',function(){
        g.player.getByType('usable').attemptUse();
    })

    //debug instant button
    $('#instant-battle-debug').on('click',function(){
        if (g.combat.delay > 0) {
            g.combat.delay = 0;
        } else {
            g.combat.delay = 20;
        }
    })

    //debug infinite money
    $('#infinite-money-debug').on('click',function(){
        g.player.changeGold(10000000);
    })
});