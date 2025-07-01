let p_name = "BOOK";
let p_price = 10.99;
let p_qty = 3;
let total = p_price * p_qty;
let discount = total * 0.1;
let nettotal = total - discount;

console.log("----- Product Details -----");
console.log(`Product:           ${p_name}`);
console.log(`Price:             ₹${p_price}`);
console.log(`Quantity:          ${p_qty}`);
console.log(`Total:             ₹${total}`);
console.log(`Discount (10%):    ₹${discount}`);
console.log(`Net Total:         ₹${nettotal}`);