






















// GLOBAL VARIABLES
var search = "";
var excluded = "";
var healthVegan = "";
var healthVeggie = ""
var nutFree = "";
var searchInput = $("#main");
var checkVegan = $("#vegan");
var checkVeggie = $("#vegetarian")
var checkNut = $("#nutFree");
var checkExcl = $("#exclude");
// var favArr = [];

// ONCLICK for start page
$("#strtBtn").on("click", function (event) {
    event.preventDefault();
    startPg();
})
//START BUTTON TO NEXT PAGE
function startPg() {
    $("#strtPage").addClass("hide");
    $("#userForm").removeClass("hide");
    // return false;
};

// ONCLICK for search
$("#srchBtn").on("click", function (event) {
    event.preventDefault();
    $("#strtPage").addClass("hide");
    $("#userForm").addClass("hide");
    $("#ingredientList").removeClass("hide");
    $("#drinkBtn").removeClass("hide");
    callAPI();
});

function callAPI() {
    // getting values from the search input
    search = searchInput.val().trim();
    excluded = checkExcl.val().trim();
    // conditional statements to check for 'checked' boxes
    if (checkVegan.is(":checked")) {
        healthVegan = "&health=vegan"
    } 
    if (checkVeggie.is(":checked")) {
        healthVeggie = "&health=vegetarian"
    }
    if (checkNut.is(":checked")) {
        nutFree = "&health=peanut-free&health=tree-nut-free"
    }

    var apiID = "271242ec";
    var apiKEY = "f01212876eaf371a9693f1c0ee6b6dc0";
    var queryURL = "https://api.edamam.com/search?app_id=" + apiID + "&app_key=" + apiKEY + "&q=" + search + healthVegan + healthVeggie + nutFree + "&excluded=" + excluded;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(queryURL);
        // local variables
        var listNum = 0;
        var headers = response.hits;
        // for loop to create content into the html containers
        for (var i = 0; i < headers.length; i++) {
            $("#header" + listNum).text(headers[i].recipe.label);
            $("#recipe" + listNum).text(headers[i].recipe.ingredientLines);
            $("#image" + listNum).attr("src", headers[i].recipe.image);
            $("#link" + listNum).attr("href", headers[i].recipe.url);
            listNum++;
            // console.log(headers[i].recipe.label)
        }
        // onclick to change the 'favorite' icon
        $(".favourite").on("click", function (event) {
            event.preventDefault();
            $(this).text("favorite");
            // favArr.push(storeHeader)
            // console.log(favArr)

        })
    });

}
// localStorage.setItem("favArr", JSON.stringify(favArr));

//ajax call for drinks pairing
function findDrinks(search)
{   
    search = searchInput.val().trim();
    var baseURL = "https://api.punkapi.com/v2/beers";

    var drinksURL = `${baseURL}?food=${search}`

    $.ajax({
        url: drinksURL,
        method: "GET"
    }).then(function(response) {
        var beers = response;
        console.log(beers);
        processBeerList(beers);
    });
}


//checking age is over 18
function drinkWithThat(beers){
    $("#over18").click(function(){
        findDrinks(search);
    
    })
}

//display drinks pairing
function processBeerList(beers){
    var beerList = $("#drinks-list");
    beerList.empty();

    $.each(beers, function(index, beer) {

        if (index <= 4){

        beerList.append('<li>' + beer.name + "<br>" + '<img class="beer-image" src="' + beer.image_url + '"/></li>');
            $(".beer-image").height("10%")
            $(".beer-image").width("10%")
            console.log(beer.name);
        }
        else {

        }

            
    });
}
