angular
  .module("juicrApp", ['ngDragDrop'])
  .controller("JuiceController", JuiceController);

  JuiceController.$inject = ["$http"];

  function JuiceController($http) {
    var self = this;
    self.ingredients = []
    self.ndbno = ''


    this.getData = function() {

     $http
      .get('http://localhost:3000/juices/' + self.ndbno)
      .then(function(response){
        console.log(response.data)
      });
    }

    this.onDrop = function (data, event) {
    // Get custom object data.
    var customObjectData = data['json/custom-object']; 

    // Get other attached data.
    var uriList = data['text/uri-list'];
    };

  this.testDrop = function () {
    $( "#carrot" ).css( "visibility", "hidden" )
       $( "#juicer" ).effect( "shake" )
    console.log('fish');
  }



  // Drag over handler.
  this.onDragOver = function (event) {
    console.log('hello')
  };
}

