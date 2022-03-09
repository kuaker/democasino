/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../integration/pages/HomePage';
import RegistrationPage from '../../integration/pages/RegistrationPage';

const url = Cypress.env('baseUrl');
const homePage = new HomePage();
const registrationPage = new RegistrationPage();

Given('I go to demo casino url', () => cy.visit(url));

When('I close the pop-up', () => {
   homePage.popUp.modal().should('be.visible');

   homePage.popUp.got_it().click().and('have.text', 'Got it');
});

And('I click on registration button', () => {
   homePage.header.registrationBtn().click();
});

And('I fill in the form with my {string}', (button) => {
   if (button === 'email') {
      registrationPage.email().click();
   } else {
      registrationPage.phone().click();
   }
});
