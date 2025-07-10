import {Before, BeforeEach, DataTable, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import SidePainelcomponent from "../pages/sidePainel.component";
import AdminPageElements from "../elements/adminElements"
import ToastMessages from "../utils/messages.component";

const sidePainelcomponent = new SidePainelcomponent();
const adminPageElements = new AdminPageElements();
const toastMessages = new ToastMessages();

// Scenario 1: Search an user by name
Given('I accessed Admin page', async () => {
    sidePainelcomponent.clickOnAdmin();
})

When(/I search a by username '(.+)'/, async (userName) =>{
   cy.get(adminPageElements.searchUserName()).type(userName);
   cy.get(adminPageElements.searchUserName()).type('{enter}', {force: true})
})

Then(/I should see the employee name '(.+)'/, async(employeeName) =>{
   adminPageElements.assertionConteiner(employeeName);
    
});

//Scenario 2: Update an user
Given('I accessed Admin page', async () => {
   sidePainelcomponent.clickOnAdmin();
})

And(/I search a user by username '(.+)'/, async (userName) =>{
   cy.get(adminPageElements.searchUserName()).type(userName);
   cy.get(adminPageElements.searchUserName()).type('{enter}', {force: true})
})

And('I click on edit button', async () =>{
   adminPageElements.clickOnPencil();
})

When(/I changed user role information/, async () => {
   adminPageElements.selectUserByRole();
})


Then(/I should see the updated toast message/, async () => {
   toastMessages.updateMessage();
})
