///<reference types="Cypress"/>
import AdminPageElements from "../elements/adminElements";

const adminButtonSelector = ':nth-child(1) > .oxd-main-menu-item > .oxd-text'
const pimButtonSelector = ':nth-child(2) > .oxd-main-menu-item';

const adminElements = new AdminPageElements();





class SidePainelcomponent{

    clickOnAdmin() {
     cy.get(adminButtonSelector).click();
    }
    
    clickOnPIM(){
        cy.get(pimButtonSelector).click();
    }

}

export default SidePainelcomponent;
