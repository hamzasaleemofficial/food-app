/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.css';
import Items from './Items';
import { useState } from 'react';



const FoodItem = ({items}) => {
  const [activeItem, setActiveItem] = useState([]);
  console.log(activeItem);
  const onBuyButton = (item) => {
    const newItem = [...activeItem, item];
    setActiveItem(newItem);
  }

  return (
  
    <ul className="list-group">
    {
        Array.isArray(items)? 
        
        items.map((item, index) =>{
          return(
            <Items key={index} item={item} 
            bought={activeItem.includes(item)} 
            handleBuyButton={() => {onBuyButton(item)}}/>
          )
        }) : <p>This is not an array</p>
    }
    
  </ul>
    
  )
}

export default FoodItem