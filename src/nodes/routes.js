// @TODO why do I have to specify all of these operations? Maybe better is provide a scripting mechanism and let client decide what to do
module.exports = function initRoutes(context) {
    const app = context.app;

    app.get('/get-node', function (req, res) {
        res.send('get-node');
    });

    app.get('/get-nodes', function (req, res) {
        res.send('get-nodes');
    });

    app.put('/put-node', function (req, res) {
        res.send('put-node');
    });

    app.put('/put-nodes', function (req, res) {
        res.send('put-nodes');
    });

    app.post('/update-node', function (req, res) {
        res.send('update-node');
    });

    app.post('/update-nodes', function (req, res) {
        res.send('update-nodes');
    });

    app.delete('/delete-node', function (req, res) {
        res.send('delete-node');
    });

    app.delete('/delete-nodes', function (req, res) {
        res.send('delete-nodes');
    });
};
