angular
  .module("juicrApp")
  .controller("juiceController", JuiceController);

  JuiceController.$inject = ["$http"];

  function JuiceController($http) {
    var self = this;
    self.ingredients = []
    self.ndbno = ''


    this.getData = function() {

     $http
      .get('http://localhost:9000/juices/' + self.ndbno)
      .then(function(response){
        console.log(response.data)
      });
    }