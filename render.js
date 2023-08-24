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


// FLoating Info Box
// function createFloatingInfoDiv(contents) {
//   const div = document.createElement('div');
//   div.id = 'floating-info';
//   div.classList.add('translucent');
//   div.style.position = 'fixed';
//   div.style.left = `${event.clientX}px`;
//   div.style.top = `${event.clientY}px`;
//   div.innerHTML = contents;

//   const removeDiv = () => {
//     document.removeEventListener('mousemove', updatePosition);
//     div.remove();
//   };

//   const updatePosition = (event) => {
//     div.style.left = `${event.clientX}px`;
//     div.style.top = `${event.clientY}px`;
//   };

//   document.addEventListener('mousemove', updatePosition);
//   div.addEventListener('mouseleave', removeDiv);

//   document.body.appendChild(div);

//   return div;
// }

// // Make all elemlents with .hover-info class show a floating info box with the contents of the data-hover attribute
// $(function() {
//   $('.hover-info').hover(function() {
//     const hoverText = $(this).data('hover');
//     createFloatingInfoDiv(hoverText);
//   }, function() {
//     const floatingDiv = document.querySelector('#floating-info');
//     if (floatingDiv) {
//       floatingDiv.remove();
//     }
//   });
// });

window.addEventListener("mousemove", function(e){
    // only select .tail that doesn't have .tail-remain
    $('.tail:not(.tail-remain)').css({
        left:  e.pageX - 60,
        top:   e.pageY + 15
    });
});
  
document.addEventListener('DOMContentLoaded', () => {
  // Get all elements with the '.has-tail' class
  const elementsWithTail = document.querySelectorAll('.has-tail');

  // Loop through each element and add a mouseover and mouseout event listener
  elementsWithTail.forEach(element => {
    element.addEventListener('mouseover', () => {
      // Get the corresponding tail element and set its display to 'block'
      const tailElement = document.querySelector(`#${element.id}-tail`);
      tailElement.style.display = 'block';
    });
    
    element.addEventListener('mouseout', () => {
      // Get the corresponding tail element and set its display to 'none'
    //   if doesn't have .tail-remain class
        const tailElement = document.querySelector(`#${element.id}-tail`);
        if (!tailElement.classList.contains('tail-remain')) {
            tailElement.style.display = 'none';
        }
    });

    element.addEventListener('click', () => {
      // Get the corresponding tail element and toggle the '.tail-remain' class
      const tailElement = document.querySelector(`#${element.id}-tail`);
      tailElement.classList.toggle('tail-remain');
    });
  });
});