describe('template spec', () => {
	it('passes', () => {
		cy.visit('http://localhost:8080')
		cy.get('#name').should('contain', '毅翔')
		cy.get('#changeLanguage').select('en')
		cy.get('#name').should('contain', 'yixiang')
		cy.get('#changeCount').clear().type('1')
		cy.get('#apple').should('contain', '1 apple')
	})
})