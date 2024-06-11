let coupons = [
  { _id: '1', discountPercentage: 10, maxDiscountCap: 50 },
  { _id: '2', discountPercentage: 15, maxDiscountCap: 75 },
  { _id: '3', discountPercentage: 20, maxDiscountCap: 100 },
  { _id: '4', discountPercentage: 25, maxDiscountCap: 125 },
  { _id: '5', discountPercentage: 30, maxDiscountCap: 150 }
];

const applyDiscountCoupon = (req, res) => {
  const { cartValue, discountId } = req.body;
  console.log(discountId);
  const coupon = coupons.find(c => c._id === discountId);
  if (!coupon) {
    return res.status(404).json({ message: 'Discount coupon not found' });
  }
  let discountAmount = (cartValue * coupon.discountPercentage) / 100;
  if (discountAmount > coupon.maxDiscountCap) {
    discountAmount = coupon.maxDiscountCap;
  }
  const discountedPrice = cartValue - discountAmount;
  res.json({ discountedPrice });
};

export { applyDiscountCoupon };
