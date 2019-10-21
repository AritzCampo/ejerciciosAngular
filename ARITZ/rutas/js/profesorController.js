app.controller('profesorController', function ($scope, $timeout) {
    //propiedades modelo
    $scope.editando = {}; //variable inicializada vacia
    $scope.mostrarCaja = false;
    $scope.animacion = "animated fadeInUp";
    $scope.profesor = {

        nombre: "Juan Carlos Pineda",
        bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
        edad: 47,
        foto: "img/juancarlos.jpg"
    };
    //funciones modelo
    $scope.editar = function () {
        console.trace('click boton editar');
        angular.copy($scope.profesor, $scope.editando);
        $scope.animacion = "animated fadeInUp";
        $scope.mostrarCaja = true;
    }
    $scope.cancelar = function () {
        console.trace('click boton cancelar');
        $scope.editando = {};
        $scope.animacion = "animated fadeOutDown";
        $timeout(function () { //relentizamos 1 seg para ver si se marcha
            $scope.mostrarCaja = false;
        }, 1000);

    }
    $scope.guardar = function () {
        console.trace('click boton guardar');
        angular.copy($scope.editando, $scope.profesor);
        $scope.animacion = "animated fadeOutDown";
        $timeout(function () { //relentizamos 1 seg para ver si se marcha
            $scope.mostrarCaja = false;
        }, 1000);
    }
}); //end profesor controller