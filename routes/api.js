const express = require('express');
const router = express.Router();
const Project = require('../models/project');

router.get('/projects', async (req, res) => {
   const projects = await Project.find({});

   res.send(projects);
})

router.get('/projects/:projectId', (req, res) => {
   res.status(404).send('The project could not be found');
})

module.exports = router;