var aws = require('aws-sdk');
var mark = require('markup-js');

var config = require('./config.js');

var ses = new aws.SES({ region: 'eu-west-1' });
var s3 = new aws.S3();

exports.handler = function (event, context) {

  console.log("Event: " + JSON.stringify(event));

  // Check required parameters
  if (event.email === undefined) {
    context.fail('Bad Request: Missing required member: email');
    return;
  }

  // Make sure some expected results are present
  if (event.name === undefined) {
    event.name = event.email;
  }

  if (event.type === undefined) {
    event.type = "Freelance";
  }
  
  if (event.company === undefined) {
    event.company = "n/a";
  }

  if (event.subject === undefined) {
    event.subject = config.defaultSubject;

    if (event.subject === undefined) {
      event.subject = "Mail from {{name}}";
    }
  }

  console.log('Loading template from ' + config.templateKey + ' in ' + config.templateBucket);

  // Read the template file
  s3.getObject({
    Bucket: config.templateBucket,
    Key: config.templateKey
  }, function (err, data) {
    if (err) {
      // Error
      console.log(err, err.stack);
      context.fail('Internal Error: Failed to load template from s3.')
    } else {
      var templateBody = data.Body.toString();
      console.log("Template Body: " + templateBody);

      // Convert newlines in the message
      if (event.message != null) {
        event.message = event.message
        .replace("\r\n", "<br />")
        .replace("\r", "<br />")
        .replace("\n", "<br />");
      }

      // Perform the substitutions
      var subject = mark.up(event.subject, event);
      var company = mark.up(event.company, event);
      var type = mark.up(event.type, event);
      var message = mark.up(templateBody, event);

      var params = {
        Destination: {
          ToAddresses: [
            config.targetAddress
          ]
        },
        Message: {
          Subject: {
            Data: subject,
            Charset: 'UTF-8'
          }
        },
        Source: config.fromAddress,
        ReplyToAddresses: [
          event.name + '<' + event.email + '>'
        ]
      };

      var fileExtension = config.templateKey.split(".").pop();

      if (fileExtension.toLowerCase() == 'html') {
        params.Message.Body = {
          Html: {
            Data: message,
            Charset: 'UTF-8'
          }
        };
      } else if (fileExtension.toLowerCase() == 'txt') {
        params.Message.Body = {
          Text: {
            Data: message,
            Charset: 'UTF-8'
          }
        };
      } else {
        context.fail('Internal Error: Unrecognized template file extension: ' + fileExtension);
        return;
      }

      // Send the email
      ses.sendEmail(params, function (err, data) {
        if (err) {
          console.log(err, err.stack);
          context.fail('Internal Error: The email could not be sent.');
        } else {
          console.log(data); // successful response
          context.succeed('The email was successfully sent');
        }
      });
    }
  });
};
