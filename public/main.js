'use strict';

$(document).ready(init);

function init(){
  $('#convert').click(send);
  // $('#convert').click(debug);
}

function send(){
  var text = $('#markdown').val();
  console.log(text);
  if (!text) {
    alert("It's empty!");
    return; 
  };
  
  $.post('/render', { input: text})
  .success(function(data) {
    $('#rendered').append(data);
  })
  .fail(function(err) {
    alert('something went wrong :(')
  });
}

function debug(){
  var text = $('#markdown').val();
  console.log(text); 
}