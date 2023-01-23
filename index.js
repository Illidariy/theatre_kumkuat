require('@babel/register');
require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app
  .listen(PORT)
  .on('error', (error) => {
    console.log('Ошибка подключения: ', error.message);
  })
  .on('listening', () => {
    console.log(`Сервер успешно запущен на ${PORT} порту`);
  });
