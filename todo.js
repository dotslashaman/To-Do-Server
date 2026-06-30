const express = require("express");
const app = express();
app.use(express.json());

let taskId = 1;

const toDoList = [];

app.get('/upTime', (req,res) => {
    res.status(200).send("Server is up");
});

app.post('/addToDo', (req,res) => {

    const todoHeader = req.body.title;
    const todoDesc = req.body.description;
    const status = req.body.comp;

    const data = {
        "id" : taskId,
        "title" : todoHeader,
        "description" : todoDesc,
        "status" : false
    }

    if(toDoList.push(data)) {
        return res.status(201).send("Task Added To The List");
    }
     
    res.status(500).send("Error with the server");

});


app.get('/showList', (req,res) => {
    res.status(200).send(toDoList);
})


app.listen(3000, () => {
    console.log("Server is up and listening");  
})