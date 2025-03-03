//Para manipular un json tenemos que entender la estructura de los datos recibidos
//Un json es un objeto que puede contener otros objetos, arrays, strings, números, booleanos y null
//En este caso, el json que recibimos es un objeto que contiene objetos y arrays.
//Los array se pueden :
//  -recorrer con un bucle for
//  -recorrer con un bucle forEach
//  -recorrer con un bucle for...of
//  -recorrer con un bucle map
//  -recorrer con un bucle filter
//  -recorrer con un bucle reduce
//  -recorrer con un bucle find
//  -recorrer con un bucle some
//  -recorrer con un bucle every

// En nuestro caso los más usados serán for, forEach, map y filter

// Primero usaremos el codigo de fetch-limpio.js para obtener los datos

async function obtenerDatos() {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2'); // Aquí se hace la petición pero no se obtiene el JSON
      
      if (!response.ok) throw new Error('Error en la respuesta'); // Si la respuesta no es "ok" se lanza un error
        
      const estoConfunde = await response.json(); // Aquí se obtiene el JSON
      
      // No nos interesa lo siguiente
      // console.log(response); // Aquí se muestra la respuesta antes del PENE!!! (8===B)
      // console.log("8===B"); // Busca el pene en la consola para distinguir entre "response" y "data"    
      // console.log(data); // Ahora podemos usar "data"
      

      const usuarios = estoConfunde.data.map(user => user.email ); // Usamos map para obtener un array con los emails de los usuarios
        console.log(usuarios);

        
    

    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
  
  obtenerDatos(); // Se llama a la función para que se ejecute y en medio un pene (8===B) para distinguir entre "response" y "data" en la consola
  


