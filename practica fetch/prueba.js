const url = 'https://jsonplaceholder.typicode.com';


async function main(){

    const result = await fetch(url + '/users');
    const data = await result.json();
    const data1 = data.slice(0,5)

    const ol = document.createElement('ol')

    data.forEach(element => {

        const li = document.createElement('li')
        li.innerText = element.name;

        ol.appendChild(li)
        
    });
    document.body.appendChild(ol)

}

main()


const button = document.createElement('button')
button.textContent = 'click'

const input = document.createElement('input')
input.placeholder = "Ingresar el nuevo Usuario";


document.body.appendChild(button)
document.body.appendChild(input)


button.addEventListener('click', ()=>{

    if(input.value.trim() === "")
        {
            alert('ingresa algun dato')
        }
    else{

        const ol = document.querySelector('ol');

        if(ol){
            const li = document.createElement('li')
            li.innerText = input.value;

            ol.appendChild(li)
        }
        input.value = '';
    }

});