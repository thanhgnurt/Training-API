import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import callApi from "./../../utils/apiCaller";
class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    callApi("products", "GET", []).then((response) => {
      this.setState({
        products: response.data,
      });
    });
  }

  render() {
    // let products = []
    // let {products} = this.props
    let { products } = this.state;

    return (
      <div className="col-sm-12">
        <Link to="/add-product">
          <button type="button" className="btn btn-info mt-5 mb-3">
            <i className="fa fa-plus-square mr-2 text-warning" />
            Add Product
          </button>
        </Link>
        <div>
          <div className="text-center">
            <h3 className="alert alert-success text-center col-6">
              List Products In Your Cart
            </h3>
          </div>
          <ProductList>{this.showProducts(products)}</ProductList>
        </div>
      </div>
    );
  }
  showProducts = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} />;
      });
    }
    return result;
  };
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, null)(ProductListPage);
