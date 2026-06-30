const express = require("express");
const app = express();

const store = [];


app.get('/test', (req,res) => {
    res.status(200).send("you hit the test endpoint");
});


app.post('/pushData', (req,res) => {
    const data = req.query.testData;
    if(store.push(data)){
        console.log("Data pushed");
        console.log(store);
        return res.status(201).send("done");
        
    };
     res.status(400).send("Not Pushed");
    

});

app.get('/getData', (req,res) => {
    if(store.length > 0){
        return res.status(200).send(store);
    }
    res.send(200).send("No Data Found");
})



app.listen(3000,() => {
    console.log("Server is up on port 3000");
})

