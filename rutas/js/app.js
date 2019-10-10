var app = angular.module('angularApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  $scope.menuSuperior = "parciales/menu.html";

 this.$onInit = function(){
   console.log('onInit mainCtrl');
//check para saber si el servicio esta levantado
let url='http://localhost:3000/frutas'
   $http.get(url).then(function (result) {
     console.trace('servicio rest funcionando %o',result);
     
   }).catch(function (response) {
     console.warn('servicio rest fallando %o', response);
     
   });
   
 }//onInit

}]);
