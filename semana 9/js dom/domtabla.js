import '../../dist/js/retrosci-fi.js';

export function insert_Row(){
    const table = document.getElementById("sampleTable");

    let fila = document.createElement('tr');
    let col = document.createElement('td');
    let col_2 = document.createElement('td');

    col.innerText="nueva columna";
    col_2.innerText="nueva columna";
    fila.appendChild(col);
    fila.appendChild(col_2);

    table.appendChild(fila);
    
    Alertas.crearAlerta({
        titulo:'hola',
        mensaje: 'si',
        tipo: 'success'
    });
}

function crearFila()
{
    const tabla = document.getElementById('sampleTable');

    let fila = tabla.insertRow();
    let col = fila.insertCell(0);
    let col2 = fila.insertCell(1);

    col.innerText = "nueva columna";
    col2.innerText = "nueva columna";
}

const btn = document.querySelector('input');

btn.addEventListener('click', insert_Row); //solo el nombre pasa la funcion como referencia 

window.insert_Row = insert_Row;

window.crearFila = crearFila;
