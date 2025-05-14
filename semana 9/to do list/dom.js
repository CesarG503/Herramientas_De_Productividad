const form = document.querySelector('form[role="search"]')

if(form){
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const input = form.querySelector('input');
        if (input.value.trim() != '')
        {
            let li = document.createElement('li')
            li.innerText = input.value;
            li.dataset.tarea = input.value;

            const ul = document.querySelector('ul[data-pendientes]')   
            ul.appendChild(li);

            const btn_delete = document.createElement('button')
            btn_delete.className = 'btn btn-danger p-2 ms-2';
            btn_delete.textContent = 'borrar'

            btn_delete.addEventListener('click', ()=>{
                li.remove();
            })


            const btn_change = document.createElement('button');
            btn_change.className = 'btn btn-success p-2 ms-2';
            btn_change.textContent = 'Editar'


            btn_change.addEventListener('click', function (e) {

                if(!li.querySelector('input'))
                {
                    let input_c = document.createElement('input')
                    input_c.type = 'text';
                    input_c.placeholder = 'Edita la tarea'
                    input_c.value = li.dataset.tarea
                    
                    li.insertBefore(input_c,btn_delete);
                }                

            });

            li.appendChild(btn_delete)
            li.appendChild(btn_change)

            input.value ='';            
        }
    }); 
}

const btn = document.querySelector('button[data-modo]');

if(btn)
    {
        btn.addEventListener('click', function (e) {
            document.body.classList.toggle('bg-dark')
            if(document.body.classList.contains('bg-dark')){
                btn.textContent = "MODO CLARO"
            }
            else{
                 btn.textContent = "MODO NOCHE"

            }
        });
    }