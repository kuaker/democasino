class RegistrationPage {
   email = () => cy.get('.selected').eq(0);

   phone = () => cy.get('.last').eq(0);
}

export default RegistrationPage;
