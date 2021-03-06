import React from 'react'
import {Link} from 'react-router-dom'
import data from '../data'

export default function ProductScreen(props) {
  const product = data.products.find((product) => product._id === props.match.params.id)
  
  return (
    <div>
      <div className='back-to-results'>
        <Link to="/">Back to Results</Link>
      </div>
      <div className='details'>
      <div className='details-image'>
        <img src={product.image} alt={product.name}/>
      </div>
      <div className='details-info'>
        <ul>
          <li>
            <h4>{product.name}</h4>
          </li>
          <li>{product.rating} Stars ({product.numReviews} Reviews)</li>
          <li>Price: <b>${product.price}</b></li>
          <li>Description: {product.description}</li>
        </ul>
      </div>
      <div className='details-order'>
        <ul>
          <li>Price: {product.price}</li>
          <li>Status: {product.status}</li>
          <li>Qty: 
            <select>
              <option>1</option>  
              <option>2</option>  
              <option>3</option>  
              <option>4</option>  
            </select>
          </li>
          <li>
            <button className='button primary'>Add to Cart</button>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}
