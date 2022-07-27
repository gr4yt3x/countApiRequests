const express = require("express");
const app = express();


users = [
    {
        name: "junior",
        id: 1,
        numReq: 0 
    },
    {
        name: "matheus",
        id: 2,
        numReq: 0 
    },
    {
        name: "oliver",
        id: 3,
        numReq: 0 
    },

];

const countReq = (userId) => {
    foundUser = users.find((user) => user.id == userId);
    if(foundUser != undefined){
        foundUser.numReq++ ;
        return "ok"
    }
        
}



app.get('/',(req,res) => {
    res.send(users);
})

app.get('/endpoint/:id',(req,res) => {
    let id = Number(req.params.id);
    
    //se for um número
    if(Number.isInteger(id)){
        
        if(countReq(id) == "ok"){
            res.send("your request has been counted");
        }
        else{
            res.send("value not found")
        }
    }
    else{
        res.send("value not found");
    }
    
})


app.use((req,res) => {
    res.status(404);
    res.send("not found");
});

app.listen('3000', () => console.log("servidor ligado na porta 3000"))