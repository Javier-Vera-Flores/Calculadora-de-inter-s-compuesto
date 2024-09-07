// Mensaje de bienvenida
alert("Bienvenido a la calculadora de interés compuesto de Chuala");
alert("Ingrese los datos de su perfil para realizar el cálculo.");
class Cliente {
    Constructor (nombre, edad, inversionIncial){
        this.nombre = nombre;
        this.edad = edad;
        this.inversionIncial = inversionIncial;
    }
    toString(){
        //Se genera cadena con datos de cliente
        return `Nombre: ${this.nombre},\n edad: ${this.edad},\n InversionInicial: ${this.inversionIncial}`;   
    }
}

// Obtener datos del usuario
let nombre = prompt("¿Cual es tu nombre?");
let edad = parseInt(prompt("¿Que edad tienes?"));
let inversionInicial = parseFloat(prompt("¿Cuánto es el capital que quieres invertir?"));
let plazo = parseFloat(prompt("¿Cuánto es el tiempo que quieres invertir tu capital en años?"));
let tasaInteres = parseFloat(prompt("¿Cuál es la tasa de interés anual en porcentaje?"));

// Se crea un arreglo de clientes registrados

const cliente1 = new Cliente("Chicharito Hernandez", 30, 10000);
const cliente2 = new Cliente("Son Goku", 33, 5000);
const cliente3 = new Cliente("Naruto Usuamki", 21, 8000);
const cliente4 = new Cliente(nombre, edad,inversionInicial);

const clientes = [cliente1, cliente2, cliente3];

// Validar edad
if (edad < 18) {
    alert("Por favor espera a cumplir 18 años o solicita el apoyo de tu tutor legal para iniciar invirtiendo.");
} else {
 

    // Buscar cliente por nombre usando la función buscarClientePorNombre
    const clienteEncontrado = buscarClientePorNombre(clientes, nombre);

    // Filtrar clientes con inversión inicial mayor a 6000 usando la función filtrarClientesPorInversion
    const clientesFiltrados = filtrarClientesPorInversion(clientes, 6000);

    // Mostrar menú
    let control;

    do{
        control =  parseInt(prompt("Seleccione una opción:\n1. Calcular interés compuesto\n2. Ver cliente encontrado\n3. Ver clientes filtrados\n 4. Salir"));

        switch (control) {
            case 1:
                // Se llama a la función para calcular interes compuesto despues del plazo
                let montoFinal = calcularInteresCompuesto(inversionInicial, tasaInteres, plazo);
                alert(`El monto final después de ${plazo} años con una inversión inicial de ${inversionInicial} a una tasa de interés anual del ${tasaInteres}% es: ${montoFinal.toFixed(2)}`);
                break;
            case 2:
                // Mostrar información del cliente encontrado
                if (clienteEncontrado) {
                    alert(`Cliente encontrado:\nNombre: ${clienteEncontrado.nombre}\nEdad: ${clienteEncontrado.edad}\nInversión Inicial: ${clienteEncontrado.inversionInicial}`);
                } else {
                    alert("Cliente no encontrado.");
                }
                break;
            case 3:
                // Se muestra clientes filtrados
                if (clientesFiltrados.length > 0) {
                    let mensaje = "Clientes con inversión inicial mayor a 6000:\n";
                    clientesFiltrados.forEach(cliente => {
                        mensaje += `Nombre: ${cliente.nombre}, Edad: ${cliente.edad}, Inversión Inicial: ${cliente.inversionInicial}\n`;
                    });
                    alert(mensaje);
                } else {
                    alert("No hay clientes con inversión inicial mayor a 6000.");
                }
                break;
            case 4:
                alert("proceso terminado, Buelve pronto: " + cliente4.nombre);
                break;
            default:
                alert("Opción no válida.");
                break;
        }
    }while(control != 4);
}


// Calculo del interés compuesto
function calcularInteresCompuesto(principal, tasa, tiempo) {
    let montoFinal = principal * Math.pow((1 + (tasa / 100)), tiempo);
    return montoFinal;
}

// buscar un cliente por nombre
function buscarClientePorNombre(clientes, nombre) {
    return clientes.find(cliente => cliente.nombre === nombre);
}

// filtrar clientes con inversión inicial mayor a una cantidad indicada
function filtrarClientesPorInversion(clientes, cantidad) {
    return clientes.filter(cliente => cliente.inversionInicial > cantidad);
}
