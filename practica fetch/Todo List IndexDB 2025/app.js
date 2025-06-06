let db;
const dbName = "todoDB";

const request = indexedDB.open(dbName, 1);

request.onupgradeneeded = (e) => {
    db = e.target.result;
    const store = db.createObjectStore("tasks", {keyPath: "id", autoIncrement: true});  // ObjectStore
    store.createIndex("content", "content", {unique: false});
};

request.onsuccess = (e) => {
    db = e.target.result;
    renderTasks();
};

request.onerror = (e) => {
    console.error("Error al abrir/crear IndexDB:", e.target.errorCode);
};

document.getElementById("todo-form").addEventListener("submit", addTask);
document.getElementById("search").addEventListener("input", renderTasks);

function addTask(e) {

    e.preventDefault();
    const input = document.getElementById("new-task");
    const content = input.value.trim();

    if (content === "") return

    // nueva transaccion
    const transaction = db.transaction(["tasks"], "readwrite");
    const store = transaction.objectStore("tasks");
    store.add({content});

    transaction.oncomplete = () => {
        input.value = "";
        renderTasks();
    }
}

// ELIMINAR

function deleteTask(id) {
    const transaction = db.transaction(["tasks"], "readwrite");
    const store = transaction.objectStore("tasks");

    store.delete(id);

    transaction.oncomplete = () => {
        renderTasks();
    }
}

//RENDER



function renderTasks() {
    
    const ul = document.getElementById("todo-list");
    ul.innerHTML = "";

    const searchText = document.getElementById("search").value.toLowerCase();

    const transaction = db.transaction(["tasks"], "readonly");
    const store = transaction.objectStore("tasks");
    const request = store.openCursor();

    request.onsuccess = (e) => {
        const cursor = e.target.result;

        if (cursor) {
            
            const task = cursor.value;

            // filtrando segun texto ingresado
            if (task.content.toLowerCase().includes(searchText)) { // ""
                const li = document.createElement("li");
                li.className = "list-group-item d-flex justify-content-between align-items-center";
                li.textContent = task.content;

                const delbtn = document.createElement("button");
                delbtn.textContent = "Eliminar";
                delbtn.className = "btn btn-danger btn-sm";
                delbtn.onclick = () => deleteTask(task.id);

                li.appendChild(delbtn);
                ul.appendChild(li);
            }

            cursor.continue(); // va al siguiente elemento

        }
    }

}