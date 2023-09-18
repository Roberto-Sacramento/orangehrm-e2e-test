///<reference types="Cypress"/>

const saveAddEmployeeButton = '.oxd-button--secondary ';
const resetAddEmployeeButton = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input';
const addEmployeeButton = '.oxd-button > .oxd-icon';


class PimPage{

    clickOnAddButton(){
        cy.get(addEmployeeButton).click();
    }

    clickOnSaveButton(){
        cy.get(saveAddEmployeeButton).click();
    }

}

export default PimPage;