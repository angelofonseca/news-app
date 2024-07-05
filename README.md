# News App

A aplicação permite aos usuários listar as notícias mais recentes, com a possibilidade de filtrar por categorias ou palavras-chave específicas. Cada notícia exibida inclui um link para acesso direto, a data de publicação e uma opção para marcar como favorita. Tudo isso é possível graças à integração com a API gratuita de notícias do IBGE v3, garantindo informações constantes e precisas.

[Visite a aplicação](https://your-news-dz7n4plel-angelo-fonsecas-projects.vercel.app/)

## Pré-requisitos

- Node.js v18.19.1;
- npm v10.2.4;

## Dependências

- Bootstrap v5.3.3;
- react-dom v18.3.1;
- react-icons v5.2.1;
- react-intersection-observer v9.10.3;
- react-query: 3.39.3;
- react-spinners: 0.14.1;

## Testes

Para realizar os testes foi utilizado o Vitest e Jest;

## Instalação

1. Clone o repositório e instale as dependências:

   ```bash
   git clone https://github.com/angelofonseca/news-app.git
   cd news-app
   npm i

## Modo de Desenvolvimento

1. Para iniciar o servidor de desenvolvimento:

   ```bash
   npm run dev

## Build para produção

1. Para criar e pré-visualizar uma build para produção:

   ```bash
   npm run build
   npm run preview

## Rodando o ESLint (Trybe)

Neste projeto utilizei as configurações de lint da Trybe

1. Para verificar problemas de lint:

   ```bash
   npm run lint
   npm run lint:fix

## Vite

  Este projeto foi inicializado com o Vite

1. Para criar um repositório com a versão mais atualizada do Vite:

   ```bash
   npm create vite@latest
