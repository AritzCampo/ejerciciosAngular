var app = angular.module('angularApp',['ngRoute','ngSanitize']);
/**
 * constantes
 */

 app.constant("servicioConstantes",{
                                    "titulo":"AngularAPP",
                                    "idioma":"es - ES",
                                    "version":"1.0",
                                    "autor":"Aritz Campo",
                                    "github":"https://github.com/AritzCampo/ejerciciosAngular"
                                  });

/**
 * servicios
 */
//valor inicial
app.value("tamanyoInicialRectangulo",{
  ancho:2,
  alto:3
});

//clase rectangulo
function Rectangulo(tamanyoInicial) {
  this.ancho=tamanyoInicial.ancho;
  this.alto=tamanyoInicial.alto;
   
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

//definir servicio
app.service("rectangulo",['tamanyoInicialRectangulo',Rectangulo]);

app.controller('mainCtrl', ['$scope','$http','servicioConstantes','rectangulo', function($scope,$http,servicioConstantes,rectangulo){



  this.$onInit = function(){

    console.log('onInit mainCtrl');
    
    $scope.alerta = {
      "texto" : "Ongi Etorri",
      "clase" : "primary"
    };
    $scope.constantes = servicioConstantes;


    // check para saber si esta el servicio rest levantado
    let url = 'http://localhost:3000/frutas';
    $http.get(url).then(function (result) {
        console.trace('servicio rest funcionando %o', result);
        $scope.alerta = {
          "texto" : "<strong>Yujuuuuu</strong> Esta funcionando Servicio Rest",
          "clase" : "success"
        };


    }).catch(function (response) {
        console.warn('servicio rest fallando %o', response);
        $scope.alerta = {
          "texto" : "<strong>Upssssss</strong> Servicio Rest parado",
          "clase" : "danger"
        };
    });

    

  }//onInit

}]);


