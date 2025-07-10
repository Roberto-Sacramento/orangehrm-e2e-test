import {Before, DataTable, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import PimPage from '../pages/pimPage.pom';
import SidePainelcomponent from "../pages/sidePainel.component";
import PimElements from "../elements/pimElements";
import ToastMessages from "../utils/messages.component";

const pimPage = new PimPage();
const sidePainelcomponent = new SidePainelcomponent()
const pimElements = new PimElements();
const toastMessages = new ToastMessages();


Given('I accessed PIM page', () =>{
    sidePainelcomponent.clickOnPIM();
});

And('I click on Add button', async() =>{
    pimPage.clickOnAddButton();
});

And(/I fill the fields '(.+)', '(.+)', '(.+)'/, (firstName, middleName, lastName) =>{
    pimElements.fillEmployeeIData(firstName, middleName, lastName);

});

When('I click on Save button', async() =>{
    pimPage.clickOnSaveButton(); 
    
})
 Then('The system should display the Successfully message',async () => {
    toastMessages.SuccessMessages();
 })