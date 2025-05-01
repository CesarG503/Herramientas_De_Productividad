

function getOptions()
{

    const select = document.getElementById('mySelect');

    const Noptions = select.querySelectorAll('option');


    const div = document.createElement('div');
    div.className = 'bg-primary';

    let N = 0;

    for (const key in Noptions) {
        if (Object.prototype.hasOwnProperty.call(Noptions, key)) {
            const element = Noptions[key];
            div.textContent += element;
        }
    }

    let cantidad = 0;

    for (const element of Noptions) {
        cantidad +=1;
    }

    Noptions.forEach(e => { N = N +1;}); 


    alert("Hay de Opciones " + cantidad );
    document.body.appendChild(div);
}



function removecolor()
{
    const select = document.getElementById('colorSelect');

    const options = select.querySelectorAll('option');

    options.forEach(e =>{
        alert(e.textContent)
        //select.removeChild(e)
        //select.remove(e)
    })

    select.remove(options[0]);

    alert( select.length );

    if( select.length == 2)
        {
            const button = document.querySelector("input[value='Select and Remove']");// seleccionar por atributo
            if(button)
                {
                    button.remove(); // se elimina el mismo 
                    alert('ya')
                }
        }
}