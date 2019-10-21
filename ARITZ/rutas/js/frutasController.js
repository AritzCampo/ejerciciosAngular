app.controller('frutasController', function ($scope, $timeout) {
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