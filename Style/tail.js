window.addEventListener("mousemove", function(e){
    // only select .tail that doesn't have .tail-remain
    $('.tail:not(.tail-remain)').css({
        left:  e.pageX - 60,
        top:   e.pageY + 15
    });
});

  
document.addEventListener('DOMContentLoaded', () => {
  clearTailReferences();
  updateTailReferences();
});


function updateTailReferences() {
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
}

// THere is a bug so need to clear these references after the stat div is delete
// https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element
function clearTailReferences() {
    // Get all elements with the '.has-tail' class
    const elementsWithTail = document.querySelectorAll('.has-tail');
    elementsWithTail.forEach(element => {
        element.removeEventListener('mouseover', () => {});
        element.removeEventListener('mouseout', () => {});
        element.removeEventListener('click', () => {});
    });
}


// Double click on Tails to remove them
document.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('tail-remain')) {
        event.target.classList.remove('tail-remain');
        event.target.style.display = 'none';
    }
});
