var models = require('../models');
var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var incident = require('../models/traffic_data');

//GET Area
router.get('/area/:area', function(req, res) {
  console.log(req.param);
  var areas = {
    "kakaako": "KAKAAKO",
    "kailua": "KAILUA", 
    "pearl-city": "PEARL CITY",
    "pearl-hbr": "PEARL HBR",
    "kaneohe": "KANEOHE", 
    "aiea": "AIEA",
    "maili": "MAILI", 
    "nuuanu": "NUUANU", 
    "honolulu": "HONOLULU", 
    "kaimuki": "KAIMUKI", 
    "kalihi": "KALIHI", 
    "kalaeloa": "KALAELOA", 
    "airport": "AIRPORT", 
    "hawaii-kai": "HAWAII KAI"
  };
  models.incident
    .findAll({
      where: {
        // area: req.params.area}
        area: areas[req.params.area]}
      })
    .then(function(incidents){
      res.json(incidents);
    });
  });

//GET Types
router.get('/type/:type', function(req, res) {
  console.log(req.param("type"));
  var types = {
    "stalled": "STALLED/HAZARDOUS VEHICLE",
    "no-collision": "TRAFFIC INCIDENT - NO COLLISION",
    "nuisance-violation": "TRAFFIC NUISANCE OR PARKING VIOLATION",
    "collision": "MOTOR VEHICLE COLLISION",
    "hazardous": "HAZARDOUS DRIVER"
  };
  models.incident
    .findAll({
      where: {
        type: types[req.params.type]}
    })
    .then(function(incidents) {
      res.json(incidents);
    });
});

// sequelize.query("SELECT type FROM incident WHERE area = 'incident[i].area", 
//   { replacements: ['active'], type: sequelize.QueryTypes.SELECT}
//     ).then(function(incidentByArea) {
//       console.log('incidents by area: ', incidentByArea);
//   });

// Session.find({
//   where: ['user_id=? or token=? or expires > NOW()', someNumber, someString] 
// }).on('success', function(s) {

// });

// Session.find({
//   where: {id: incident},
//   include: {type: mockData, location: mockData, area: mockData}
// });

// var Data = function (sequelize, Sequelize) {

//   Data.findOrCreate({
//     where: {
//       type: mockData,
//       location: mockData,
//       area: mockData
//     },
//     defaults: {

//     }
//   }).spread(function(data, incident) {
//     console.log(data.values);
//   }).fail(function(err) {
//     console.log('Error occured', err);
//   });
// };

module.exports = router;