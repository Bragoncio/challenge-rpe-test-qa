/// <reference types="cypress" />

describe('Pagina de Cliente', () => {
    let clientes;

    beforeEach(() => {
        cy.login();
        cy.fixture('clientes').then((data) => {
            clientes = data;
        });
    });

    context("Tela Inclusão do Cliente", () => {
        it('Deve incluir um cliente ativo com sucesso', () => {
            cy.navigateToIncluirCliente();
            cy.preencherFormularioCliente(clientes.clienteAtivo.nome, clientes.clienteAtivo.cpf, clientes.clienteAtivo.status, clientes.clienteAtivo.saldo);
            cy.get('button[id="botaoSalvar"]').click();
            cy.contains('Cliente salvo com sucesso').should('be.visible');
            cy.url().should('include', '/desafioqa/visualizarCliente');
        });

        it('Deve incluir um cliente inativo com sucesso', () => {
            cy.navigateToIncluirCliente();
            cy.preencherFormularioCliente(clientes.clienteInativo.nome, clientes.clienteInativo.cpf, clientes.clienteInativo.status, clientes.clienteInativo.saldo);
            cy.get('button[id="botaoSalvar"]').click();
            cy.contains('Cliente salvo com sucesso').should('be.visible');
            cy.url().should('include', '/desafioqa/visualizarCliente');
        });
    });

    context("Tela Listar Cliente", () => {
        it('Acesso a tela de Listar Clientes', () => {
            cy.navigateToListarCliente();
            cy.contains('Listar Clientes').should('be.visible');
        });

        it('Consultar Cliente cadastrado na base', () => {
            cy.navigateToListarCliente();
            cy.consultarCliente(clientes.clienteAtivo.nome, '08/2024');
            cy.verificarClienteNaLista(clientes.clienteAtivo, 'ativo');
        });

        it('Deve cadastrar um cliente, verificar na lista, e limpar a base', () => {
            cy.navigateToIncluirCliente();
            cy.preencherFormularioCliente(clientes.novoCliente.nome, clientes.novoCliente.cpf, clientes.novoCliente.status, clientes.novoCliente.saldo);
            cy.get('button[id="botaoSalvar"]').click();
            cy.url().should('include', '/desafioqa/visualizarCliente');
            cy.verificarClienteSalvo(clientes.novoCliente.nome, clientes.novoCliente.cpf, clientes.novoCliente.confereSaldo, clientes.novoCliente.validadeCartao);

            cy.navigateToListarCliente();
            cy.consultarCliente(clientes.novoCliente.nome, '08/2024');
            cy.verificarClienteNaLista(clientes.novoCliente, 'ativo');

            cy.limparBase();
            cy.get('table tbody').should('not.contain', clientes.novoCliente.nome)
                .and('not.contain', clientes.novoCliente.cpf)
                .and('not.contain', clientes.novoCliente.validadeCartaoList);
        });
    });
});
