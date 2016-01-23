'use strict';

var main = {
  init: function(){
    $('#convert').click(main.render);
    $('#clean').click(main.clean);
    $('#rendered').on('.converted', 'click', main.remove);

    // $('#exSquare').click(main.exSquare);
    // $('#exAdd').click(main.exAdd);
    // $('#exSentence').click(main.exSentence);
    // $('#exGravatar').click(main.exGravatar);

    $('.example').click(getExample); 
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
  }, 

  examples: [
    'I am using __markdown__.', 
    '# Marked in browser\n\nRendered by **marked**.',
    '# h1 ## h2 ### h3 #### h4'
  ], 

  getExample: function(){
    console.log(main.examples);
    console.log('getExample');
    $('#markdown').attr('value', main.examples[parseInt($(this).text())]);
  }

}

$(document).ready(init);
