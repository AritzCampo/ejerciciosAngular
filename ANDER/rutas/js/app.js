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
    $http.delete( url ).then(function(response){   

      console.trace('reponse OK data=%o', response);               

  }, function(response){    

      console.warn('Tenemos un ERROR response: %o' , response);

  });
    
  }// eliminar


  this.crear = function( nombreCancion ){    
    let url = ENDPOINT;
    console.log('cancionProvider nombreCancion ' + url);
    let cancion = {            
      "id": "",
      "nombre": nombreCancion
  };
    $http.post(url, cancion)
                .then(function(response){   // success antiguo

                    console.trace('reponse OK data=%o', $scope.ENDPOINT, response);
                   

                }, function(response){    // gestion del error

                    console.warn('Tenemos un ERROR response: %o' , response);

                });
    
  }// crear

  this.modificar = function( idCancion, nombreCancion ){    
    let url = ENDPOINT  + idCancion;
    console.log('cancionProvider modificar %s  id=%s nombre=%s', url, idCancion, nombreCancion );
    let data = {            
      "nombre": nombreCancion
  };
    $http.put( url , data ).then(function(response){   

      console.trace('reponse OK data=%o', response);               

  }, function(response){    

      console.warn('Tenemos un ERROR response: %o' , response);

  });
    
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


