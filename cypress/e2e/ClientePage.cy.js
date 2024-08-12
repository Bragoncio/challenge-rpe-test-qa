/// <reference types="cypress" />


describe('Pagina de Cliente', () => {
    beforeEach(() => {
        cy.login('admin', 'admin');
    });


    context("Tela Inclusão do Cliente", () => {
        it('Deve incluir um cliente ativo com sucesso', () => {
            cy.get('a[href="/desafioqa/incluirCliente"]').click({ force: true });
            cy.url().should('include', '/desafioqa/incluirCliente')

            cy.get('input[name="nome"]').type('João da Silva');
            cy.get('input[name="cpf"]').type('123.456.789-00');
            cy.get('select[name="status"]').select('true');
            cy.get('input[name="saldoCliente"]').type('500.00');
            cy.get('button[id="botaoSalvar"]').click();
            cy.contains('Cliente salvo com sucesso').should('be.visible');
            cy.url().should('include', '/desafioqa/visualizarCliente');
            cy.contains('Visualizar Cliente').should('be.visible');
        })


        it('Deve incluir um cliente inativo com sucesso', () => {
            cy.get('a[href="/desafioqa/incluirCliente"]').click({ force: true });
            cy.url().should('include', '/desafioqa/incluirCliente')

            cy.get('input[name="nome"]').type('João da Silva');
            cy.get('input[name="cpf"]').type('123.456.789-00');
            cy.get('select[name="status"]').select('false');
            cy.get('input[name="saldoCliente"]').type('500.00');
            cy.get('button[id="botaoSalvar"]').click();
            cy.contains('Cliente salvo com sucesso').should('be.visible');
            cy.url().should('include', '/desafioqa/visualizarCliente');
            cy.contains('Visualizar Cliente').should('be.visible');
        })


        context("Tela Listar Cliente", () => {
            it('Acesso a tela de Listar Clientes', () => {
                cy.get('a[href="/desafioqa/listarCliente"]').click({ force: true });
                cy.url().should('include', '/desafioqa/listarCliente');
                
                cy.contains('Listar Clientes').should('be.visible');
            })

            it.only('Consultar Cliente cadastrado na base', () => {
                cy.get('a[href="/desafioqa/listarCliente"]').click({ force: true });
                cy.url().should('include', '/desafioqa/listarCliente');
                cy.contains('Listar Clientes').should('be.visible');
            })
        })

    });

});
