angular
  .module("juicrApp", ["ui.router"])
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


  //   .state('quiz', {
  //     url: '/quiz',
  //     templateUrl: 'quiz.html'
  //   })

  //   .state('score', {
  //     url: '/score',
  //     templateUrl: 'score.html'
  //   })

  }
