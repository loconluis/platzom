export  default function platzom(cadena){
  let translation = cadena;

  //Si la palabra termina en "ar", se le quitan esos dos caracteres
  if(cadena.toLowerCase().endsWith('ar')){
    translation = cadena.slice(0, -2);
  }

  //Si la palabra inicia con Z, se le añade "pe" al final
  if(cadena.toLowerCase().startsWith('z')){
    translation += 'pe';
  }

  //Si tiene 10 o mas letras hay que partirlo a la mitad y poner un guion-medio
  if(translation.length >= 10){
    const firstHalf = translation.slice(0, Math.round(translation.length / 2))
    const secondHalf = translation.slice(Math.round(translation.length / 2));
    translation = `${firstHalf}-${secondHalf}`;
  }

  //Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve
  //la misma palabra intercalando mayusculas y minisculas.
  const reverse = (str)=> str.split('').reverse().join('');
  function minMay(str){
    const length = str.length;
    let translation = '';
    let capitalize = true;
    for (let i = 0; i < length; i++){
      const char = str.charAt(i);
      translation+= capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  if(cadena == reverse(cadena)){
    return minMay(cadena);
  }
  return translation;
}
