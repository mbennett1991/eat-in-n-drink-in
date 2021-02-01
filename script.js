//START BUTTON TO NEXT PAGE
function startPg(){
    $("#strtPage").addClass("hide");
    $("#userForm").removeClass("hide");
};

//
$("#srchBtn").on("click", function(){
    $("#strtPage").addClass("hide");
    $("#userForm").addClass("hide");
    $("#ingredientList").removeClass("hide");
    $("#drinkBtn").removeClass("hide");
});

// PLUG IN with jQuery
$(document).ready(function(){
  $('.sidenav').sidenav();
});

//PLUG IN FOR CAROUSEL 
$(document).ready(function(){
    $('.carousel').carousel();
});

<<<<<<< HEAD
=======
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


>>>>>>> d0a01df49048dae7deba86584d67e9755962c1d3
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
