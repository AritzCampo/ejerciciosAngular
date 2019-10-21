app.controller('frutasCtrl', function ($scope, $timeout) {
    $scope.frutas = ["Manzana", "Mango", "Kiwi", "Melon", "fresa"];
    $scope.total=0;
    $scope.totalManzanas=0;
    $scope.totalPeras=0;
    $scope.totalMangos=0;
    $scope.frutasJson = {"frutas": [{
                nombre: "manzana",
                precio: 1,
                img:"img/manzana.jpg",
                cantidad:0,
                color:"verde"
            },
            {
                nombre: "pera",
                precio: 2,
                img:"img/pera.jpg",
                cantidad:0,
                color:"verde"
            },
            {
                nombre: "mango",
                precio: 3,
                img:"img/mango.jpg",
                cantidad:0,
                color:"naranja"
            }
        ]
    };


    $scope.sumarClick = function (fruta) {
        console.trace('click boton sumar');
        console.log("click incrementar %o", fruta);
        fruta.cantidad++;
    }
    $scope.restarClick = function (fruta) {
        console.trace('click boton restar');
        fruta.cantidad--;
    }
    $scope.sumarTotal = function (fruta) {
       
        $scope.total= $scope.total+(fruta.cantidad*fruta.precio);
        if (fruta.nombre === "manzana"){
            $scope.totalManzanas = $scope.totalManzanas + fruta.cantidad;
            fruta.cantidad = 0;
        }else if (fruta.nombre === "pera"){
            $scope.totalPeras = $scope.totalPeras + fruta.cantidad;
            fruta.cantidad = 0;
        }else if (fruta.nombre === "mango"){
            $scope.totalMangos = $scope.totalMangos + fruta.cantidad;
            fruta.cantidad = 0;
        };
    }
    $scope.restarTotal = function (fruta) {
       
        $scope.total= $scope.total-(fruta.cantidad*fruta.precio);
        if (fruta.nombre === "manzana"){
            $scope.totalManzanas = $scope.totalManzanas - fruta.cantidad;
            fruta.cantidad = 0;
        }else if (fruta.nombre === "pera"){
            $scope.totalPeras = $scope.totalPeras - fruta.cantidad;
            fruta.cantidad = 0;
        }else if (fruta.nombre === "mango"){
            $scope.totalMangos = $scope.totalMangos - fruta.cantidad;
            fruta.cantidad = 0;
        };
    }





}); //end frutas controller