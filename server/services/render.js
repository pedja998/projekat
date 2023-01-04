const axios = require('axios');


exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/players')
        .then(function(response){
            res.render('index', { players : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.update_player=(req,res)=>{
    axios.get('http://localhost:3000/api/players', { params : { id : req.query.id }})
        .then(function(playerdata){
            res.render("update_player", { player : playerdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.add_player=(req,res)=>{
    res.render('add_player');
}