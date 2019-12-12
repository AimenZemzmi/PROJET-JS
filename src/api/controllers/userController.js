
const mongoose = require('mongoose');
const User = mongoose.model("User");

exports.list_user = (req, res) => {
    User.find({}, (error, users) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur List."});
        }
        else {
            res.status(200);
            res.json(users);
        }
    })
}

exports.list_user_group = (req, res) => {
    User.find({idGroup : req.params.id}, function (error,adventure) {
        if(error){
            res.status(500);
            res.json({message: "Server error List User Group"});
        }else {
            res.status(200);
            res.json(adventure);
        }
    });
}

exports.create_a_user = (req, res) => {

  req.body.idGroup = req.params.id;
  let new_user = new User(req.body);

  new_user.save((error, post) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur Create."});
    }
    else {
      res.status(200);
      res.json(post);
    }
  })
}

exports.get_a_user = (req, res) => {
    User.findById(req.params.idUser, function (error,adventure) {
        if(error){
            res.status(500);
            res.json({message: "Server error"});
        }else {
            res.status(200);
            res.json(adventure);
        }
    });
}

exports.update_a_user = (req, res) => {
    User.findOneAndUpdate({_id: req.params.idUser}, req.body, {new: true}, (error, adventure) => {
        if(error){
            res.status(500);
            res.json({message: "Server error"});
        }else {
            res.status(200);
            res.json(adventure);
        }
    });
}

exports.delete_a_user = (req, res) => {
  User.remove({_id: req.params.idUser}, (error) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json({message: "Article supprimé"});
    }
  })
}
