const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {

  let data = req.body

  // Получаем ключ
  let key = Object.keys(data)[0];

  // Получаем значение по ключу
  let value = data[key];

  // Логируем полученные данные
  console.log('request:', data)
  console.log('key:', key)
  console.log('value:', value)

  // Парсим ключ
  let parcedKeys = Object.keys(data)[0].split(',')
  console.log(parcedKeys)

  // Парсим значение
  console.log(value.split(';'))

  // Отправляем ответ
  res.send('Data transfered success');
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});