const express = require('express')
const app = express();
const path = require('path')

const ruta= path.join(__dirname, 'assets')
console.log(ruta);
app.use(express.static(ruta))


const usuarios = ['Sara', 'Pedro', 'Juan'];

app.get("/usuarios", (req, res)=>{
    
    res.json(usuarios) 
    
})

app.get("/abracadabra/juego/:username", (req, res)=>{
    // console.log(req.params);
    const {username} = req.params
    const isIncluded = usuarios.includes(username)
    //console.log(isIncluded);
    
    return !isIncluded ? res.redirect('/who.jpeg'): res.sendFile(path.join(__dirname, 'index.html'))
   
})

app.get('/abracadabra/conejo/:n', (req, res)=>{
    const n = req.params.n
    const winner = Math.floor(Math.random() * 4) + 1;
    // console.log(winner, n, String(winner) );
    return n === String(winner) ? res.redirect('/conejito.jpg') : res.redirect('/voldemort.jpg')
    
    // res.json({n})
})

app.get("/Inicio", (req, res)=>{
    res.send("Holaaa SERVER")
})

app.listen(3000,()=>{
    console.log("Server ON ");
    }); 

