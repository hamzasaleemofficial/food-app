/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.css';
import './Item.css';

const Items = ({item, bought ,handleBuyButton}) => {
 
    

  return (
    
      <li className={`list-group-item ${bought && "active"}`}>
        <span>
          {item}
        </span>
        <button type="button" className="btn btn-warning"
          onClick={handleBuyButton}
        >Buy</button>
      </li>
      
   
  )
}

export default Items