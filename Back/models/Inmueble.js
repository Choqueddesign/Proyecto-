const {Schema, model} = require("mongoose");

const inmueblesSchema = new Schema({
    habitaciones:{
        type: Number
    },
    baños:{
        type: Number
    },
    patio:{
        type: Boolean
    },
    pisos:{
        type: Number
    },
    sector:{
        type: String
    },
    cocinaInt:{
        type: Boolean
    },
    descripcion:{
        type: String
    },
    precio:{
        type: Number
    }
});

module.exports = model("Inmuebles", inmueblesSchema, "Inmuebles")