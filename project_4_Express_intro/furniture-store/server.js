const express = require('express');
const { Server } = require('http');
const app = express();
const path = require('path');

//Exercise 1:
// app.get('/', function(request, response) {
//     console.log('Route is working');
//     response.send('Server is up and running smoothly');
// })


//Exercise 2:
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
];

app.get('/priceCheck/:name', function(request, response) {
    console.log('price route is working');
    const checkName = store.find(s => s.name === request.params.name);
    checkName ? response.send(`{price: ${checkName.price}}`) : response.send('{price: null}');
})

//Exercise 3:
app.use(express.static(path.join(__dirname, 'dist')));

// //exercise 4:
// app.get('/buy/:name', function(request, response) {
//     console.log(`sombody's buying...`);
//     const checkName = store.find(s => s.name === request.params.name);
//     if (!checkName || checkName.inventory <= 0) {
//         response.send(`we are sorry. currently we don't have it.`);
//         return
//     } 
//     checkName.inventory--;
//     console.log(`sombody bought ${request.params.name}. current inventory: ${checkName.inventory}`);
//     response.send(`you bought ${request.params.name}. current inventory: ${checkName.inventory}`);
// })

// Exercise 5:
app.get('/buy/:name', function(request, response) {
    console.log(`sombody's buying...`);
    const checkName = store.find(s => s.name === request.params.name);
    if (!checkName || checkName.inventory <= 0) {
        response.send(`we are sorry. currently we don't have it.`);
        return
    } 
    checkName.inventory--;
    console.log(`sombody bought ${request.params.name}. current inventory: ${checkName.inventory}`);
    response.send(`Congratulations, you've just bought ${request.params.name} for ${checkName.price}. There are ${checkName.inventory} left now in the store.`);
})

const port = 3000;
app.listen(port, function() {
    console.log(`Runing server on port ${port}`);
})