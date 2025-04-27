import '../../dist/js/retrosci-fi.js';
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

const lista_p_adentro = document.querySelectorAll('.titulo > p'); //All devuelve un arreglo de todas las conincidencias

lista_p_adentro.forEach((p) =>{
    p.innerText = "¡Estoy bien!";
})

if (lista_p_adentro.length > 0) {
    lista_p_adentro[0].innerText = "!OMG!"; //acceder al primer valor
    lista_p_adentro[0].classList.add("bg-primary"); // classList
}

const ul = document.querySelector('.list'); //selecciono a al contenedo lu 
const lista = document.querySelectorAll('.list > li'); // estoy seleccionando los li dentro de lu

let li_nuevo = document.createElement('li');
li_nuevo.innerText = 'NICE';

ul.appendChild(li_nuevo); //creamos un li y se lo agregamos a lu

lista.forEach((item) => {
    item.innerText = "hola";
});

lista[0].style.background = "#ffcc00"; // propiedad estyle 
lista[0].style.color = "black";


ul.removeChild(lista[0]); // se remueve un elemento siempre el padre lyego el hijo


//eventos

let btn_nuevo = document.createElement('button');
btn_nuevo.innerText = "CLICK";
btn_nuevo.classList.add("btn", "btn-warning", "p-3","btn-efect", "m-2", "bg-warning-neon");


let label = document.createElement('label');
label.innerText = "Ingresa tu mensaje:";
label.setAttribute('for', 'input-mensaje');


let input = document.createElement('input'); //input
input.setAttribute('type', 'text');
input.setAttribute('id', 'input-mensaje');
input.setAttribute('placeholder', 'Escribe aquí...');

input.placeholder = "como estan";
input.type ="text";

body.appendChild(label);
body.appendChild(input);

body.appendChild(btn_nuevo)

//funcion call back
//funcion como tal 
btn_nuevo.addEventListener("click", ()=>
    {
        Alertas.crearAlerta({
            titulo:'hola',
            mensaje: input.value,
            tipo: 'success'
        });
        input.value ="";
});

//creacion de funcion

function mensaje(mensaje){};

//agrega items a una lista de manera dinamica

const itemList = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
const listaDinamica = document.getElementById('listaDinamica');


addButton.addEventListener("click", () => {
    if (itemList.value.trim() != "") { //funcion trim()
        let li = document.createElement('li');
        li.innerText = itemList.value;

        const btn_item = document.createElement('button');
        btn_item.innerText ="borrar item";
        btn_item.classList.add('btn','btn-danger','btn-efect', 'pd-2', 'm-2');

        btn_item.addEventListener('click', () => {
            listaDinamica.removeChild(li);
        });

        li.appendChild(btn_item);
        listaDinamica.appendChild(li);

        itemList.value ="";
    }
});

deleteButton.addEventListener("click", () => {
    let items = listaDinamica.querySelectorAll('li'); // Select all 'li' elements inside listaDinamica
    if (items.length > 0) {
        listaDinamica.removeChild(items[items.length - 1]); // Remove the last item
    }
});

const inputFilter = document.getElementById('filtrador');
const listaN = document.querySelector('.list-d');

inputFilter.addEventListener("keyup", () => {

    const busqueda = inputFilter.value.toLowerCase();
    const items = listaN.querySelectorAll('li');

    items.forEach((item) => {
        if(item.textContent.toLowerCase().indexOf(busqueda) != -1) {// funcion index of
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

});



const dragabble = document.getElementById('arrastrable');
const zona = document.getElementById('zona');


dragabble.addEventListener('dragstart', (event)=>
{
    setTimeout(() => { //funcion de tiempo
        dragabble.style.display = 'none';     
    }, 0);       
});

zona.addEventListener('dragover', (event)=>
    {
        event.preventDefault();     
});


zona.addEventListener('drop', (event)=>
{
    dragabble.style.display = 'block';     

    zona.appendChild(dragabble);
});