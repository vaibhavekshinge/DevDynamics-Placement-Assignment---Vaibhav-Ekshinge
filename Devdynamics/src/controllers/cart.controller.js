let cart = {};
let products = [
  { _id: '1', name: 'Product 1', price: 10, quantity: 100 },
  { _id: '2', name: 'Product 2', price: 20, quantity: 50 },
  { _id: '3', name: 'Product 3', price: 30, quantity: 75 },
  { _id: '4', name: 'Product 4', price: 40, quantity: 120 },
  { _id: '5', name: 'Product 5', price: 50, quantity: 200 }
];

const addItemToCart = (req, res) => {
  const { customerId, productId, quantity } = req.body;

  const product = products.find(p => p._id === productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  if (product.quantity < quantity) {
    return res.status(400).json({ message: 'Not enough quantity in inventory' });
  }

  if (!cart[customerId]) {
    cart[customerId] = [];
  }

  const existingItem = cart[customerId].find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart[customerId].push({ productId, quantity });
  }

  product.quantity -= quantity;

  // Calculate the total cart value
  const totalValue = cart[customerId].reduce((total, item) => {
    const cartProduct = products.find(p => p._id === item.productId);
    return total + (cartProduct.price * item.quantity);
  }, 0);

  res.json({ cart: cart[customerId], totalValue });
};

export { addItemToCart };
