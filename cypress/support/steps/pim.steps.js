import {Before, DataTable, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import PimPage from '../pages/pimPage.pom';
import SidePainelcomponent from "../pages/sidePainel.component";
import PimElements from "../elements/pimElements";

const pimPage = new PimPage();
const sidePainelcomponent = new SidePainelcomponent()
const pimElements = new PimElements();

Given('I accessed PIM page', () =>{
    sidePainelcomponent.clickOnPIM();
});

And('I click on Add button', () =>{
    pimPage.clickOnAddButton();
});

And('I fill the fields {string}, {string}, {string}', (firstName, middleName, lastName) =>{
    pimElements.fillEmployeeIData(firstName, middleName, lastName);

});

When('I click on Save button', async() =>{
    pimPage.clickOnSaveButton(); 
})