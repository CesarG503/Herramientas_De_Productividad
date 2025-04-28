

function removecolor()
{
    const select = document.getElementById('colorSelect');
    const input_option = document.getElementById('input-option');

    if(select.value != '') //selecciona el valor seleccionado la option 
        {
            alert(select.value);
            select.remove(select.value.text);
        }
    if(input_option.value.trim() != '')
        {
            let nueva = document.createElement('option');

            nueva.innerText = input_option.value;

            select.appendChild(nueva);

            input_option.value = '';
        }

    select.value = '';
    
    //option maneras de interactuar
    select.add(new Option('texto'),0) //agregar otro opcion (opcion nueva, posicion)
    console.log(select[0]); // seleccion de una opcion por el indice
    select.value = "no existe"; // si no existe no selecciona nada 
    console.log(select.options[2]); //selecciona una opcion 
    console.log(select.selectedIndex) // devuelve el indice que esta seleccionado

    //select.innerHTML =""; borrar todo

}

const body = document.body;
const inputString = document.createElement('input');
const btnString = document.createElement('button');

inputString.placeholder = 'escribe el cambio';
btnString.textContent = 'cambio';

body.appendChild(inputString);
body.appendChild(btnString);


btnString.addEventListener('click',()=>
    {
        const select = document.getElementById('colorSelect');
        if(select.selectedIndex != -1)
            {
                if(inputString.value.trim() != '')
                    {
                        select.options[select.selectedIndex].text = inputString.value;
                        inputString.value = '';
                    }
            }
    });