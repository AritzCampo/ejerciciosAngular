angular.
module('componentesApp'). //nombre App
component('componenteCalificacion', { //Nombre componente
  templateUrl: './components/calificacion/template.html',
  bindings: {
    pnota: '@'//parametro de entrada
  },
  controller: function CalificacionController() {
    console.trace('CalificacionController');

    this.nota = 0;
    this.calificacion = 'insuficiente';

    //funcion
    this.sumar = function () {
      console.trace('botonSumar');

      this.nota++;
      this.verNota();
    }
    this.$onInit = function(){ //evento al iniciar controlador
      this.nota = +this.pnota;
      this.verNota();
    }

    this.restar = function () {
      console.trace('botonRestar');
      this.nota--;
      this.verNota();
    }

    this.verNota = function () {
      console.trace('entro en switch');
      /*switch (this.nota) {
         case 0
             calificacion='SUSPENSO';
             break;
         
         default:

      }*/
      if (this.nota === 0 || this.nota === 1 || this.nota === 2 || this.nota === 3 || this.nota === 4) {
        this.calificacion = "insuficiente";
      } else if (this.nota === 5) {
        this.calificacion = "suficiente";
      } else if (this.nota === 6) {
        this.calificacion = "bien";
      } else if (this.nota === 7 || this.nota === 8) {
        this.calificacion = "notable";
      } else if (this.nota === 9 || this.nota === 10) {
        this.calificacion = "sobresaliente";
      } else {
        this.calificacion = "fuera de rango";
      }

    }
  }


});