fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // convierte la respuesta a JSON
    .then(data => {
        console.log(data); // muestra los datos en la consola
        })
    .catch(error => {
        console.error('Error:', error); // maneja errores
        });

    
const url = 'https://bingoapi.p.rapidapi.com/us?cards=3';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7e321b6be5mshf2c69e7cb8cd906p10c305jsnc4c02e0472fc',
		'x-rapidapi-host': 'bingoapi.p.rapidapi.com'
	}
};

fetch(url, options)
.then(response => response.json())
.then(data => {
  console.log('Cartones generados:', data);
})
.catch(error => {
  console.error('Error al llamar a la API:', error);
});



const urlN = 'https://api.mockaroo.com/api/4d983ec0?count=5&key=6f962680';

fetch(urlN)
  .then(response => {
    if (!response.ok) throw new Error('Error en la API');
    return response; 
  })
  .then(data => {
    console.log("Datos recibidos:", data);
  })
  .catch(error => {
    console.error("Error al obtener datos:", error);
  });


const url2 = 'https://api.mockaroo.com/api/4d983ec0?count=25&key=6f962680';

fetch(url2)
  .then(response => {
    if (!response.ok) throw new Error('Error en la API');
    return response.text();
  })
  .then(data => {
    console.log("Datos recibidos de Mockaroo:", data);
  })
  .catch(error => {
    console.error("Error al obtener datos:", error);
  });




