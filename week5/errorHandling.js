const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function validateLogin(username, password) {
  try {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    if (!trimmedUsername || !trimmedPassword) {
      throw new Error('Username and password cannot be empty');
    }
    if (trimmedPassword.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
    console.log('Login successful');
  } catch (error) {
    console.error('Error:', error.message);
  }
}
rl.question('Username: ', username => {
  rl.question('Password: ', password => {
    validateLogin(username, password);
    rl.close();
  });
});
