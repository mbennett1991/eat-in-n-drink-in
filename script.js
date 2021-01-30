document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery

$(document).ready(function(){
  $('.sidenav').sidenav();
});

//PLUG IN FOR CAROUSEL 
$(document).ready(function(){
    $('.carousel').carousel();
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
// PLUG IN FOR CHIPS CLASS 
$('.chips-placeholder').chips({
    placeholder: 'Exclude',
    secondaryPlaceholder: 'Exclude',
  });
             //METHOD
//var instance = M.Chips.getInstance(elem);
//https://materializecss.com/chips.html
/* jQuery Method Calls
      You can still use the old jQuery plugin method calls.
      But you won't be able to access instance properties.

      $('.chips').chips('methodName');
      $('.chips').chips('methodName', paramName);
*/


// PLUG IN FOR FORM SELECTION
$(document).ready(function(){
    $('select').formSelect();
  });
            //METHOD
//var instance = M.FormSelect.getInstance(elem);

/* jQuery Method Calls
    You can still use the old jQuery plugin method calls.
    But you won't be able to access instance properties.

    $('select').formSelect('methodName');
    $('select').formSelect('methodName', paramName);
*/


//PLUG IN FOR MODAL 
$(document).ready(function(){
    $('.modal').modal();        
  });
$("#over18").click(function(){
    MyFunction();
    return false;
});
            //METHOD
//var instance = M.Modal.getInstance(elem);

/* jQuery Method Calls
    You can still use the old jQuery plugin method calls.
    But you won't be able to access instance properties.
          
    $('.modal').modal('methodName');
    $('.modal').modal('methodName', paramName);
*/
