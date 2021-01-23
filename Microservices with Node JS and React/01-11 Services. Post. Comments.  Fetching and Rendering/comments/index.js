const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
/*
CORS - это пакет node.js для предоставления промежуточного программного обеспечения Connect / Express, 
которое можно использовать для включения CORS с различными параметрами 

cors - это мидлвар к express, библиотеке работающей на сервере 
Если стороннее апи не отдает CORS заголовки с клиентской части Вы его никак не запросите, но можно 
проксировать запрос у себя на сервере 

axios - HTTP-клиент на основе Promise (обещаний) для браузера и node.js 
*/

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {}; // объект, значениями ключей являются массивы объектов, например {'123': [ { id: '63796131', content: 'I am а comment' },    { id: 'e4d3a856', content: 'I am а comment 2' }  ]   }


app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []); // по id получаем массив объектов или пустой массив если id неизвестен // отсылаем
});

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body; // парсим body // деструктуризация объекта
  console.log('content - ', content);

  const comments = commentsByPostId[req.params.id] || []; // длядобавлени объектов в массив, по id получаем массив объектов, если таковой имеется или создаем пустой массив если id неизвестен
  console.log('comments || [] - ', comments);

  comments.push({ id: commentId, content }); // добовляем в массив новый объект
  console.log('comments.push - ', comments);
  
  commentsByPostId[req.params.id] = comments; // в объект commentsByPostId по полученному id добавляем массив объектов
  console.log('commentsByPostId - ', commentsByPostId);

  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});
