const express = require("express");
const {allInmuebles, saveInmueble, updateInmueble} = require("../controllers/InmuebleController")
const inmuebles = express.Router();

inmuebles.get('/', allInmuebles )
inmuebles.post('/', saveInmueble)
inmuebles.put('/', updateInmueble)

module.exports = {
    inmuebles
}
  