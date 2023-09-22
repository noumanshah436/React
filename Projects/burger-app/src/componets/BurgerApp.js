import React, { useState } from "react";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import { ItemList } from "./data/items";
import Navbar from "./shared/Navbar";

function BurgerApp() {
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(7);
  const [itemList, setItemList] = useState(ItemList);

  const handlePrice = (price, item, type) => {
    if (type === "add") {
      setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
      setItemCount((prevItemCount) => prevItemCount + 1);
    } else {
      setTotalPrice((prevTotalPrice) => prevTotalPrice - price);
      setItemCount((prevItemCount) => prevItemCount - 1);
    }
    setItemList(handleItemsList(item, type));
  };

  const handleItemsList = (itemName, type) => {
    if (type === "add") {
      itemList.map((item) => {
        if (item.itemName === itemName) {
          item.increament();
        }
        return item;
      });
    } else {
      itemList.map((item) => {
        if (item.itemName === itemName) {
          item.decreament();
        }
        return item;
      });
    }
    return itemList;
  };

  const placeOrder = () => {
    if (window.confirm("Are sure! you want to place order.")) {
      setItemCount(0);
      setTotalPrice(3);
      for (const i in ItemList) {
        ItemList[i].count = 0;
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <Burger itemCount={itemCount} itemsList={itemList} />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="row mb-3">
            <Menu
              totalPrice={totalPrice}
              itemsList={itemList}
              itemCount={itemCount}
              handlePrice={handlePrice}
            />
          </div>

          <button
            disabled={itemCount === 0}
            onClick={placeOrder}
            className="btn btn-warning col-3 mx-auto mb-3"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default BurgerApp;
