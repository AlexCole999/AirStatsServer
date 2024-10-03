const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const { name, email, data } = req.body;

  // Логируем полученные данные
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Data:', data);
  console.log(req.body)

  // Отправляем ответ
  res.send('Данные получены');
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});