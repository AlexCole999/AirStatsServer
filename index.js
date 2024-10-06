const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const { name, phone, data } = req.body;

  // Логируем полученные данные
  console.log(req.body)
  console.log('data:', data)

  // Отправляем ответ
  res.send('Data transfered success');
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});