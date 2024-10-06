const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {

  try {
    console.log(req.body)
    // let data = req.body

    // // Получаем ключ
    // let key = Object.keys(data)[0];
    // let value = data[key];

    // // Парсим ключ
    // let parcedKeys = Object.keys(data)[0].split(',')
    // console.log('parcesKeys:', parcedKeys)

    // // Парсим данные внутри ключа
    // let name = parcedKeys[0].split(':')
    // let email = parcedKeys[1].split(':')
    // console.log('name:', name)
    // console.log('email:', email)

    // // Парсим значение
    // let parcedValue = value.split(';')
    // console.log('parcedValue:', parcedValue)

    // // Парсим данные внутри значения ---->>>>

    // // Парсим время
    // let dateTime = parcedValue[0]
    // const year = dateTime.slice(0, 4);   // 
    // const month = dateTime.slice(4, 6);  // 
    // const day = dateTime.slice(6, 8);    // 
    // const hours = dateTime.slice(8, 10); // 
    // const minutes = dateTime.slice(10, 12); // 
    // const seconds = dateTime.slice(12, 14); // 
    // const timeResult = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    // console.log('time:', timeResult); // 

    // // Температура
    // let temperature = parcedValue[1].split('=')[1]
    // console.log('temperature:', temperature)

    // // Влажность в %
    // let humidity = parcedValue[2].split('=')[1]
    // console.log('humidity:', humidity)
    // // Давление в Кпа
    // let pressure = parcedValue[3].split('=')[1]
    // console.log('pressure:', pressure)
    // // Влажность в %
    // let windSpeed = parcedValue[4].split('=')[1]
    // console.log('windSpeed:', windSpeed)
    // // Влажность в %
    // let windDirection = parcedValue[5].split('=')[1]
    // console.log('windDirection:', windDirection)
    // // Влажность в %
    // let TSP = parcedValue[6].split('=')[1]
    // console.log('TSP:', TSP)
    // // Влажность в %
    // let pm10 = parcedValue[7].split('=')[1]
    // console.log('PM10:', pm10)
    // // Влажность в %
    // let pm25 = parcedValue[8].split('=')[1]
    // console.log('PM2.5:', pm25)
    // let noize = parcedValue[9].split('=')[1]
    // console.log('noize:', noize)

    // // Отправляем ответ
    res.send('Data transfered success');
  }
  catch { console.log(error) }
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});