angular
  .module("juicrApp", ['ngDragDrop'])
  .controller("JuiceController", JuiceController);

  JuiceController.$inject = ["$http"];

  function JuiceController($http) {
    var self = this;
    self.ingredients = []
    self.nutrientNo = ''
    self.name = ''
    self.drops = 0
    self.nutritionData


    self.fruitList = [
    {'name': 'apple', 'image': 'images/apple.gif', 'nutrientNo': '09502' },
    {'name': 'banana', 'image': 'images/banana.png', 'nutrientNo': '09040' },
    {'name': 'beetroot', 'image': 'images/beet.png', 'nutrientNo': '11080' },
    {'name': 'blackberry', 'image': 'images/blackberry.jpeg', 'nutrientNo': '09042' },
    {'name': 'broccoli', 'image': 'images/broccoli.png', 'nutrientNo': '11090' },
    {'name': 'cabbage', 'image': 'images/cabbage.jpeg', 'nutrientNo': '11749' },
    {'name': 'carrot', 'image': 'images/carrot.png', 'nutrientNo': '11124' },
    {'name': 'celery', 'image': 'images/celery.jpg', 'nutrientNo': '11143' },
    {'name': 'ginger', 'image': 'images/ginger.png', 'nutrientNo': '11216' },
    {'name': 'lemon', 'image': 'images/lemon.jpeg', 'nutrientNo': '09150' },
    {'name': 'lime', 'image': 'images/lime.png', 'nutrientNo': '09159' },
    {'name': 'orange', 'image': 'images/orange.png', 'nutrientNo': '09200' },
    {'name': 'pear', 'image': 'images/pear.jpeg', 'nutrientNo': '09252' },
    {'name': 'strawberry', 'image': 'images/strawberry.png', 'nutrientNo': '09316' }

    ]

    self.getData = function() {

     $http
      .get('http://localhost:3000/juices/' + self.nutrientNo)
      .then(function(response){
        self.nutritionData = response.data
        console.log(self.nutritionData)
      });
    }

    self.onDrop = function (data, event) {
    // Get custom object data.
    var customObjectData = data['json/custom-object']; 

    // Get other attached data.
    var uriList = data['text/uri-list'];
    };


  self.dropped = function(event, ui){
    console.log('dropped!')
    $("#juicer").effect( "shake", {times:35, distance:5}, 1500 )
    self.drops = self.drops + 1
    console.log(self.drops)
    var vegId = ui.draggable[0].id
    var nutrientID = ui.draggable[0].name
    self.ingredients.push(vegId)
    self.nutrientNo = nutrientID
    console.log(self.nutrientNo)
    console.log(self.ingredients)
    self.getData()

  }

  // self.juicerDropping = function(){
  //   $("#juicer").droppable({
  //      drop: function(event, ui) {
  //               console.log('hello')
  //                // $(ui.draggable).doSomething();
  //            }
  //   });
  // }
}

