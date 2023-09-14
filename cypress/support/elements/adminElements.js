
const userNameSelector = ':nth-child(2) > .oxd-input';
const conteinerSelector =  '.orangehrm-container'


class AdminPageElements{
    //userNameSelector = () => this.$(userNameSelector);


    searchUserName(){
        return userNameSelector;
    }
    
    assertionConteiner(){
        cy.get(conteinerSelector).should('include.text', 'Paul Collings')
    }
   
}

export default AdminPageElements;