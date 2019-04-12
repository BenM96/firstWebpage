"use strict"



function printWorld(){
    console.log("Hello World");

}

function double(){
    var number=document.getElementById("n").value;
    console.log(number*2);

}

function getAllRecipes(){
    let requestURL='http://localhost:8080/recipeapp/api/Recipe/getAllRecipes'
    let request = new XMLHttpRequest();
    request.open('get',requestURL);
    request.responceType='json'
    request.send();

    request.onload = function () {
        let recipes = request.response;
        document.getElementById("output").innerHTML = JSON.stringify(recipe);
        console.log("end")
}
}