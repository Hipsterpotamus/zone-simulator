let el;
$(function(){
    el = {
        // grassland zone, d-0
        'ladybug': new Enemy('lady bug', 'bug', 6, -10, 1, 0, 5, 0, 0),
        'ant': new Enemy('ant', 'bug', 4, 20, 1, 0, 6, 0, 0),
        'cricket': new Enemy('cricket', 'bug', 4, 10, 1, 0, 5, 0, 0),
        'grasshopper': new Enemy('grasshopper', 'bug', 5, 0, 1, 0, 5, 0, 0),
        'fly': new Enemy('fly', 'bug', 3, 35, 1, 0, 5, 0, 0),
        'worm': new Enemy('fly', 'bug', 11, -150, 2, 0, 6, 0, 0),

        // grassland zone, d-1
        'caterpillar': new Enemy('caterpillar', 'bug', 12, 0, 1, 0, 7, 0, 0),
        'centipede': new Enemy('centipede', 'bug', 16, -30, 1, 0, 7, 0, 0),
        'flea': new Enemy('flea','bug',8, 0, 2, 0, 6, 0, 0),
        'mantis': new Enemy('mantis','bug',9, 35, 2, 0, 7, 0, 0),
        'dragonfly': new Enemy('dragon fly','bug',13, -40, 2, 0, 8, 0, 0),
        'moth': new Enemy('moth','bug',8, 40, 1, 0, 6, 0, 0),

        // grassland zone, d-2
        'blackbeetle': new Enemy('black beetle', 'bug', 14, 0, 1, 1, 8, 0, 0),
        'bluebeetle': new Enemy('blue beetle', 'bug', 13, 5, 1, 1, 8, 0, 0),
        'redbeetle': new Enemy('red beetle', 'bug', 12, 10, 1, 1, 8, 0, 0),
        'greenbeetle': new Enemy('green beetle', 'bug', 15, -5, 1, 1, 8, 0, 0),
        'yellowbeetle': new Enemy('yellow beetle', 'bug', 16, -10, 1, 1, 8, 0, 0),
        'brownbeetle': new Enemy('brown beetle', 'bug', 17, -15, 1, 1, 8, 0, 0),

        // grassland zone, d-3
        'rabbit': new Enemy('rabbit', 'critter', 18, 20, 2, 0, 8, 0, 0),
        'bunny': new Enemy('bunny', 'critter', 14, 45, 2, 0, 6, 0, 0),
        'hare': new Enemy('hare', 'critter', 21, 0, 2, 0, 8, 0, 0),
        'bunnyrabbit': new Enemy('bunny-rabbit', 'critter', Math.floor((18+14)/2), Math.floor((20+45)/2), Math.floor((2+2)/2), Math.floor((0+0)/2), Math.floor((8+6)/2), Math.floor((0+0)/2), Math.floor((0+0)/2)),
        'guineapig': new Enemy('guinea pig', 'critter', 25, 0, 1, 0, 9, 0, 0),
        'pika': new Enemy('pika', 'critter', 15, 70, 1, 0, 8, 0, 0),

        // grassland zone, d-4
        'mole': new Enemy('mole', 'critter', 20, -100, 5, 0, 8, 0, 0),
        'vole': new Enemy('prairie dog', 'critter', 20, 45, 3, 0, 8, 0, 0),
        'gopher': new Enemy('gopher', 'critter', 20, -100, 3, 1, 8, 0, 0),
        'groundsquirrel': new Enemy('ground squirrel', 'critter', 20, -120, 4, 1, 8, 0, 0),
        'molerat': new Enemy('mole-rat', 'critter', 20, -160, 5, 1, 8, 0, 0),
        'meerkat': new Enemy('meerkat', 'critter', 20, -70, 2, 0, 8, 1, 0),

        // grassland zone, d-5
        'sparrow': new Enemy('sparrow', 'bird', 24, 0, 4, 1, 8, 0, 0, {'dodge':0.25}),
        'swallow': new Enemy('swallow', 'bird', 27, 20, 4, 1, 9, 0, 0, {'dodge':0.25}),
        'lark': new Enemy('lark', 'bird', 22, 25, 3, 2, 11, 0, 0, {'dodge':0.33}),
        'dove': new Enemy('dove', 'bird', 18, -15, 3, 1, 12, 0, 0, {'dodge':0.51}),
        'burrowowl': new Enemy('burrow owl', 'bird', 21, -120, 5, 1, 9, 1, 0, {'dodge':0.33}),
        'quail': new Enemy('burrow owl', 'bird', 30, -20, 5, 2, 12, 1, 0),

        // grassland zone, d-6
        'prairiedog': new Enemy('prairie dog', 'critter', 30, -80, 6, 1, 8, 1, 0),
        'badger': new Enemy('badger', 'critter', 32, 20, 4, 2, 11, 0, 0),
        'ferret': new Enemy('ferret', 'critter', 38, -30, 5, 2, 10, 0, 0),
        'jackrabbit': new Enemy('jackrabbit', 'critter', 28, 25, 4, 1, 10, 1, 0, {'dodge':0.10}),
        'skunk': new Enemy('skunk', 'critter', 29, -700, 20, 2, 12, 1, 0),
        'weasel': new Enemy('weasel', 'critter', 26, 40, 5, 2, 10, 1, 0),

        // grassland zone, d-7 
        'deer': new Enemy('deer','hoofed',48,10,4,2,13,1,0,{"dodge":0.2}),
        'antelope': new Enemy('antelope','hoofed',52,-10,5,1,13,1,0),
        'impala': new Enemy('impala','hoofed',54,25,3,1,10,1,0),
        'wildebeast': new Enemy('wildebeast','hoofed',65,-60, 7, 2,18,1,0),
        'pronghorn': new Enemy('pronghorn','hoofed',50,20,4,1,10,2,0),
        'gazelle': new Enemy('gazelle','hoofed',42,20,3,2,13,1,0,{"dodge":0.4}),

        // grassland zone, d-8
        'fox': new Enemy('fox','critter', 56, 25, 5, 2, 15, 1, 0),
        'coyote': new Enemy('coyote', 'critter', 62, -33, 7, 0, 16, 3, 0),
        'mongoose': new Enemy('mongoose', 'critter', 40, 15, 6, 0, 12, 2, 0),
        'bobcat': new Enemy('bobcat', 'critter', 80, 10, 10, 2, 24, 1, -1),
        'jackal': new Enemy('jackal', 'critter', 50, 10, 7, 1, 12, 1, 0, {'dodge':0.2}),
        'hyena': new Enemy('hyena', 'critter', 70, 0, 9, 1, 20, 2, 0)
    }
});



function pullEnemy(){
    let x = Math.random();
    let exE;
    switch(g.zone){
        case 'grassland':
            if(g.difficulty>9){g.difficulty = 9;}
            switch(g.difficulty){
                case 1:
                    if(x<0.50){ // easy
                        exE = pullEFromSix([el.ladybug.incDi(),el.ant.incDi(),el.cricket.incDi(),el.grasshopper.incDi(),el.fly.incDi(),el.worm.incDi()],true);
                    }else{ // medium
                        exE = pullEFromSix([el.caterpillar,el.centipede,el.flea,el.mantis,el.dragonfly,el.moth],true);
                    }
                break;
                case 2:
                    if(x<0.35){ // easy
                        exE = pullEFromSix([el.caterpillar.incDi(),el.centipede.incDi(),el.flea.incDi(),el.mantis.incDi(),el.dragonfly.incDi(),el.moth.incDi()],true);
                    }else if(x<0.80){ // medium
                        exE = pullEFromSix([el.blackbeetle,el.bluebeetle,el.redbeetle,el.greenbeetle,el.yellowbeetle,el.brownbeetle],true);
                    }else{ // hard
                        exE = pullEFromSix([el.rabbit.lowDi(),el.bunny.lowDi(),el.hare.lowDi(),el.bunnyrabbit.lowDi(),el.guineapig.lowDi(),el.pika.lowDi()],true);
                    }
                break;
                case 3:
                    if(x<0.35){ // easy
                        exE = pullEFromSix([el.blackbeetle.incDi(),el.bluebeetle.incDi(),el.redbeetle.incDi(),el.greenbeetle.incDi(),el.yellowbeetle.incDi(),el.brownbeetle.incDi()],true);
                    }else if(x<0.80){ // medium
                        exE = pullEFromSix([el.rabbit,el.bunny,el.hare,el.bunnyrabbit,el.guineapig,el.pika],true);
                    }else{ // hard
                        exE = pullEFromSix([el.mole.lowDi(),el.vole.lowDi(),el.gopher.lowDi(),el.groundsquirrel.lowDi(),el.molerat.lowDi(),el.meerkat],true);                    
                    }
                break;
                case 4:
                    if(x<0.35){ // easy
                        exE = pullEFromSix([el.rabbit.incDi(),el.bunny.incDi(),el.hare.incDi(),el.bunnyrabbit.incDi(),el.guineapig.incDi(),el.pika.incDi()],true);
                    }else if(x<0.80){ // medium
                        exE = pullEFromSix([el.mole,el.vole,el.gopher,el.groundsquirrel,el.molerat,el.meerkat],true);                    
                    }else{ // hard
                        exE = pullEFromSix([el.sparrow.lowDi(),el.swallow.lowDi(),el.lark.lowDi(),el.dove.lowDi(),el.burrowowl.lowDi(),el.quail.lowDi()],true);
                    }
                break;
                case 5:
                    if(x<0.35){ // easy
                        exE = pullEFromSix([el.mole.incDi(),el.vole.incDi(),el.gopher.incDi(),el.groundsquirrel.incDi(),el.molerat.incDi(),el.meerkat.incDi()],true);                    
                    }else if(x<0.85){ // medium
                        exE = pullEFromSix([el.sparrow,el.swallow,el.lark,el.dove,el.burrowowl,el.quail],true);
                    }else{ // hard
                        exE = pullEFromSix([el.prairiedog.lowDi(),el.badger.lowDi(),el.ferret.lowDi(),el.jackrabbit.lowDi(),el.skunk.lowDi(),el.weasel.lowDi()],true);
                    }
                break;
                case 6:
                    if(x<0.35){ // easy
                        exE = pullEFromSix([el.sparrow.incDi(),el.swallow.incDi(),el.lark.incDi(),el.dove.incDi(),el.burrowowl.incDi(),el.quail.incDi()],true);
                    }else if(x<0.80){ // medium
                        exE = pullEFromSix([el.prairiedog,el.badger,el.ferret,el.jackrabbit,el.skunk,el.weasel],true);
                    }else{ // hard
                        exE = pullEFromSix([el.deer.lowDi(),el.antelope.lowDi(),el.impala.lowDi(),el.wildebeast.lowDi(),el.pronghorn.lowDi(),el.gazelle.lowDi()],true);
                    }
                break;
                case 7:
                    if(x<0.30){ // easy
                        exE = pullEFromSix([el.prairiedog.incDi(),el.badger.incDi(),el.ferret.incDi(),el.jackrabbit.incDi(),el.skunk.incDi(),el.weasel.incDi()],true);
                    }else if(x<0.75){ // medium
                        exE = pullEFromSix([el.deer,el.antelope,el.impala,el.wildebeast,el.pronghorn,el.gazelle],true);
                    }else{ // hard
                        exE = pullEFromSix([el.fox.lowDi(),el.coyote.lowDi(),el.mongoose.lowDi(),el.bobcat.lowDi(),el.jackal.lowDi(),el.hyena.lowDi()],true);
                    }
                break;
                case 8:
                    if(x<0.25){ // medium
                        exE = pullEFromSix([el.deer,el.antelope,el.impala,el.wildebeast,el.pronghorn,el.gazelle],true);
                    }else{ // hard
                        exE = pullEFromSix([el.fox.lowDi(),el.coyote.lowDi(),el.mongoose.lowDi(),el.bobcat.lowDi(),el.jackal.lowDi(),el.hyena.lowDi()],true);
                    }
                break;
                case 9:
                    // all hard
                    exE = pullEFromSix([el.fox.lowDi(),el.coyote.lowDi(),el.mongoose.lowDi(),el.bobcat.lowDi(),el.jackal.lowDi(),el.hyena.lowDi()],true);
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

