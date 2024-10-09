describe('Get Single User with ID 10', () => {
  it('Get User', () => {
    let id = 10
    cy.request({
      method: 'GET',
      url: `https://reqres.in/api/users/${id}`,
    }).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data.id).to.not.eq('')
      expect(response.body.data.email).to.not.eq('')
      expect(response.body.data.first_name).to.not.eq('')
      expect(response.body.data.last_name).to.not.eq('')
      expect(response.body.data.avatar).to.not.eq('')
      expect(response.body).to.have.property('support')
      expect(response.body.support.text).to.not.eq('')
      expect(response.body.support.url).to.not.eq('')
    })
  })
})