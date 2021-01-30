$(document).ready(function () {




// PLUG IN with jQuery

    $('.sidenav').sidenav();

//PLUG IN FOR CAROUSEL 

    $('.carousel').carousel();

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
    $('select').formSelect();
//METHOD
//var instance = M.FormSelect.getInstance(elem);

/* jQuery Method Calls
    You can still use the old jQuery plugin method calls.
    But you won't be able to access instance properties.
 
    $('select').formSelect('methodName');
    $('select').formSelect('methodName', paramName);
*/
// Collapsible plugin 
$(".collapsible").collapsible();


//PLUG IN FOR MODAL 
    $('.modal').modal();

$("#over18").click(function () {
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

})
