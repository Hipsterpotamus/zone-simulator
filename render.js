function elementUp(){
    $('#player-stats').html(entityHtmlOutput(g.p,true));
    $('#enemy-stats').html(entityHtmlOutput(g.cEnemy,false));
    $('#combatTimer').text(Math.floor(g.cTick/(3000))+":"+Math.floor((g.cTick%(3000)/50)));
    $('#zone-text').text('zone: '+g.zoneNum+'–'+g.space);
    $('#gold-text').text('gold: '+g.p.gold);
}
function entityHtmlOutput(entity, playerQ){
    let htmlOutput = '';
    if(playerQ){
        htmlOutput = entity.name+'<br>';
        htmlOutput+='hp : '+entity.hp+'/'+entity.maxhp+'<br>';
        htmlOutput+='dmg : '+entity.calcDmg()+' ('+entity.dmg+' + '+(entity.calcDmg()-entity.dmg)+')<br>';
        htmlOutput+='time: '+(entity.calcAs()-(g.cTick%entity.calcAs()))+'<br>';
        htmlOutput+='arm : '+entity.calcArm()+' ('+entity.arm+' + '+(entity.calcArm()-entity.arm)+')<br>';
        htmlOutput+='regen : '+entity.calcRegen()+' ('+entity.regen+' + '+(entity.calcRegen()-entity.regen)+')<br>';
    }else{
        if(g.inCombat){
            htmlOutput = entity.name+'<br>';
            htmlOutput+='hp : '+entity.hp+'/'+entity.maxhp+'<br>';
            htmlOutput+='dmg : '+entity.calcDmg()+'<br>';
            htmlOutput+='time: '+(entity.calcAs()-(g.cTick%entity.calcAs()))+'<br>';
            htmlOutput+='arm : '+entity.calcArm()+'<br>';
            htmlOutput+='regen : '+entity.calcRegen()+'<br>';
        }
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