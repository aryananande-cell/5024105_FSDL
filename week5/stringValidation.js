const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function checkUsername(username) {
  const original = username;
  const trimmed = username.trim();
  console.log('Original string:', original);
  console.log('Lowercase:', trimmed.toLowerCase());
  console.log('Uppercase:', trimmed.toUpperCase());
  if (trimmed.length < 3) {
    console.log('Username is too short.');
  } else {
    console.log('Username is valid.');
  }
}
