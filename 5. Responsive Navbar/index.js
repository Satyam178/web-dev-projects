<<<<<<< HEAD
var sidebar_btn = $(".fa-bars");

sidebar_btn.click(()=>{
    $(".sidebar").toggleClass("sidebar-display");

});

// console.log($(".sidebar").length);


// $("body").click(function(e){
//     console.log(e);
// })
$("").on("click", function(e){
    console.log(e);

});

const mediaQuery = window.matchMedia('(min-width: 611px)');




function handleTabletChange(e)
{
    if(e.matches)
    {
    $(".sidebar").addClass("sidebar-display");
        
    }
}




mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);



function isclicked(cls)
{
    
    $(cls).addClass("is-clicked");

    setTimeout(function(){

    $(cls).removeClass("is-clicked");


    },100)

}

$(".home").click(function(){
    isclicked(".home");
})

$(".about").click(function(){
    isclicked(".about");
})

$(".projects").click(function(){
    isclicked(".projects");
})

$(".contact").click(function(){
    isclicked(".contact");
=======
var sidebar_btn = $(".fa-bars");

sidebar_btn.click(()=>{
    $(".sidebar").toggleClass("sidebar-display");

});

console.log($(".sidebar").length);


const mediaQuery = window.matchMedia('(min-width: 611px)');

function handleTabletChange(e)
{
    if(e.matches)
    {
    $(".sidebar").addClass("sidebar-display");
        
    }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);



function isclicked(cls)
{
    
    $(cls).addClass("is-clicked");

    setTimeout(function(){

    $(cls).removeClass("is-clicked");


    },100)

}

$(".home").click(function(){
    isclicked(".home");
})

$(".about").click(function(){
    isclicked(".about");
})

$(".projects").click(function(){
    isclicked(".projects");
})

$(".contact").click(function(){
    isclicked(".contact");
>>>>>>> a94a73ae361a48c91168b4a31b93de567d4430fd
})