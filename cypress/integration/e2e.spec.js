//Get port from env file

// import INPUT from '../../client/src/util/inputTypes'
const INPUT = require('../../client/src/util/inputTypes');
import EventSignUp from '../../client/src/components/EventSignUp';

const URL = 'http://localhost'
const PORT = '3000' // TODO: Get from env file

context("EventSignUp Page", () => {
    beforeEach( () => {
        cy.visit(`${URL}:${PORT}`);
        Cypress.env('NODE_ENV', 'test');
    });

    it('should POST a valid signup and go to /success', () => {

        expect(Cypress.env('NODE_ENV')).equal('test');


        // Sign-up button should initially be disabled
        cy.get('[data-testid=event-signup-button')
            .should('be.disabled');

        const [validName, validEmail, validDate] = 
            ['valid', 'valid2@email.com', '2020-01-01'];

        // Sets valid inputs for all form inputs
        cy.get(`[name=${INPUT.FIRST_NAME}]`)
            .type(validName)
            .should('have.value', validName);
        cy.get(`[name=${INPUT.LAST_NAME}]`)
            .type(validName)
            .should('have.value', validName);
        cy.get(`[name=${INPUT.EMAIL}]`)
            .type(validEmail)
            .should('have.value', validEmail);
        cy.get(`[name=${INPUT.DATE}]`)
            .type(validDate)
            .should('have.value', validDate);

        // Checks that sign-up button is enabled
        cy.get('[data-testid=event-signup-button')
            .should('not.be.disabled');
        

        cy.server();
        Cypress.env('NODE_ENV', 'test');
        cy.route('POST', 'http://localhost:3030/api/registree').as('signup');
        
        cy.get('[data-testid=event-signup-button')
            .click();
        
        cy.location().should((loc) => { 
            expect(loc.pathname).to.eq('/success');
        });

    });
});