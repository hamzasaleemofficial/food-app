

import { useState } from 'react';
import './App.css'
import ErrorMessage from './components/ErrorMessage';
import FoodInput from './components/FoodInput';
import FoodItem from './components/FoodItem'



//const foodItems = ['Biryani', 'Chicken Tikka Masala', 'Vegetable Korma'];

function App() {

  const [foodItems, setFoodItems] = useState(['Biryani','Chicken Tikka Masala']); // initial state of the array
  const handleOnKeyDown = (e) => {
    if(e.key === "Enter"){
      let newFoodItem = e.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems)
      console.log(`Adding ${foodItems} to the list`);
      e.target.value = "";
      
      // Reseting input field after adding item to the list
      

    }
    
  }

  return (
   
    <div className="container">
    <h1>Healthy Food</h1>
      <FoodInput handleOnKeyDown={handleOnKeyDown}/>
      <ErrorMessage items={foodItems}/>
      <FoodItem items={foodItems}  />
      
    </div>
  )
}

export default App
