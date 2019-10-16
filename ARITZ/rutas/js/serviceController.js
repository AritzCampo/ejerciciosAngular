app.controller('serviceController', ['$scope', '$http', '$q', '$timeout', '$log','servicioConstantes','rectangulo',
                                      function($scope, $http, $q, $timeout,$log,servicioConstantes,rectangulo){


    console.trace('serviceController');    

    $scope.titulo = "Servicios " + servicioConstantes.titulo;
    $log.info('serviceController con $log');    

    //usar servicio rectangulo

   // rectanguloServicio.setAncho(3);
   // rectanguloServicio.setAlto(4);
    $scope.area=rectangulo.getArea();





}]);
