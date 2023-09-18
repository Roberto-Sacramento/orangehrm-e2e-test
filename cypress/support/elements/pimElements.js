const firstNameSelector = '[name="firstName"]';
const middleNameSelector = '[name="middleName"]';
const lastNameSelector = '[name="lastName"]';


class PimElements{

    fillEmployeeIData(firstName, middleName, lastName){
        cy.get(firstNameSelector).type(firstName);
        cy.get(middleNameSelector).type(middleName);
        cy.get(lastNameSelector).type(lastName);

    }
    messageSuccess(){
        cy.get(successMessage).should('include.text','Successfully Saved');
    }

}

export default PimElements;