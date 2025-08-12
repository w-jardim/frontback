# Catálogo de Jogos - Full Stack (Node.js + Angular + MySQL)

![Badge](https://img.shields.io/badge/stack-Node.js%20%7C%20Angular%20%7C%20MySQL-blue)

Sistema completo para cadastro, edição, listagem e exclusão de jogos, com backend em Node.js, frontend Angular moderno e banco de dados MySQL.

## 🚀 Funcionalidades
- Cadastro, edição, exclusão e listagem de jogos
- Visual moderno, responsivo e intuitivo
- API RESTful com validação e tratamento de erros
- Integração total entre frontend e backend
- Documentação clara e código comentado

## 🖥️ Tecnologias Utilizadas
- **Backend:** Node.js, Express, MySQL2, dotenv, cors
- **Frontend:** Angular (standalone), CSS moderno, responsivo
- **Banco de Dados:** MySQL

## 📦 Estrutura do Projeto
```
frontback/
├── backend/           # API Node.js + Express
│   ├── controllers/   # Lógica de negócio
│   ├── routes/        # Rotas da API
│   ├── db.js          # Conexão MySQL
│   ├── server.js      # Inicialização do servidor
│   ├── .env           # Variáveis de ambiente
│   └── jogos.sql      # Script do banco
└── frontend/          # Aplicação Angular
    └── src/app/components/ # Componentes individuais
```

## ⚡ Como rodar o projeto

### 1. Banco de Dados
- Inicie o MySQL e execute o script `backend/jogos.sql` para criar o banco e a tabela.

### 2. Backend
```bash
cd backend
npm install
npm start
```
A API estará em `http://localhost:3000/api/games`

### 3. Frontend
```bash
cd frontend
npm install
ng serve
```
Acesse `http://localhost:4200` no navegador.

## 🧑‍💻 Competências Desenvolvidas
- Integração de sistemas (API + Frontend)
- Boas práticas de arquitetura e código limpo
- Validação, tratamento de erros e UX
- Organização, atenção a detalhes e autonomia

## 📄 Sobre o projeto
Este sistema simula um catálogo de jogos para colecionadores, atendendo demandas reais do mercado e desenvolvendo habilidades essenciais para o perfil full stack. O visual foi pensado para ser moderno, agradável e responsivo, proporcionando ótima experiência ao usuário.

---

> Desenvolvido por [Seu Nome] • 2025
