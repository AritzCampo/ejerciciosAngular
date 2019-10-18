function PokemonProvider($http){

    console.log('PokemonProvider');
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
  

    this.listar = function(){    
      console.log('PokemonProvider listar ' + ENDPOINT);
      return $http.get(ENDPOINT);
  
    }// listar
    this.listarDetalle = function(nombre){    
      console.log('PokemonProvider listar ' + ENDPOINT);
      let url = ENDPOINT + nombre;
      return $http.get(url);
  
    }// detalle*/
  
   
  
  
  }