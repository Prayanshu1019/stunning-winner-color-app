// A $( document ).ready() block.
$( document ).ready(function() {

  console.log("doc loaded");

  loadColorData(colorList);

  addEvent();


// TODO: can you access your data .js?
console.log(`First color in the list: ${colorList[0]}`);

// console log ... data . colors [ 0 ] = red...

});
      



//what dom?
//$('#btnLoadColors').click(function(){

function addEvent(){




$('#btnLoadColors').on('click', (e)=> {

    $('#colorList').slideDown(2000).empty();
    
    console.log("clicked load colors");
    
    console.log('more lines of code');

  

//broken...
// $('#colorList').append('<li>You Can't Always Get What You Want</li>');    

//mix single and double quotes.
//$('#colorList').append("<li>You Can't Always Get What You Want</li>");

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

    $('#colorList').append(`<li id=" ${index}" class="list-group-item colorname"> ${value}</li>`);
    // TODO: give it a new class name 
    
    
    
  })

  // here is barrys
$('.songName').on('click', (e)=>{
    
  let $this = $(e.target); 
  let $thisId = $this.attr('id');
 
  console.log('clicked');
  console.log("$this: ", $this);
  console.log("thisId: ", $thisId);
  // $('#'+ $thisId + ' > ul.songDetails').toggle(); 
  
  // $('#'+ $thisId + '> i.editSong').toggle(); 


}); 

});

$('#btnClearColors').on('click', function(){


  $('#colorList').empty();

  // TODO: find a jQuery method to empty your <ul> ... empty() is an array method 
  console.log('empty al colors');
});


$('#btnSaveColor').on('click', function(){



  // TODO: look at my code, push() the new value to the array, and re-call the functions to display it. 
  console.log('save new colors');

});


}; 

function loadColorData(colorData){

  console.log("color data: ", colorData)

}

// TODO: remove string colorList and call the array like in line 6 
loadColorData("colorList");
addEvent();

$('#addColorModal .btn-close').click()
$('#addColorModal input').val('');
$('#addColorModal .btn-save color').click()


let colorList = [    
"pink",
"orange",
"purple",
"violet",
"yellow",
]; //next time, add in colors from my tab app.

 



/*var el;
el.document  */

//make a data thingy: array (list)
// var => let or const = 22/7



