$(document).ready(function () {
// PLUG IN with jQuery

    $('.sidenav').sidenav();

//PLUG IN FOR CAROUSEL 

    $('.carousel').carousel();

  // Collapsible plugin 
$(".collapsible").collapsible();

//PLUG IN FOR MODAL 
    $('.modal').modal();

$("#over18").click(function () {
    drinkWithThat();
    return false;
});
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