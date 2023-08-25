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

function setEventFormat(active) {
    if(active){
        $('#content-central-box').addClass('event-active');
    }else{
        $('#content-central-box').removeClass('event-active');
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
    $(".draggable").draggable({
        cancel: "#go-next-button"  // Prevents dragging when this element is clicked
    });
    $(".draggable-x").draggable({ 
        axis: "x",
        cancel: "#go-next-button"  // Prevents dragging when this element is clicked
    });
});

// Theme Buttons
const link = document.querySelector('link[href="Style/Themes/theme-dark-bloodorange.css"]');
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
$(function() {
    $('#wave-button-dark').on('click',function(){
        link.href = 'Style/Themes/theme-dark-wave.css';
    });
    $('#wave-button-light').on('click',function(){
        link.href = 'Style/Themes/theme-light-wave.css';
    });
});

// Purchase history


// Health/Mana Bars

function updateManaBar(cost, newValue, maxMana) { // cost of spell, new Mana value, max Mana value
    $('#mana-count-title').text('mana: '+newValue+'/'+maxMana);
    var manaBar = $('#mana-bar-container'),
        bar = manaBar.find('#mana-bar'),
        hit = manaBar.find('#mana-hit-bar');
    updateBar(cost, newValue, maxMana, manaBar, bar, hit);
}

function updateBar(depleted, newValue, maxValue, barContainer, bar, hit) {
    var barWidth = (newValue / maxValue * 100) + "%";
    bar.css('width', barWidth);
    var hitWidth = (depleted / maxValue) * 100 + "%";

    // show hit bar and animate
    hit.css('width', hitWidth);
    barContainer.data('value', newValue);
    setTimeout(function(){ // Show hit bar for 0.5s
        hit.css({'width': '0'});
        bar.css('width', barWidth + "%");
    }, 500);
    return "done"
}

// Toast Bar
function notify(notification, length=3) {
    var x = document.getElementById("toast");
    x.className = "show";
    $('#toast').text(notification);
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, length * 1000);
}

// Zone background theme
function setBackgroundZone(zoneNumber) {
    // change body's class from zone-1 to zone-2..
    $('body').removeClass();
    $('body').addClass('zone-'+zoneNumber);
    
    $('#zone-image').css('background-image', 'url(Zones/Images/zone-'+zoneNumber+'.png)');
}


// create an html element that is a string that is the literal html
const icons = {
    "as" :`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.054 18.4051C20.0715 19.8402 23 18.5164 23 16.1694V7.83062C23 5.48359 20.0715 4.15983 18.054 5.59492L13 9.18996V7.83063C13 5.48359 10.0715 4.15983 8.05399 5.59492L2.19258 9.7643C0.602474 10.8954 0.602471 13.1046 2.19258 14.2357L8.05399 18.4051C10.0715 19.8402 13 18.5164 13 16.1694V14.81L18.054 18.4051ZM20.9538 16.1694C20.9538 16.9517 19.9776 17.393 19.3051 16.9146L13.4437 12.7452C12.9137 12.3682 12.9137 11.6318 13.4437 11.2548L19.3051 7.08539C19.9776 6.60703 20.9538 7.04828 20.9538 7.83062V16.1694ZM10.9538 16.1694C10.9538 16.9517 9.97763 17.393 9.30513 16.9146L3.44372 12.7452C2.91369 12.3682 2.91369 11.6318 3.44373 11.2548L9.30513 7.08539C9.97763 6.60703 10.9538 7.04828 10.9538 7.83063L10.9538 16.1694Z"/> </g>
    </svg>
    `,
    "dmg": `<svg width="211px" height="211px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="4.608" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M221.65723,34.34326A8.00246,8.00246,0,0,0,216,32h-.02539l-63.79883.20117A8.00073,8.00073,0,0,0,146.0332,35.106L75.637,120.32275,67.31348,111.999A16.02162,16.02162,0,0,0,44.68555,112L32.001,124.68555A15.99888,15.99888,0,0,0,32,147.31348l20.88672,20.88769L22.94531,198.14258a16.01777,16.01777,0,0,0,.001,22.62695l12.28418,12.28418a16.00007,16.00007,0,0,0,22.62793,0L87.79883,203.1123,108.68652,224.001A16.02251,16.02251,0,0,0,131.31445,224L143.999,211.31445A15.99888,15.99888,0,0,0,144,188.68652l-8.32324-8.32324,85.21679-70.39648a8.00125,8.00125,0,0,0,2.90528-6.14258L224,40.02539A8.001,8.001,0,0,0,221.65723,34.34326Zm-13.84668,65.67822-83.49829,68.97706L111.314,156l54.34327-54.34277a8.00053,8.00053,0,0,0-11.31446-11.31446L100,144.686,87.00195,131.6875,155.97852,48.189l51.99609-.16357Z"></path> </g></svg>
    `,
    'regen':`<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier">
    <path d="M6.121,10.7A6.462,6.462,0,0,0,3,16c0,3.859,4.037,7,9,7s9-3.141,9-7a6.58,6.58,0,0,0-3.121-5.3h0A6.721,6.721,0,0,1,15,5.04V3h1a1,1,0,0,0,0-2H8A1,1,0,0,0,8,3H9V5.04A6.724,6.724,0,0,1,6.121,10.7ZM12,21c-3.171,0-6.9-1.8-6.992-4.892a9.692,9.692,0,0,0,6.363-.179,14.315,14.315,0,0,1,7.539-.673l.008.035C19.629,18.547,15.857,21,12,21ZM13,3V5.04a8.713,8.713,0,0,0,3.768,7.318,6.1,6.1,0,0,1,.91.744,15.626,15.626,0,0,0-7.049.969,7.644,7.644,0,0,1-5.122.1,5.388,5.388,0,0,1,1.725-1.808A8.716,8.716,0,0,0,11,5.04V3Zm2,15a1,1,0,1,1-1-1A1,1,0,0,1,15,18Zm-4-7a1,1,0,1,1,1,1A1,1,0,0,1,11,11Z"/></g>
    </svg>`,
    'arm':``,
    'dodge':``,
    'speed':``,
    'thorn':``,
    'shatter':``,
    'income':``,
    'lifedrain':``,
    'bleed':``,
    'accuracy':``,
    'superarmor':``,
    'tear':``,
}