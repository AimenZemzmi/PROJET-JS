
const mongoose = require('mongoose');
const Group = mongoose.model("Group");

exports.list_group = (req, res) => {
    Group.find({}, (error, groups) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur List Group."});
        }
        else {
            res.status(201);
            res.json(groups);
        }
    })
};

exports.create_a_group = (req, res) => {
    let new_group = new Group(req.body);

    new_group.save((error, group) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur Create Group."});
        }
        else {
            res.status(200);
            res.json(group);
        }
    })
};

exports.delete_a_group = (req, res) => {
    Group.remove({_id: req.params.id}, function (error) {
        if(error){
            res.status(500);
            res.json({message: "Erreur serveur Delete Group."});
        }else {
            res.status(200);
            res.json({message: "Delete Group Succes"});
        }
    });
};

exports.update_a_group = (req, res) => {
    Group.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},
        (error, group) => {
            if(error){
                res.status(500);
                console.log(error);
                res.json({message: "Erreur serveur Update Group."});
            }
            else {
                res.status(200);
                res.json(group);
            }
        }
    )
};


