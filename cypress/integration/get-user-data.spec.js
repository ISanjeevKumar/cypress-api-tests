/// <reference types="Cypress"/>

describe('Get the list of Users', function () {

    it(`Should be able to get the list of Users`, function () {
        cy.request({
            url: 'api/users?page=2',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('page', 2);
        })
    })
})