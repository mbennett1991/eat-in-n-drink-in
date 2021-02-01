$(document).ready(function () {
// PLUG IN with jQuery

    $('.sidenav').sidenav();

//PLUG IN FOR CAROUSEL 

    $('.carousel').carousel();

<<<<<<< HEAD
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


>>>>>>> d0a01df49048dae7deba86584d67e9755962c1d3
=======
  // Collapsible plugin 
$(".collapsible").collapsible();

>>>>>>> bb3efad92c8a34976af83ab058a22eba867f9704
//PLUG IN FOR MODAL 
    $('.modal').modal();

$("#over18").click(function () {
    drinkWithThat();
    return false;
});
<<<<<<< HEAD
//METHOD
//var instance = M.Modal.getInstance(elem);

/* jQuery Method Calls
    You can still use the old jQuery plugin method calls.
    But you won't be able to access instance properties.
          
    $('.modal').modal('methodName');
    $('.modal').modal('methodName', paramName);
*/

})
=======
=======
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
>>>>>>> bb3efad92c8a34976af83ab058a22eba867f9704
