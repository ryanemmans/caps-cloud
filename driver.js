'use strict';

const { Consumer } = require('sqs-consumer');

const queueUrl = 'URL';
// copy from messages URL

const consumer = Consumer.create({
  queueUrl: queueUrl,
  handleMessage: (message) => {
    console.log(message);
  },
});

consumer.start();

