function detallePokemonProvider($http){

    console.log('detallePokemonProvider');
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

    

    this.listarDetalle = function(nombre){    
      console.log('PokemonProvider listar ' + ENDPOINT);
      let url = ENDPOINT + nombre;
      return $http.get(url);
  
    }// listar
  
    /*this.detalle = function( idCancion ){    
      let url = ENDPOINT + idCancion;
      console.log('cancionProvider detalle ' + url);
      
    }// detalle*/
  
  
  }