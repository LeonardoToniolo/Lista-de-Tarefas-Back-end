const express = require('express');
const router = express.Router();
const db = require('../database');

// Listar todas as tarefas
router.get('/todos', (req, res) => {
    db.all('SELECT * FROM todos', [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Adicionar nova tarefa
router.post('/todos', (req, res) => {
    const { title } = req.body;
    db.run('INSERT INTO todos (title, completed) VALUES (?, ?)', [title, 0], function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: { id: this.lastID, title, completed: 0 }
        });
    });
});

// Atualizar tarefa
router.put('/todos/:id', (req, res) => {
    const { title, completed } = req.body;
    db.run(
        'UPDATE todos SET title = ?, completed = ? WHERE id = ?',
        [title, completed, req.params.id],
        function (err) {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({ message: 'success' });
        }
    );
});

// Deletar tarefa
router.delete('/todos/:id', (req, res) => {
    db.run('DELETE FROM todos WHERE id = ?', req.params.id, function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ message: 'success' });
    });
});

module.exports = router;