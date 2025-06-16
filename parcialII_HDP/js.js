
console.log('si')


async function getData() // todos los async devuelven una promesa 
{
    try {
        const result = await fetch('./database.json')
        const data = await result.json()
        return data;
    }
    catch (e) { console.log(e) }
}

getData().then(data => {
    console.log(data)

    const lista = []

    lista.push({
        hola: '2', edad: 3, "friends": [
            {
                "id": 0,
                "name": "Roman Warner"
            },
            {
                "id": 1,
                "name": "Roy Harper"
            },
            {
                "id": 2,
                "name": "Tucker Hammond"
            }
        ],
        "check": {
                "id": 0,
                "name": {name: 100}
                }
    })

    lista[0].friends[0].name = "cesar";
    const amigo = lista[0]["friends"]['name']
    console.log(amigo)

    console.log(lista[0].check.name.name)

    console.log(`acceso : `+ `${lista[0].check.name.name}` )

    //lista[0] = { hola: '5', edad: lista[0].edad }
    console.log(lista)

    lista.forEach((e)=>{
        console.log(e.hola)

        e.friends.forEach(amigos =>{

            console.log(amigos.name)

        })
    })

    console.log('---------------------------------\n')

    const roy = lista.filter(e => e.friends.some(i => i.name ==="Roy Harper"));
    const id = lista.filter(e=> e.friends.some(e => e.id === 1))
    const is = lista.filter(e => e.friends.filter(e => e.name === "Roy Harper"))


    console.log(is);


})
