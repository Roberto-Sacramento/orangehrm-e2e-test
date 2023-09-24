
const userNameSelector = ':nth-child(2) > .oxd-input';
const conteinerSelector =  '.orangehrm-container';
const userRolerSelector = ':nth-child(2) > .oxd-input-group  '; 

class AdminPageElements{


    searchUserName(){
        return userNameSelector;
    }
    selectUserByRole(userRole){
        cy.get(userRolerSelector).select(userRole);
    }
    
    assertionConteiner(){
        cy.get(conteinerSelector).should('include.text', 'Virgulino');
    }
   
}

export default AdminPageElements;