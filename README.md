
## Testar build de aplicação SPA utilizando nginx server (Docker)


## 1 . Realize o build de sua aplicação

após feito, copie todos os arquivos e cole na pasta **build** desse repositório, conforme a imagem abaixo:


## Pasta destino:

![App Screenshot](https://i.imgur.com/dGLwyhc.png)


## 2. Subir o servidor 

Após ter os arquivos de build, através do terminal, basta acessar a pasta raiz e rodar os seguintes comandos abaixo:

``` docker build -t <app> .``` (Build da imagem docker)

``` docker run -d -p 8080:80 <app>``` (Subir contâiner utilizando o build da imagem)


## 3. Testar o endereço http://localhost:8080/<nomeapp>



