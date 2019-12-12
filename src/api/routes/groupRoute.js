module.exports = (app) => {
    const groupController = require('../controllers/groupController');

    app.route('/group/list/')
        .get(groupController.list_group)
        .post(groupController.create_a_group);

    app.route('/group/list/:id')
        .put(groupController.update_a_group)
        .delete(groupController.delete_a_group);

};