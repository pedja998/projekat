var Playerdb = require('../model/model');

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({ message : "Ne može biti prazno"});
        return;
    }
    const player = new Playerdb({
        ime : req.body.ime,
        prezime : req.body.prezime,
        datumR: req.body.datumR,
        pozicija : req.body.pozicija,
        ugovorPocetak : req.body.ugovorPocetak,
        ugovorKraj : req.body.ugovorKraj
    })
    player
        .save(player)
        .then(data=>{
            //res.send(data)
            res.redirect('/dodaj-igraca')
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Greška prilikom pravljenja"
            });
        });
}
exports.update=(req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Ne može biti prazno"})
    }
    const id = req.params.id;
    Playerdb.findByIdAndUpdate(id,req.body)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Ne može se updateovati igrač sa šifrom: ${id}.`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}
exports.delete=(req,res)=>{
    const id = req.params.id;

    Playerdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Ne može se obrisati igrač sa šifrom: ${id}.`})
            }else{
                res.send({
                    message : "Uspešno obrisan igrač"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Ne može se obrisati igrač sa šifrom=" + id
            });
        });
}
exports.find=(req,res)=>{
    if(req.query.id){
        const id = req.query.id;

        Playerdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Nije pronađen igrač "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Greška prilikom dobijanja podataka sa id: " + id})
            })

    }else{
        Playerdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Greška prilikom dobijanja podataka" })
            })
    }
}