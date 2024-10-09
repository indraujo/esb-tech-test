describe('Register successful', () => {
  it('Register User', () => {
     cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      body: {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      }
    }).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id')
      expect(response.body.id).to.not.eq('')
      expect(response.body).to.have.property('token')
      expect(response.body.token).to.not.eq('')
    })
  })
})