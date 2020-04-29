//这里用来发送react-redux的action和数据,避免代码过于繁杂,把其他逻辑功能放到子组件实现
import React from 'react'
//导入子组件 
import ProductLists from './allProductLists'

class AllProducts extends React.Component{
    render(){
        // console.log(AllProductsJson);
        addProduct = (e) =>{
            //获得子组件传递的数据
            console.log(e)
            //数据传入函数
            // this.props.onSubmitData(e);
        }
        
        return(
            <div className="allProducts">
                 <ProductLists onSubmitData={this.addProduct} />
            </div>
        )
    }
}
export default AllProducts;