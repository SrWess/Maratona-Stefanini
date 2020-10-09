(function() {
	"use strict";

	//Módulo
	//Array guardar todas dependências que aplicação precisa
	angular.module('listaTarefasApp', [])

	//Seleção do módulo
	angular.module('listaTarefasApp')
		//Criando controller
		//Funcionalidades da aplicação
		.controller('listaTarefasController', listaTarefasController)

		listaTarefasController.$inject = ['$scope']

	function listaTarefasController() {
		//this referenciando ao contexto da função listaTarefasController
		let vm = this;


		vm.tarefas = [
			{ text: 'Estudar AngularJS', feito: true },
			{ text: 'Fazer aplicação em AngularJS', feito: false },
		]

		vm.restam = restam;
		vm.addTarefa = addTarefa;
		vm.arquivar = arquivar;

		//Fazendo a verificação das tarefas restantes
		function restam() {
			let count = 0

			//Percorrendo array e verificando valores falsos
			angular.forEach(vm.tarefas, function (tarefa) {
				if(!tarefa.feito) count++
			})

			return count
		}
		
		function addTarefa() {
			vm.tarefas.push({ text: vm.tarefaText, feito: false })
			vm.tarefaText = ''
		}

		//Removendo tarefas concluidas
		function arquivar() {
			vm.tarefas = vm.tarefas.filter(function (tarefa) {
				return !tarefa.feito
			})
		}
	}


})();