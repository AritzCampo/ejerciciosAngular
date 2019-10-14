angular.
  module('angularApp').  
  component('componenteFilter', {   
    templateUrl: './components/filter/template.filter.html',
    controller: function FilterController($scope,$http) {

      console.trace('FilterController');  
      let url = "http://localhost:3000/frutas";         
        $http.get(url).then(function (response) {
          
            console.trace('llamda correcta %o', response);
            $scope.frutas = response.data;
            $scope.colores = response.data.map( e => e.color);
            $scope.nombre2e = response.data.filter( e=>e.precio > 1.9).map( e=> {
               return {"nombre": e.nombre, "precio": e.precio }
              });
            $scope.totalEuros = response.data.map(e=>e.precio).reduce( (pv,cv)=> pv+cv );

            $scope.prueba = response.data.map( e => e.color).filter((v,i,a)=>{
              return a.indexOf(v)===i;
            });
            
            
            
        }).catch(function (response) {
             console.warn('ERROR llamda %o', response);
        });

     
    }// controlador

  });