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
7. [Licença](#licença)

## Introdução

O Aplicativo Conversor de Moedas oferece uma interface simples para converter entre diferentes moedas. Ele busca nomes de moedas, códigos  e taxas de câmbio de uma API para as conversões.

## Recursos

- **Seleção de Moeda**: Os usuários podem escolher entre uma lista de moedas para converter entre elas.
- **Conversão em Tempo Real**: As taxas de câmbio são buscadas de uma API externa para garantir precisão.
- **Design Responsivo**: O aplicativo foi projetado para funcionar perfeitamente em desktops e dispositivos móveis.

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/JeanCelin/Cotation
   cd cotation
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```
3. Configuração do Ambiente:

   Este projeto utiliza variáveis de ambiente para configurar links de APIs públicas. É necessário criar um arquivo '.env' e adicionar as chaves:
   ```plaintext
   VITE_API_KEY=https://economia.awesomeapi.com.br/json/last/
   VITE_API_COINS_NAME=https://economia.awesomeapi.com.br/json/available
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra o link no terminal com Ctrl + Click Esquerdo ou copie e cole no navegador para visualizar. Exemplo: (http://localhost:5173)

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
  
## Tecnologias
- HTML
- CSS
- JavaScript
- React
- Vite
- Axios
- IonIcons

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](https://github.com/JeanCelin/Cotation/blob/main/LICENSE) para mais detalhes.

# Autor
Jean Aloquio Celin
# Currency Converter App

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/JeanCelin/Cotation/blob/main/LICENSE)

This project is a simple currency conversion app built using React. It allows users to select a currency pair and perform conversions between them using real-time exchange rates obtained from an external API.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [APIs Used](#apis-used)
6. [Project Structure](#project-structure)
7. [License](#license)

## Introduction

The Currency Converter App provides a simple interface for converting between different currencies. It fetches currency names, codes, and exchange rates from an API for conversions.

## Features

- **Currency Selection**: Users can choose from a list of currencies to convert between.
- **Real-Time Conversion**: Exchange rates are fetched from an external API to ensure accuracy.
- **Responsive Design**: The app is designed to work seamlessly on desktops and mobile devices.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/JeanCelin/Cotation
   cd cotation
   ```
2. Install the dependencies:

   ```bash
   npm install
   ```
3.Environment Setup:

   This project uses environment variables to configure public API links. You need to create a '.env' file and add the keys:
   
   ```plaintext
   VITE_API_KEY=https://economia.awesomeapi.com.br/json/last/
   VITE_API_COINS_NAME=https://economia.awesomeapi.com.br/json/available
   ```

4. Start the development server:
   
   ```bash
   npm run dev
   ```

5. Open the link in the terminal with Ctrl + Left Click or copy and paste it into your browser to view. Example: (http://localhost:5173)

## Usage

 1.Select the currency pair you want to convert using the dropdown menus.
 2.Enter the amount in the first currency.
 3.The converted amount will be displayed automatically based on the current exchange rate.

## APIs Used

- **Currency Names API**: Fetches the list of currency names and codes for selection.
- **Exchange Rates API**: Retrieves real-time exchange rates for currency conversions.
  
## Project Structure

 The project structure is organized as follows:

- **App.jsx**: The main entry point that renders the `APIcoins` component.
- **APIcoins.jsx**: Component that handles currency selection and interactions with APIs.
- **APIMath.jsx**: Component responsible for performing currency conversions and displaying results.
- **Arquivos CSS**: Stylesheets for layout and design.
  
## Technologies
- HTML
- CSS
- JavaScript
- React
- Vite
- Axios
- IonIcons

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/JeanCelin/Cotation/blob/main/LICENSE) file for details

# Author
Jean Aloquio Celin


