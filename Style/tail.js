// window.addEventListener("mousemove", function(e){
//     // only select .tail that doesn't have .tail-remain
//     // if mouse is in the top half of the screen, show tail on bottom, else show tail on top
//     //  get tail height
//     let tailHeight = $('.tail.tail-visible:not(.tail-remain)').height();
//     let tailWidth = $('.tail.tail-visible:not(.tail-remain)').width();

//     if (e.pageY < window.innerHeight / 2) {
//         $('.tail.tail-visible:not(.tail-remain)').css({
//             left:  e.pageX - 60,
//             top:   e.pageY + 15
//         });
//     } else {
//         $('.tail.tail-visible:not(.tail-remain)').css({
//             left:  e.pageX - 60,
//             top:   e.pageY - tailHeight - 25
//         });
//     }
// });


// For popups (not tails)
document.addEventListener('mousemove', function(event) {
  document.documentElement.style.setProperty('--mouse-x', event.clientX + 'px');
  document.documentElement.style.setProperty('--mouse-y', event.clientY + 'px');
  // get position of the element that is being hovered
  document.documentElement.style.setProperty('--element-x', event.target.getBoundingClientRect().left + 'px');
  document.documentElement.style.setProperty('--element-y', event.target.getBoundingClientRect().top + 'px');
  // get the width and height of the element that is being hovered
  document.documentElement.style.setProperty('--element-width', event.target.getBoundingClientRect().width + 'px');
  document.documentElement.style.setProperty('--element-height', event.target.getBoundingClientRect().height + 'px');
});

  
// document.addEventListener('DOMContentLoaded', () => {
//   clearTailReferences();
//   updateTailReferences();
// });


function updateTailReferences() {
  // Get all elements with the '.has-tail' class
  const elementsWithTail = document.querySelectorAll('.has-tail');

  // Loop through each element and add a mouseover and mouseout event listener
  elementsWithTail.forEach(element => {
    element.addEventListener('mouseover', () => {
      // Get the corresponding tail element and set its display to 'block'
      const tailElement = document.querySelector(`#${element.id}-tail`);
      if (tailElement == null) {return;}
      tailElement.style.display = 'block';
      tailElement.classList.toggle('tail-visible');
    });
    
    element.addEventListener('mouseout', () => {
      // Get the corresponding tail element and set its display to 'none'
          // if doesn't have .tail-remain class
        const tailElement = document.querySelector(`#${element.id}-tail`);
        if (tailElement == null) {return;}
        if (!tailElement.classList.contains('tail-remain')) {
            tailElement.style.display = 'none';
            tailElement.classList.toggle('tail-visible');
        }
    });

    // element.addEventListener('click', () => {
    //   // Get the corresponding tail element and toggle the '.tail-remain' class
    //   const tailElement = document.querySelector(`#${element.id}-tail`);
    //   tailElement.classList.toggle('tail-remain');
    // });


    let isDragging = false;

    element.addEventListener('mousedown', (event) => {
      // Set isDragging to false initially
      isDragging = false;
      // Listen for mousemove events
      document.addEventListener('mousemove', onMouseMove);
    });
    
    element.addEventListener('mouseup', (event) => {
      // Remove the mousemove event listener
      document.removeEventListener('mousemove', onMouseMove);
      // Check if the mouse was moved
      if (!isDragging) {
        // Get the corresponding tail element and toggle the '.tail-remain' class
        const tailElement = document.querySelector(`#${element.id}-tail`);
        tailElement.classList.toggle('tail-remain');
      }
    });
    
    function onMouseMove(event) {
      // Set isDragging to true if the mouse is moved
      isDragging = true;
    }
  });
}


function clearTailReferences() {
    const elementsWithTail = document.querySelectorAll('.has-tail');
    elementsWithTail.forEach(element => {
        element.removeEventListener('mouseover', () => {});
        element.removeEventListener('mouseout', () => {});
        element.removeEventListener('click', () => {});
    });
}


// Double click on Tails to remove them
// document.addEventListener('dblclick', (event) => {
//     if (event.target.classList.contains('tail-remain')) {
//         event.target.classList.remove('tail-remain');
//         event.target.style.display = 'none';
//     }
// });

// Hide tails that are currently showing when the element that is being hovered is deleted (commented to get rid of errors)
// document.addEventListener('DOMNodeRemoved', (event) => {
//     if (event.target.classList.contains('has-tail')) {
//         const tailElement = document.querySelector(`#${event.target.id}-tail`);
//         tailElement.style.display = 'none';
//     }
// });