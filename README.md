<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=250&color=00FA9A&text=RPE%20QA&descAlign=50&descAlignY=50&textBg=false&animation=twinkling&descSize=1&stroke=E6E6FA&section=header&reversal=false">
  <h1 align="center">Projeto de Automação RPE QA FRONT</h1>
</p> 

<p align="center">
  <a href="#-produto">Produto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-stack">Stack</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-estrutura">Estrutura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-execução">Execução</a>
</p> 

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/cypress-%2317202C.svg?style=for-the-badge&logo=cypress&logoColor=white">
  <img alt="License" src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black">
  <img alt="License" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
</p>

<p align = "center">
<b> Participante Leonardo Braga Protasio </b>
</p>

## 💻 Produto

<p> Projeto de Automação desenvolvido para atender o desafio RPE QA Front.</p>

## ⚙ Stack

Esse projeto foi desenvolvido com as seguintes tecnologias:

|                                        |           Tecnologias            |
| :-------------------:                  |:--------------------------------:|
| [Cypress](https://www.cypress.io/)  | [Javascript](https://www.javascript.com/) |   

## 🎯 Objetivo

Esse projeto de automação tem como objetivo a execução de uma grande quantidade de casos de teste de maneira confiável e repetitiva em ambientes diversos. 
Isso proporciona uma capacidade aprimorada para dimensionar a execução de casos de teste. Além disso, busca-se aprimorar a qualidade global do software, 
uma vez que os testes automatizados oferecem uma cobertura mais abrangente, especialmente na verificação de reincidência de defeitos antigos que já foram corrigidos (testes de regressão).

## 🌌 Estrutura

Para organizar o projeto, ele foi dividido em várias pastas, cada uma destinada a funções específicas, proporcionando uma distribuição lógica e estruturada.

- ### **challenge-rpe-test-qa**
    - ***Fixtures***
        - Inclui arquivos JSON que contêm dados estáticos usados para validar, manipular e lidar com dados nos testes.

    - ***e2e***
        - Inclui arquivos JavaScript que contêm testes end-to-end (E2E) que simulam o comportamento do usuário na aplicação.

    - ***support***
        - Inclui arquivos JavaScript que especificam as configurações essenciais do projeto e comandos personalizados.

## ⏩ Execução

### Local

- Clone o repositório
- Baixe o Node.js - [NodeJs](https://nodejs.org/pt)
- Instale o *Cypress*: ```npm install cypress --save-dev```
- Executar o ```npx cypress open``` no terminal do projeto
- Executar o comando ```npx cypress run``` para rodar os testes