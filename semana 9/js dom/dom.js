
const body = document.body;

const btn = document.createElement("button");
btn.innerText = "click al boton";
btn.setAttribute('class', 'btn-danger');
btn.classList.add('btn');


btn.addEventListener('click', () => {
    
    if(body.classList.contains('bg-primary'))
    {
        body.classList.remove('bg-primary')
        body.classList.add('bg-secondary')
    }else{
        body.classList.add('bg-primary')
        body.classList.remove('bg-secondary')

    }

});

body.appendChild(btn);

// nuevo DOM
//document object model

//selectores

const titulo = document.getElementById('titulo-h1');

const tituloQ = document.querySelector('.titulo'); //selecciona la primera coinsidencia 

titulo.innerText = " hola";

tituloQ.innerHTML = '<p class="text-white-neon">¿Cómo estás?</p>';

const p_adentro = document.querySelectorAll('.titulo > p'); //All devuelve un arreglo de todas las conincidencias

p_adentro.forEach((p) =>{
    p.innerText = "¡Estoy bien!";
})

if (p_adentro.length > 0) {
    p_adentro[0].innerText = "!OMG!"; //acceder al primer valor
}

const ul = document.querySelector('.list'); //selecciono a al contenedo lu 
const lista = document.querySelectorAll('.list > li'); // estoy seleccionando los li dentro de lu

let li_nuevo = document.createElement('li');
li_nuevo.innerText = 'NICE';

ul.appendChild(li_nuevo); //creamos un li y se lo agregamos a lu

lista.forEach((item) => {
    item.innerText = "hola";
});

