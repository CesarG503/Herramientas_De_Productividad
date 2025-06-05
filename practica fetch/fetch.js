

const link = 'https://jsonplaceholder.typicode.com/users';


fetch(link).then(res => res.json()).then( data =>{

    //console.log(data);
});


async function funcion(){ //Funcion asincrona

    const result = await fetch(link); // esperar a que se ejecute 
    const data = await result.json();
    return data;
}


funcion().then(data => {
    //console.log(data); // Aquí tienes el JSON
});

async function main(){


    const data = await funcion();

    console.log(data)
    
}

main()