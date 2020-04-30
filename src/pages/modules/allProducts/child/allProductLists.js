import React from 'react'
import AllProductsJson from '../../../../mock/index'
import iceboxImg from '../../../../assets/img/face.jpg'
import '../../myProducts/child/myProdutLists.less'

class allProductLists extends React.Component {
    constructor(...args) {
        super(...args)

        this.state = {
            clickIdx: 0,
            pro_count: 1,
            idx_pro_info: [],
            warning_text: '',
            pro_price: 0,
        }
    }

    componentDidMount() {
        console.log('products导入 :>> ', AllProductsJson.products);
    }
    onSubmitChild = (e) => {
        //state存储的数据是在打开模态框的时候添加的
        let idx_pro_name = this.state.idx_pro_info.name;
        let idx_pro_price = this.state.pro_price;
        let idx_pro_count = this.state.pro_count;
        //数据传回父级
        this.props.onSubmitData({
            pro_name: idx_pro_name,
            pro_price: idx_pro_price,
            pro_count: idx_pro_count,
        })
    }

    addProInModal = () => {

    }

    render() {
        let Products = AllProductsJson.products;
        return (
            <ul className="listContent">
                {
                    Products.map((item, i) =>
                        <li className="productLi right_li" key={i}>
                            <img src={iceboxImg} alt="" className="productImg" />
                            <div className="productCont">
                                <div className="contLeft">
                                    <p className="pro_name">{item.name}</p>
                                    <span className="pro_desc">{item.description}</span>
                                </div>
                                <div className="contRight">
                                    <p className="price">￥{item.price}</p>
                                    <button className="btn btn-danger" data-idx={i} data-toggle="modal" data-target="#myModal" onClick={this.addProInModal}>立即购买</button>
                                </div>
                                <div style={{ clear: 'both' }}></div>
                            </div>
                        </li>
                    )
                }
            </ul>
            // <button type="button" className="btn btn-primary" onClick={this.onSubmitChild} >添加</button>
        )
    }
}
export default allProductLists;