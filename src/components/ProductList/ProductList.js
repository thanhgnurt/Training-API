import React, { Component } from 'react'


export default class ProductList extends Component {
    render() {
        return (
            <table className="table tablee table-striped table-bordered table-hover text-center">
                <thead className='thead-dark '>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Identify</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className=''>
                    {this.props.children}
                </tbody>
              </table>

        )
    }
}
