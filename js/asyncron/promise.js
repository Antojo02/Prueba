//Usar promesas es una forma más limpia y legible de trabajar con código asíncrono en JavaScript
//Las promesas son objetos que representan el éxito o el fracaso de una operación asíncrona
//Las promesas tienen tres estados: pendiente, cumplida y rechazada
//Las promesas se crean con el constructor Promise y se resuelven con los métodos resolve y reject

//Ejemplo de promesa

function doHomework(subject) {
    console.log(`Starting my ${subject} homework.`);
    return new Promise(function(resolve, reject) {
        resolve('Finished my homework');
    });
}

doHomework('math').then(function(result) {
    console.log(result);
}); //Output: Starting my math homework. Finished my homework

//Ejemplo de promesa anidada

function doHomework(subject) {
    console.log(`Starting my ${subject} homework.`);
    return new Promise(function(resolve, reject) {
        resolve('Finished my homework');
    });
}   

function finishedHomework() {
    console.log('Finished my homework');
}   

doHomework('math').then(function() {
    return doHomework('science');
}).then(function() {
    return doHomework('history');
}).then(function() {
    finishedHomework();
}); //Output: Starting my math homework. Starting my science homework. Starting my history homework. Finished my homework
