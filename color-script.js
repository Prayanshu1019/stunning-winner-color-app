// A $( document ).ready() block.
$( document ).ready(function() {
    console.log("the doc is ready!");
      



//what dom?
//$('#btnLoadColors').click(function(){

$('#btnLoadColors').on('click', function(){

    $('#colorList').slideDown(2000).empty();
    
    console.log("clicked load colors");
    
    console.log('more lines of code');

//broken...
// $('#colorList').append('<li>You Can't Always Get What You Want</li>');    

//mix single and double quotes.
$('#colorList').append("<li>You Can't Always Get What You Want</li>");

//broken...
// $('#colorList').append('<li>You Can't Always Get What You Want</li>');    

console.log(colorList);

//mix single and double quotes.
//$('#colorList').append(`<li class="list-group-item"> ${ colorList[0] } </li>`);

//$('#colorList').append("<li class=\"list-group-item\">" + colorList[2] + "</li");

//another way is to \'
//$('#colorList').append("<li>You Can\'t Always Get What You Want</li>");

//the best way...backticks and decorators..
//left of 1, same as the ~ ` ` `
// ` backtick
// ' single quote
// " double quote
//$('#colorList').append(`<li>You Can't Always Get What You Want</li>`);

//loop through the array
//the traditional...for loop.

//for (j=0; j <colorList.length; j++)
  //{
 //     $('#colorList').append(`<li class="list-group-item"> ${colorList[j]}</li>`);
 // } 

  $(colorList).each(function(index,value){

    $('colorList').append(`<li class="list-group-item"> ${value}</li>`)
    
    
  })

});

$('#btnClearColors').on('click', function(){
});

$('#colorList').slideToggle(1000).empty();

});    


let colorList = [    
"pink",
"orange",
"purple",
"violet",
"yellow",
"You Can\'t Always Get What You Want"
]; //next time, add in colors from my tab app.

 



/*var el;
el.document  */

//make a data thingy: array (list)
// var => let or const = 22/7



