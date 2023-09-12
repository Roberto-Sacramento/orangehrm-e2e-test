///<reference types="Cypress"/>
import AdminPageElements from "../elements/adminElements";

const adminElements = new AdminPageElements();

const userRoleselector = '[.oxd-select-text oxd-select-text--active]'
const userNameSelector = ':nth-child(2) > .oxd-input';

class SidePainelcomponent{

    clickOnAdmin() {
     cy.contains('Admin').click();
    }

    // clickOnSearchButton(){
    //     cy.get()
    // }


    


}

export default SidePainelcomponent;
