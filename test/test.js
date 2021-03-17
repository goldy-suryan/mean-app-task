const express = require('express');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

function createApp() {
    app = express();

    var router = express.Router();
    router.route('/login').post(function (req, res) {
        return res.json({ success: true });
    });

    app.use(router);

    return app;
}

describe('Server', function () {
    var app;

    before(function (done) {
        app = createApp();
        app.listen(function (err) {
            if (err) { return done(err); }
            done();
        });
    });

    it('should send back a JSON object with success to true', function (done) {
        request(app)
            .post('/login')
            .send({ username: 'MTN_user@gmail.com', password: 'MTN281#^@*'})
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, function (err, res) {
                if (err) { return done(err); }
                requestStatus = res.body.success;
                expect(requestStatus).to.equal(true);
                done()
            });
    });

});