const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validatePassword(password) {
  if (password.length < 6) {
    console.log('Invalid password');
  } else {
    console.log('Valid password');
  }
}

rl.question('Password: ', password => {
  validatePassword(password.trim());
  rl.close();
});
