var { exec } = require('child_process')
function execute (command, callback) {
  exec(command, (error, stdout, stderr) => { callback(stdout); });
};

module.exports = execute