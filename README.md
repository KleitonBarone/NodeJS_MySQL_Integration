# Integração entre NodeJS e MySQL

O objetivo desse projeto é fazer a integração entre essas duas tecnologias em web

## De onde começar

Esse é um projeto JavaScript em NodeJs, que usa banco de dados mySQL, em front-end foi utilizado o framework "Bootstrap"

### Prerequisitos

NodeJS e Banco de Dados MySQL Instalados

### Instalando

Crie um BD com o nome 'projeto_nodejs' no mysql

Abra o arquivo "models/db.js" 

E na linha
```
const sequelize = new Sequelize('projeto_nodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
```

altere o 2° e 3° parametro para o seu login e senha do banco de dados


## Rodando

Feito os passos acima, Execute o comando 'node' no app.js

```
./projeto> node app.js
```
pronto, o projeto estara rodando em localhost, na porta 8081

caso queira alterar a porta do localhost, vá até o arquivo app.js

```
app.listen(8081, function(){
    console.log("Localhost rodando na porta 8081")
})
```
Altere o 1° parametro para a porta que desejar

## Autor

* **Kleiton Barone** - [GitHub](https://github.com/KleitonBarone)
