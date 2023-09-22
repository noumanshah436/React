class BurgerItem {
  constructor(id, itemName, price) {
    this.id = id;
    this.itemName = itemName;
    this.price = price;
    this.count = 0;
  }

  increament = () => {
    this.count += 1;
  };

  decreament = () => {
    this.count -= 1;
  };
}
export const ItemList = [
  new BurgerItem(1, "Lectuce", 0.5),
  new BurgerItem(2, "Bacon", 1.0),
  new BurgerItem(3, "Cheese", 0.5),
  new BurgerItem(4, "Meat", 2.0),
];
