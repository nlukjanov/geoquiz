describe('geo quiz app', () => {
  it('should start the game on a region', () => {
    cy.visit('/')
      .get('.start')
      .click()
      .get('.start').should('not.exist')
      .get('[data-testid=europe]')
      .should('have.text', 'Europe')
      .get('[data-testid=asia]')
      .should('have.text', 'Asia')
      .get('[data-testid=africa]')
      .should('have.text', 'Africa')
      .get('[data-testid=americas]')
      .should('have.text', 'Americas')
      .get('[data-testid=world]')
      .should('have.text', 'World')
      .click()
      .get('[data-testid="h2 title"]')
      .should('have.text', 'Guess the flag');
  });

  it('should show game', () => {
    cy.visit('/')
      .get('.start')
      .click()
      .get('[data-testid=world]')
      .click()
      .get('[data-testid=score]')
      .should('have.text', 'Score: 0')
      .get('[data-testid=question-count]')
      .should('have.text', 'Question: 1')
      .get('[data-testid="button 0"]').should('exist')
      .get('[data-testid="button 1"]').should('exist')
      .get('[data-testid="button 2"]').should('exist')
      .get('[data-testid="button 3"]').should('exist')
      .click()
      .get('[data-testid=guess-answer-message]').invoke('text').should('match', /(You got it!)|(You will get it next time!)/)
      .get('[data-testid=finish-game').should('exist')
      .get('[data-testid=next-question').should('exist');
  });
  it('should show game summary if finish game pressed', () => {
    cy.visit('/')
      .get('.start')
      .click()
      .get('[data-testid=world]')
      .click()
      .get('[data-testid="button 0"]').should('exist')
      .click()
      .get('[data-testid=finish-game')
      .click()
      .get('[data-testid="game-summary"]');
  });
});
