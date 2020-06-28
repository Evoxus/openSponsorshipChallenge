const app = require('../src/app')

describe('/api/profiles', () => {
  it('GET /api/profiles responds with 200', () => {
    return supertest(app)
      .get('/api/profiles')
      .expect(200)
  })
})