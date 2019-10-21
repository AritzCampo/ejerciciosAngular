angular.
  module('angularApp').//nombre App
  component('saludoUsuario', {//Nombre componente,para usarlo <saludo-usuario>
    template: 'Hola, {{$ctrl.user}}!',
    controller: function SaludoUsuarioController() {
      this.user = 'Mundo';
    }
  });