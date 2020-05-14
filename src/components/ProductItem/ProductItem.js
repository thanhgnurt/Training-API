import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class ProductItem extends Component { 
   onDelete = (product)=>{
     if (confirm(`Do you want to delete : ${product.name}?`)) { //eslint-disable-line
      
      this.props.onDelete(product.id)
     }
   
    }

    
  render() {
    let { product, index } = this.props;
  
    return (
      <tr>
        <th scope="row">{index++}</th>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td className="text-center">
          <div
            className={`badge badge-${product.status ? "primary" : "warning"}`}
          >
            {product.status ? "stocking" : "out of stock"}
          </div>
        </td>
        <td>
          <Link to={`product/${product.id}/edit`} className="btn btn-outline-primary mr-2 pl-4 pr-4">
            Edit
          </Link>
          <button 
          className="btn btn-outline-danger"
          onClick = {()=>this.onDelete(product)}
          >Delete</button>
        </td>
      </tr>
    );
  }
}
