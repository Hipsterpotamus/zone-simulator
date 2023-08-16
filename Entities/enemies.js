let el;
$(function(){
    el = {
        // world one, easy, as;ldfkja;lskdfj
        'ladybug': new Enemy('lady bug', 'bug', 8, -10, 1, 0, 5, 0, 0),
        'cricket': new Enemy('cricket', 'bug', 7, 10, 1, 0, 5, 0, 0)
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
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }else{ // medium
                        exE = pullEFromSix([el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug,el.ladybug],true);
                    }
                break;
                case 2:
                    if(x<0.30){ // easy
                        exE = pullEFromSix([el.cricket,el.cricket,el.cricket,el.cricket,el.cricket,el.cricket],true);
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

