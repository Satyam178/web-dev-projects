$("button").click((e)=>
{

    
    var x = e.target.parentElement.nextElementSibling;
$(x).toggleClass("hide");



})

// var questions = document.querySelectorAll(".item");
//     // console.log(questions[1]);

//   questions.forEach(function(e)
//   {
// //   console.log(e);
//   const btn = e.querySelector(".question-btn");
// //    console.log(btn);
   
//    $(btn).on("click", function(){

//     console.log(e);
//     // $(e).toggleClass("hide");
//     e.classList.toggle("hide");

//    });
  
//   });