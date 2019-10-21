app.controller('profesoresController', ['$scope',
    '$log',
    'servicioConstantes',
    'rectanguloService',
    function ($scope,
        $log,
        servicioConstantes,
        rectanguloService) {


        var app = angular.module('ejemplosApp', []);

        app.controller('mainCtrl', ['$scope', '$http',
            function ($scope, $http) {
                $scope.profesores = {};
                //peticion httpRequest mediante Ajax. es asincrono
                console.debug('llamada asincrona');
                // http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
                $http.get('json/profesores.json').success(function (data) {
                    console.trace('response OK %o', data);
                    $scope.profesores = data.profesores;
                });

            }
        ]);


    }
]);