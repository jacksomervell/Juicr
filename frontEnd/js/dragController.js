angular.module('juicrApp', ['draganddrop'])
.controller('DragDropCtrl', function ($scope) {

  // Drop handler.
  $scope.onDrop = function (data, event) {
    // Get custom object data.
    var customObjectData = data['json/custom-object']; // {foo: 'bar'}

    // Get other attached data.
    var uriList = data['text/uri-list']; // http://mywebsite.com/..

    // ...
  };

  // Drag over handler.
  $scope.onDragOver = function (event) {
    // ...
  };
});

// angular
//   .module("juicrApp", ['draganddrop'])
//   .controller('DragDropCtrl', DragDropCtrl);
  
//   DragDropCtrl.$inject = ["$http"];

//   function DragDropCtrl ($http){

//   // Drop handler.
//   this.onDrop = function (data, event) {
//     // Get custom object data.
//     var customObjectData = data['json/custom-object']; 

//     // Get other attached data.
//     var uriList = data['text/uri-list'];


//   };

//   // Drag over handler.
//   this.onDragOver = function (event) {
//     console.log('hello')
//   };
// };