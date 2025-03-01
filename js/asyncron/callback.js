//callbacks son la forma de hacer que una función se ejecute después de que otra función haya terminado de ejecutarse
//callbacks son funciones que se pasan como argumentos a otras funciones y se invocan después de que alguna operación se haya completado
//callbacks se utilizan comúnmente en JavaScript para realizar tareas después de que se haya completado una tarea previa
//Son propensos a caer en el infierno de los callbacks, que es cuando se anidan tantos callbacks que el código se vuelve difícil de leer y mantener
//Se recomienda usar promesas o async/await en lugar de callbacks para evitar el infierno de los callbacks

//Ejemplo de callback
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}

doHomework('math', function() {
    console.log('Finished my homework');
}); //Output: Starting my math homework. Finished my homework

//Ejemplo de callback anidado
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}

function finishedHomework() {
    console.log('Finished my homework');
}

doHomework('math', function() {
    doHomework('science', function() {
        doHomework('history', finishedHomework);
    });
}); //Output: Starting my math homework. Starting my science homework. Starting my history homework. Finished my homework

