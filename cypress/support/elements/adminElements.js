
const userNameSelector = ':nth-child(2) > .oxd-input';
const conteinerSelector =  '.orangehrm-container';
const userRolerSelector = ':nth-child(2) > .oxd-input-group  '; 
const deleteIcon = '.oxd-table-cell-actions > :nth-child(1) > .oxd-icon';

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