$(document).ready(function() {

  console.log("doc loaded");

  loadColorData(colorList);
  addEvent();

  console.log(`First color in the list: ${colorList[0]}`);

});

function addEvent() {

  $('#btnLoadColors').on('click', (e) => {
    $('#colorList').slideDown(2000).empty();
    console.log("clicked load colors");
    console.log(colorList);

    $(colorList).each(function(index, value) {
      $('#colorList').append(`<li id="${index}" class="list-group-item colorname">${value}</li>`);
    });

    $('.songName').on('click', (e) => {
      let $this = $(e.target); 
      let $thisId = $this.attr('id');
      console.log('clicked');
      console.log("$this: ", $this);
      console.log("thisId: ", $thisId);
    });

  });

  $('#btnClearColors').on('click', function() {
    $('#colorList').empty();
    console.log('empty all colors');
  });

  $('#btnSaveColor').on('click', function() {
    console.log('save new colors');
  });

}

function loadColorData(colorData) {
  console.log("color data: ", colorData);
}

let colorList = [    
  "pink",
  "orange",
  "purple",
  "violet",
  "yellow",
];
