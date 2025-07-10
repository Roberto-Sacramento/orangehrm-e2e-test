
const userNameSelector = ':nth-child(2) > .oxd-input';
const conteinerSelector =  '.orangehrm-container';
const deleteIcon = '.oxd-table-cell-actions > :nth-child(1) > .oxd-icon';
const penIconSelector = '.oxd-icon bi-pencil-fill'
const userRoleSelector = '.oxd-select-text oxd-select-text--active'

class AdminPageElements{


    searchUserName(){
        return userNameSelector;
    }

    clickOnPencil(){
        cy.get(penIconSelector).click();
    }


    //static dropdown
    selectUserByRole(){
        cy.get(userRoleSelector).select('ESS').should('have.value', '0');
    }
    
    assertionConteiner(){
        cy.get(conteinerSelector).should('include.text', 'Virgulino');
    }


   
}

export default AdminPageElements;