const urlRand = "https://api.random.org/json-rpc/4/invoke";

const body = {
  jsonrpc: "2.0",
  method: "generateIntegers",
  params: {
    apiKey: "54a01d43-1020-41aa-a4a4-50fcf9370ec3",
    n: 25,
    min: 1,
    max: 100,
    replacement: false
  },
  id: 1
};

fetch(urlRand, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
})
  .then(response => response.json())
  .then(data => {
    const numeros = data.result.random.data;
    console.log("Números aleatorios únicos:", numeros);
    
    const carton = [];
    while (numeros.length) carton.push(numeros.splice(0, 5));
    console.table(carton);
  })
  .catch(error => console.error("Error al obtener los números:", error));
