angular.
  module('tareasApp').  
  component('listadoTareas', {   
    templateUrl: './componentes/template.lista-tareas.html',
    controller: function ListadoTareasController($http, $scope) {

      console.trace('ListadoTareasController');  
      
      // propiedades
      /////////////////////////////////////////////////////////////////

      $scope.titulo = "Listado Tareas";
      $scope.descripcion = "";
      $scope.mensajeValidacion = "";
      $scope.tareas = [];
      $scope.ENDPOINT = "http://localhost:3000/tareas/";

      // eventos del controlador
      /////////////////////////////////////////////////////////////////

      this.$onInit = function(){
        console.trace('ListadoTareasController onInit');

        $http.get($scope.ENDPOINT)
            .then(function(response){   // success antiguo

                console.trace('peticion GET %s data=%o', $scope.ENDPOINT, response);
                $scope.tareas = response.data;

            }, function(response){    // gestion del error

                console.warn('Tenemos un ERROR response: %o' , response);

            });

      };



      // funciones
      /////////////////////////////////////////////////////////////////

      $scope.crearTarea = function(){
          console.trace('click boton crearTarea con descripcion=' + $scope.descripcion );

          let descripcion = $scope.descripcion.trim();
          if ( descripcion.length <= 2 ){

             $scope.mensajeValidacion = 'Por favor escribe una descripción mas larga';

          }else{

            console.trace('llamada post');
            $scope.mensajeValidacion = '';

            let data = {            
                "completada": false,
                "descripcion": descripcion
            };

            $http.post($scope.ENDPOINT, data)
                .then(function(response){   // success antiguo

                    console.trace('reponse OK data=%o', $scope.ENDPOINT, response);
                   

                }, function(response){    // gestion del error

                    console.warn('Tenemos un ERROR response: %o' , response);

                });


          }

      } // crearTarea


      $scope.eliminarTarea = function( tarea ) {

            console.trace('click eliminarTarea %o', tarea);

            let url = $scope.ENDPOINT + tarea.id;
            $http.delete( url ).then(function(response){   

                console.trace('reponse OK data=%o', response);               

            }, function(response){    

                console.warn('Tenemos un ERROR response: %o' , response);

            });


      };// eliminarTarea
      $scope.finalizarTarea = function(tarea){
        console.trace('click boton crearTarea con descripcion=' + $scope.descripcion );      
          $scope.mensajeValidacion = '';

          let data = {            
              "id":tarea.id,
              "completada": !tarea.completada,
              "descripcion": tarea.descripcion  
             
          };

          $http.put($scope.ENDPOINT+tarea.id, data)
              .then(function(response){   // success antiguo

                  console.trace('Actualizacion OK data=%o', $scope.ENDPOINT, response);
                 

              }, function(response){    // gestion del error

                  console.warn('Tenemos un ERROR response: %o' , response);

              });
            
        }
        $scope.buscarCompletadas = function() {

            

            let url = $scope.ENDPOINT + "?completada=true";
            $http.get(url)
            .then(function(response){   // success antiguo

                console.trace('peticion GET %s data=%o', $scope.ENDPOINT, response);
                $scope.tareas = response.data;

            }, function(response){    // gestion del error

                console.warn('Tenemos un ERROR response: %o' , response);

            });


      };// buscarCompletadas
      $scope.buscarPendientes = function() {

    

        let url = $scope.ENDPOINT + "?completada=false";
        $http.get(url)
            .then(function(response){   // success antiguo

                console.trace('peticion GET %s data=%o', $scope.ENDPOINT, response);
                $scope.tareas = response.data;

            }, function(response){    // gestion del error

                console.warn('Tenemos un ERROR response: %o' , response);

            });


  };// buscarPendientes
  $scope.buscarTodas = function() {

    

    $http.get($scope.ENDPOINT)
            .then(function(response){   // success antiguo

                console.trace('peticion GET %s data=%o', $scope.ENDPOINT, response);
                $scope.tareas = response.data;

            }, function(response){    // gestion del error

                console.warn('Tenemos un ERROR response: %o' , response);

            });


};// buscarTodas


    }
  });