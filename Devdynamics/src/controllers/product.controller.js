

let products = [
    { _id: '1', name: 'Product 1', price: 10, quantity: 100 },
    { _id: '2', name: 'Product 2', price: 20, quantity: 50 },
    { _id: '3', name: 'Product 3', price: 30, quantity: 75 },
    { _id: '4', name: 'Product 4', price: 40, quantity: 120 },
    { _id: '5', name: 'Product 5', price: 50, quantity: 200 }
  ];
  
  const addItemToInventory = (req, res) => {
    const { productId, name, price, quantity } = req.body;
  
    // Check if the product exists by ID
    let product = products.find(p => p._id === productId);
  
    // If product exists, check if name matches
    if (product) {
      if (product.name !== name) {
        return res.status(400).json({ message: 'Product name does not match the given ID' });
      }
      product.quantity += quantity;
    } else {
      // If product does not exist, add as a new product
      const newProduct = {
        _id: productId,
        name: name || 'New Product', // Use a default name if none is provided
        price: price || 0, // Use a default price if none is provided
        quantity: quantity
      };
      products.push(newProduct);
      product = newProduct;
    }
  
    res.json(products);
  };
  
  const removeItemFromInventory = (req, res) => {
    const { productId, quantity } = req.body;
    const product = products.find(p => p._id === productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (product.quantity < quantity) {
      return res.status(400).json({ message: 'Not enough quantity in inventory' });
    }
    product.quantity -= quantity;
    products = products.filter((product)=>product.quantity>0)
    res.json(products);
  };

  export {addItemToInventory, removeItemFromInventory}