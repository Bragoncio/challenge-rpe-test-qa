/// <reference types="cypress" />


describe('Testes de Login', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Deve realizar o login com sucesso', () => {
      cy.get('input[name="username"]').type('admin');
      cy.get('input[name="password"]').type('admin');
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/inicio');
      cy.contains('Bem vindo ao Desafio').should('be.visible');
    });
  
    it('Deve exibir uma mensagem de erro ao tentar fazer login com credenciais inválidas', () => {
      cy.get('input[name="username"]').type('usuario-invalido');
      cy.get('input[name="password"]').type('senha-incorreta');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Credenciais inválidas').should('be.visible');
      cy.url().should('include', '/login');
    });
  
    it('Deve exibir uma mensagem de erro ao tentar submeter o formulário com campos vazios', () => {
        cy.get('button[type="submit"]').click();
        cy.contains('Credenciais inválidas').should('be.visible');
        cy.url().should('include', '/login');
      });
      
  
      it('Deve permitir o logout e redirecionar para a página de login', () => {
        cy.login('admin', 'admin');
        cy.get('input[value="SAIR"]').click();
        cy.url().should('include', '/login');   
      });
 });
  