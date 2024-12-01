// BulkDiscount.js
const DiscountStrategy = require('./DiscountStrategy');

class BulkDiscount extends DiscountStrategy {
  constructor(minAmount, discountAmount) {
    super();
    this.minAmount = minAmount;
    this.discountAmount = discountAmount;
  }

  calculateDiscount(totalAmount) {
    if (totalAmount >= this.minAmount) {
      return totalAmount - this.discountAmount;
    }
    return totalAmount;  // No hay descuento si no alcanza el monto mínimo
  }
}

module.exports = BulkDiscount;
