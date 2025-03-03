Cuando solicitamos datos al servidor podemos entender el proceso como :

1) Solicitud (`Enviamos un petición`)
2) Respuesta (`Nos responde si la solicitud ha sido procesada o no`)
    2.1) "Ha sido procesada", nos tiene que "responder/dar" lo que solicitamos
    2.2) "Ha sido rechazada", solo nos entrega el "código" del error o respuesta

3) Los datos recibidos, tienen un `formato` que hay que "manipular", en el caso que 1 y 2 sea correcto, el problema está en 
cómo manipulamos los datos.


Analicemos Fetch para saber que hace,
fetch tiene un objeto asociado a su funcionamiento que es `Response`
-----------------------
Response {
  status: 200,
  statusText: 'OK'
 [...]
  url: 'https://reqres.in/api/users?page=2'
}
---------------------------

`8===B` <-- Esto es un pene!

Después del pene viene lo transformado por el método del objeto Response [Response.JSON] 


Si ya entendemos Cuándo, Como y qué obtenemos como respuesta ahora solo quedará aprender a "Manipular un JSON"