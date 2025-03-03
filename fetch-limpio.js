async function obtenerDatos() {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2'); // Aquí se hace la petición pero no se obtiene el JSON
      
      if (!response.ok) throw new Error('Error en la respuesta'); // Si la respuesta no es "ok" se lanza un error
        
      const data = await response.json(); // Aquí se obtiene el JSON
      console.log(response); // Aquí se muestra la respuesta antes del PENE!!! (8===B)
      console.log("8===B"); // Busca el pene en la consola para distinguir entre "response" y "data"    
      console.log(data); // Ahora podemos usar "data"
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
  
  obtenerDatos(); // Se llama a la función para que se ejecute y en medio un pene (8===B) para distinguir entre "response" y "data" en la consola
  