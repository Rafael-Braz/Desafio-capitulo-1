/// <reference types="cypress" />

//biblioteca para gerar os dados ficticios.
var Chance = require('chance');
var chance = new Chance();

it('Cadastrar um novo usuário', () => {

    cy.visit('/');
    cy.get('.login').click();
    cy.get('input[id$="create"]').type(chance.email());
    cy.get('#SubmitCreate').click();

    cy.intercept('POST', 'http://automationpractice.com/index.php', { statusCode: 200 })
    cy.intercept('POST', 'http://automationpractice.com/index.php?rand=1625447035524', { statusCode: 200 }).as('SubmitMyACC');
    //yout personal information
    cy.get('#id_gender1').check();
    cy.get('#customer_firstname').type(chance.first());
    cy.get('#customer_lastname').type(chance.last());
    cy.get('#passwd').type('@numeroaleatorio');
    cy.get('select#days').select('13');
    cy.get('#months').select(chance.month());
    cy.get('#years').select(chance.year({ min: 1990, max: 2021 }));
    //receive news letter
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    //Your Adress information
    cy.get('#company').type(chance.company());
    cy.get('#address1').type(chance.address({ short_suffix: true }));
    cy.get('#address2').type(chance.address({ short_suffix: true }));
    cy.get('#city').type(chance.city());
    cy.get('select#id_state').select('Texas');
    cy.get('#postcode').type(chance.zip());
    cy.get('textarea#other').type(chance.paragraph({ sentences: 1 }));
    cy.get('#phone').type(chance.phone({ formatted: false }));
    cy.get('#phone_mobile').type(chance.phone({ formatted: false }));
    cy.get('#alias').type('Random Alias');
    cy.get('#submitAccount').click();

    cy.url().should('contain', 'my-account');
    cy.get('.info-account').should('contain', 'Welcome to your account');


});