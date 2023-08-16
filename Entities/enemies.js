let el;
$(function(){
    el = {
        // world one, d-0
        'ladybug': new Enemy('lady bug', 'bug', 6, -10, 1, 0, 5, 0, 0),
        'ant': new Enemy('ant', 'bug', 4, 20, 1, 0, 6, 0),
        'cricket': new Enemy('cricket', 'bug', 4, 10, 1, 0, 5, 0, 0),
        'grasshopper': new Enemy('grasshopper', 'bug', 5, 0, 1, 0, 5, 0, 0),
        'fly': new Enemy('fly', 'bug', 3, 35, 1, 0, 5, 0, 0),
        'worm': new Enemy('fly', 'bug', 11, -150, 2, 0, 6, 0, 0),

        // world one, d-1
        'caterpillar': new Enemy('caterpillar', 'bug', 12, 0, 1, 0, 7, 0, 0),
        'centipede': new Enemy('centipede', 'bug', 16, -30, 1, 0, 7, 0, 0),
        'flea': new Enemy('flea','bug',8, 0, 2, 0, 6, 0, 0),
        'mantis': new Enemy('mantis','bug',9, 35, 2, 0, 7, 0, 0),
        'dragonfly': new Enemy('dragon fly','bug',13, -40, 2, 0, 8, 0, 0),
        'moth': new Enemy('moth','bug',8, 40, 1, 0, 6, 0, 0)

    }
});



function pullEnemy(){
    let x = Math.random();
    let exE;
    switch(g.zone){
        case 'grassland':
            switch(g.difficulty){
                case 1:
                    if(x<0.40){ // easy
                        exE = pullEFromSix([el.ladybug.incDi(),el.ant.incDi(),el.cricket.incDi(),el.grasshopper.incDi(),el.fly.incDi(),el.worm.incDi()],true);
                    }else{ // medium
                        exE = pullEFromSix([el.caterpillar,el.centipede,el.flea,el.mantis,el.dragonfly,el.moth],true);
                    }
                break;
                case 2:
                    if(x<0.30){ // easy
                        exE = pullEFromSix([el.caterpillar.incDi(),el.centipede.incDi(),el.flea.incDi(),el.mantis.incDi(),el.dragonfly.incDi(),el.moth.incDi()],true);
                    }else if(x<0.75){ // medium
                        exE = pullEFromSix([el.cricket,el.cricket,el.cricket,el.cricket,el.cricket,el.cricket],true);
                    }else{ // hard
                        exE = pullEFromSix([el.cricket,el.cricket,el.cricket,el.cricket,el.cricket,el.cricket],true);
                    }
                break;
                case 3:
                    if(x<0.30){ // easy
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else if(x<0.75){ // medium
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else{ // hard
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }
                break;
                case 4:
                    if(x<0.30){ // easy
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else if(x<0.75){ // medium
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else{ // hard
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }
                break;
                case 5:
                    if(x<0.30){ // easy
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else if(x<0.75){ // medium
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else{ // hard
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }
                break;
                case 6:
                    if(x<0.30){ // easy
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else if(x<0.75){ // medium
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else{ // hard
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }
                break;
                case 7:
                    if(x<0.30){ // easy
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else if(x<0.75){ // medium
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else{ // hard
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }
                break;
                case 8:
                    if(x<0.30){ // easy
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else if(x<0.75){ // medium
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else{ // hard
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }
                break;
                case 9:
                    if(x<0.30){ // easy
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else if(x<0.75){ // medium
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else{ // hard
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }
                break;
                case 10:
                    if(x<0.30){ // easy
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else if(x<0.75){ // medium
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else{ // hard
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }
                break;
                case 11:
                    if(x<0.65){ // medium
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else{ // hard
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }
                break;
            }
        break;
    }
    return exE
}

function pullEFromSix(ea,even,pO,pT,pTh,pF,pFi,pS){
    let pull = Math.random();
    if(even){
        let index = Math.floor(pull/0.166667);
        console.log(ea[index]);
        return ea[index];
    }else{
        if(pull<pO){
            return ea[0];
        }else if(pull<(pO+pT)){
            return ea[1];
        }else if (pull<(pO+pT+pTh)){
            return ea[2];
        }else if (pull<(pO+pT+pTh+pF)){
            return ea[3];
        }else if (pull<(100-pS)){
            return ea[4];
        }else{
            return ea[5];
        }
    }
}

