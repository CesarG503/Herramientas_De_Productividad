const url = 'https://6841c230d48516d1d35cc9e1.mockapi.io/monchoapi/data'

async function load() {
    const result = await fetch(url)
    const data = await result.json()
    

    console.log(data);

    
    let oldOl = document.querySelector('ol');
    if (oldOl) {oldOl.remove();}

    const ol = document.createElement('ol');
    data.forEach(e => {
        const li = document.createElement('li');
        li.innerText = e.name;

        const del = document.createElement('button')
        del.innerText = 'Eliminar';

        del.onclick = ()=> {eliminar(e.id)};



        const edit = document.createElement('button')

        edit.innerText = 'Editar'

        edit.onclick = ()=>{ editar(e.id)}

        li.append(del,edit)

        ol.appendChild(li);
    });

    document.body.appendChild(ol);
    return data;
}






async function eliminar(id){

    const result = await fetch(url+ `/${id}`, {method:'DELETE'})
    load()
}

async function editar(id){

    data = {name:'hugo'}

    const option = {
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    const result = await fetch(url+`/${id}`,option)
    load()

    
}

async function post() {   
    const data = await load(); // usar await 
    const select = {...data[0]};
    
    delete select.id;

    const opciones = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(select)
    };

    const result = await fetch(url, opciones);
}



const buton = document.querySelector('button')

const nuevo = document.createElement('button')
nuevo.innerText = 'recargar';


nuevo.addEventListener('click', () => {load()});

document.body.appendChild(nuevo)


buton.addEventListener('click',()=>{
    post()
    load()
})




const buscador = document.createElement('input')
buscador.placeholder = 'busca la persona'



buscador.oninput = ()=>{
    const lista = document.querySelector('ol');
    const items = lista ? lista.querySelectorAll('li') : [];
    const busqueda = buscador.value.toLocaleLowerCase().trim()
    
    items.forEach(e => 
        {
            const itemTxt = e.textContent.toLocaleLowerCase()
            const f = itemTxt.replace('eliminareditar', '')
            e.style.display = f.includes(busqueda)? '':'none';             
        });

}



document.body.append(buscador)




let db;

function iniciar_db(){

    const guardar = document.getElementById('button')

    guardar.onclick = ()=>{ guardar()}


    const request = indexedDB.open('datos') 

    request.addEventListener('error', error)
    request.addEventListener('success', start)
    request.addEventListener('upgradeneeded', crear_db)
}

function start(evento)
{
    db = evento.target.result;
}

function error(evento)
{
    alert('error')
}

function crear_db(evento)
{
    var db = evento.target.result;
    var almacen = db.createObjectStore('Contactos', {keyPath: 'id'})
    almacen.createIndex('BuscarNombre','nombre',{unique:false})
}

 
async function guardar(evento) 
{
    const datos = await load();

    const N = datos[0].name
    const I = datos[0].id
    const E = datos[0].goti

    
}

window.addEventListener('load', iniciar_db())




















