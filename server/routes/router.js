const express = require("express");
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

route.get("/",services.homeRoutes);
route.get("/dodaj-igraca",services.add_player);
route.get("/update-player",services.update_player);

//API
route.post('/api/players',controller.create);
route.get('/api/players',controller.find);
route.put('/api/players/:id',controller.update);
route.delete('/api/players/:id',controller.delete);

module.exports=route
