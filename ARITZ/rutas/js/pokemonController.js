app.controller('pokemonController', ['$scope', 'pokemonProvider',
                                      function($scope, pokemonProvider){


    console.trace('pokemonController');    



   

    let promesa = pokemonProvider.listar();
        promesa.then(
            response => {
                console.debug('Llamada Rest OK %o', response);
                $scope.pokemons = response.data.results;
            },
            response => {
                console.warn('Llamada Rest ERROR %o', response);
            }
        );



}]);