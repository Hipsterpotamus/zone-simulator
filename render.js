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
    if(player.status.shatterApplied!=0){
        htmlOutput+='arm : '+Math.max(0,(player.calcArm()-player.status.shatterApplied))+' ('+player.arm+' + '+(player.calcArm()-player.arm)+' - '+Math.min(player.calcArm(), player.status.shatterApplied)+')<br>';
    }else{
        htmlOutput+='arm : '+player.calcArm()+' ('+player.arm+' + '+(player.calcArm()-player.arm)+')<br>';
    }
    
    htmlOutput+='regen : '+player.calcRegen()+' ('+player.regen+' + '+(player.calcRegen()-player.regen)+')<br>';
    if(player.calcDodge()!=0){htmlOutput+='dodge : '+player.calcDodge()+' ('+player.dodge+' + '+(player.calcDodge()-player.dodge)+')<br>';}
    if(player.calcThorn()!=0){htmlOutput+='thorn : '+player.calcThorn()+' ('+player.thorn+' + '+(player.calcThorn()-player.thorn)+')<br>';}
    if(player.calcShatter()!=0){htmlOutput+='shatter : '+player.calcShatter()+' ('+player.shatter+' + '+(player.calcShatter()-player.shatter)+')<br>';}
    if(player.calcLifeDrain()!=0){htmlOutput+='lifedrain : '+player.calcLifeDrain()+' ('+player.lifedrain+' + '+(player.calcLifeDrain()-player.lifedrain)+')<br>';}
    return htmlOutput;
}
function enemyHtmlOutput(enemy) {
    let htmlOutput = '';
    if(g.inCombat){
        htmlOutput = enemy.name+'<br>';
        htmlOutput+='hp : '+enemy.hp+'/'+enemy.maxhp+'<br>';
        htmlOutput+='dmg : '+enemy.calcDmg()+'<br>';
        htmlOutput+='time: '+(enemy.calcAs()-(g.cTick%enemy.calcAs()))+'<br>';
        htmlOutput+='arm : '+(enemy.calcArm()-enemy.status.shatterApplied)+'<br>';
        htmlOutput+='regen : '+enemy.calcRegen()+'<br>';
        if(enemy.calcDodge()!=0){htmlOutput+='dodge : '+enemy.calcDodge()+'<br>';}
        if(enemy.calcThorn()!=0){htmlOutput+='thorn : '+enemy.calcThorn()+'<br>';}
        if(enemy.calcShatter()!=0){htmlOutput+='shatter : '+enemy.calcShatter()+'<br>';}
        if(enemy.calcLifeDrain()!=0){htmlOutput+='lifedrain : '+enemy.calcLifeDrain()+'<br>';}
    }
    return htmlOutput;
}

function displayWithSign(number){
    if (number<0){
        return "-"+(-number);
    }else{
        return "+"+number;
    }
}

// Change Encounter/Shop/Event Title Text
 // centered=true to center the title in the floating enounter box
function setBroadcastTitleText(text, centered){
    // reset description text on Title change - clear any elements in #description-container
    $('#description-container').empty();

    $('#broadcast-title').text(text);
    if(centered){
        // apply the centered class
        $('#broadcast-title').addClass('centered');
    }else{
        // remove the centered class
        $('#broadcast-title').removeClass('centered');
    }  
}

function setNextButtonVisible(visible) {
    if(visible){
        $('.floating-next').addClass('show');
        $('.floating-next').removeClass('hide');
        $('.floating-next').prop('disabled', false)
    }else{
        $('.floating-next').addClass('hide');
        $('.floating-next').removeClass('show');
        $('.floating-next').prop('disabled', true);
    }
}

// Draggable Classes
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
// add wave
$(function() {
    $('#wave-button-dark').on('click',function(){
        link.href = 'Style/Themes/theme-dark-wave.css';
    });
    $('#wave-button-light').on('click',function(){
        link.href = 'Style/Themes/theme-light-wave.css';
    });
});