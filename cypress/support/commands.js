// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', ({ username = Cypress.env('username'), password = Cypress.env('password'), submitEmpty = false } = {}) => {
    cy.visit('/login');
    
    if (!submitEmpty) {
        if (username) {
            cy.get('input[name="username"]').type(username);
        }
        if (password) {
            cy.get('input[name="password"]').type(password);
        }
    }

    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('navigateToIncluirCliente', () => {
    cy.get('a[href="/desafioqa/incluirCliente"]').click({ force: true });
    cy.url().should('include', '/desafioqa/incluirCliente');
});

Cypress.Commands.add('navigateToListarCliente', () => {
    cy.get('a[href="/desafioqa/listarCliente"]').first().click({ force: true });
    cy.url().should('include', '/desafioqa/listarCliente');
});

Cypress.Commands.add('preencherFormularioCliente', (nome, cpf, status, saldo) => {
    cy.get('input[name="nome"]').type(nome);
    cy.get('input[name="cpf"]').type(cpf);
    cy.get('select[name="status"]').select(status);
    cy.get('input[name="saldoCliente"]').type(saldo);
});

Cypress.Commands.add('verificarClienteSalvo', (nome, cpf, saldo, validadeCartao) => {
    cy.get('input[name="nome"]').should('have.value', nome).and('be.disabled');
    cy.get('input[name="cpf"]').should('have.value', cpf).and('be.disabled');
    cy.get('select[name="status"]').should('have.value', 'true').and('be.disabled');
    cy.get('input[name="saldoCliente"]').should('have.value', saldo).and('be.disabled');
    cy.get('input[name="calendario_input"]').should('have.value', validadeCartao).and('be.disabled');
});

Cypress.Commands.add('consultarCliente', (nome, dataValidade) => {
    cy.get('input[name="j_idt17"]').type(nome);
    cy.get('input[name="calendario_input"]').type(dataValidade);
    cy.get('input[name="j_idt20"]').click();
});

Cypress.Commands.add('limparBase', () => {
    cy.get('input[name="j_idt22"]').click();
    cy.get('#alertMessage').should('be.visible')
        .and('contain', 'Base Limpa com sucesso');
});

Cypress.Commands.add('verificarClienteNaLista', (cliente, status) => {
    const rowClass = status === 'ativo' ? 'success' : 'danger';
    
    cy.get(`table tbody tr.${rowClass}`).each(($row) => {
        cy.wrap($row).within(() => {
            cy.get('td').eq(0).should('contain', cliente.nome);
            cy.get('td').eq(1).should('contain', cliente.cpf);
            cy.get('td').eq(2).should('contain', cliente.confereSaldo);
            cy.get('td').eq(3).should('contain', cliente.validadeCartaoList);
        });
    });
});

