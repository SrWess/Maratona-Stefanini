(function () {
  "use strict";

	//Recursos do angular
	//2º argumento: permite importar outras bibliotecas
	angular.module('app', [])
		.controller('controlador', function($scope) {
			//Setando o que deseja ser mostrado 
			$scope.nome = ''
		})
})();