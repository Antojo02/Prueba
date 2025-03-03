fetch('https://reqres.in/api/users?page=2')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(response);
        console.log("8===B"); // Busca el pene en la consola para distinguir entre "response" y "data"
        return response.json(); // método que convierte la respuesta en un objeto JSON
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });