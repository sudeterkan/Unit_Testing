describe('Create Account Form Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should display success for valid input', () => {
      cy.get('#firstName').type('Ali');
      cy.get('#lastName').type('Veli');
      cy.get('#email').type('ali@veli.com');
      cy.get('#password').type('Password1');
      cy.get('#confirmPassword').type('Password1');
      cy.get('form').submit();
      cy.get('#result').should('contain', 'successfully');
    });
  
    it('should fail if passwords do not match', () => {
      cy.get('#firstName').type('Ali');
      cy.get('#lastName').type('Veli');
      cy.get('#email').type('ali@veli.com');
      cy.get('#password').type('Password1');
      cy.get('#confirmPassword').type('Password2');
      cy.get('form').submit();
      cy.get('#result').should('contain', 'do not match');
    });
  
    it('should fail for short password', () => {
      cy.get('#firstName').type('Ali');
      cy.get('#lastName').type('Veli');
      cy.get('#email').type('ali@veli.com');
      cy.get('#password').type('abc');
      cy.get('#confirmPassword').type('abc');
      cy.get('form').submit();
      cy.get('#result').should('contain', 'at least 8 characters');
    });
  
    it('should fail if fields are empty', () => {
      cy.get('form').submit();
      cy.get('#result').should('contain', 'All fields are required');
    });
  });
  