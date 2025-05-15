const express = require('express');
const path=require('path');

const router = express.Router();

//Ruta principal
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"));
});
//Ruta de registro
router.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/registro.html"));
});

router.get("/operaciones.js",(req,res)=>{
    res.sendFile(path.join(__dirname,"../scripts/operaciones.js"));
});

router.get("/genQR.js",(req,res)=>{
    res.sendFile(path.join(__dirname,"../scripts/genQR.js"));
});

router.get("/calculadora",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/calculadora.html"));
});

router.get("/QR",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/QR.html"));
});
module.exports=router;