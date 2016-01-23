'use strict';

var main = {
  init: function(){
    $('#convert').click(main.render);
  }, 

  render: function(){
    var text = $('#markdown').val();
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
}

$(document).ready(init);
