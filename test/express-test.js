const expect = require('chai').expect;
const request = require('request');

describe('Page Status Codes:', () => {
  it('Main Page: ', done => {
    request('http://localhost:3300', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('Blog Page: ', done => {
    request('http://localhost:3300/blog', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
