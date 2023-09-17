///<reference types="Cypress"/>
import AdminPageElements from "../elements/adminElements";

const pimButtonSelector = ':nth-child(2) > .oxd-main-menu-item > .oxd-text';

const adminElements = new AdminPageElements();





class SidePainelcomponent{

    clickOnAdmin() {
     cy.contains('Admin').click();
    }
    
    clickOnPIM(){
        cy.contains('PIM').click();
    }

}

export default SidePainelcomponent;
