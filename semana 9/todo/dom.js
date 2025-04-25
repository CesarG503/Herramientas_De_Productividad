const form = document.querySelector('[role="search"]'); 
const data = document.querySelector('[data-pendientes]'); 
const modoBtn = document.querySelector('[data-modo]'); 
const body = document.body;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let input = tarea_input.value;

    if (input.trim() === "") {
        return;
    }

    let tarea = document.createElement("li");
    tarea.classList.add("list-group-item"); 
    tarea.innerText = input;

    data.appendChild(tarea);
    tarea_input.value = "";
});

modoBtn.addEventListener('click', () => {
    body.classList.toggle('btn-noche'); 
    modoBtn.textContent = body.classList.contains('modo-noche') ? 'Light' : 'Dark';
});