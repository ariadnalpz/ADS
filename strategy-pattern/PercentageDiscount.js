// PercentageDiscount.js
const DiscountStrategy = require('./DiscountStrategy');

class PercentageDiscount extends DiscountStrategy {
  constructor(percentage) {
    super();
    this.percentage = percentage;
  }

  calculateDiscount(totalAmount) {
    return totalAmount - (totalAmount * (this.percentage / 100));
  }
}

module.exports = PercentageDiscount;
