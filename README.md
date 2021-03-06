# engsofttycoon
Trabalho de Engenharia de Software, disciplina ofertada pelo DCC/UFMG em 2017/2,  prof. Rodolfo

## Links para acompanhamento do projeto:

* [Trello](trello.com/eng_software2017)
* [Planilha de contatos](docs.google.com/spreadsheets/d/1o-FtVjZzmiUqtzsMbBGJ4ocResrbMrBqCtUN3xDiZSM/edit#gid=0)
* [Página do Rodolfo](homepages.dcc.ufmg.br/~rodolfo/es-2-17/es-2-17.htm)
* [Repositório](github.com/eugeniopacceli/engsofttycoon)
* [Pasta Google Drive](drive.google.com/drive/folders/0B83xNATS5W6jQjhGek9hcmVqd28?usp=sharing)
* [Planilha de Avaliação](https://docs.google.com/spreadsheets/d/1C1qcWYlcDhfdcZNraGaeW1YID4x9zbFHFrrQXxMcvXc/edit#gid=855060628)
* [Design Document](https://docs.google.com/document/d/1kkdGsNXQxhenMFEwX-SnHTRWGV3bm1vIrJPRxLH6OAM/edit)
* [Plano de Avaliação](https://docs.google.com/document/d/12PhlDh9r8kjcU-olnjghmW_XKf8yBeo--OMJ9nmgQlw/edit#heading=h.o2xk5lk3ddb7)

Link para os branches:
[Eng Soft Tycoon Git Branches](https://github.com/eugeniopacceli/engsofttycoon/branches)

# Tutoriais e dicas para uso da ferramenta Git

* [PDF de ajuda](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
* [Git Tips](https://github.com/git-tips/tips)

## Instalação

* [Melhor Git para Windows](https://git-for-windows.github.io/)
* [Distribuição do Git original para Windows/Mac/Linux](https://git-scm.com/)

## Configuração

Depois de instalar o git, não se esqueça de executar os comandos abaixo:

```
git config --global user.name "[name]"
```
*Configura o nome que aparecerá como autor dos commits e envios que você fizer*

```
git config --global user.email "[email address]"
``` 
*Configura o email do autor para seus commits, coloque o mesmo email que você usou no GitHub para contar no seu portfolio* 

## Tabela rápida

Comandos mais simples e mais usados para o git:

*Todos os comandos, exceto o primeiro, assumindo que você está na raiz do diretório do projeto*

Tarefa | Comando
------------ | -------------
Clonar repositório (baixar os arquivos do projeto) | git clone <url>
Atualizar arquivos locais com modificações externas | git pull
Verificar diferenças da sua edição | git diff .
Adicionar suas modificações ao git | git add .
Commitar (registrar) e comentar o que você fez | git commit -am "<Comentário descrevendo alterações>"
Enviar o que você fez, após commitar | git push

Para resolver conflitos de versionamento no git é fácil, a mensagem de erro mostrará os arquivos conflitantes, você deverá abri-los num editor de texto, achar a parte que o git deixou marcada e escolher, no texto deixado pelo git no meio do seu código, entre a modificação local (sua) e a que está no repositório atualmente (e que você não tinha recebido no git pull, pois alguem enviou recentemente). Depois sigua o fluxo normal para enviar (git add, git commit, git push).
