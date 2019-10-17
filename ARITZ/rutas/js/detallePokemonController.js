app.controller('detallePokemonController', ['$scope','$routeParams','detallePokemonProvider', 
                                      function($scope, $routeParams, detallePokemonProvider){


    console.trace('detallePokemonController');   
    
    let promesa = detallePokemonProvider.listarDetalle($routeParams.nombre);
    promesa.then(
        response => {
            console.debug('Llamada Rest OK %o', response);
            $scope.detallePokemon = response.data;
        },
        response => {
            console.warn('Llamada Rest ERROR %o', response);
        }
    );



}]);