
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

