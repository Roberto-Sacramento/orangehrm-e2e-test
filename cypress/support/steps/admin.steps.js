import {Before, DataTable, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import SidePainelcomponent from "../pages/sidePainel.component";
import AdminPageElements from "../elements/adminElements"

const sidePainelcomponent = new SidePainelcomponent();
const adminPageElements = new AdminPageElements();

Given('I access Admin page', async () => {
    sidePainelcomponent.clickOnAdmin();
})

And('I search a {string}', async (userName) =>{
   cy.get(adminPageElements.searchUserName()).type(userName);
})

