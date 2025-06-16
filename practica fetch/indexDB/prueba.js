


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


function eliminar(id) {
    if (!db) {
        alert('Base de datos no inicializada');
        return;
    }
    const transaccion = db.transaction(['apiData'], 'readwrite');
    const store = transaccion.objectStore('apiData');
    const peticion = store.delete(id);
    
    peticion.onsuccess = () => {
        console.log(`Elemento borrado`);
    };

    peticion.onerror = (e) => {
        console.error(e);
    };
}


function editar(id, nuevaData) {
    const transaccion = db.transaction(['apiData'], 'readwrite');
    const store = transaccion.objectStore('apiData');
    const request = store.get(id);

    request.onsuccess = (e) => {
        const data = e.target.result;

        if (nuevaData && typeof nuevaData === 'object') {
            Object.assign(data, nuevaData);
        }

        const updateRequest = store.put(data);
        
        updateRequest.onsuccess = () => {
            console.log(`Elemento con ID id actualizado.`);
        };
        
        updateRequest.onerror = (e) => {
            console.error('Error al actualizar:', e);
        };
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
    
    transaccion.oncomplete = () => {
        console.log('Todos los datos fueron guardados exitosamente.');
    };
    transaccion.onerror = (e) => {
        console.error('Error al guardar los datos:', e);
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
        const data = e.target.result;
        
        data.forEach(item => {

            console.log(e)




        });
    };

    request.onerror = (e) => {
        console.error('Error al obtener los datos:', e);
    };
}
