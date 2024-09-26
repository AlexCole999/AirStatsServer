const express = require('express');
const app = express();
const port = 3000;

// Middleware для парсинга JSON тела запроса
app.use(express.json());

// Обработчик POST-запроса
app.post('/submit', (req, res) => {
  const params = req.body; // Получаем параметры из тела запроса
  console.log(params); // Выводим параметры в консоль

  res.send(params);
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});