app.controller('pokemonController', ['$scope', 'pokemonProvider', '$routeParams',
    function ($scope, pokemonProvider, $routeParams) {


        console.trace('pokemonController');
        promesaDetalle = [];
        $scope.detallePokemon = [];

        if ($routeParams.nombre == undefined) {
            let promesa = pokemonProvider.listar();
            promesa.then(
                response => {
                    console.debug('Llamada Rest OK %o', response);
                    $scope.pokemons = response.data.results;
                    var size = $scope.pokemons.length;
                    for (var i = 0; i < size; i++) {

                        let promesaDetalle = pokemonProvider.listarDetalle($scope.pokemons[i].name);
                        promesaDetalle.then(
                            response => {
                                console.debug('Llamada Rest OK %o', response);
                                $scope.detallePokemon.push(response.data);
                                $scope.habilidades = response.data.abilities;
                                $scope.movimientos = response.data.moves;
                            },
                            response => {
                                console.warn('Llamada Rest ERROR %o', response);
                            }
                        );
                    }
                    response => {
                        console.warn('Llamada Rest ERROR %o', response);
                    }
                });
        } else {

            let promesaDetallePokemon = pokemonProvider.listarDetalle($routeParams.nombre);
            promesaDetallePokemon.then(
                response => {
                    console.debug('Llamada Rest OK %o', response);
                    $scope.pokemonActual = response.data;
                    $scope.habilidades = response.data.abilities;
                    $scope.movimientos = response.data.moves;
                },
                response => {
                    console.warn('Llamada Rest ERROR %o', response);
                }
            );
        }





    }
]);