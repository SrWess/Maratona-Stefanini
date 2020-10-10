(function (angular) {
  "use strict";

  //Modulo
  angular.module("listaComprasApp");

  //Controller
  angular
    .module("listaComprasApp")
    .controller("AcessoController", acessoController);

  //Realizando injeção de dependências
  acessoController.$inject = ['$rootScope', 'ListaComprasService'];

  function acessoController($rootScope, service) {
    var vm = this


    vm.logar = logar

    function logar() {
      return service.logar(vm.login) //Enviando user e pass para service
        .then(function (_resp) {
          if(_resp.error) {
            $rootScope.listaMensagens.push({text: _resp.message, tipo: 'danger'})
          } else {
            $rootScope.listaMensagens.push({text: _resp.message, tipo: 'success'})
            $rootScope.userLogged = _resp.userLogged
          }
        })
    }
  }
})(angular);
