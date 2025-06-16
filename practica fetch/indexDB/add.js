const url = 'https://6841c230d48516d1d35cc9e1.mockapi.io/monchoapi/data'

let db;

function iniciar_db() {
    const request = indexedDB.open('apiDataDB', 1);

    request.onupgradeneeded = (e) => {
        db = e.target.result;
        if (!db.objectStoreNames.contains('apiData')) {
            db.createObjectStore('apiData', { keyPath: 'id' });
        }
    };

    request.onsuccess = (e) => {
        db = e.target.result;
    };
    request.onerror = (e) => {
        console.error('error inesperado', e);
    };

}

function guardarTodosEnDB(datos) {
    if (!db) {
        alert('Base de datos no inicializada');
        return;
    }
    const transaccion = db.transaction(['apiData'], 'readwrite');
    const store = transaccion.objectStore('apiData');
    datos.forEach(obj => {
        store.put(obj);
    });
}

function eliminar(id) {
    if (!db) {
        alert('Base de datos no inicializada');
        return;
    }
    const transaccion = db.transaction(['apiData'], 'readwrite');
    const store = transaccion.objectStore('apiData');
    const peticion = store.delete(id);
}

function editar(id, nuevaData ) {
    const transaccion = db.transaction(['apiData'], 'readwrite');
    const store = transaccion.objectStore('apiData');
    const request = store.get(id);

    request.onsuccess = (e) => {
        const data = e.target.result;

        if (nuevaData && typeof nuevaData === 'object') {
            Object.assign(data, nuevaData);
        }
        const updateRequest = store.put(data);
    };
    request.onerror = (error) => {
        console.error(error);
    };
}

function agregarNuevo(nuevoDato) {
    if (!db) {
        alert('Base de datos no inicializada');
        return;
    }
    const transaccion = db.transaction(['apiData'], 'readwrite');
    const store = transaccion.objectStore('apiData');
    const request = store.add(nuevoDato);
    request.onsuccess = () => {
        console.log('Nuevo dato agregado:', nuevoDato);
    };
    request.onerror = (error) => {
        console.error('Error al agregar nuevo dato:', error);
    };
}


function render() {
    if (!db) {
        alert('Base de datos no inicializada');
        return;
    }
    const transaccion = db.transaction(['apiData'], 'readonly');
    const store = transaccion.objectStore('apiData');
    const request = store.getAll();

    request.onsuccess = (e) => {
 
        data.forEach(e => {

        });      
    };
    const data = e.target.result;
    return data;
}


function render2() {
    if (!db) {
        alert('Base de datos no inicializada');
        return;
    }
    const transaccion = db.transaction(['apiData'], 'readonly');
    const store = transaccion.objectStore('apiData');
    const request = store.getAll();

    request.onsuccess = (e) => {
        const data = e.target.result;
        
        data.forEach(item => {

            console.log(item)

        });
    };

    request.onerror = (e) => {
        console.error('Error al obtener los datos:', e);
    };
}




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

    // Botón para guardar todos en IndexDB
    let oldBtn = document.getElementById('guardar-todos-btn');
    if (oldBtn) oldBtn.remove();
    const btn = document.createElement('button');
    btn.id = 'guardar-todos-btn';
    btn.innerText = 'Guardar todos en IndexDB';
    btn.onclick = () => guardarTodosEnDB(data);
    document.body.appendChild(btn);


    //usa ejemplo de editar en un boton
    let oldEditBtn = document.getElementById('editar-btn');
    if (oldEditBtn) oldEditBtn.remove();
    const editBtn = document.createElement('button');
    editBtn.id = 'editar-btn';
    editBtn.innerText = 'Editar un elemento';

    editBtn.onclick = () => {render2()
        editar('10', { name: 'cesar' });
    };
    document.body.appendChild(editBtn);


    return data;
}

load()
// Inicializar la base de datos al cargar el script
iniciar_db();

