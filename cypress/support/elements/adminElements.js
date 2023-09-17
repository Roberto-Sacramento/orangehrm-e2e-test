
const userNameSelector = ':nth-child(2) > .oxd-input';
const conteinerSelector =  '.orangehrm-container'


class AdminPageElements{


    searchUserName(){
        return userNameSelector;
    }
    
    assertionConteiner(){
        cy.get(conteinerSelector).should('include.text', 'Admin')
    }
   
}

export default AdminPageElements;