import React from 'react'
class allProductLists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pro_price: 0,
            pro_count: 0,
            idx_pro_info: {
                name: ''
            }
        }
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

    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.onSubmitChild} >添加</button>
        )
    }
}
export default allProductLists;