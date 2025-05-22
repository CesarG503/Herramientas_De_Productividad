
const obj = {
  prop: "Propiedad 1",
  2: 2,
  "prop 3": [1,2,3],
  met: function() {
    console.log("Esta es mi acción")
  }
}

console.log(obj.met())


const estudiantes = {

    Estudiante:[{
        nombre: 'cesar',
        ciudad: "usulutan",
        notas: [1,2,3,4]
    },{
        nombre: 'juan',
        ciudad: "usulutan",
        notas: [1,2,3,4]
    },{
        nombre: 'miguel',
        ciudad: "usulutan",
        notas: [1,2,3,4]
    }

    ], Direccion: 'sanmiguel el salvador'
}


console.log(estudiantes.Estudiante[2].nombre) //acceder a ese valor 

//call back


async function obtener(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
}

obtener(2).then((result) => { //async await
    console.log(result);
});



const apiKey = "c84fbce10d6e031f9be2bda98b31623b"; // Reemplaza con tu nueva clave API

const lat = 13.4451; // ejemplo de latitud
const lon = -88.1822; // ejemplo de longitud

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;


fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error("Error al obtener el clima:", error.message);
  });


  //guardar el js de manera correra legible