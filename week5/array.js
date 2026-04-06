const cart = [];

function addItem(name, price) {
  cart.push({ name, price });
}
function viewCart() {
  let total = 0;
  cart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - $${item.price}`);
    total += item.price;
  });
  console.log('Total:', total);
}
function removeItem(index) {
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
  }
}
 
