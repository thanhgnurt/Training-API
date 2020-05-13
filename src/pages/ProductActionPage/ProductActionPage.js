import React, { Component } from "react";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";

export default class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            status: false,
        };
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        let data = this.state;
        // let { history } = this.props
        callApi("products", "POST", data).then(response => {
            // history.goBack()
            console.log(response);

        })

    }
    render() {
        return (
            <div className="col-5 mt-5 addProduct">
                <div className="alert alert-light">
                    <h2>Add New Product</h2>
                </div>
                <form onSubmit={this.onSubmit} className="form form-group ">
                    <label>Name:</label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        aria-describedby="helpId"
                        onChange={this.onChange}
                        name="name"
                        value={this.state.value}
                    />
                    <label>Price:</label>
                    <input
                        type="number"
                        className="form-control mb-3"
                        aria-describedby="helpId"
                        onChange={this.onChange}
                        name="price"
                        value={this.state.value}
                    />
                    <label>Status :</label>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                defaultChecked
                                onChange={this.onChange}
                                name="status"
                                value={this.state.status}
                            />
              Stocking
            </label>
                    </div>
                    <div className='row'>
                        <div onClick={this.onSubmit}>

                        <Link to='product-list' type="submit" className="btn btn-primary mt-3 mx-2">
                            Submit
            </Link>
                    </div>
                    <div>

                    <Link to='product-list' className='btn btn-warning mt-3' >Cancel</Link>
                    </div>
                    </div>
                    


                </form>
            </div>
        );
    }
}
