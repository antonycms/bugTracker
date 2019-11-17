const Router = require('express').Router();

// controllers
const BugTrackerController = require('./app/controllers/BugTrackerController');

Router.get('/', (req, res) => res.render('home'));
Router.post('/', BugTrackerController.store);

module.exports = Router;
