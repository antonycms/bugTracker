const sgMail = require('@sendgrid/mail');

const { apiKey, html, subject, text, to, from } = require('../config/SendGrid.config');

sgMail.setApiKey(apiKey);

async function sendEmail() {
  const msg = {
    to,
    from,
    subject,
    text,
    html,
  };

  await sgMail.send(msg);
}

module.exports = {
  sendEmail,
}
