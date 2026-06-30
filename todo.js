const express = require("express");
const app = express();
app.use(express.json());

let taskId = 0;

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
        taskId++;
        return res.status(201).send("Task Added To The List");
    }
     
    res.status(500).send("Error with the server");

});

app.post('/updateToDo/:id', (req,res) => {

    const taskId = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    

    const findTask = toDoList.find(task => task.id == taskId);

    if(!findTask) {
        return res.status(400).send("Task Not Found");
    }

    findTask.status = true;
    findTask.title = title;
    findTask.description = description;

    res.status(200).send("Task Updated Successfully");


});

app.delete('/deleteTask/:id', (req,res) => {
    const taskId = req.params.id;
    const taskIndenx = toDoList.findIndex(task => task.id == taskId)
    if(toDoList.splice(taskIndenx,1)){
        return res.status(200).send("Task Delted Successfully");
    };

    res.status(400).send("Invalid Task Id");
})


app.get('/showList', (req,res) => {
    res.status(200).send(toDoList);
})


app.listen(3000, () => {
    console.log("Server is up and listening");  
})