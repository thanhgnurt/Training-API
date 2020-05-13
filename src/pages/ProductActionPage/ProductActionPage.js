import React, { Component } from 'react'

export default class ProductActionPage extends Component {
    render() {
        return (
            <div className='col-5 mt-5 addProduct'>
                <div className='alert alert-light'>
                    <h2>Add New Product</h2>
                </div>
                <div className="form form-group ">
                    <label>Name:</label>
                    <input type="text" className="form-control mb-2" aria-describedby="helpId" />
                    <label>Price:</label>
                    <input type="number" className="form-control mb-3" aria-describedby="helpId" />
                    <label>Status :</label>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue="checkedValue" defaultChecked />
                                Stocking
  </label>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </div>
            </div>


        )
    }
}
