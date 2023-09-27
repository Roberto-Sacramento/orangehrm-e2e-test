const successMessage = '[id="oxd-toaster_1"]';
const infoMessage = '.oxd-toast--info';

class ToastMessages{

    SuccessMessages(){
        cy.get(successMessage).should('include.text','Successfully Saved');

    }
    DeletedMessage(){
        cy.get(successMessage).should('include.text','Successfully Deleted');
        
    }

    InfoMessage(){
        
        cy.get(infoMessage).should('include.text','No Records Found');
    }
}

export default ToastMessages;