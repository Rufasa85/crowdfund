const express = require('express');
const router = express.Router();
const {User,Project} = require('../models');

router.get("/",(req,res)=>{
    Project.findAll().then(projects=>{
        const projectsHbsData = projects.map(project=>project.get({plain:true}))
        console.log(projects);
        console.log("==============")
        console.log(projectsHbsData)

        res.render("home",{
            projects:projectsHbsData
        })
    })
})
router.get("/project/:id",(req,res)=>{
    Project.findByPk(req.params.id,{
        include:[User]
    }).then(project=>{
        const projectHbsData = project.get({plain:true});
        console.log(project);
        console.log("==============")
        console.log(projectHbsData)

        res.render("proj-details",projectHbsData)
    })
})

module.exports = router;