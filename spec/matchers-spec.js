describe("Suíte de testes do toBe", function(){
    var valorBooleano = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = { 'valor': valorBooleano };
    var obj2 = { 'valor': valorBooleano };
// === valor e o tipo e == apenas compara o valor (toEqual)
    it("deve validar o uso do matcher 'toBe'", function(){
    expect(valorBooleano).toBe(true);
    expect(valorBooleanoCopia).toBe(valorBooleano);
    expect(valorBooleano).not.toBe(valorBooleanoTexto);
    expect(valorBooleanoTexto).toBe("true");
    expect(obj1).not.toBe(obj2);
    });
});

describe("Suíte de testes do toEqual", function(){
    var valorBooleano = true;
    var valorBooleano2 = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = { 'valor': valorBooleano };
    var obj2 = { 'valor': valorBooleano };

    it("deve validar o uso do matcher 'toBe'", function(){
    expect(valorBooleano).toEqual(true);
    expect(valorBooleano).toEqual(valorBooleano2);
    expect(valorBooleanoCopia).toEqual(valorBooleano);
    expect(valorBooleano).not.toEqual(valorBooleanoTexto);
    expect(valorBooleanoTexto).toEqual("true");
    expect(obj1).not.toEqual(obj2);
    });
});