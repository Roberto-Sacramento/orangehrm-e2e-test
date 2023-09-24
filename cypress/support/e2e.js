// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import '@shelex/cypress-allure-plugin';
import PimElements from './elements/pimElements';

const pimElements = new PimElements();
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// class generateData{
// // Alternatively you can use CommonJS syntax:
// // require('./commands')

// // program to generate random strings

// // declare all characters

// generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }
// }

beforeEach('Starting loging...', () =>{
    cy.visit('/');
    cy.get('.oxd-button', { timeout: 10000 }).should('be.visible');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('.oxd-button').click();
    cy.title().should('eq', 'OrangeHRM');
});

beforeEach('@CreationOfUser', () =>{
    
    cy.contains('PIM').click();
    cy.get('.oxd-button > .oxd-icon').click();
    cy.get('[name="firstName"]').type('Virgulino');
    cy.get('[name="middleName"]').type('Ferreira');
    cy.get('[name="lastName"]').type('Da Silva');
    cy.get('.oxd-switch-input').click();
    cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Virgulino');
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('virg123');
    cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('virg123');
    cy.get('.oxd-button--secondary ').click();
    cy.get('[id="oxd-toaster_1"]', { timeout: 10000 }).should('be.visible');
    cy.get('[id="oxd-toaster_1"]').should('include.text','Successfully Saved');

});