import {Before, DataTable, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import SidePainelcomponent from "../pages/sidePainel.component";
import AdminPageElements from "../elements/adminElements"

const sidePainelcomponent = new SidePainelcomponent();
const adminPageElements = new AdminPageElements();


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

Given('I accessed Admin page', async () => {
   sidePainelcomponent.clickOnAdmin();
})

When(/I selected user by role '(.+)'/, async (userRole)=>{
   adminPageElements.selectUserByRole(userRole);
})
