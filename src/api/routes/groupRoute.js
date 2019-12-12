module.exports = (app) => {
    const groupController = require('../controllers/groupController');

    app.route('/group/list/')
        .get(groupController.list_group);

    app.route('/group/list/:id')
        .post(groupController.create_a_group)
        .put(groupController.update_a_group)
        .delete(groupController.delete_a_group);

};