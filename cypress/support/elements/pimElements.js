const firstNameSelector = '[name="firstName"]';
const middleNameSelector = '[name="middleName"]';
const lastNameSelector = '[name="lastName"]';
const switchLoginDetails = '.oxd-switch-input';
const regUserName = ':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
const regUserPassword = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input';
const confUserPassword = '.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'


class PimElements{

    fillEmployeeIData(firstName, middleName, lastName,){
        cy.get(firstNameSelector).type(firstName);
        cy.get(middleNameSelector).type(middleName);
        cy.get(lastNameSelector).type(lastName);

    }
    messageSuccess(){
        cy.get(successMessage).should('include.text','Successfully Saved');
    }

}

export default PimElements;