const from = 'antonyc828@gmail.com'
const subject = 'BugTracker report';
const text = 'BugTracker';
const html = '<strong>Novo reporte critico via BugTracker!</strong>';
const to = 'antonyc828@gmail.com'

const apiKey = process.env.SENDGRID_API_KEY;

module.exports = {
  subject,
  text,
  html,
  apiKey,
  from,
  to,
}
