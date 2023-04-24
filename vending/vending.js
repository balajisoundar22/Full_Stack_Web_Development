class VendingMachine {
    constructor(stationeryItems) {
      this.stationeryItems = stationeryItems;
    }
  
    sale(itemId) {
      if (this.stationeryItems[itemId].stock > 0) {
        this.stationeryItems[itemId].stock--;
        return `Sale successful. ${this.stationeryItems[itemId].name} sold.`;
      } else {
        return `Sorry, ${this.stationeryItems[itemId].name} is out of stock.`;
      }
    }
  
    stock() {
      let totalStock = 0;
      for (let itemId in this.stationeryItems) {
        totalStock += this.stationeryItems[itemId].stock;
      }
      if (totalStock > 0) {
        return `Total stationery items in stock: ${totalStock}`;
      } else {
        return "Out of stock.";
      }
    }
  }
  
  // Example stationery items
  const stationery_items = {
    1: {name: "Pen", stock: 10},
    2: {name: "Pencil", stock: 15},
    3: {name: "Eraser", stock: 8},
    4: {name: "Four-line Notebook", stock: 2},
  };
  
  // Create a vending machine instance
  const vendingMachine = new VendingMachine(stationery_items);
  
  // Test the sale and stock methods
  console.log(vendingMachine.sale(4)); // Sale successful. Four-line Notebook sold.
  console.log(vendingMachine.stock()); // Total stationery items in stock: 23
  