describe('Register failed', () => {
  it('Register User', () => {
     cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      body: {
        "email": "eve.holt@reqres.in",
      },
      failOnStatusCode:false
    }).then(response => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('error')
      expect(response.body.error).to.not.eq('')
    })
  })
})