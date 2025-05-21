/// <reference types="cypress" />

describe('Testes para os contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um contao', () => {
        cy.get('[type="text"]').type('Daniel Alves')
        cy.get('[type="email"]').type('daniel199831.da@gmail.com')
        cy.get('[type="tel"]').type('(24)999999999')
        cy.get('.adicionar').click()
    })

    it('Deve editar um contao', () => {
        cy.get('.edit').first().click()
        cy.get('[type="text"]').type('Alves Alves')
        cy.get('[type="email"]').type('daniel199831.da@gmailcom')
        cy.get('[type="tel"]').type('(24)111111111')
        cy.get('.alterar').click()
    })

    it('Deve remover um contao', () => {
        cy.get('.delete').first().click()
        cy.get('[type="text"]').type('Alves Alves')
        cy.get('[type="email"]').type('daniel199831.da@gmailcom')
        cy.get('[type="tel"]').type('(24)111111111')
    })
    
})