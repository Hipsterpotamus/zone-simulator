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
        start: function(event, ui) {
            if ($(event.originalEvent.target).is(".go-next-button")) {
                return false;
            }
        }
    });
    $(".draggable-x").draggable({ 
        axis: "x",
        start: function(event, ui) {
            if ($(event.originalEvent.target).is(".go-next-button")) {
                return false;
            }
        }
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
    $('#mana-count-title').text(newValue);
    var manaBar = $('#mana-bar-container'),
        bar = manaBar.find('#mana-bar'),
        hit = manaBar.find('#mana-hit-bar');
    updateBar(cost, newValue, maxMana, manaBar, bar, hit, 'height');
}

function updateBar(depleted, newValue, maxValue, barContainer, bar, hit, direction='width') {
    var barSize = (newValue / maxValue * 100) + "%";
    bar.css(direction, barSize);
    var hitSize = (depleted / maxValue) * 100 + "%";

    // show hit bar and animate
    hit.css(direction, hitSize);
    barContainer.data('value', newValue);
    setTimeout(function(){ // Show hit bar for 0.5s
        hit.css({direction: '0'});
        bar.css(direction, barSize + "%");
    }, 500);

    // if decreasing, animate
    if (depleted > 0) {
        bar.addClass('hit-stable');
        setTimeout(function(){bar.removeClass('hit-stable');}, 400);
    }

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
const stat_icons = {
    "as" :`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 14V11M12 6C7.85786 6 4.5 9.35786 4.5 13.5C4.5 17.6421 7.85786 21 12 21C16.1421 21 19.5 17.6421 19.5 13.5C19.5 11.5561 18.7605 9.78494 17.5474 8.4525M12 6C14.1982 6 16.1756 6.94572 17.5474 8.4525M12 6V3M19.5 6.5L17.5474 8.4525M12 3H9M12 3H15" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
    "dmg": `<svg width="211px" height="211px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="4.608" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M221.65723,34.34326A8.00246,8.00246,0,0,0,216,32h-.02539l-63.79883.20117A8.00073,8.00073,0,0,0,146.0332,35.106L75.637,120.32275,67.31348,111.999A16.02162,16.02162,0,0,0,44.68555,112L32.001,124.68555A15.99888,15.99888,0,0,0,32,147.31348l20.88672,20.88769L22.94531,198.14258a16.01777,16.01777,0,0,0,.001,22.62695l12.28418,12.28418a16.00007,16.00007,0,0,0,22.62793,0L87.79883,203.1123,108.68652,224.001A16.02251,16.02251,0,0,0,131.31445,224L143.999,211.31445A15.99888,15.99888,0,0,0,144,188.68652l-8.32324-8.32324,85.21679-70.39648a8.00125,8.00125,0,0,0,2.90528-6.14258L224,40.02539A8.001,8.001,0,0,0,221.65723,34.34326Zm-13.84668,65.67822-83.49829,68.97706L111.314,156l54.34327-54.34277a8.00053,8.00053,0,0,0-11.31446-11.31446L100,144.686,87.00195,131.6875,155.97852,48.189l51.99609-.16357Z"></path> </g></svg>
    `,
    'regen':`<svg fill="" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500.925 500.925" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M473.286,139.325c-21.333-22.4-51.2-30.933-82.133-27.733c4.267-30.933-4.267-61.867-25.6-83.2 c-39.467-40.533-105.6-37.333-154.667,7.467c-23.467,21.333-37.333,66.133-41.6,136.533 c-10.667,4.267-21.333,11.733-29.867,20.267c-22.4,21.333-30.933,52.267-27.733,83.2c-30.933-4.267-61.867,4.267-83.2,25.6 C-10.98,340.925-7.78,408.125,35.953,457.191c26.667,28.8,89.6,43.733,190.933,43.733c45.867,0,81.067-3.2,82.133-2.133 c9.6-1.067,18.133-8.533,19.2-18.133c2.133-11.733,10.667-76.8,7.467-144c60.8-4.267,103.467-18.133,125.867-41.6 c23.466-22.4,37.333-54.4,38.4-85.333C501.02,183.058,491.42,157.458,473.286,139.325z M289.82,457.191 c-14.933,1.067-37.333,2.133-62.933,2.133c-82.133,0-141.867-10.667-158.933-29.867c-28.8-32-33.067-74.667-9.6-98.133 c12.8-12.8,27.733-14.933,38.4-14.933c11.733,0,24.533,3.2,36.267,8.533c7.467,4.267,18.133,3.2,24.533-3.2 c6.4-6.4,8.533-16,4.267-24.533c-13.867-26.667-11.733-57.6,6.4-75.733c10.667-9.6,24.533-14.933,39.467-14.933 c20.267,0,41.6,9.6,56.533,25.6C302.62,273.725,297.286,396.392,289.82,457.191z M433.82,265.191 c-17.067,17.067-52.267,27.733-102.4,30.933c-5.333-36.267-17.067-69.333-37.333-91.733c-21.333-24.533-51.2-38.4-82.133-39.467 c6.4-70.4,21.333-92.8,27.733-98.133c32-28.8,74.667-33.067,97.067-9.6c18.133,19.2,20.267,49.067,5.333,76.8 c-4.267,7.467-3.2,18.133,3.2,24.533c6.4,7.467,16,8.533,24.533,4.267c26.667-14.933,56.533-11.733,74.667,6.4 c9.6,9.6,14.933,24.533,14.933,40.533C459.42,229.991,449.82,250.258,433.82,265.191z"></path> </g> </g> </g></svg>`,
    'arm':`<svg fill="#" viewBox="-4 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-shield-half"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8 2.136l-6 2.25V8a9.02 9.02 0 0 0 3.08 6.787L8 17.342V2.136zm-7.351.62L8 0l7.351 2.757a1 1 0 0 1 .649.936V8c0 3.177-1.372 6.2-3.763 8.293L8 20l-4.237-3.707A11.019 11.019 0 0 1 0 8V3.693a1 1 0 0 1 .649-.936z"></path></g></svg>`,
    'dodge':`<svg width="800px" height="800px" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.192">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier"> <path d="M17.448 2.03362C17.8385 1.64315 18.4716 1.64302 18.8621 2.0334L21.4146 4.58483C22.1959 5.36584 22.1961 6.63239 21.4149 7.41355L18.8675 9.96094C18.477 10.3515 17.8438 10.3515 17.4533 9.96094C17.0628 9.57042 17.0628 8.93725 17.4533 8.54673L19 7H14.2361C13.8573 7 13.511 7.214 13.3416 7.55279L11.8954 10.4452L10.7699 8.22417L11.5528 6.65836C12.061 5.64201 13.0998 5 14.2361 5H19L17.4479 3.44791C17.0574 3.05738 17.0575 2.42415 17.448 2.03362Z" fill=""/> <path d="M17.448 14.0336C17.8385 13.6432 18.4716 13.643 18.8621 14.0334L21.4146 16.5848C22.1959 17.3658 22.1961 18.6324 21.4149 19.4136L18.8675 21.9609C18.477 22.3515 17.8438 22.3515 17.4533 21.9609C17.0628 21.5704 17.0628 20.9373 17.4533 20.5467L19 19H14.2361C13.0998 19 12.061 18.358 11.5528 17.3416L6.65836 7.55279C6.48897 7.214 6.1427 7 5.76393 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H5.76393C6.90025 5 7.93904 5.64201 8.44721 6.65836L13.3416 16.4472C13.511 16.786 13.8573 17 14.2361 17H19L17.4479 15.4479C17.0574 15.0574 17.0575 14.4241 17.448 14.0336Z" fill=""/> <path d="M8.12308 13.5178L9.24864 15.7388L8.44721 17.3416C7.93904 18.358 6.90025 19 5.76393 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H5.76393C6.1427 17 6.48897 16.786 6.65836 16.4472L8.12308 13.5178Z" fill=""/> </g></svg>`,
    'speed':`<svg fill="" width="185px" height="185px" viewBox="-3.52 -3.52 39.04 39.04" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <title>clock</title> <path d="M0 7.008q0 1.856 0.992 3.52 1.184-3.328 3.712-5.824t5.824-3.712q-1.696-0.992-3.52-0.992-2.912 0-4.96 2.080t-2.048 4.928zM2.016 16q0 2.784 1.056 5.312t2.944 4.48v4.224q0 0.832 0.576 1.408t1.408 0.576 1.408-0.576 0.608-1.408v-1.408q2.912 1.408 5.984 1.408t6.016-1.408v1.408q0 0.832 0.576 1.408t1.408 0.576 1.408-0.576 0.608-1.408v-4.224q1.888-1.952 2.944-4.448t1.056-5.344-1.12-5.44-2.976-4.48-4.48-2.976-5.44-1.12-5.44 1.12-4.48 2.976-2.976 4.48-1.088 5.44zM6.016 16q0-2.048 0.768-3.872t2.144-3.2 3.2-2.144 3.872-0.8q2.72 0 5.024 1.344t3.648 3.648 1.344 5.024q0 2.016-0.8 3.872t-2.144 3.2-3.2 2.144-3.872 0.768q-2.72 0-5.024-1.312t-3.616-3.648-1.344-5.024zM14.016 16q0 0.832 0.576 1.408t1.408 0.576h4q0.832 0 1.408-0.576t0.608-1.408-0.608-1.408-1.408-0.608h-1.984v-1.984q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v4zM21.472 0.992q3.328 1.216 5.824 3.712t3.712 5.824q0.992-1.664 0.992-3.52 0-2.88-2.048-4.928t-4.96-2.080q-1.824 0-3.52 0.992z"></path> </g></svg>`,
    'thorn':`<svg fill="" width="800px" height="800px" viewBox="-4 -2 24 24" preserveAspectRatio="xMinYMin" class="jam jam-shield-half" xmlns="http://www.w3.org/2000/svg">
    <defs></defs>
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="" stroke-width="0.9600000000000002">
      <path d="M 7.978 2.136 L 1.978 4.386 L 1.978 8 C 1.979 10.601 3.101 13.074 5.058 14.787 L 7.978 17.342 L 7.978 2.136 Z M 0.627 2.756 L 7.978 0 L 15.329 2.757 C 15.72 2.903 15.978 3.276 15.978 3.693 L 11.888 6.161 L 15.944 8.17 C 15.231 8.667 12.552 10.047 12.297 10.983 C 12.049 11.893 14.318 12.922 14.797 13.312 C 14.289 14.055 13.138 15.485 12.215 16.293 L 7.978 20 L 3.741 16.293 C 3.059 15.696 -1.295 14.132 -1.131 13.73 C -0.966 13.326 1.392 11.829 1.032 10.757 C 0.754 9.929 -1.547 9.469 -2.264 9.262 C -2.458 9.206 0.847 7.342 0.847 6.327 C 0.384 5.731 -1.565 3.997 -1.565 3.997 C -1.565 3.58 0.237 2.903 0.627 2.757 L 0.627 2.756 Z"></path>
    </g>
    <g id="SVGRepo_iconCarrier"></g>
  </svg>`,
    'shatter':`<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier"> <g opacity="0.15"> <path d="M18 5.5C18 5.6939 17.9779 5.88264 17.9362 6.06385C18.1174 6.02207 18.3061 6 18.5 6C19.8807 6 21 7.11929 21 8.5C21 9.88071 19.8807 11 18.5 11C17.7411 11 16.9411 10.836 16.2614 11.1734C15.7726 11.416 15.3084 11.7072 14.876 12.0431L14 11L12.6847 11.4214L11.9543 9.12765C12.2913 8.69428 12.5834 8.22895 12.8266 7.739C13.1641 7.05918 13 6.25898 13 5.5C13 4.11929 14.1193 3 15.5 3C16.8807 3 18 4.11929 18 5.5Z" fill=""/> <path d="M11 18.5C11 19.8807 9.88071 21 8.5 21C7.11929 21 6 19.8807 6 18.5C6 18.3061 6.02207 18.1174 6.06385 17.9362C5.88264 17.9779 5.6939 18 5.5 18C4.11929 18 3 16.8807 3 15.5C3 14.1193 4.11929 13 5.5 13C6.25893 13 7.05907 13.1641 7.73884 12.8266C8.22824 12.5837 8.69306 12.292 9.12601 11.9555L10 13V14L12.0483 14.8693C11.7102 15.3037 11.4172 15.7702 11.1734 16.2615C10.836 16.9412 11 17.7412 11 18.5Z" fill=""/> </g> <path d="M18 5.5C18 5.6939 17.978 5.88264 17.9362 6.06385C18.1174 6.02207 18.3062 6 18.5 6C19.8808 6 21 7.11929 21 8.5C21 9.88071 19.8808 11 18.5 11C17.7412 11 16.9411 10.836 16.2614 11.1734C15.7727 11.416 15.3085 11.7072 14.876 12.0431L14 11L12.6848 11.4214L11.9543 9.12765C12.2913 8.69428 12.5834 8.22895 12.8267 7.739C13.1642 7.05918 13 6.25898 13 5.5C13 4.11929 14.1193 3 15.5 3C16.8808 3 18 4.11929 18 5.5Z" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M11 18.5C11 19.8807 9.88071 21 8.5 21C7.11929 21 6 19.8807 6 18.5C6 18.3061 6.02207 18.1174 6.06385 17.9362C5.88264 17.9779 5.6939 18 5.5 18C4.11929 18 3 16.8807 3 15.5C3 14.1193 4.11929 13 5.5 13C6.25893 13 7.05907 13.1641 7.73884 12.8267C8.22824 12.5837 8.69306 12.2921 9.12601 11.9556L10 13V14L12.0483 14.8694C11.7102 15.3037 11.4172 15.7703 11.1734 16.2615C10.836 16.9412 11 17.7412 11 18.5Z" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
    </svg>`,
    'income':`<svg width="202px" height="202px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.7255 17.1019C11.6265 16.8844 11.4215 16.7257 11.1734 16.6975C10.9633 16.6735 10.7576 16.6285 10.562 16.5636C10.4743 16.5341 10.392 16.5019 10.3158 16.4674L10.4424 16.1223C10.5318 16.1622 10.6239 16.1987 10.7182 16.2317L10.7221 16.2331L10.7261 16.2344C11.0287 16.3344 11.3265 16.3851 11.611 16.3851C11.8967 16.3851 12.1038 16.3468 12.2629 16.2647L12.2724 16.2598L12.2817 16.2544C12.5227 16.1161 12.661 15.8784 12.661 15.6021C12.661 15.2955 12.4956 15.041 12.2071 14.9035C12.062 14.8329 11.8559 14.7655 11.559 14.6917C11.2545 14.6147 10.9987 14.533 10.8003 14.4493C10.6553 14.3837 10.5295 14.279 10.4161 14.1293C10.3185 13.9957 10.2691 13.7948 10.2691 13.5319C10.2691 13.2147 10.3584 12.9529 10.5422 12.7315C10.7058 12.5375 10.9381 12.4057 11.2499 12.3318C11.4812 12.277 11.6616 12.1119 11.7427 11.8987C11.8344 12.1148 12.0295 12.2755 12.2723 12.3142C12.4751 12.3465 12.6613 12.398 12.8287 12.4677L12.7122 12.8059C12.3961 12.679 12.085 12.6149 11.7841 12.6149C10.7848 12.6149 10.7342 13.3043 10.7342 13.4425C10.7342 13.7421 10.896 13.9933 11.1781 14.1318L11.186 14.1357L11.194 14.1393C11.3365 14.2029 11.5387 14.2642 11.8305 14.3322C12.1322 14.4004 12.3838 14.4785 12.5815 14.5651L12.5856 14.5669L12.5897 14.5686C12.7365 14.6297 12.8624 14.7317 12.9746 14.8805L12.9764 14.8828L12.9782 14.8852C13.0763 15.012 13.1261 15.2081 13.1261 15.4681C13.1261 15.7682 13.0392 16.0222 12.8604 16.2447C12.7053 16.4377 12.4888 16.5713 12.1983 16.6531C11.974 16.7163 11.8 16.8878 11.7255 17.1019Z" fill=""></path> <path d="M11.9785 18H11.497C11.3893 18 11.302 17.9105 11.302 17.8V17.3985C11.302 17.2929 11.2219 17.2061 11.1195 17.1944C10.8757 17.1667 10.6399 17.115 10.412 17.0394C10.1906 16.9648 9.99879 16.8764 9.83657 16.7739C9.76202 16.7268 9.7349 16.6312 9.76572 16.5472L10.096 15.6466C10.1405 15.5254 10.284 15.479 10.3945 15.5417C10.5437 15.6262 10.7041 15.6985 10.8755 15.7585C11.131 15.8429 11.3762 15.8851 11.611 15.8851C11.8129 15.8851 11.9572 15.8628 12.0437 15.8181C12.1302 15.7684 12.1735 15.6964 12.1735 15.6021C12.1735 15.4929 12.1158 15.411 12.0004 15.3564C11.8892 15.3018 11.7037 15.2422 11.4442 15.1777C11.1104 15.0933 10.8323 15.0039 10.6098 14.9096C10.3873 14.8103 10.1936 14.6514 10.0288 14.433C9.86396 14.2096 9.78156 13.9092 9.78156 13.5319C9.78156 13.095 9.91136 12.7202 10.1709 12.4074C10.4049 12.13 10.7279 11.9424 11.1401 11.8447C11.2329 11.8227 11.302 11.7401 11.302 11.6425V11.2C11.302 11.0895 11.3893 11 11.497 11H11.9785C12.0862 11 12.1735 11.0895 12.1735 11.2V11.6172C12.1735 11.7194 12.2487 11.8045 12.3471 11.8202C12.7082 11.8777 13.0255 11.9866 13.2989 12.1469C13.3765 12.1924 13.4073 12.2892 13.3775 12.3756L13.0684 13.2725C13.0275 13.3914 12.891 13.4417 12.7812 13.3849C12.433 13.2049 12.1007 13.1149 11.7841 13.1149C11.4091 13.1149 11.2216 13.2241 11.2216 13.4425C11.2216 13.5468 11.2773 13.6262 11.3885 13.6809C11.4998 13.7305 11.6831 13.7851 11.9386 13.8447C12.2682 13.9192 12.5464 14.006 12.773 14.1053C12.9996 14.1996 13.1953 14.356 13.3602 14.5745C13.5291 14.7929 13.6136 15.0908 13.6136 15.4681C13.6136 15.8851 13.4879 16.25 13.2365 16.5628C13.0176 16.8354 12.7145 17.0262 12.3274 17.1353C12.2384 17.1604 12.1735 17.2412 12.1735 17.3358V17.8C12.1735 17.9105 12.0862 18 11.9785 18Z" fill=""></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59235 5H13.8141C14.8954 5 14.3016 6.664 13.8638 7.679L13.3656 8.843L13.2983 9C13.7702 8.97651 14.2369 9.11054 14.6282 9.382C16.0921 10.7558 17.2802 12.4098 18.1256 14.251C18.455 14.9318 18.5857 15.6958 18.5019 16.451C18.4013 18.3759 16.8956 19.9098 15.0182 20H8.38823C6.51033 19.9125 5.0024 18.3802 4.89968 16.455C4.81587 15.6998 4.94656 14.9358 5.27603 14.255C6.12242 12.412 7.31216 10.7565 8.77823 9.382C9.1696 9.11054 9.63622 8.97651 10.1081 9L10.0301 8.819L9.54263 7.679C9.1068 6.664 8.5101 5 9.59235 5Z" stroke="" stroke-width="1.584" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13.2983 9.75C13.7125 9.75 14.0483 9.41421 14.0483 9C14.0483 8.58579 13.7125 8.25 13.2983 8.25V9.75ZM10.1081 8.25C9.69391 8.25 9.35812 8.58579 9.35812 9C9.35812 9.41421 9.69391 9.75 10.1081 9.75V8.25ZM15.9776 8.64988C16.3365 8.44312 16.4599 7.98455 16.2531 7.62563C16.0463 7.26671 15.5878 7.14336 15.2289 7.35012L15.9776 8.64988ZM13.3656 8.843L13.5103 9.57891L13.5125 9.57848L13.3656 8.843ZM10.0301 8.819L10.1854 8.08521L10.1786 8.08383L10.0301 8.819ZM8.166 7.34357C7.80346 7.14322 7.34715 7.27469 7.1468 7.63722C6.94644 7.99976 7.07791 8.45607 7.44045 8.65643L8.166 7.34357ZM13.2983 8.25H10.1081V9.75H13.2983V8.25ZM15.2289 7.35012C14.6019 7.71128 13.9233 7.96683 13.2187 8.10752L13.5125 9.57848C14.3778 9.40568 15.2101 9.09203 15.9776 8.64988L15.2289 7.35012ZM13.2209 8.10709C12.2175 8.30441 11.1861 8.29699 10.1854 8.08525L9.87486 9.55275C11.0732 9.80631 12.3086 9.81521 13.5103 9.57891L13.2209 8.10709ZM10.1786 8.08383C9.47587 7.94196 8.79745 7.69255 8.166 7.34357L7.44045 8.65643C8.20526 9.0791 9.02818 9.38184 9.88169 9.55417L10.1786 8.08383Z" fill=""></path> </g></svg>`,
    'lifedrain':`<svg width="800px" height="800px" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.072">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 1.29289C18.3166 0.902369 17.6834 0.902369 17.2929 1.29289C16.9024 1.68342 16.9024 2.31658 17.2929 2.70711L18.5858 4L15.5 7.08579L11.7071 3.29289C11.3166 2.90237 10.6834 2.90237 10.2929 3.29289C9.90237 3.68342 9.90237 4.31658 10.2929 4.70711L11.5858 6L3.20711 14.3787C2.03553 15.5503 2.03553 17.4497 3.20711 18.6213L3.58579 19L1.29289 21.2929C0.902369 21.6834 0.902369 22.3166 1.29289 22.7071C1.68342 23.0976 2.31658 23.0976 2.70711 22.7071L5 20.4142L5.37868 20.7929C6.55026 21.9645 8.44975 21.9645 9.62132 20.7929L18 12.4142L19.2929 13.7071C19.6834 14.0976 20.3166 14.0976 20.7071 13.7071C21.0976 13.3166 21.0976 12.6834 20.7071 12.2929L16.9142 8.5L20 5.41421L21.2929 6.70711C21.6834 7.09763 22.3166 7.09763 22.7071 6.70711C23.0976 6.31658 23.0976 5.68342 22.7071 5.29289L18.7071 1.29289ZM14.0858 8.5L13 7.41421L10.9142 9.5L12 10.5858L14.0858 8.5ZM13.4142 12L15.5 9.91421L16.5858 11L14.5 13.0858L13.4142 12ZM4.62132 15.7929L9.5 10.9142L13.0858 14.5L8.20711 19.3787C7.81658 19.7692 7.18342 19.7692 6.79289 19.3787L4.62132 17.2071C4.2308 16.8166 4.2308 16.1834 4.62132 15.7929Z" fill=""/> </g>
    </svg>`,
    'bleed':`<svg width="800px" height="800px" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier"> <path d="M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15H9.00002C8.44773 15 8.00002 14.5523 8.00002 14C8.00002 13.4477 8.44773 13 9.00002 13H11V11Z" fill=""/> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5766 1.54273C11.3481 0.712021 12.6514 0.711988 13.4228 1.54267C14.3666 2.55889 16.1085 4.53043 17.6206 6.77875C19.1294 9.02208 20.5307 11.5774 20.5058 14.3527C20.5036 14.5982 20.4906 14.9427 20.4477 15.3536C20.3627 16.17 20.1573 17.2781 19.6661 18.4009C19.1727 19.5286 18.3809 20.6923 17.1178 21.5709C15.8489 22.4536 14.1739 23 11.9997 23C9.82555 23 8.15055 22.4536 6.88176 21.5709C5.61871 20.6923 4.82696 19.5285 4.33364 18.4008C3.84247 17.278 3.6372 16.17 3.5522 15.3536C3.50942 14.9426 3.49636 14.5981 3.49418 14.3526C3.46955 11.5773 4.87048 9.02222 6.37919 6.77881C7.89119 4.5305 9.6329 2.55896 10.5766 1.54273ZM11.9998 2.94942C11.0798 3.94302 9.44579 5.80274 8.0388 7.89491C6.76472 9.78944 5.47323 11.9806 5.49411 14.3349C5.49581 14.5269 5.50616 14.8074 5.54145 15.1465C5.61262 15.8301 5.78224 16.722 6.16599 17.5992C6.54757 18.4715 7.13074 19.3078 8.0239 19.9291C8.91132 20.5465 10.1738 21 11.9997 21C13.8256 21 15.0882 20.5465 15.9757 19.9291C16.8689 19.3078 17.4521 18.4715 17.8338 17.5992C18.2176 16.722 18.3873 15.83 18.4585 15.1464C18.4938 14.8074 18.5042 14.5268 18.5059 14.3348C18.5269 11.9805 17.2351 9.78932 15.961 7.89491C14.5539 5.80273 12.9198 3.94301 11.9998 2.94942Z" fill=""/> </g>
    </svg>`,
    'accuracy':`<svg width="800px" height="800px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier"> <path d="M9.94308 11.7868C9.58334 11.9921 9.45817 12.4502 9.6635 12.8099C9.86883 13.1697 10.3269 13.2948 10.6866 13.0895L9.94308 11.7868ZM16.8186 9.58951C17.1784 9.38418 17.3036 8.9261 17.0982 8.56636C16.8929 8.20662 16.4348 8.08145 16.0751 8.28678L16.8186 9.58951ZM10.507 11.7132C10.1067 11.607 9.69604 11.8456 9.5899 12.246C9.48376 12.6463 9.72229 13.057 10.1227 13.1631L10.507 11.7132ZM12.5407 13.8041C12.9411 13.9102 13.3517 13.6717 13.4578 13.2713C13.564 12.8709 13.3254 12.4603 12.925 12.3542L12.5407 13.8041ZM9.59097 12.242C9.48263 12.6418 9.71888 13.0537 10.1187 13.162C10.5185 13.2704 10.9304 13.0341 11.0387 12.6343L9.59097 12.242ZM11.6867 10.2433C11.7951 9.84354 11.5588 9.43161 11.159 9.32326C10.7593 9.21491 10.3473 9.45117 10.239 9.85096L11.6867 10.2433ZM16.6115 8.20644C16.2074 8.1155 15.8061 8.36938 15.7152 8.77349C15.6242 9.17759 15.8781 9.57891 16.2822 9.66985L16.6115 8.20644ZM19.8372 10.4698C20.2413 10.5608 20.6426 10.3069 20.7336 9.9028C20.8245 9.4987 20.5706 9.09738 20.1665 9.00644L19.8372 10.4698ZM15.7275 8.72607C15.6103 9.12338 15.8375 9.54041 16.2348 9.65754C16.6321 9.77466 17.0491 9.54753 17.1663 9.15022L15.7275 8.72607ZM18.2093 5.61222C18.3264 5.21491 18.0992 4.79788 17.7019 4.68075C17.3046 4.56363 16.8876 4.79076 16.7705 5.18807L18.2093 5.61222ZM18.9109 12C18.9108 11.5858 18.5749 11.2501 18.1607 11.2501C17.7465 11.2502 17.4108 11.5861 17.4109 12.0003L18.9109 12ZM17.9199 13.8121L18.6434 14.0096L18.6438 14.0083L17.9199 13.8121ZM14.6199 18.0621L14.2493 17.4101L14.2485 17.4105L14.6199 18.0621ZM6.76986 17.5531L6.3166 18.1507L6.31746 18.1513L6.76986 17.5531ZM4.94986 15.5001L5.59743 15.1218L5.59708 15.1212L4.94986 15.5001ZM4.73086 8.90014L4.06035 8.56412L4.05995 8.56492L4.73086 8.90014ZM7.54086 5.93814L7.91171 6.59004L7.91229 6.58971L7.54086 5.93814ZM14.2494 6.58971C14.6093 6.79485 15.0673 6.66943 15.2724 6.30958C15.4776 5.94973 15.3521 5.49172 14.9923 5.28658L14.2494 6.58971ZM16.2559 12.0003C16.256 11.5861 15.9203 11.2503 15.5061 11.2501C15.0918 11.25 14.756 11.5857 14.7559 12L16.2559 12.0003ZM15.3549 13.1321L16.0785 13.3294L16.0787 13.3285L15.3549 13.1321ZM13.2929 15.7891L12.9222 15.1371L12.9215 15.1375L13.2929 15.7891ZM8.38686 15.4711L7.93376 16.0688L7.9345 16.0694L8.38686 15.4711ZM7.24886 14.1881L7.89633 13.8096L7.89617 13.8093L7.24886 14.1881ZM7.11186 10.0651L6.44117 9.72947L6.44084 9.73014L7.11186 10.0651ZM8.86886 8.21114L9.24006 8.86284L9.24025 8.86273L8.86886 8.21114ZM12.9225 8.86273C13.2823 9.06785 13.7403 8.9424 13.9455 8.58254C14.1506 8.22267 14.0251 7.76467 13.6653 7.55956L12.9225 8.86273ZM10.6866 13.0895L16.8186 9.58951L16.0751 8.28678L9.94308 11.7868L10.6866 13.0895ZM10.1227 13.1631L12.5407 13.8041L12.925 12.3542L10.507 11.7132L10.1227 13.1631ZM11.0387 12.6343L11.6867 10.2433L10.239 9.85096L9.59097 12.242L11.0387 12.6343ZM16.2822 9.66985L19.8372 10.4698L20.1665 9.00644L16.6115 8.20644L16.2822 9.66985ZM17.1663 9.15022L18.2093 5.61222L16.7705 5.18807L15.7275 8.72607L17.1663 9.15022ZM17.4109 12.0003C17.411 12.546 17.3387 13.0893 17.196 13.616L18.6438 14.0083C18.8212 13.3536 18.911 12.6783 18.9109 12L17.4109 12.0003ZM17.1963 13.6147C16.7579 15.2214 15.6974 16.5873 14.2493 17.4101L14.9904 18.7142C16.7853 17.6943 18.0999 16.0012 18.6434 14.0096L17.1963 13.6147ZM14.2485 17.4105C12.026 18.6772 9.26258 18.498 7.22227 16.955L6.31746 18.1513C8.83619 20.0562 12.2476 20.2774 14.9912 18.7137L14.2485 17.4105ZM7.22312 16.9556C6.56597 16.4571 6.01354 15.834 5.59743 15.1218L4.30229 15.8785C4.81787 16.7609 5.50235 17.533 6.3166 18.1507L7.22312 16.9556ZM5.59708 15.1212C4.54146 13.3183 4.468 11.1042 5.40178 9.23537L4.05995 8.56492C2.89956 10.8873 2.99085 13.6387 4.30264 15.8791L5.59708 15.1212ZM5.40137 9.23617C5.95809 8.1253 6.83169 7.20445 7.91171 6.59004L7.17001 5.28625C5.83214 6.04734 4.74997 7.18804 4.06035 8.56412L5.40137 9.23617ZM7.91229 6.58971C9.87632 5.4701 12.2854 5.4701 14.2494 6.58971L14.9923 5.28658C12.5678 3.90447 9.59391 3.90447 7.16943 5.28658L7.91229 6.58971ZM14.7559 12C14.7558 12.316 14.7138 12.6307 14.631 12.9357L16.0787 13.3285C16.1962 12.8956 16.2557 12.449 16.2559 12.0003L14.7559 12ZM14.6313 12.9349C14.3772 13.8671 13.7621 14.6596 12.9222 15.1371L13.6635 16.4411C14.8504 15.7664 15.7194 14.6466 16.0785 13.3294L14.6313 12.9349ZM12.9215 15.1375C11.6302 15.8734 10.0247 15.7694 8.83922 14.8729L7.9345 16.0694C9.59839 17.3276 11.8518 17.4736 13.6642 16.4408L12.9215 15.1375ZM8.83996 14.8735C8.45855 14.5843 8.13789 14.2228 7.89633 13.8096L6.60139 14.5667C6.94247 15.1501 7.39522 15.6605 7.93376 16.0688L8.83996 14.8735ZM7.89617 13.8093C7.28502 12.765 7.24241 11.4827 7.78288 10.4001L6.44084 9.73014C5.67403 11.2661 5.73448 13.0853 6.60156 14.567L7.89617 13.8093ZM7.78255 10.4008C8.10562 9.75532 8.61283 9.2201 9.24006 8.86284L8.49766 7.55945C7.61267 8.06352 6.89701 8.81869 6.44117 9.72947L7.78255 10.4008ZM9.24025 8.86273C10.3815 8.21226 11.7812 8.21226 12.9225 8.86273L13.6653 7.55956C12.0636 6.64665 10.0991 6.64665 8.49747 7.55956L9.24025 8.86273Z" fill=""/> </g>
    </svg>`,
    'superarmor':`<svg fill="" width="800px" height="800px" viewBox="-3 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg" stroke="" stroke-width="0.00019">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="" stroke-width="0.19"/>
    <g id="SVGRepo_iconCarrier">
    <path d="M12.365 10.832a.473.473 0 0 1-.012.106q.012.179.012.37c0 3.239-5.865 5.063-5.865 5.063S.635 14.547.635 11.307q0-.19.012-.37a.473.473 0 0 1-.012-.105V3.643a.476.476 0 0 1 .475-.475h10.78a.476.476 0 0 1 .475.475zm-2.291-2.554a.476.476 0 0 0-.475-.475h-1.89v-1.89a.476.476 0 0 0-.474-.474h-1.47a.476.476 0 0 0-.475.475v1.889H3.401a.476.476 0 0 0-.475.475v1.47a.476.476 0 0 0 .475.474h1.89v1.889a.476.476 0 0 0 .474.475h1.47a.476.476 0 0 0 .475-.475v-1.889h1.889a.476.476 0 0 0 .475-.475z"/></g></svg>`,
    'tear':`<svg fill="" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M192,42.667H21.333C9.551,42.667,0,52.218,0,64v384c0,11.782,9.551,21.333,21.333,21.333H192 c19.065,0,28.556-23.101,14.998-36.505L173.79,400l33.208-32.829c8.447-8.351,8.447-21.992,0-30.343L173.79,304l33.208-32.829 c8.447-8.351,8.447-21.992,0-30.343L173.79,208l33.208-32.829c8.447-8.351,8.447-21.992,0-30.343L173.79,112l33.208-32.829 C220.556,65.768,211.065,42.667,192,42.667z M128.447,223.171L161.655,256l-33.208,32.829c-8.447,8.351-8.447,21.992,0,30.343 L161.655,352l-33.208,32.829c-8.447,8.351-8.447,21.992,0,30.343l11.628,11.495H42.667V85.333h97.409l-11.628,11.495 c-8.447,8.351-8.447,21.992,0,30.343L161.655,160l-33.208,32.829C120,201.179,120,214.821,128.447,223.171z"/> <path d="M490.667,42.667H347.221c-5.615,0-11.005,2.214-14.998,6.162l-48.555,48c-8.447,8.351-8.447,21.992,0,30.343L316.877,160 l-33.208,32.829c-8.447,8.351-8.447,21.992,0,30.343L316.877,256l-33.208,32.829c-8.447,8.351-8.447,21.992,0,30.343L316.877,352 l-33.208,32.829c-8.447,8.351-8.447,21.992,0,30.343l48.555,48c3.994,3.948,9.383,6.162,14.998,6.162h143.445 c11.782,0,21.333-9.551,21.333-21.333V64C512,52.218,502.449,42.667,490.667,42.667z M469.333,426.667H355.986L329.011,400 l33.208-32.829c8.447-8.351,8.447-21.992,0-30.343L329.011,304l33.208-32.829c8.447-8.351,8.447-21.992,0-30.343L329.011,208 l33.208-32.829c8.447-8.351,8.447-21.992,0-30.343L329.011,112l26.975-26.667h113.347V426.667z"/> </g> </g> </g> </g></svg>`,
    'maxhp':`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
    <path d="M 16.277 3.046 C 19.848 3.046 22.247 6.504 22.247 9.732 C 22.247 16.267 12.29 21.618 12.111 21.618 C 11.93 21.618 1.973 16.267 1.973 9.732 C 1.973 6.504 4.373 3.046 7.943 3.046 C 9.993 3.046 11.333 4.102 12.111 5.031 C 12.888 4.102 14.227 3.046 16.277 3.046 Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="" transform="matrix(1, 0, 0, 1, 3.552713678800501e-15, 1.7763568394002505e-15)"/>
    <path d="M 12.08 9.242 L 12.08 16.526 M 12.08 9.242 L 9.652 11.67 M 12.08 9.242 L 14.508 11.67" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="" transform="matrix(1, 0, 0, 1, 3.552713678800501e-15, 1.7763568394002505e-15)"/>
  </svg>`,

}
