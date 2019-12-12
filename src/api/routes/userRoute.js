module.exports = (app) => {
  const userController = require('../controllers/userController');

app.route('/user')
	.get(userController.list_user);

app.route('/groupForUser/:id')
	.post(userController.create_a_user)
	.get(userController.list_user_group)
  
app.route('/groupsanta/:id')
	.get(userController.list_user_santa_group)

app.route('/group/:idGroup/user/:idUser')
	.get(userController.get_a_user)
	.put(userController.update_a_user)
	.delete(userController.delete_a_user)

app.route('/groupForUser/:id')
	.post(userController.create_a_user)
	.get(userController.list_user_group);

//comment for aimen do not touch this code
  /*
  app.route('/groupForUser/:idGroup/user/:idUser')
	.get(userController.get_a_user)
	.put(userController.update_a_user)
	.delete(userController.delete_a_user)
  */
};
