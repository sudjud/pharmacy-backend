const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
mongoose.connect("mongodb+srv://khalid:1234@cluster0.qcris2c.mongodb.net/pharmacy?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(port, () => {
    console.log(`Сервер запущен на localhost:${port}`);
  })
})
  .catch(() => console.log('Ошибка при соединении с сервером'));

app.use(require('./routes/index'))