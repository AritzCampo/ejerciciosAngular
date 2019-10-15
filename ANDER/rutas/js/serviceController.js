app.controller('serviceController', ['$scope', '$http', '$q', '$timeout', '$log','servicioConstantes',
                                      function($scope, $http, $q, $timeout,$log,servicioConstantes){


    console.trace('serviceController');    

    $scope.titulo = "Servicios " + servicioConstantes.titulo;
    $log.info('serviceController con $log');    


}]);
