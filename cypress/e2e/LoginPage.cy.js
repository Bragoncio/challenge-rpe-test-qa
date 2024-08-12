/// <reference types="cypress" />

describe('Testes de Login', () => {
    let login;

    beforeEach(() => {
        cy.visit('/');
        cy.fixture('login').then((data) => {
            login = data;
        });
    });

    it('Deve realizar o login com sucesso usando credenciais padrão', () => {
        cy.login();
        cy.url().should('include', '/inicio');
        cy.contains('Bem vindo ao Desafio').should('be.visible');
    });

    it('Deve realizar o login com sucesso usando credenciais específicas', () => {
        cy.login({ username: login.usuarioValido.username, password: login.usuarioValido.password });
        cy.url().should('include', '/inicio');
        cy.contains('Bem vindo ao Desafio').should('be.visible');
    });

    it('Deve exibir uma mensagem de erro ao tentar fazer login com credenciais inválidas', () => {
        cy.login({ username: login.usuarioInvalido.username, password: login.usuarioInvalido.password });
        cy.contains('Credenciais inválidas').should('be.visible');
        cy.url().should('include', '/login');
    });

    it('Deve exibir uma mensagem de erro ao tentar submeter o formulário com campos vazios', () => {
        cy.login({ submitEmpty: true });
        cy.contains('Credenciais inválidas').should('be.visible');
        cy.url().should('include', '/login');
    });

    it('Deve permitir o logout e redirecionar para a página de login', () => {
        cy.login();
        cy.get('input[value="SAIR"]').click();
        cy.url().should('include', '/login');
    });
});
