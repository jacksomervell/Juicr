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
    self.recipeData = []
    self.hovername = ''
    self.juicrApp = []
    self.juiceName = ''

    //local storage saving

    this.saveSetup = function() {

      self.juicrApp = JSON.parse(localStorage.getItem('juicrApp'));
      var index = self.juicrApp.length -1
      self.juicrApp[index].recipeData = self.recipeData
      self.juicrApp[index].ingredients = self.ingredients
      self.juicrApp[index].name = self.juiceName
      console.log(self.juicrApp[index])
      localStorage.setItem('juicrApp', JSON.stringify(self.juicrApp))     

    }


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

//this one deletes all the unneccessary data from what is returned
    self.showData = function () {
      for (var i = 0; i < self.nutritionData.length; i++) {
        delete self.nutritionData[i]['dp'];
        delete self.nutritionData[i]['measures'];
        delete self.nutritionData[i]['nutrient_id'];
        delete self.nutritionData[i]['se'];
        delete self.nutritionData[i]['sourcecode'];
        delete self.nutritionData[i]['unit'];
        delete self.nutritionData[i]['group'];
            }
        
    }

//this one actually gets the data from the api
    self.getData = function() {

     $http
      .get('http://localhost:3000/juices/' + self.nutrientNo)
      .then(function(response){
        self.nutritionData = response.data
        self.showData()
        self.recipeData.push(self.nutritionData)
        self.concatRecipeData()
        console.log(self.recipeData)

      });
    }

//this is what happens when an ingredient is dropped into the blender. Needs modularising!
  self.dropped = function(event, ui){
    console.log('dropped!')
    $("#juicer").effect( "shake", {times:35, distance:5}, 1500, function(){
            self.drops = self.drops + 1
            console.log(self.drops) })
      var vegId = ui.draggable[0].id
      var nutrientID = ui.draggable[0].name
      self.ingredients.push(vegId)
      self.nutrientNo = nutrientID
      console.log(self.nutrientNo)
      console.log(self.ingredients)
      self.getData()
      $( "#pouring" ).delay(1000).animate({width: "90px"}, 1500).delay(2000).animate({opacity: "0"}, 1000).delay(1000).animate({opacity: 1, width: "0px"}, 0).src = 'images/pouring.gif'
    }

//manipulating the data after it's reduced down to what we need
    self.concatRecipeData = function (){
      self.recipeData = [].concat.apply([], self.recipeData);
    }
  

//flattening the nurtient array of objects into one object:

self.flattenNutrientArray = function(){
}

}
