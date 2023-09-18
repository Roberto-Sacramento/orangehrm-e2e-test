const successMessage = '[id="oxd-toaster_1"]';

class ToastMessages{

    SuccessMessages(){
        cy.get(successMessage).should('include.text','Successfully Saved');

    }

}

export default ToastMessages;