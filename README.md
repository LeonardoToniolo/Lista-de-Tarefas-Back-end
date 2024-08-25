# Aplicação de Lista de Tarefas - Back-end

Este projeto é o back-end de uma aplicação de lista de tarefas usando Node.js, Express, e SQLite.

## Configuração do projeto

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

## API Endpoints

- `GET /api/todos` - Retorna todas as tarefas.
- `POST /api/todos` - Adiciona uma nova tarefa. Requer um corpo JSON com `title`.
- `PUT /api/todos/:id` - Atualiza uma tarefa existente. Requer um corpo JSON com `title` e `completed`.
- `DELETE /api/todos/:id` - Remove uma tarefa pelo ID.

## Estrutura do Projeto

- `src/` - Diretório de código fonte.
  - `controllers/` - Funções de controlador para lidar com lógica de negócio.
  - `models/` - Modelos para representar entidades e interações com o banco de dados.
  - `routes/` - Definições de rotas da API.
  - `database.js` - Configuração e inicialização do SQLite.
  - `index.js` - Ponto de entrada do servidor.
