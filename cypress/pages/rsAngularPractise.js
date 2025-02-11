class RsAngularPractise {
    visit() {
      cy.visit("/")
    }
   
    name() {
      return cy.get('input[name="name"]').first()
    }
   
    emailText() {
      return cy.get('input[name="email"]')
    }
   
    warningMessage() {
      return cy.get('.alert.alert-danger')
    }
}
export default RsAngularPractise;