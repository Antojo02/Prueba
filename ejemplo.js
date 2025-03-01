// Función que retorna una promesa
function operacionAsync(simularExito) {
    return new Promise((resolve, reject) => {
      // Simulamos una operación asíncrona con setTimeout
      setTimeout(() => {
        if (simularExito) {
          resolve("Operación exitosa");
        } else {
          reject(new Error("Operación fallida"));
        }
      }, 2000); // Espera 2 segundos
    });
  }
  
  // Función asíncrona que usa await para esperar la promesa y try/catch para manejar errores
  async function ejecutarOperacion() {
    try {
      const resultado = await operacionAsync(false); // Cambia a 'false' para simular un fallo
      console.log("Resultado:", resultado);
    } catch (error) {
      console.error("Error capturado:", error.message);
    }
  }
  
  // Llamada a la función
  ejecutarOperacion();
  