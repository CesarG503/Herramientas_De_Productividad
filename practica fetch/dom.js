
const url = 'https://jsonplaceholder.typicode.com/users';
async function obtener() {
        

        const rest = await fetch(url);
        const data = await rest.json();
        console.log(data);

        data.forEach(e => {

            const div = document.createElement('div')

            div.innerText =  e.name;

            document.body.appendChild(div);
            
        });
}
obtener()
