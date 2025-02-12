import RsAngularPractise from "../pages/rsAngularPractise"

const rsAngularPractise = new RsAngularPractise()
describe('Rahul Shetty Angular Page Practise', () => {
  before(() => {
    // Set up the session once before all tests
    cy.login();
  });
  it('login to application',()=>{
    // cy.get('a').contains('Insurance Project').click()
    rsAngularPractise.name().type('nn{backspace}');
    rsAngularPractise.name().clear();
    rsAngularPractise.emailText().type('s');
    rsAngularPractise.warningMessage().should('be.visible');
    rsAngularPractise.warningMessage().should('have.text','Name is required')
    rsAngularPractise.name().type('nn{backspace}');
    rsAngularPractise.warningMessage().should('have.text','Name should be at least 2 characters')    
  })
  it('check error message on email',()=>{
    //rsAngularPractise.name().type('nn{backspace}');
    //rsAngularPractise.warningMessage().should('have.text','Name should be at least 2 characters')    
  })
})