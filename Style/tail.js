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

// add a double click listener for .tail-remain elements to remove the .tail-remain class
document.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('tail-remain')) {
        event.target.classList.remove('tail-remain');
        event.target.style.display = 'none';
    }
}
);