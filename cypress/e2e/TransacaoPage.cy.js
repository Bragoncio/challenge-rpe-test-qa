/// <reference types="cypress" />

describe('Pagina de Transacao', () => {

    beforeEach(() => {
        cy.login();
    });

    context("Tela Inclusão de Venda", () => {
        it('Deve incluir uma venda para um cliente ativo com sucesso', function() {
            cy.fixture('clientes').then((clientes) => {
                cy.navigateToIncluirVenda();
                cy.incluirVenda(clientes.clienteAtivo.nome);
            });
        });
    });

    context("Fluxo Completo de Venda e Consulta", () => {
        it('Deve incluir uma venda e verificar no histórico de transações', function() {
            cy.fixture('clientes').then((clientes) => {
                cy.navigateToIncluirVenda();
                cy.incluirVenda(clientes.clienteAtivo.nome);
                
                cy.get('@valorTransacao').then((valorTransacao) => {
                    cy.verificarHistoricoTransacoes(clientes.clienteAtivo.nome, valorTransacao);
                });
            });
        });
    });
});
