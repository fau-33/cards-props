# Projeto Cards com Props

## Descrição

Este é um projeto simples desenvolvido com React.js (Next.js) que demonstra a utilização de componentes de cartão (`CardProduto`) com propriedades (props) para exibir informações de produtos como nome, preço, categoria e imagem.

## Tecnologias Utilizadas

- React.js
- Next.js
- CSS Modules

## Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente:

1.  **Clone o repositório** (se aplicável, caso contrário, navegue até a pasta do projeto):

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd cards-props
    ```

2.  **Instale as dependências**:

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Execute o servidor de desenvolvimento**:

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    O projeto estará disponível em `http://localhost:3000` (ou outra porta, se configurado).

## Estrutura do Projeto

```
. (raiz do projeto)
├── public/
│   └── assets/             # Imagens dos produtos
├── src/
│   └── app/
│       ├── components/     # Componentes React (ex: CardProduto.jsx)
│       ├── globals.css     # Estilos globais
│       ├── layout.js       # Layout principal da aplicação
│       ├── page.js         # Página principal da aplicação
│       └── page.module.css # Estilos específicos da página principal
├── jsconfig.json           # Configuração de aliases de caminho para módulos
├── next.config.mjs         # Configuração do Next.js
├── package.json            # Dependências e scripts do projeto
└── README.md               # Este arquivo
```
