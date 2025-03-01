[Promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[tutorial](https://es.javascript.info/async)


Resumen del GYPSY HACKER!


Las promesas se usan para "mejorar" la ejecución ASINCRÓNICA (es decir, que no se ejecute todo lineal) puesto que js carece de MULTI-THREAD

JavaScript no tiene múltiples hilos (multithreading) nativo, ya que es un lenguaje single-threaded basado en el event loop. 
Esto significa que solo ejecuta una tarea a la vez en el hilo principal.
Sin embargo, sí puede manejar tareas concurrentes y no bloqueantes usando:

    *Callbacks → (setTimeout, setInterval, eventos del DOM, etc.)
    *Promesas → (fetch, then/catch, async/await)  
    ...................................................................
    -Web APIs del navegador → (XMLHttpRequest, fetch, setTimeout, etc.)
    -Web Workers → (para ejecutar código en un hilo separado)
    -Node.js Worker Threads → (hilos en Node.js)



Lo primero es entender "COMO FUNCIONAN LAS PROMESAS" y luego "ASYNC AWAIT" es solo una forma de usar promesas.

Las promesas tener cualquier parametro en "resolve" , "reject" 

ejemplo:

// El objeto Promise no lleva "resolve" si no "aceptar", igualmente en "reject" con "rechazar" ... 
// lo IMPORTANTE!!! es que new Promise debe llevar por lo menos 1 parametro, si no sería inútil porque nunca se resolvería, ni rechazaría.


const miPromesa = new Promise((aceptar, rechazar) => {
    let numero = Math.random();
    if (numero < 0.5) {
        aceptar(`Éxito! Número: ${numero}`);
    } else {
        rechazar(`Error! Número demasiado alto: ${numero}`);
    }
});

miPromesa
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));



APIs (define métodos y comportamientos estandarizados )

`XMLHttpRequest` (El viejo método para solicitud)
`Fetch` (El nuevo y moderno método para solicitud)

`Promise` (Remplaza callback para programción Asíncrona)