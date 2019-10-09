/*javascript para nuestra app*/
var app = angular.module('profesorApp' //nomre de la app
    , [] //para inyectar librerias
);

/*controladores*/
app.controller('profesorCtrl', function ($scope, $timeout) {
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





app.controller('videoCtrl', function ($scope, $timeout) {

    $scope.animacion = "";
    $scope.video = {
        id: 1,
        codigo: "Rq7QiETb37k",
        nombre: "Glaukoma 'kalima Gure Kaiola",
        usuario: {
            nombre: "ramoncin",
            id: 23
        },
        categoria: {
            nombre: "musica",
            id: 12
        },
        likes: 34
    };

    $scope.sumarClick = function () {

        $scope.animacion = "animated pulse";
        $scope.video.likes++;
        $timeout(function () {
            $scope.animacion = "";
        }, 1000);
    }


}); //end profesor controller

app.controller('frutasCtrl', function ($scope, $timeout) {
    $scope.frutas = ["Manzana", "Mango", "Kiwi", "Melon", "fresa"];
    $scope.frutasJson = {"frutas": [{
                nombre: "manzana",
                color: "roja"
            },
            {
                nombre: "pera",
                color: "verde"
            },
            {
                nombre: "mango",
                color: "naranja"
            }
        ]
    };

    $scope.seleccionado = function (fruta, event) {
        event.target.style.backgroundColor = 'red';
    }


}); //end frutas controller