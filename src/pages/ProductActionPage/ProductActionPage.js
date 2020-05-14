import React, { Component } from "react";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";

export default class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: "",
            price: "",
            status: false,
        };
    }

    componentDidMount(){
        let {match} = this.props
        let id = 0
        if (match) {
            
             id = match.params.id
             callApi(`products/${id}`, 'GET', null).then(response =>{
            
            
            let data = response.data
            
            this.setState({
                id: data.id,
                name: data.name,
                price: data.price,
                status: data.status
            })
            
        })
        }
        
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
        let {id}= this.state
        let data = this.state
        let { history } = this.props
        
        if (id) {
            console.log(id);
            callApi(`products/${id}`, 'PUT',{
               
                name: data.name,
                price: data.price,
                status: data.status
            }).then(response=>{
                history.goBack()
            })
            
        } else {
             data = {
            name: this.state.name,
            price:this.state.price,
            status:this.state.status
        }
        
        callApi("products", "POST", data).then(response => {
            history.goBack()
        

        })
        }
       

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
                        value={this.state.name}
                    />
                    <label>Price:</label>
                    <input
                        type="number"
                        className="form-control mb-3"
                        aria-describedby="helpId"
                        onChange={this.onChange}
                        name="price"
                        value={this.state.price}
                    />
                    <label>Status :</label>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={this.state.status}
                                onChange={this.onChange}
                                name="status"
                                
                            />
              Stocking
            </label>
                    </div>
                    <div className='row'>
                        <div onClick={this.onSubmit}>

                        <button  type="submit" className="btn btn-primary mt-3 mx-2">
                            Submit
            </button>
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
