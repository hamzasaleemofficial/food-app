/* eslint-disable react/prop-types */
import './FoodInput.css';

const FoodInput = ({handleOnKeyDown}) => {

 
  return (
    <input 
        className="input-box"  
        type="text" 
        placeholder="Add food..." 
        onKeyDown={handleOnKeyDown}
        />
  )
  
}

export default FoodInput