import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {product, index} = this.props
        return (
            <tr>
            <th scope="row">{index++}</th>
        <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td className = 'text-center'>
              <div className={`badge badge-${product.status ? "primary" :"warning"}`}>
                  {product.status ? 'stocking' : 'out of stock'}
              </div>
            </td>
            <td>
              <button className='btn btn-outline-primary mr-2 pl-4 pr-4'  > Edit </button>
              <button className='btn btn-outline-danger' >Delete</button>
            </td>
          </tr>
      
        )
    }
}
