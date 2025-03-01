function cargarDatos(tiempo) {
    return new Promise((resolve, reject) => {   //reject nunca se usa en este ejemplo
        setTimeout(() => {
            let numero = Math.random();
            if (numero < 0.7) {
                resolve(`Datos cargados correctamente. Número: ${numero}`);
            } else {
                throw new Error(`Error al cargar datos. Número: ${numero}`);
                //throw detiene el programa, reject no.
            }
        }, tiempo); // Simulamos una demora
    });
}

async function ejecutarCarga(tiempo) {
    try {
        let datos = await cargarDatos(tiempo);
        console.log(datos);
    } catch (error) {
        console.error("Error capturado:", error.message, "Si no se va a tomar por culo");
    }
}

ejecutarCarga(3000);

console.log("Ahora hasta que falle... El ejecutar carga está esperando 3000 ms");

for (let i = 0; i < 10; i++) {
    ejecutarCarga(1000);
} //Si falla el primero, el resto no se ejecuta. Si no falla, se ejecutan todos