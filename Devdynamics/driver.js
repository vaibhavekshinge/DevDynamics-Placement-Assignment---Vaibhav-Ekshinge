import axios from 'axios';

const baseURL = 'http://localhost:9000/api/v1';

const driver = async () => {
  try {
    // Adding a new item to inventory
    let response = await axios.post(`${baseURL}/product/addItem`, {
      productId: '6',
      name: 'Product 6',
      price: 60,
      quantity: 150
    });
    console.log('Add Item to Inventory:', response.data);

    // Adding an existing item to inventory
    response = await axios.post(`${baseURL}/product/addItem`, {
      productId: '1',
      name: 'Product 1',
      price: 10,
      quantity: 50
    });
    console.log('Add Existing Item to Inventory:', response.data);

    // Removing an item from inventory
    response = await axios.delete(`${baseURL}/product/removeItem`, {
      data: {
        productId: '1',
        quantity: 30
      }
    });
    console.log('Remove Item from Inventory:', response.data);

    // Adding items to cart
    response = await axios.post(`${baseURL}/cart/addToCart`, {
      customerId: '123',
      productId: '1',
      quantity: 2
    });
    console.log('Add Item to Cart:', response.data);

    response = await axios.post(`${baseURL}/cart/addToCart`, {
      customerId: '123',
      productId: '3',
      quantity: 1
    });
    console.log('Add Another Item to Cart:', response.data);

    // Applying a discount coupon
    response = await axios.post(`${baseURL}/coupon/applyDiscount`, {
      cartValue: 100,
      discountId: '2'
    });
    console.log('Apply Discount Coupon:', response.data);

  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
  }
};

driver();
