import React from 'react'
import Bacon from '../BurgerItems/Bacon'
import Cheese from '../BurgerItems/Cheese'
import Lactuce from '../BurgerItems/Lactuce'
import Meat from '../BurgerItems/Meat'


export default function getItems (items, itemCount) {
  let itemsdiv = []
  if (itemCount > 0) {
    
    for (const item in items) {
      let i = 0
      while (i < items[item].count) {
        if (items[item].itemName === 'Lectuce') {
          itemsdiv.push(<Lactuce key={`${items[item].itemName}-${i}`} />)
        } else if (items[item].itemName === 'Bacon') {
          itemsdiv.push(<Bacon key={`${items[item].itemName}-${i}`} />)
        } else if (items[item].itemName === 'Cheese') {
          itemsdiv.push(<Cheese key={`${items[item].itemName}-${i}`} />)
        } else {
          itemsdiv.push(<Meat key={`${items[item].itemName}-${i}`} />)
        }
        i += 1
      }
    }
  } else {
    itemsdiv = (
      <div className="item py-3">
        <p className="text-center">No items</p>
      </div>
    )
  }
  return itemsdiv
}
