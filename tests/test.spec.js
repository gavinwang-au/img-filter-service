//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const testdata1 = require('./test-data1');
const testdata2 = require('./test-data2');
const testdata3 = require('./test-data3');
const testdata4 = require('./test-data4');
const testdata5 = require('./test-data5');
const testdata6 = require('./test-data6');
const testdata7 = require('./test-data7');
const testdata8 = require('./test-data8');

chai.use(chaiHttp);

/*
Test the post
 */
describe('/POST', () => {
    it('it should not POST a request without a invalid payload', (done) => {
        let payload = testdata7;
        chai.request(server)
            .post('/')
            .send(payload)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                done();
            });
    });

    it('it should not POST a request with a empty payload array', (done) => {
        let payload = testdata8;
        chai.request(server)
            .post('/')
            .send(payload)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                done();
            });
    });

    it('it should not POST a request with a invalid payload name', (done) => {
        let payload = testdata1;
        chai.request(server)
            .post('/')
            .send(payload)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                done();
             });
    });

    it('it should not POST a request with a invalid data type on property drm', (done) => {
        let payload = testdata2;
        chai.request(server)
            .post('/')
            .send(payload)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                done();
            });
    });

    it('it should not POST a request with a invalid data type on property episodeCount', (done) => {
        let payload = testdata3;
        chai.request(server)
            .post('/')
            .send(payload)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                done();
            });
    });

    it('it should not POST a request without property slug', (done) => {
        let payload = testdata4;
        chai.request(server)
            .post('/')
            .send(payload)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                done();
            });
    });

    it('it should not POST a request without property title', (done) => {
        let payload = testdata5;
        chai.request(server)
        .post('/')
        .send(payload)
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('error');
            done();
        });
    });

    it('it should POST a request success.', (done) => {
        let payload = testdata6;
        chai.request(server)
        .post('/')
        .send(payload)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('response');
            done();
        });
    });
});
