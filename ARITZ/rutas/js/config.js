
/**
 * Configuracion de las rutas de la App
 * @see components/menu/
 */
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/componente1',{
        templateUrl: 'parciales/componente.html'
    })    
    .when('/componente2',{
      template: '<componente-boton></componente-boton>'
    })
    .when('/frutas',{
        template: '<componente-tabla></componente-tabla>'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
    })
    .when('/funcional',{
      templateUrl: 'parciales/prog-funcional.html'
    })
    .when('/promesas',{
      templateUrl: 'parciales/promesas.html'
    })
    .when('/servicios',{
      templateUrl: 'parciales/servicios.html'
    })
    .when('/crud',{
      templateUrl: 'parciales/crud.html'
    })
    .when('/detalle/:id',{
      templateUrl: 'parciales/detalle.html',
      controller: 'detalleController'
    })
    .when('/pokemon',{
      templateUrl: 'parciales/pokemon.html',
      controller: 'pokemonController'
    })
    .when('/detallePokemon/:nombre',{
      templateUrl: 'parciales/detallePokemon.html',
      controller: 'detallePokemonController'
    })
    .otherwise({
      redirectTo: '/'
    })

})
