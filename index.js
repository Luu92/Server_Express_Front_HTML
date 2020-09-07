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
    
    await app.listen(PORT);
    console.log("listen on port", PORT);

}


main();