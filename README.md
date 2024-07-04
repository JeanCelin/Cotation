# Aplicativo Conversor de Moedas

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/JeanCelin/Cotation/blob/main/LICENSE)

Este projeto é um aplicativo simples de conversão de moedas construído utilizando React. Ele permite aos usuários selecionar um par de moedas e realizar conversões entre elas utilizando taxas de câmbio em tempo real obtidas de uma API externa.

## Sumário

1. [Introdução](#introdução)
2. [Recursos](#recursos)
3. [Instalação](#instalação)
4. [Uso](#uso)
5. [APIs Utilizadas](#apis-utilizadas)
6. [Estrutura do Projeto](#estrutura-do-projeto)
7. [Contribuições](#contribuições)
8. [Licença](#licença)

## Introdução

O Aplicativo Conversor de Moedas oferece uma interface amigável para converter entre diferentes moedas. Ele busca nomes de moedas, códigos  e taxas de câmbio de uma API para as conversões.

## Recursos

- **Seleção de Moeda**: Os usuários podem escolher entre uma lista de moedas para converter entre elas.
- **Conversão em Tempo Real**: As taxas de câmbio são buscadas de uma API externa para garantir precisão.
- **Design Responsivo**: O aplicativo foi projetado para funcionar perfeitamente em desktops e dispositivos móveis.

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/JeanCelin/Cotation
   cd aplicativo-conversor-de-moedas
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o aplicativo.

## Uso

1. Selecione o par de moedas que deseja converter utilizando os menus dropdown.
2. Insira o valor na primeira moeda.
3. O valor convertido será exibido automaticamente com base na taxa de câmbio atual.

## APIs Utilizadas

- **API de Nomes de Moedas**: Busca a lista de nomes e códigos de moedas para seleção.
- **API de Taxas de Câmbio**: Obtém taxas de câmbio em tempo real para as conversões de moeda.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

- **App.jsx**: Ponto de entrada principal que renderiza o componente `APIcoins`.
- **APIcoins.jsx**: Componente que gerencia a seleção de moedas e interações com APIs.
- **APIMath.jsx**: Componente responsável por realizar as conversões de moeda e exibir os resultados.
- **Arquivos CSS**: Folhas de estilo para layout e design.

## Contribuições

Contribuições são bem-vindas! Por favor, faça um fork do repositório e envie um pull request com suas melhorias.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](https://github.com/JeanCelin/Cotation/blob/main/LICENSE) para mais detalhes.
