angular.
  module('componentesApp').//nombre App
  component('componenteBoton', {//Nombre componente
    templateUrl: './components/boton/template.html',
    controller: function BotonController() {
      console.trace('BotonController');
      this.nombre = 'sumar';
      this.nombre2 = 'restar';
      this.numeroClicks=0;

      //funcion
      this.sumar=function(){
        console.trace('botonSumar');
        this.numeroClicks++;
      }
      this.restar=function(){
        console.trace('botonRestar');
        this.numeroClicks--;
      }
    }
  });