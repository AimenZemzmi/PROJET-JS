const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
   idGroup: {
       type: String,
       required: true
   },
   idUser: {
       type: String,
       required: true
   },
   nom: {
       type: String,
       required: "Le nom est requis"
   },
   prenom: {
       type: String,
       required: "Le prenom est requis"
   },
   email: {
       type: String,
       required: "Le mail est requis"
   }
});

module.exports = mongoose.model('User', userSchema);