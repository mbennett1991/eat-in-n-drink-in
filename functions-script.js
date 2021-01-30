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

function userInput() {
    // Search input into value to go through API
    search = searchInput.val().trim();
    console.log(search);
    // Call AJAX request
    callAPIs(search);
}

function callAPIs() {
    // $("#ingredientList").show();
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

        



        $(".favourite").on("click", function (event) {
            event.preventDefault();
            $(this).text("favorite");
            // favArr.push(storeHeader)
            // console.log(favArr)

        })
    });

}
// localStorage.setItem("favArr", JSON.stringify(favArr));