describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working number buttons, concatenation', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '23')
  })

  it('should allow multiple operations, (2+3)*4=20', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '20')
  })

  it('should allow negative results, (2-3)=-1', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })

    it('should allow decimal results, (2/4)=0.5', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.5')
    })

    it('should allow very large results, (2000000/4000000)=0.5', () => {
      cy.get('#number2').click();
      cy.get('#number0').click();
      cy.get('#number0').click();
      cy.get('#number0').click();
      cy.get('#number0').click();
      cy.get('#number0').click();
      cy.get('#number0').click();
      cy.get('#operator-multiply').click();
      cy.get('#number4').click();
      cy.get('#number0').click();
      cy.get('#number0').click();
      cy.get('#number0').click();
      cy.get('#number0').click();
      cy.get('#number0').click();
      cy.get('#number0').click();
      cy.get('#operator-equals').click();
      cy.get('.display').should('contain', '8000000000000')
    })
    
    it('should allow division by zero, (2/0)=Infinity', () => {
      cy.get('#number2').click();
      cy.get('#operator-divide').click();
      cy.get('#number0').click();
      cy.get('#operator-equals').click();
      cy.get('.display').should('contain', 'Infinity')
      })



  })

