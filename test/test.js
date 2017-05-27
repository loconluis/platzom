//Escribiendo TEST
const expect = require('chai').expect;
const platzom = require('..').default;


describe('#platzom', function () {

  it('Si la palabra termina con "ar", se le quitan esas dos letras', function(){
    const translation = platzom("Programar");
    expect(translation).to.equal("Program");
  });

  it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
    const translationp = platzom("Zorro");
    const translationp2 = platzom("Zarpar");
    expect(translationp).to.equal("Zorrope");
    expect(translationp2).to.equal("Zarppe");
  });

  it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function(){
    const translationp = platzom("abecedario");
    expect(translationp).to.equal("abece-dario");
  });

  it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function(){
    const trans = platzom("sometemos");
    expect(trans).to.equal("SoMeTeMoS");
  });
})
