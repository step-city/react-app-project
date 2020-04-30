import React from 'react';
import ProductList from './child/myProdutLists'

class MyProducts extends React.Component {
    render() {
        return (
            <div className="myProducts">
                <h4>我的商品列表</h4>
                <ProductList/>
            </div>
        )
    }
}
export default MyProducts;