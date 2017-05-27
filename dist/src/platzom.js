'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(cadena) {
  var translation = cadena;

  //Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (cadena.toLowerCase().endsWith('ar')) {
    translation = cadena.slice(0, -2);
  }

  //Si la palabra inicia con Z, se le añade "pe" al final
  if (cadena.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  //Si tiene 10 o mas letras hay que partirlo a la mitad y poner un guion-medio
  if (translation.length >= 10) {
    var firstHalf = translation.slice(0, Math.round(translation.length / 2));
    var secondHalf = translation.slice(Math.round(translation.length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  //Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve
  //la misma palabra intercalando mayusculas y minisculas.
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  if (cadena == reverse(cadena)) {
    return minMay(cadena);
  }
  return translation;
}