module.exports = (app) => {
  const userController = require('../controllers/userController');

app.route('/user')
	.get(userController.list_user);

app.route('/group/:id')
	.post(userController.create_a_user)
	.get(userController.list_user_group);
	
};