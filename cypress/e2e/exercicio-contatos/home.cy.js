/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 contato', () => {
        cy.get('.sc-iAEyYk jtXTMB > div').should('have.length', 0)
    })

    it('Deve filtrar por gian Souza', () => {
        cy.get('.sc-gLDzan ckeKmo').type('gian Souza{enter}')
    })
})