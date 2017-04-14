function calcular(form) 
{
    var peso = form.peso.value;
    var altura = form.altura.value;
    var resultado = peso / (altura * altura);
    var resposta;
    
    if( resultado < 17 )
        resposta = "Muito abaixo do peso!";
    else if( resultado >= 17 && resultado <= 18.49 )
        resposta = "Abaixo do peso!";
    else if( resultado >= 17.5 && resultado <= 24.99 )
        resposta = "Peso normal!";
    else if( resultado >= 25 && resultado <= 29.99 )
        resposta = "Acima do peso!";
    else if( resultado >= 30 && resultado <= 34.99 )
        resposta = "Obesidade 1!";
    else if( resultado >= 35 && resultado <= 39.99 )
        resposta = "Obesidade 2 (Severa)";
    else if( resultado > 40 )
        resposta = "Obesidade 3 (Mórbida)!";
    
    alert( resposta );
}


