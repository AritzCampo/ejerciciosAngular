var app = angular.module('angularApp',['ngRoute','ngSanitize']);


/**
 * Servicio para Constantes
 */

 app.constant("servicioConstantes", {
                                      "titulo": "AngularApp",
                                      "idioma": "es-Es",
                                      "version": "26.3.12",
                                      "autor": "Aritz Campo",
                                      "github": "https://github.com/AritzCampo/ejerciciosAngular"
                                    } );

/**
 *  Providers
 */
app.service("detallePokemonProvider", detallePokemonProvider );
app.service("pokemonProvider", PokemonProvider );


function CancionProvider($http){

  console.log('CancionProvider');
  const ENDPOINT = "http://localhost:8080/cancion/";

  this.listar = function(){    
    console.log('cancionProvider listar ' + ENDPOINT);
    return $http.get(ENDPOINT);

  }// listar

  this.detalle = function( idCancion ){    
    let url = ENDPOINT + idCancion;
    console.log('cancionProvider detalle ' + url);
    return $http.get(url);
    
  }// detalle

  this.eliminar = function( idCancion ){    
    let url = ENDPOINT + idCancion;
    console.log('cancionProvider eliminar ' + url);
    return $http.delete( url );
  };
    
  // eliminar


  this.crear = function( nombreCancion ){    
    let url = ENDPOINT;
    console.log('cancionProvider nombreCancion ' + url);
    let cancion = {            
      "id": 0,
      "nombre": nombreCancion
  };
     return $http.post(url, cancion);
                
  }// crear

  this.modificar = function( idCancion, nombreCancion ){    
    let url = ENDPOINT  + idCancion;
    console.log('cancionProvider modificar %s  id=%s nombre=%s', url, idCancion, nombreCancion );
    let data = {  
      "id":idCancion,          
      "nombre": nombreCancion
  };
   return $http.put( url , data );
    
  }// modificar


}

 app.service("cancionProvider", CancionProvider );


/**
 * Ejemplo Servicio a traves de una Clase
 */

 // Clase Rectangulo
 function Rectangulo() {
  this.ancho=0;
  this.alto=0;
 
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
   
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
   
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}

//definir Servicio
app.service("rectanguloService",Rectangulo);


