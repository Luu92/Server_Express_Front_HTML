const express = require('express')
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3000;

async function main(){

    app.use(cors());
    app.use('/', express.static(__dirname + '/public'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    
    app.get("/productos", (req, res) => {

        const productos = [
            {
                price: 3000,
                name: "laptop",
                year: 1996
            },
            {
                price: 3500,
                name: "celular",
                year: 1996
            },
            {
                price: 8000,
                name: "ps4",
                year: 2017
            }
        ]

        res.status(202).json({
            productos
        })
    })

    app.get("/productos/1", (req, res) => {

        const producto = {
                price: 3000,
                name: "laptop",
                year: 1996
            }

        res.status(202).json({
            producto
        })
    })
    

    app.get('/basicos-query', (solicitud, respuesta) => {
        
        console.log(solicitud.query);
        let nombre = solicitud.query.nombre
        let apat = solicitud.query.apat
        let edad = solicitud.query.edad

        respuesta.status(404).json({
            nombre,
            apat,
            edad
        })
    })

    app.get('/basicos-pathvariable/:nombre/:otracosa/:otracosa2', (solicitud, respuesta) => {

        let otracosa = solicitud.params.otracosa
        let otracosa2 = solicitud.params.otracosa2
        let nombre = solicitud.params.nombre

        const personas = ["burro", "fili", "luis", "jonh"];

        respuesta.status(500).json({
            persona: personas.filter( elVato => nombre.toLowerCase() !== elVato ),
            otracosa,
            otracosa2
        })
    })

    app.post('/basico-body', (req, res) => {

        console.log(req.body)

        res.status(201).json({
            newUser: {
                username: req.body.username,
                password: req.body.contraseña
            }
        })

    })


    await app.listen(PORT);
    console.log("listen on port", PORT);

}


main();