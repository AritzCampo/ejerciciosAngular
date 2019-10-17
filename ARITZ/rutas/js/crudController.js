app.controller('crudController', ['$scope', '$http', 'cancionProvider',
    function ($scope, $http, cancionProvider) {


        console.trace('crudController');

        // variables del scope del controlador
        $scope.titulo = "Ejercicio CRUD contra Servicio Rest en Java";
        $scope.canciones = [];
        $scope.nombreCancion = "";
        $scope.nombreNuevo = "";
        $scope.mostrarText = false;
        $scope.idModificado=0;

        // Eventos
        this.$onInit = function () {
            console.trace('crudController onInit');

            /*
            TODO ponerlo donde sea neceario
            cancionProvider.listar();
            cancionProvider.detalle(1);
            cancionProvider.eliminar(2);
            cancionProvider.crear("Mockito");
            cancionProvider.modificar(1,"Cambiada Cancion 1");
            */


            let promesa = cancionProvider.listar();
            promesa.then(
                response => {
                    console.debug('Llamada Rest OK %o', response);
                    $scope.canciones = response.data;
                },
                response => {
                    console.warn('Llamada Rest ERROR %o', response);
                }
            );

        }; //onInit end

        $scope.eliminar = function (id) {
            let promesa = cancionProvider.eliminar(id);
            promesa.then(
                response => {
                    console.debug('CANCION ELIMINADA %o', response);

                    let promesa = cancionProvider.listar();
                    promesa.then(
                        response => {
                            console.debug('Llamada Rest OK %o', response);
                            $scope.canciones = response.data;
                        },
                        response => {
                            console.warn('Llamada Rest ERROR %o', response);
                        }
                    );
                },
                response => {
                    console.warn('CANCION NO ELIMINADA %o', response);
                }
            );
        } //eliminar end
        $scope.crearCancion = function () {
            let promesa = cancionProvider.crear($scope.nombreCancion);
            promesa.then(
                response => {
                    console.debug('CANCION CREADA %o', response);

                    let promesa = cancionProvider.listar();
                    promesa.then(
                        response => {
                            console.debug('Llamada Rest OK %o', response);
                            $scope.canciones = response.data;
                        },
                        response => {
                            console.warn('Llamada Rest ERROR %o', response);
                        }
                    );
                },
                response => {
                    console.warn('CANCION NO ELIMINADA %o', response);
                }
            );
        }//crear end
        $scope.modificar = function (id) {
            if ($scope.mostrarText == false) {
                $scope.mostrarText = true;
                $scope.idModificado= id;
            } else {
                let promesa = cancionProvider.modificar($scope.idModificado, $scope.nombreNuevo);
                promesa.then(
                    response => {
                        console.debug('CANCION MODIFICADA %o', response);
                        $scope.mostrarText = false;

                        let promesa = cancionProvider.listar();
                        promesa.then(
                            response => {
                                console.debug('Llamada Rest OK %o', response);
                                $scope.canciones = response.data;
                            },
                            response => {
                                console.warn('Llamada Rest ERROR %o', response);
                            }
                        );
                    },
                    response => {
                        console.warn('CANCION NO ELIMINADA %o', response);
                    }
                );



            }



        }//modificar end


        // funciones


    }
]);