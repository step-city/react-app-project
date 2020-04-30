import React from 'react';
import AllProductsLi from './child/allProducts'

class AllProducts extends React.Component {
    render(){
        return (
            <div className="allProducts">
                <h4>所有商品列表</h4>
                <AllProductsLi/>
            </div>
        )
    }
}

export default AllProducts;