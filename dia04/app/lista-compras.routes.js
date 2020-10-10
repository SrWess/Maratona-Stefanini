(function () {
  "use strict";

  angular.module("listaComprasApp")
    .config(routes) //Configuração das rotas
    .run(configDefaults) //Execução da aplicação

  routes.$inject = ['$routeProvider']
  configDefaults.$inject = ['$rootScope']

  function routes($routeProvider) {
    //Configuração das rotas
    $routeProvider
      .when('/home', {
        templateUrl: 'acesso/home.tpl.html'
      })
      .when('/login', {
        templateUrl: 'acesso/login.tpl.html'
      })
      .when('/register', {
        templateUrl: 'acesso/register.tpl.html'
      })
      .otherwise({
        redirectTo: '/home'
      })
  }

  function configDefaults($rootScope) {
    $rootScope.listaMensagens = []
  }
})();
