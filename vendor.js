'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const sns = new AWS.SNS();

const topic = 'arn...';

const payload = {
  Message: 'Hello from Node!',
  TopicArn: topic,
};

sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  });
