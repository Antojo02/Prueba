//async await es una forma de escribir código asíncrono de manera más clara y legible
//async await es una forma de trabajar con promesas en JavaScript
//async await hace que el código asíncrono se vea más como código síncrono
//async await hace que el código sea más fácil de leer y mantener

//Ejemplo de async await

function doHomework(subject) {
    console.log(`Starting my ${subject} homework.`);
    return Promise.resolve('Finished my homework');
}

async function homework() {
    try {
        let result = await doHomework('math');
        console.log(result);
    } catch(error) {
        console.log(error.message);
    }
}

homework(); //Output: Starting my math homework. Finished my homework

//Ejemplo de async await anidado

function doHomework(subject) {
    console.log(`Starting my ${subject} homework.`);
    return Promise.resolve('Finished my homework');
}

function finishedHomework() {
    console.log('Finished my homework');
}

async function homework() {
    try {
        await doHomework('math');
        await doHomework('science');
        await doHomework('history');
        finishedHomework();
    } catch(error) {
        console.log(error.message);
    }
}

homework(); //Output: Starting my math homework. Starting my science homework. Starting my history homework. Finished my homework

// Ejemplo de async await con throw

function doHomework(subject) {
    console.log(`Starting my ${subject} homework.`);
    return Promise.reject(new Error('Failed to do homework'));
}

async function homework() {
    try {
        let result = await doHomework('math');
        console.log(result);
    } catch(error) {
        console.log(error.message);
    }
}

homework(); //Output: Starting my math homework. Failed to do homework

// Ejemplo de async await con resolve y reject

function doHomework(subject) {
    console.log(`Starting my ${subject} homework.`);
    return Promise.resolve('Finished my homework');
}

async function homework() {
    try {
        let result = await doHomework('math');
        console.log(result);
        throw new Error('Failed to do homework');
    } catch(error) {
        console.log(error.message);
    }
}

homework(); //Output: Starting my math homework. Finished my homework. Failed to do homework

