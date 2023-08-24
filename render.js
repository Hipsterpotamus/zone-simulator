function elementUp(){
    $('#zone-text').text('zone: '+g.zoneNum+'–'+g.space);
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
    $( ".draggable" ).draggable();
    $( ".draggable-x" ).draggable({ axis: "x" });
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

function updatePurchaseHistory(item) {
    g.purchaseHistory.push(this);
    // add new <p> to #gold-text-tail
    let newPurchase = $('<p>', {
        'class': 'gold-text-tail-item'
    });
    newPurchase.text(item.name.charAt(0).toUpperCase() + item.name.substr(1) + ' - ' + item.goldPrice + ' Gold');
    newPurchase.appendTo('#gold-text-tail');
}