   ![enter image description here](https://media.istockphoto.com/vectors/origamisign2orange-vector-id1165147642?k=6&m=1165147642&s=612x612&w=0&h=xuLx5kKFRnUnIum2AkBuunr_s9SXgy29fDXYNVVJRj4=)
# Desafio Empresa Got - Game Of Testers

Vamos usar um outro sistema criado para fins de teste: o **Automation Practice**.

O Automation Practice é um site que simula um ecommerce, e é muito utilizado em processos seletivos de diversas empresas.

**Este desafio tem os objetivos de:**

- Consolidar os aprendizados do Chapter 1

- Adicionar mais um projeto em seu portfólio

- Preparar você para desafios técnicos de processos seletivos com Cypress

# **Instruções:**

Utilizando o site automation practice, criar um novo projeto (do zero) e configurar o projeto para implementar testes utilizando o Cypress, conforme visto até aqui. Neste primeiro desafio, você deve utilizar apenas a abordagem sem cucumber. 

### **IMPORTANTE:**

:tw-26a1: **O e-mail de cadastro deve ser diferente entre um teste e outro**

:tw-26a1: **Você deve utilizar o mochawesome como ferramenta de relatório**

:tw-26a1: **Subir o projeto no Github e enviar o link para correção**

:tw-26a1: **Adicione GIFs ou imagens de seu projeto executando quando subir para o Github**

## Cenários que devem ser implementados

:tw-26a1: Cadastrar um novo usuário

:tw-26a1: Fluxo do cenário de "Cadastrar um novo usuário":

:tw-26a1: Acessar o site automation practice** http://automationpractice.com**

:tw-26a1: Clicar no botão de Sign in

:tw-26a1: Preencher as informações de e-mail (não pode ser repetido)

:tw-26a1: Clicar no botão Create an Account

:tw-26a1: Preencher as informações do formulário de cadastro

:tw-26a1: Clicar no botão Register

:tw-26a1: Validar que foi redirecionado para a url correta

:tw-26a1: Validar exibição do texto 'Welcome to your account'



# Checklist

Para facilitar esse primeiro desafio, criei um checklist para te guiar. 
Espero que te ajude a não esquecer nenhum detalhe :)

|:tw-26a1:| Criar uma nova pasta/diretório com o nome do desafio

|:tw-26a1:| Abrir o pasta criada no Visual Studio Code

|:tw-26a1:|Configurar um novo projeto node

|:tw-26a1:| Instalar o Cypress no projeto

|:tw-26a1:| Abrir o Cypress e gerar arquivos padrão

|:tw-26a1:| Configurar arquivo cypress.json com as opções: baseUrl, experimentalSourceRewriting ewatchForFileChanges. Se quiser, pode adicionar o schema também.

|:tw-26a1:| Configurar o arquivo support/index para exceções indesejadas

|:tw-26a1:| Apagar as specs de exemplo geradas

|:tw-26a1:| Criar um novo arquivo de testes

|:tw-26a1:| Mapear os elementos necessários para interagir

|:tw-26a1:| Interagir com os elementos mapeados, navegando pela página para executar o fluxo

|:tw-26a1:| Instalar e configurar uma biblioteca para geração de dados fictícios

|:tw-26a1:| Adicionar as asserções para validar que o cadastro foi finalizado corretamente

|:tw-26a1:| Adicionar os scripts para execução no modo interativo e no modo headless

|:tw-26a1:| Conferir se o vídeo está sendo gerado corretamente

|:tw-26a1:| Adicionar as bibliotecas do mochawesome

|:tw-26a1:| Adicionar as configurações para gerar os arquivos do relatório

|:tw-26a1:| Adicionar os scripts para geração dos relatórios em html

|:tw-26a1:| Suba seu projeto no Github

|:tw-26a1:| Configure as actions para executar os testes

|:tw-26a1:| Habilite o GH Pages

|:tw-26a1:| Adicione a action para publicar o relatório do mochawesome

|:tw-26a1:| Lembre-se, para o resultado aparecer o arquivo do relatório deve ser index.html :)

|:tw-26a1:| Crie uma descrição de seu projeto no Github com imagem ou vídeos da execução, tecnologias, tags e aprendizados



# Bibliotecas utilizadas:
#### :tw-26a1: mochawesome 
Para gerar o relatório dos testes realizados.

#### :tw-26a1: Chance
https://chancejs.com/

para gerar dados aleatórios para cadastro.

## Execução do Teste:
<img src="https://media.giphy.com/media/TfjiLZcJ884JtiZbeO/giphy.gif" width="600" height="300" />

## Relatório gerado pode ser conferido em:
**https://rafael-braz.github.io/Desafio-capitulo-1/**







