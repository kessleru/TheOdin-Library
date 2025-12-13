# 📚 The Odin Library

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Sobre o Projeto

Aplicação simples de biblioteca (Library) desenvolvida com **HTML5, CSS3 e JavaScript vanilla** como parte dos estudos do **The Odin Project**.

O objetivo é praticar **manipulação de DOM**, **event handling**, organização de lógica com **classe** e construção de uma UI funcional para cadastro e controle de leitura de livros.

### 🎯 O que dá para fazer

- **Adicionar livros** via modal (título, autor e status de leitura)
- **Listar livros** em formato de tabela/lista
- **Alternar status** de leitura (_Read_ / _Unread_) com um clique
- **Remover livros** individualmente

## ✨ Funcionalidades

### 🖥️ Interface

- Modal para cadastro de livros
- Fechamento do modal por botão e por clique fora do conteúdo
- Layout responsivo (esconde cabeçalho em telas menores e reorganiza cards)

### ⚙️ JavaScript

- Classe `Book` para modelar os dados (título, autor, lido/não lido)
- Renderização dinâmica de itens com `createElement` e `appendChild`
- Eventos de UI:
  - submit do formulário para adicionar livro
  - clique no status para alternar leitura
  - clique no ícone para excluir

## 📌 Observações

- Os livros ficam apenas em memória durante a sessão (ao recarregar a página, a lista é resetada).

---

⭐ **Projeto educacional em JavaScript vanilla (The Odin Project)**
