let db;
let tabla = document.querySelector("#tabla > tbody")

function initDB(){
    let request = indexedDB.open("personas")
    request.onupgradeneeded = (e) =>{
        db = e.target.result;
        let store = db.createObjectStore("personas", {keyPath:"_id",autoincrement:false});
        store.createIndex("age","age",{unique:false})
        store.createIndex("name","name",{unique:false})
        store.createIndex("gender","gender",{unique:false})
        store.createIndex("email","email",{unique:true})
        store.createIndex("friends","friends",{unique:true})
    };

    request.onsuccess = (e) => {
        db = e.target.result;
        setData();
    }
}

async function addPersona(lista){
    let transaction = db.transaction(["personas"],"readwrite");
    let store = transaction.objectStore("personas");
    for(let i = 0; i < lista.length; i++)
    {
        store.add(lista[i]);
    }
    renderPersona();
}

async function getData(){ //ya 
    try{
        let data = await fetch("./database.json");
        return data.json();
    }
    catch(e){
        console.error(e);
    }
}

function setData(){
    getData().then( async (x) => {
        let list = []
        for(const item in x){
            let persona = {
                _id: x[item]["_id"],
                age:x[item]["age"],
                name: x[item]["name"],
                gender:x[item]["gender"],
                email:x[item]["email"],
                friends:x[item]["friends"]
            };

            // Desestructuración para obtener solo los campos necesarios
            const { _id, age, name, gender, email, friends } = x[item];
            let persona2 = { _id, age, name, gender, email, friends };
            list.push(persona2);
        }

        await addPersona(list);
    });
}

function clearTabla(){
    tabla.innerHTML = "";
}

function renderPersona(){
    clearTabla();
    let transaction = db.transaction(["personas"],"readwrite");
    let store = transaction.objectStore("personas");
    let request = store.openCursor();

    request.onsuccess = (e) => {
        let cursor = e.target.result;
        console.log(cursor);
        if(cursor){
            let persona = cursor.value;
            
            let fila = document.createElement("tr");
            let id = document.createElement("td");
            let nombre = document.createElement("td");
            let age = document.createElement("td");
            let gender = document.createElement("td");
            let friends = document.createElement("td");
            let email = document.createElement("td");

            id.innerText = persona["_id"];
            nombre.innerText = persona["name"];
            age.innerText = persona["age"];
            friends.innerText = persona["friends"];
            gender.innerText = persona["gender"];
            email.innerText = persona["email"];

            fila.appendChild(id);
            fila.appendChild(nombre);
            fila.appendChild(age);
            fila.appendChild(gender);
            fila.appendChild(email);
            fila.appendChild(friends);
            tabla.appendChild(fila)

            cursor.continue();
        }
    }
}


initDB();