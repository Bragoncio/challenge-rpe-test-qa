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


        context.only("Tela Listar Cliente", () => {
            it('Acesso a tela de Listar Clientes', () => {
                cy.get('a[href="/desafioqa/listarCliente"]').click({ force: true });
                cy.url().should('include', '/desafioqa/listarCliente');

                cy.contains('Listar Clientes').should('be.visible');
            })

            it('Consultar Cliente cadastrado na base', () => {
                cy.get('a[href="/desafioqa/listarCliente"]').click({ force: true });
                cy.url().should('include', '/desafioqa/listarCliente');
                cy.contains('Listar Clientes').should('be.visible');
                cy.get('input[name="j_idt17"]').type('João da Silva');
                cy.get('input[name="calendario_input"]').type('08/2024');
                cy.get('input[name="j_idt20"]').click();
                cy.get('table tbody tr').should('contain', 'João da Silva')
                    .and('contain', '123.456.789-00')
                    .and('contain', '500')
                    .and('contain', '2025-08-11');
            });


            it.only('Deve cadastrar um cliente, verificar na lista, e limpar a base', () => {
                cy.get('a[href="/desafioqa/incluirCliente"]').click({ force: true });
                cy.url().should('include', '/desafioqa/incluirCliente');

                cy.get('input[name="nome"]').type('Maria de Souza');
                cy.get('input[name="cpf"]').type('987.654.321-00');
                cy.get('select[name="status"]').select('true');
                cy.get('input[name="saldoCliente"]').type('300.00');
                const validadeCartao = '08/2025';

                cy.get('button[id="botaoSalvar"]').click();

                cy.url().should('include', '/desafioqa/visualizarCliente');
                cy.get('input[name="nome"]').should('have.value', 'Maria de Souza').and('be.disabled');
                cy.get('input[name="cpf"]').should('have.value', '987.654.321-00').and('be.disabled');
                cy.get('select[name="status"]').should('have.value', 'true').and('be.disabled');
                cy.get('input[name="saldoCliente"]').should('have.value', '300.0').and('be.disabled');
                cy.get('input[name="calendario_input"]').should('have.value', validadeCartao).and('be.disabled');

                cy.get('a[href="/desafioqa/listarCliente"]').first().click({ force: true });
                cy.url().should('include', '/desafioqa/listarCliente');

                cy.get('input[name="j_idt17"]').type('Maria de Souza');
                cy.get('input[name="calendario_input"]').type('08/2024');
                cy.get('input[name="j_idt20"]').click();
                cy.get('table tbody tr').should('contain', 'Maria de Souza')
                    .and('contain', '987.654.321-00')
                    .and('contain', '300')
                    .and('contain', "2025-08-11");

                cy.get('input[name="j_idt22"]').click();
                cy.get('#alertMessage').should('be.visible')
                .and('contain', 'Base Limpa com sucesso');
                cy.get('table tbody').should('not.contain', 'Maria de Souza')
                    .and('not.contain', '987.654.321-00')
                    .and('not.contain', '2025-08-11');
            });




        })
    })

});


