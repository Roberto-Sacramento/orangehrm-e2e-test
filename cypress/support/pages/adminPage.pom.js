///<reference types="Cypress"/>
import AdminPageElements from "../elements/adminElements";

const adminElements = new AdminPageElements();





class SidePainelcomponent{

    clickOnAdmin() {
     cy.contains('Admin').click();
    }
    
   

}

export default SidePainelcomponent;
