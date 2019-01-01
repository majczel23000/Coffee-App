var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const usersCollection = db.collection('users');
const ordersCollection = db.collection('orders');

var app = express();
app.use(cors());

app.set('port', process.env.port || 3000);
app.use(bodyparser.json());
app.get('/', (req, res) => {
    res.send('hello');
})

// pobierz wszystkie zamówienia
app.get('/orders', (req, res, next) => {
    console.log("get orders");
    let allOrders = [];
    ordersCollection.get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            allOrders.push(doc.data());
        });
        res.json({
            "success" : true,
            "message" : "List of all orders",
            "data" : allOrders
        })
    })
    .catch(err => {
        console.log("Error");
    })  
});

// zarejestruj nowego użytkownika
app.post("/users", (req, res, next) =>{
    console.log("post users");
    if(req.body != null) {
        let docId = Math.floor(Math.random() * (99999 - 00000));
        let newUser = {
            "firstName" : req.body.firstName,
            "lastName" : req.body.lastName,
            "username" : req.body.username
        }
        let setNewUser = usersCollection.doc(String(docId)).set(newUser);
        res.json({
            "success" : true,
            "message": "user succesfully added"
        })
    } else {
        res.json({
            "success" : false,
            "message": "req.body empty"
        })
    }
})

// dodaj zamówienia
app.post("/orders", (req, res, next) =>{
    console.log("post orders");
    if(req.body != null) {
        for(let i = 0; i < req.body.length; i++) {
            let docId = Math.floor(Math.random() * (99999 - 00000));
            let newOrder = {
                "kitchen" : req.body.kitchen,
                "user" : req.body.user,
                "date" : req.body.date,
                "coffee" : req.body.selectedCoffes[i].name
            }
            let setNewOrder = ordersCollection.doc(String(docId)).set(newOrder);
        }
        res.json({
            "success" : true,
            "message": "orders succesfully added"
        })
    } else {
        res.json({
            "success" : false,
            "message": "req.body empty"
        })
    }
})

app.listen(app.get('port'), function(err, response){
    console.log("Server is running on port:", app.get('port'));
});
 
