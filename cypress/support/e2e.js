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
import ToastMessages from './utils/messages.component';
import generatorString from './utils/generatorString';



const pimElements = new PimElements();
const toastMessages = new ToastMessages();
//const grtString = new generatorString();
const deleteButton = '.orangehrm-horizontal-padding > div > .oxd-button';
const deletePopupButton = '.oxd-button--label-danger';
const checkBoxSelector = '.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon';


before('Starting loging...', () =>{
    cy.visit('/');
    cy.get('.oxd-button', { timeout: 10000 }).should('be.visible');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('.oxd-button').click();
    cy.title().should('eq', 'OrangeHRM');
    
});

before('Creation Of User', () =>{
    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.orangehrm-header-container > .oxd-button', { timeout: 10000 }).should('be.visible');
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.get('[name="firstName"]').type('Virgulino2');
    cy.get('[name="middleName"]').type('Ferreira');
    cy.get('[name="lastName"]').type('Da Silva');
    cy.get('.oxd-switch-input').click();
    cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Virgulino2');
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('virg123');
    cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('virg123');
    cy.get('.oxd-button--secondary ').click();
    cy.get('[id="oxd-toaster_1"]', { timeout: 12000 }).should('be.visible');
    cy.get('[id="oxd-toaster_1"]').should('include.text','Successfully Saved');

});

after('Deleting an user....', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item ').click();
    cy.get(':nth-child(2) > .oxd-input').type('Virgulino2');
    cy.get(':nth-child(2) > .oxd-input').type('{enter}', {force: true});
    // cy.get(checkBoxSelector).click()
    cy.get('.oxd-table-cell-actions > :nth-child(1)').click();
    cy.contains('Yes, Delete').click();
    toastMessages.DeletedMessage();
    toastMessages.InfoMessage();

})