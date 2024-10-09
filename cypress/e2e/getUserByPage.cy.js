describe('Get Single User with ID 10', () => {
  it('Get User', () => {
     cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users',
      qs: {
        page: 3
      }
    }).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body.data.length).to.not.eq(0)
      cy.get(response.body.data).each(($user)=>{
        expect($user.id).to.not.eq('')
        expect($user.email).to.not.eq('')
        expect($user.first_name).to.not.eq('')
        expect($user.last_name).to.not.eq('')
        expect($user.avatar).to.not.eq('')
      })
    })
  })
})