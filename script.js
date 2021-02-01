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
