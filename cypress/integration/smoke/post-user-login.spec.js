/// <reference types="Cypress"/>

describe('Login with username and password via api', function () {

    it(`Should be able to login with valid credentials`, function () {
        cy.request({
            url: 'api/login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        }).then(function (response) {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('token')
            expect(response.body.token).not.null;
        })
    })
})