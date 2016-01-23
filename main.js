'use strict';

var main = {
  init: function(){
    $('#convert').click(main.render);
    $('#clean').click(main.clean);
    $('#rendered').on('.converted', 'click', main.remove);
  }, 

  render: function(){
    var text = $('#markdown').val();
    console.log('text', text);
    if (!text) {
      alert("It's empty!");
      return; 
    };
    
    $.post('/render', { input: text})
    .success(function(data) {
      $('#rendered').empty(); 
      var $dom = data; 
      $dom.addClass('converted');
      $('#rendered').append($.parseHTML($dom) );
    })
    .fail(function(err) {
      alert('something went wrong :(')
    });
  },

  clean: function(){
   console.log("clean");
    $('#rendered').empty();  
  },

  remove: function(){
    $(this).remove(); 
  }

}

$(document).ready(init);