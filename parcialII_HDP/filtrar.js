async function getData() 
{
    try{
        const result = await fetch('database.json')
        const data = await result.json();
        return data
    }catch(e){console.log(e)}
}


async function filtrar()
{
    const data = await getData();
    const filter = data.filter(e => e.tags.some(e => e === 'est')  ) // funcion filter con some y logica
    
    console.log(filter)

    const dataN = []

    const dataDestructurada = []

    data.forEach(e =>{
        const { _id, age, name, gender, email, friends } = e;
        let persona = { _id, age, name, gender, email, friends }
        dataDestructurada.push(persona)
    })

    console.log("########################")
    dataDestructurada.sort((a,b)=> a.age - b.age)
    console.log(dataDestructurada)
    console.log("########################")

    filter.forEach(e => 
    {
        const persona = {_id: e._id,
            age: e.age,
            name: e.name,
            gender: e.gender
        }
        dataN.push(persona)
        
    });

    dataN.sort((a,b)=> b.gender.localeCompare(a.gender))
    
    dataN.sort((a,b)=> {
        
        if(a.age === b.age){
            return a.name.localeCompare(b.name)
        }
        else{return a.age - b.age }
        
    })// ordenar alfabeticamente 

    console.log(dataN)

    return dataDestructurada;
}

let db; //creo la variable db
function initDB (){

    const request = indexedDB.open('personas',1) 

    request.onupgradeneeded = function(e){ //se ejecuta la primera ves que inicia la base 
        db = e.target.result //asignamos el resultado a db
        const store = db.createObjectStore("personas",{keyPath:"_id",autoincremental:false}) // creamos el objeto ocn el id 

        store.createIndex("age","age",{unique:false})
        store.createIndex("name","name",{unique:false})
        store.createIndex("gender","gender",{unique:false})
        store.createIndex("email","email",{unique:true})
        store.createIndex("friends", "friends",{unique: false})
    }

    request.onsuccess = function(e) //cuando la base esta creada o se inicializo ahora se ejecuta este metodo 
    {
        db = e.target.result
        setData()
    }

    request.onerror = function(){ console.log('error')}
}


async function setData()
{
    const data = await filtrar()

    const transaccion = db.transaction(['personas'],'readwrite')
    const store = transaccion.objectStore('personas')
   
    data.forEach(e=>{
        store.add(e)
    })

    render()
}

const tabla = document.querySelector('#Tabla > tbody')

function limpiarTabla(){tabla.innerHTML = ""}

function render()
{
    limpiarTabla();

    const transaccion = db.transaction(['personas'],'readonly');
    const store = transaccion.objectStore('personas');
    const request = store.openCursor();

    let personas = [];

    request.onsuccess = (e) => {
        const cursor = e.target.result;
        if(cursor){
            personas.push(cursor.value);
            cursor.continue();
        } else {
            // Ordenar por edad (puedes cambiar a otro campo si quieres)
            personas.sort((a, b) => a.gender.localeCompare(b.gender));

            personas.forEach(({ _id, age, name, gender, email, friends }) => {
                let tr = document.createElement('tr');
                [_id, age, name, gender, email, friends].forEach(valor => {
                    let td = document.createElement('td');
                    // Si friends es un array, lo mostramos como string
                    td.innerText = Array.isArray(valor) ? valor.join(", ") : valor;
                    tr.appendChild(td);
                });
                tabla.appendChild(tr);
            });
        }
    }
}

    
initDB()
