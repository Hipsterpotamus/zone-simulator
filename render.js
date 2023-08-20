function elementUp(){
    $('#player-stats').html(playerHtmlOutput(g.player));
    $('#enemy-stats').html(enemyHtmlOutput(g.cEnemy));
    $('#combatTimer').text(Math.floor(g.cTick/(3000))+":"+Math.floor((g.cTick%(3000)/50)));
    $('#zone-text').text('zone: '+g.zoneNum+'–'+g.space);
    $('#gold-text').text('gold: '+ g.player.gold);
}
function playerHtmlOutput(player){
    let htmlOutput = '';
    htmlOutput = player.name+'<br>';
    htmlOutput+='hp : '+player.hp+'/'+player.maxhp+'<br>';
    htmlOutput+='dmg : '+player.calcDmg()+' ('+player.dmg+' + '+(player.calcDmg()-player.dmg)+')<br>';
    htmlOutput+='time: '+(player.calcAs()-(g.cTick%player.calcAs()))+'<br>';
    htmlOutput+='arm : '+player.calcArm()+' ('+player.arm+' + '+(player.calcArm()-player.arm)+')<br>';
    htmlOutput+='regen : '+player.calcRegen()+' ('+player.regen+' + '+(player.calcRegen()-player.regen)+')<br>';
    return htmlOutput;
}
function enemyHtmlOutput(enemy) {
    let htmlOutput = '';
    if(g.inCombat){
        htmlOutput = enemy.name+'<br>';
        htmlOutput+='hp : '+enemy.hp+'/'+enemy.maxhp+'<br>';
        htmlOutput+='dmg : '+enemy.calcDmg()+'<br>';
        htmlOutput+='time: '+(enemy.calcAs()-(g.cTick%enemy.calcAs()))+'<br>';
        htmlOutput+='arm : '+enemy.calcArm()+'<br>';
        htmlOutput+='regen : '+enemy.calcRegen()+'<br>';
    }
    return htmlOutput;
}
function updateEquippableStats(eq){
    console.log(eq);
    let statOutput = ''; 
    if(eq.metatype == 'weapon'){
        statOutput+='DMG : '+displayWithSign(eq.dmg)+'<br>';
        statOutput+='ARM : '+displayWithSign(eq.arm)+'<br>';
        statOutput+='REGEN : '+displayWithSign(eq.regen)+'<br>';
        statOutput+='SPEED : '+displayWithSign(eq.aSChange)+'<br>'
    }else{
        statOutput+='ARM : '+displayWithSign(eq.arm)+'<br>';
        statOutput+='REGEN : '+displayWithSign(eq.regen)+'<br>';
        statOutput+='DMG : '+displayWithSign(eq.dmg)+'<br>';
        statOutput+='SPEED : '+displayWithSign(eq.aSChange)+'<br>'
    }
    if(eq.name=='none'){statOutput = '';}
    $('#'+eq.metatype+'-stats').html(statOutput);
}

function displayWithSign(number){
    if (number<0){
        return "-"+(-number);
    }else{
        return "+"+number;
    }
}

$(function() {
    $( ".draggable" ).draggable();
    $( ".draggable-x" ).draggable({ axis: "x" });
});


// Theme Buttons
const link = document.querySelector('link[href="Style/Themes/theme-dark-hazel.css"]');
$(function() {
    $('#ocea-button-dark').on('click',function(){
        link.href = 'Style/Themes/theme-dark-ocea.css';
    });
    $('#ocea-button-light').on('click',function(){
        link.href = 'Style/Themes/theme-light-ocea.css';
    });
});
$(function() {
    $('#earth-button-dark').on('click',function(){
        link.href = 'Style/Themes/theme-dark-earth.css';
    });
    $('#earth-button-light').on('click',function(){
        link.href = 'Style/Themes/theme-light-earth.css';
    });
});
$(function() {
    $('#hazel-button-dark').on('click',function(){
        link.href = 'Style/Themes/theme-dark-hazel.css';
    });
    $('#hazel-button-light').on('click',function(){
        link.href = 'Style/Themes/theme-light-hazel.css';
    });
});
$(function() {
    $('#rose-button-dark').on('click',function(){
        link.href = 'Style/Themes/theme-dark-rose.css';
    });
    $('#rose-button-light').on('click',function(){
        link.href = 'Style/Themes/theme-light-rose.css';
    });
});
$(function() {
    $('#grey-button-dark').on('click',function(){
        link.href = 'Style/Themes/theme-dark-grey.css';
    });
    $('#grey-button-light').on('click',function(){
        link.href = 'Style/Themes/theme-light-grey.css';
    });
});
$(function() {
    $('#forest-button-dark').on('click',function(){
        link.href = 'Style/Themes/theme-dark-forest.css';
    });
    $('#forest-button-light').on('click',function(){
        link.href = 'Style/Themes/theme-light-forest.css';
    });
});
$(function() {
    $('#bloodorange-button-dark').on('click',function(){
        link.href = 'Style/Themes/theme-dark-bloodorange.css';
    });
    $('#bloodorange-button-light').on('click',function(){
        link.href = 'Style/Themes/theme-light-bloodorange.css';
    });
});