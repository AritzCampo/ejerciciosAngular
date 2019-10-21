app.controller('videoController', function ($scope, $timeout) {

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