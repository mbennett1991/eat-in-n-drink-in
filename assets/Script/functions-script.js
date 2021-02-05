// GLOBAL VARIABLES
var search = "";
var excluded = "";
var healthVegan = "";
var healthVeggie = "";
var nutFree = "";
var searchInput = $("#main");
var checkVegan = $("#vegan");
var checkVeggie = $("#vegetarian")
var checkNut = $("#nutFree");
var checkExcl = $("#exclude");
var favArr = JSON.parse(localStorage.getItem("favArr")) || [];

renderFavList();

function renderFavList() {
    for (const favourite of favArr) {
        console.log(favArr.length);
        var favAnc = $("<a>").text(favourite.recipeName).attr("href", favourite.url);
        var favItem = $("<li>").append(favAnc)
        $("#saved-recipes").prepend(favItem);
        // renderFavourites function should pass the 
        // to call each time favourite is made/page refreshed
        // getItem in global for the array 
    }
}

// ONCLICK for start page
$("#strtBtn").on("click", function (event) {
    event.preventDefault();
    startPg();
})
//START BUTTON TO NEXT PAGE
function startPg() {
    $("#strtPg").addClass("hide");
    $("#userForm").removeClass("hide");
    // return false;
};

// ONCLICK for search
$("#srchBtn").on("click", function (event) {
    event.preventDefault();
    callAPI();
});

//initiating search from enter key on Main ingredient id
$("#main").keyup(function (event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        callAPI();
    }
});

//initiating search from enter key on exclude ingredient id
$("#exclude").keyup(function (event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        callAPI();
    }
});

//ONCLICK for search again
$("#search-again").on("click", function(){
    $("#ingredientList").addClass("hide");
    $("#userForm").removeClass("hide");
    $("#user-form").trigger("reset");
});

//ONCLICK for clearing favorites 
$("#clear-favorites").on("click", function(){
    localStorage.clear();
    $("#saved-recipes").empty();
})

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
        if (response.hits.length == 0) {
            console.log("search fail");
            $("#error-modal-button")[0].click();
        }
        else {

            $("#userForm").addClass("hide");
            $("#ingredientList").removeClass("hide");
            $("#drinkBtn").removeClass("hide");
        
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
            // var storeHeader = headers[i].recipe.label;
        }
        // onclick to change the 'favorite' icon
        $(".favourite").on("click", function () {
            // find the recipe name and url
            var storeHeader = $(this).parent().find("span").text();
            var storeURL = $(".list-body").parent().find("a").attr("href");
            console.log(storeURL);
            // populates object with favourited name and url
            var emptyObj = {
                recipeName: "",
                url: ""
            }
            emptyObj.recipeName = storeHeader;
            emptyObj.url = storeURL;

            favArr.push(emptyObj);
            // if (favArr.length > 9) {
            //     favArr.shift()
            // }

            renderFavList();
            console.log(storeHeader);

            // turns the border heart icon into a filled one
            $(this).text("favorite");

            console.log(favArr);

            localStorage.setItem("favArr", JSON.stringify(favArr));
        })
    });
}



//checking age is over 18

$("#over18").click(function () {
    $(".recipeContainer").removeClass("col m12 s12");
    $(".recipeContainer").addClass("col m9 s12");
    findDrinks(search);
});

//ajax call for drinks pairing
function findDrinks(search) {
    search = searchInput.val().trim();
    var baseURL = "https://api.punkapi.com/v2/beers";

    var drinksURL = `${baseURL}?food=${search}`

    $.ajax({
        url: drinksURL,
        method: "GET"
    }).then(function (response) {
        var beers = response;
        console.log(beers);
        noBeers(beers);
    });
}

//display drinks pairing
function processBeerList(beerArray){
    var beerList = $("#drinks-list");
    beerList.empty();

    $.each(beerArray, function(index, beer) {

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

//logic for excluding non-vegan beers
function checkForVeganBeer(beers){
    var vegan = $("#vegan").is(":checked");
    var vegetarian = $("#vegetarian").is(":checked");
    var beerList = $("#drinks-list");
    const veganArray = ["Hazy Jane", "Punk IPA", "Clockwork Tangerine"];
    beerList.empty();
                   
    if (vegan || vegetarian) {
        $.each(veganArray, function(index, beerName) {
            beerList.append('<li>' + [beerName] + '</li>');
            console.log(veganArray);
        });
    }
    else {
        excludeIngredients(beers);
    }
}

//logic for excluding other ingredients
function excludeIngredients(beers) {
    var exclude = $("#exclude").val().trim();
    var lowercaseExclude = exclude.toLowerCase();
    var filteredBeers = [];

    if (exclude.length == 0) {
        excludeNuts(beers)
    }
    else {

        $.each(beers, function(index, beer) {
            var string = beer.description;
            var foundIndex = string.toLowerCase().search(lowercaseExclude);
        
            if (foundIndex < 0)
            {
                filteredBeers.push(beer);
            }
        });
            excludeNuts(filteredBeers);
            console.log(filteredBeers);
    }
}

//logic for excluding nuts
function excludeNuts(beerArray) {
    var nuts = $("#nutFree").is(":checked");
    const nutArray = ["almond", "hazelnut", "peanut", "cashew", "macadamia", "pecan", "walnut", "pistachio", "chestnut", "coconut"];
    var fullyFilteredBeers = [];

    if (nuts) {
        $.each(beerArray, function(index, beer) {
            var string = beer.description;
            var foundIndex = string.toLowerCase().search(nutArray);
        
            if (foundIndex < 0)
            {
                fullyFilteredBeers.push(beer);
                
            }
        });
        processBeerList(fullyFilteredBeers);
        console.log(fullyFilteredBeers);
    }
    else {
        processBeerList(beerArray);
        console.log(beerArray);
    }
    
    
}

//Returning a message if no beers matched
function noBeers(beers) {
    var beerList = $("#drinks-list");
    beerList.empty();
    if (beers.length == 0) {
        console.log("no beer :(");
        beerList.append('<li>' + "no beers match, make your search wider" + '</li>');
    }
    else {
        checkForVeganBeer(beers);

    }
}