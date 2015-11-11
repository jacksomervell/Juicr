angular
  .module("juicrApp", ["ui.router", 'ngDragDrop'])
  .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('juicing', {
      url: '/juicing',
      templateUrl: 'juicing.html'
    })

    .state('login', {
      url: '/',
      templateUrl: 'login.html'
    })

    .state('cabinet', {
      url: '/cabinet',
      templateUrl: 'cabinet.html'
    })

  }
