

const apiKey = "c84fbce10d6e031f9be2bda98b31623b"; 

const lat = 13.48039; 
const lon = -88.17181; 

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;



const contenido = document.getElementById('contenido');




fetch(url)
  .then(response => {return response.json();})
  .then(data => {
    //console.log(data)

    console.log(data.coord.lat); 
    console.log(data.weather[0].description); 
    console.log(data.main.temp); 
    console.log(data.wind.speed); 
    console.log(data.sys.country); 
    console.log(data.name); 

    src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    const img = document.getElementById("img-clima");
    img.setAttribute('src',src)

    const titulo = document.createElement('h2');
    const temperatura = document.createElement('h1');

    const texto = document.createElement('p');

    titulo.innerText = data.name;
    temperatura.innerText = data.main.temp + ' C';

    texto.innerText = data.sys.country + "\n" + "";

    temperatura.className ="bg-warning-neon hover-neon estilo-brillo text-alert";

    contenido.appendChild(titulo);
    contenido.appendChild(temperatura);

  
  })