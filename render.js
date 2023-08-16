function elementUp(){
    $('#player-stats').html(entityHtmlOutput(g.p,true));
    $('#enemy-stats').html(entityHtmlOutput(g.cEnemy,false));
    $('#combatTimer').text(Math.floor(g.cTick/(3000))+":"+Math.floor((g.cTick%(3000)/50)));
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
        htmlOutput = entity.name+'<br>';
        htmlOutput+='hp : '+entity.hp+'/'+entity.maxhp+'<br>';
        htmlOutput+='dmg : '+entity.calcDmg()+'<br>';
        htmlOutput+='time: '+(g.cTick%entity.calcAs())+'<br>';
        htmlOutput+='arm : '+entity.calcArm()+'<br>';
        htmlOutput+='regen : '+entity.calcRegen()+'<br>';
    }
    return htmlOutput;
}
function updateEquippableStats(eq){
    console.log(eq);
    let outPut = ''; 
    if(eq.metatype == 'weapon'){
        outPut+='dmg : '+eq.dmg+'<br>';
        outPut+='arm : '+eq.arm+'<br>';
        outPut+='regen : '+eq.regen+'<br>';
    }else{
        outPut+='arm : '+eq.arm+'<br>';
        outPut+='dmg : '+eq.dmg+'<br>';
        outPut+='regen : '+eq.regen+'<br>';
    }
    if(eq.name=='none'){outPut = '';}
    $('#'+eq.metatype+'-stats').html(outPut);
}