(function () {
  "use strict";

  //Modulo
  angular.module("listaComprasApp");

  //Controller
  angular
    .module("listaComprasApp")
    .controller("HeaderController", headerController);

  //Realizando injeção de dependências
  headerController.$inject = ['$location', 'ListaComprasService'];

  function headerController($location, service) {
    var vm = this

    vm.go = go
    //Recebendo função exemplo que se encontra em service
    vm.service = service.exemplo

    vm.ativo = false


    function go(_path) {
      //Alterando location para página informada no argumento
      $location.path(_path)
    }

  }
})();
