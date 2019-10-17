function PokemonProvider($http){

    console.log('PokemonProvider');
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon";
  

    this.listar = function(){    
      console.log('PokemonProvider listar ' + ENDPOINT);
      return $http.get(ENDPOINT);
  
    }// listar
  
    /*this.detalle = function( idCancion ){    
      let url = ENDPOINT + idCancion;
      console.log('cancionProvider detalle ' + url);
      
    }// detalle*/
  
  
  }