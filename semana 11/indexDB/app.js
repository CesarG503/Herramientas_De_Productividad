/**
 * Ejemplo completo de uso de IndexedDB en el navegador.
 * Incluye: crear base de datos, agregar, leer, actualizar, borrar y listar datos.
 */

// 1. Abrir (o crear) la base de datos
const request = indexedDB.open('MiBaseDeDatos', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    // Crear un almacén de objetos (object store)
    if (!db.objectStoreNames.contains('usuarios')) {
        db.createObjectStore('usuarios', { keyPath: 'id', autoIncrement: true });
    }
};

request.onsuccess = function(event) {
    const db = event.target.result;

    // 2. Agregar datos
    function agregarUsuario(usuario) {
        const tx = db.transaction('usuarios', 'readwrite');
        const store = tx.objectStore('usuarios');
        store.add(usuario);
        tx.oncomplete = () => console.log('Usuario agregado');
    }

    // 3. Leer un dato por clave
    function leerUsuario(id) {
        const tx = db.transaction('usuarios', 'readonly');
        const store = tx.objectStore('usuarios');
        const req = store.get(id);
        req.onsuccess = () => console.log('Usuario leído:', req.result);
    }

    // 4. Actualizar un dato
    function actualizarUsuario(usuario) {
        const tx = db.transaction('usuarios', 'readwrite');
        const store = tx.objectStore('usuarios');
        store.put(usuario);
        tx.oncomplete = () => console.log('Usuario actualizado');
    }

    // 5. Borrar un dato
    function borrarUsuario(id) {
        const tx = db.transaction('usuarios', 'readwrite');
        const store = tx.objectStore('usuarios');
        store.delete(id);
        tx.oncomplete = () => console.log('Usuario borrado');
    }

    // 6. Listar todos los datos
    function listarUsuarios() {
        const tx = db.transaction('usuarios', 'readonly');
        const store = tx.objectStore('usuarios');
        const req = store.openCursor();
        req.onsuccess = function(event) {
            const cursor = event.target.result;
            if (cursor) {
                console.log('Usuario:', cursor.value);
                cursor.continue();
            } else {
                console.log('No hay más usuarios');
            }
        };
    }

    // Ejemplo de uso:
    agregarUsuario({ nombre: 'Juan', edad: 30 });
    agregarUsuario({ nombre: 'Ana', edad: 25 });

    setTimeout(() => {
        listarUsuarios();
        leerUsuario(1);
        actualizarUsuario({ id: 1, nombre: 'Juan Actualizado', edad: 31 });
        borrarUsuario(2);
        setTimeout(listarUsuarios, 1000);
    }, 1000);
};

request.onerror = function(event) {
    console.error('Error al abrir IndexedDB', event.target.errorCode);
};