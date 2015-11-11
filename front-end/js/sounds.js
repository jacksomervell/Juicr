angular
 .module("juicrApp")

soundManager.setup({
  url: '/swf/',
  flashVersion: 9, 
  onready: function() { //dont need this apparently!
    console.log('hello')
    }

});

 $(".ingredient-image").click(function(){
  var fruitPlay = soundManager.createSound({
      id: 'squidge',
      url: 'sounds/trexegregreg.mp3'
    });
  fruitPlay.play();
 });