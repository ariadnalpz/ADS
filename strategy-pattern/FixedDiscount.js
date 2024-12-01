// FixedDiscount.js
const DiscountStrategy = require('./DiscountStrategy');

class FixedDiscount extends DiscountStrategy {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  calculateDiscount(totalAmount) {
    return totalAmount - this.amount;
  }
}

module.exports = FixedDiscount;
