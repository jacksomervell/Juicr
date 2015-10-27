angular
  .module("juicrApp", ['ngDragDrop'])
  .controller("JuiceController", JuiceController);

  JuiceController.$inject = ["$http"];

  function JuiceController($http) {
    var self = this;
    self.ingredients = []
    self.nutrientNo = ''
    self.name = ''


    self.fruitList = [
    {'name': 'apple', 'image': 'images/apple.gif', 'nutritentNo': 09502 },
    {'name': 'banana', 'image': 'images/banana.png', 'nutritentNo': 09040 },
    {'name': 'beetroot', 'image': 'images/beet.png', 'nutritentNo': 11080 },
    {'name': 'blackberry', 'image': 'images/blackberry.jpeg', 'nutritentNo': 09042 },
    {'name': 'broccoli', 'image': 'images/broccoli.png', 'nutritentNo': 11090 },
    {'name': 'cabbage', 'image': 'images/cabbage.jpeg', 'nutritentNo': 11749 },
    {'name': 'carrot', 'image': 'images/carrot.png', 'nutritentNo': 11124 },
    {'name': 'celery', 'image': 'images/celery.jpg', 'nutritentNo': 11143 },
    {'name': 'ginger', 'image': 'images/ginger.png', 'nutritentNo': 11216 },
    {'name': 'lemon', 'image': 'images/lemon.jpeg', 'nutritentNo': 09150 },
    {'name': 'lime', 'image': 'images/lime.png', 'nutritentNo': 09159 },
    {'name': 'orange', 'image': 'images/orange.png', 'nutritentNo': 09200 },
    {'name': 'pear', 'image': 'images/pear.jpeg', 'nutritentNo': 09252 },
    {'name': 'strawberry', 'image': 'images/strawberry.png', 'nutritentNo': 09316 }

    ]

    self.getData = function() {

     $http
      .get('http://localhost:3000/juices/' + self.nutrientNo)
      .then(function(response){
        console.log(response.data)
      });
    }

    self.onDrop = function (data, event) {
    // Get custom object data.
    var customObjectData = data['json/custom-object']; 

    // Get other attached data.
    var uriList = data['text/uri-list'];
    };

  self.testDrop = function() {
    $("#juicer" ).effect( "shake", {times:35, distance:5}, 1500 )
  }

  // self.setIngredient = function(selected) {
  //   console.log(selected)
  //   self.name = selected
  //   console.log(self.name)
  // }

  self.deliverData = function() {
    console.log("data")
  }

  self.dropped = function(){
    console.log('dropped!')
  }
  // Drag over handler.
  self.onDragOver = function (event) {
    console.log('hello')
  };
}

