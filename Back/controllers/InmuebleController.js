const Inmueble = require ("../models/Inmueble")
const { inmuebles } = require("../routes/inmuebles")

const allInmuebles = (req, res) => {
    console.log("Recibi una petición del Get");
    // res.send("Hola desde emplados");
    Inmueble.find((err, inmuebles)=>{
        if(err) return res.send(err)
        if(inmuebles.length == 0) return res.send("No hay data")
        return res.send(inmuebles)
    })
  }

  const saveInmueble = (req, res) => {
   let document = req.body;
   Inmueble.find({"sector": document.sector, "precio": document.precio}, (err, inmuebles)=>{
       if(inmuebles.length > 0){
           res.send("El documento ya existe!")
       } else {
        Inmueble.create(req.body).then((data)=>{
            console.log(data)
            return res.send("Se creo el documento")
        }).catch(err=>{
            console.log(err)
            return res.send("Upps! " + err)
        })
       }
   })
}

const updateInmueble = (req,res)=>{
    Inmueble.updateOne({"nombre": req.query.nombre, "puesto": req.query.puesto}, req.body, (err, mongoResponse)=>{
        if(err) return res.send(err)
        return mongoResponse.modifiedCount==1?  res.send("Documento Actualizado"): res.send("No se actualizó el documento")
    });
}



  module.exports = {
        allInmuebles,
        saveInmueble,
        updateInmueble
  }


  