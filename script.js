$(document).ready(function () {
// GLOBAL VARIABLES
var search = "";
var excluded = "gluten";
var health1 = "&health=vegan";
var health2 = "&health=peanut-free&health=tree-nut-free";
var searchInput = $("#main");


//START BUTTON TO NEXT PAGE
function startPg() {
    $("#strtPage").addClass("hide");
    $("#userForm").removeClass("hide");
    return false;
};
// $("strtBtn").on("click", function () {
//     startPg();
// })

//
$("#srchBtn").on("click", function () {
    $("#strtPage").addClass("hide");
    $("#userForm").addClass("hide");
    $("#ingredientList").removeClass("hide");
    $("#drinkBtn").removeClass("hide");
    userInput();

});

function userInput() {
    // Search input into value to go through API
    search = searchInput.val().trim();
    console.log(search);
    // Call AJAX request
    callAPIs(search);
}

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


    

    function callAPIs() {
        // var favArr = [];
        var apiID = "271242ec";
        var apiKEY = "f01212876eaf371a9693f1c0ee6b6dc0";

        var queryURL = "https://api.edamam.com/search?app_id=" + apiID + "&app_key=" + apiKEY + "&q=" + search + health1 + health2 + "&excluded=" + excluded;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response.hits[0].recipe.ingredientLines);


            // var recipeList = $(".collapsible");
            var listNum = 0;
            // var recipeObj = {};
            var headers = response.hits;
            for (var i = 0; i < headers.length; i++) {
                $("#header" + listNum).text(headers[i].recipe.label);
                $("#recipe" + listNum).text(headers[i].recipe.ingredientLines);
                $("#image" + listNum).attr("src", headers[i].recipe.image);
                $("#link" + listNum).attr("href", headers[i].recipe.url);
                listNum++;
                console.log(headers[i].recipe.label)
            }
            // var storeHeader = headers[i].recipe.label;

            $(".collapsible").collapsible();



            $(".favourite").on("click", function (event) {
                event.preventDefault();
                $(this).text("favorite");
                // favArr.push(storeHeader)
                // console.log(favArr)

            })
        });

    }
    // localStorage.setItem("favArr", JSON.stringify(favArr));

})
