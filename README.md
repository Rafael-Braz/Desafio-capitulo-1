  # Desafio Empresa Got - Game Of Testers
  ![enter image description here](https://media.istockphoto.com/vectors/origamisign2orange-vector-id1165147642?k=6&m=1165147642&s=612x612&w=0&h=xuLx5kKFRnUnIum2AkBuunr_s9SXgy29fDXYNVVJRj4=)


Vamos usar um outro sistema criado para fins de teste: o **Automation Practice**.

O Automation Practice é um site que simula um ecommerce, e é muito utilizado em processos seletivos de diversas empresas.

**Este desafio tem os objetivos de:**

- Consolidar os aprendizados do Chapter 1

- Adicionar mais um projeto em seu portfólio

- Preparar você para desafios técnicos de processos seletivos com Cypress

:zap: # **Instruções:**

Utilizando o site automation practice, criar um novo projeto (do zero) e configurar o projeto para implementar testes utilizando o Cypress, conforme visto até aqui. Neste primeiro desafio, você deve utilizar apenas a abordagem sem cucumber. 

:zap: ### **IMPORTANTE:**

:heavy_exclamation_mark: **O e-mail de cadastro deve ser diferente entre um teste e outro**

:heavy_exclamation_mark: **Você deve utilizar o mochawesome como ferramenta de relatório**

:heavy_exclamation_mark:  **Subir o projeto no Github e enviar o link para correção**

:heavy_exclamation_mark: **Adicione GIFs ou imagens de seu projeto executando quando subir para o Github**

:zap: ## Cenários que devem ser implementados

:zap:  Cadastrar um novo usuário

:zap:  Fluxo do cenário de "Cadastrar um novo usuário":

:zap: Acessar o site automation practice** http://automationpractice.com**

:zap:  Clicar no botão de Sign in

:zap: Preencher as informações de e-mail (não pode ser repetido)

:zap:  Clicar no botão Create an Account

:zap:  Preencher as informações do formulário de cadastro

:zap:  Clicar no botão Register

:zap: Validar que foi redirecionado para a url correta

:zap:  Validar exibição do texto 'Welcome to your account'



:zap: # Checklist

Para facilitar esse primeiro desafio, criei um checklist para te guiar. 
Espero que te ajude a não esquecer nenhum detalhe :)

:white_check_mark:  Criar uma nova pasta/diretório com o nome do desafio

:white_check_mark:  Abrir o pasta criada no Visual Studio Code

:white_check_mark: Configurar um novo projeto node

:white_check_mark: Instalar o Cypress no projeto

:white_check_mark:  Abrir o Cypress e gerar arquivos padrão

:white_check_mark:  Configurar arquivo cypress.json com as opções: baseUrl, experimentalSourceRewriting ewatchForFileChanges. Se quiser, pode adicionar o schema também.

:white_check_mark:  Configurar o arquivo support/index para exceções indesejadas

:white_check_mark:  Apagar as specs de exemplo geradas

:white_check_mark:  Criar um novo arquivo de testes

:white_check_mark:  Mapear os elementos necessários para interagir

:white_check_mark:  Interagir com os elementos mapeados, navegando pela página para executar o fluxo

:white_check_mark:  Instalar e configurar uma biblioteca para geração de dados fictícios

:white_check_mark:  Adicionar as asserções para validar que o cadastro foi finalizado corretamente

:white_check_mark: Adicionar os scripts para execução no modo interativo e no modo headless

:white_check_mark:  Conferir se o vídeo está sendo gerado corretamente

:white_check_mark:  Adicionar as bibliotecas do mochawesome

:white_check_mark:  Adicionar as configurações para gerar os arquivos do relatório

:white_check_mark:  Adicionar os scripts para geração dos relatórios em html

:white_check_mark:  Suba seu projeto no Github

:white_check_mark:  Configure as actions para executar os testes

:white_check_mark: Habilite o GH Pages

:white_check_mark: Adicione a action para publicar o relatório do mochawesome

:white_check_mark:  Lembre-se, para o resultado aparecer o arquivo do relatório deve ser index.html :)

:white_check_mark:  Crie uma descrição de seu projeto no Github com imagem ou vídeos da execução, tecnologias, tags e aprendizados



:zap: # Bibliotecas utilizadas:
#### :tw-26a1: mochawesome 
Para gerar o relatório dos testes realizados.

#### :tw-26a1: Chance
https://chancejs.com/

para gerar dados aleatórios para cadastro.

:zap: ## Execução do Teste:
<img src="https://media.giphy.com/media/TfjiLZcJ884JtiZbeO/giphy.gif" width="600" height="300" />

## Relatório gerado pode ser conferido em:
**https://rafael-braz.github.io/Desafio-capitulo-1/**

:zap::zap::zap::zap::zap::zap::zap::zap::zap::zap::zap::zap:






