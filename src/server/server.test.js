const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);
const regeneratorRuntime = require('regenerator-runtime')

describe('Post Endpoints', () => {
  it('should direct to index.html', async () => {
    const res = await request
      .get('/')
      .send('./dist/index.html')
    expect(res.statusCode).toEqual(200);
  })
})