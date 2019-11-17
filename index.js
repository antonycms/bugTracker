const Server = require('./src/app.js');

function init() {
  Server.listen(3000);
  console.log('server running on port 3000');
}

init();
