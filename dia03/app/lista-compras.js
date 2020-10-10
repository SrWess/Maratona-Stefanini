(function (angular) {
  "use strict";

  //Modulo
  angular.module("listaTarefasApp", []);

  //Controller
  angular
    .module("listaTarefasApp")
    .controller("ListaTarefasController", listaTarefasController);

  //Realizando injeção de dependências
  listaTarefasController.$inject = ['$rootScope', '$filter'];

  function listaTarefasController(root) {
    //Referenciando controller
    var vm = this;

    //Init variaveis
    vm.logado = false;
    vm.validar = false;
    vm.register = false;

    root.listaMensagens = [
      {id: 1, text: 'Mensagem aqui', tipo: 'danger'},
      {id: 2, text: 'Mensagem aqui', tipo: 'success'},
      {id: 3, text: 'Mensagem aqui', tipo: 'info'},
      {id: 4, text: 'Mensagem aqui', tipo: 'warning'},
    ]
  }
})(angular);
