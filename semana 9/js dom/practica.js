
const form = document.getElementById('form1');
const body = document.body;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let nombre = form.elements['fname'].value;
    let apellido = form.elements['lname'].value;

    const parrafo = document.createElement('p'); // ← document.createElement
    parrafo.innerText = nombre + ' ' + apellido;  // Mostrar nombre y apellido

    body.appendChild(parrafo); // ← document.body
});


const btn = document.createElement('button');
btn.innerText="click";
btn.classList.add('btn', 'btn-danger');

body.appendChild(btn);