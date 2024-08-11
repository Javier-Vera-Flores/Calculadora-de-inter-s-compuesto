alert("Bievenido a la calculadora de interes compuesto\n Ingresar los datos de tu perfil para realizar el calculo");
let nombre = prompt("¿Cuál es tu nombre");
let edad = parseInt(prompt("¿Qué edad tienes?"));
let inversionInicial = parseFloat(prompt("¿Cuantos el capital a invertir?"));

if(edad != Number){
    if(edad < 17){
        alert("Por favor espera a cumplir 18  o solita a tu tutor legal apoyo para iniciar invirtiendo");
    }else{
        prompt("¿Cuánto es el plazo que quieres invertir tu capital?");
    }
}



class cliente {
    Constructor (nombre, edad, inversionIncial){
        this.nombre = nombre;
        this.edad = edad;
        this.inversionIncial = inversionIncial;
    }

    //nueva funcion
}