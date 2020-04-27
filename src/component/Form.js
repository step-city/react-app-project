import React, { Component } from 'react'
import facelogo from '../assets/img/face.jpg';

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            job: '',
            gender: 1
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }
    submitForm = (event) => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
        event.preventDefault();
    }

    render() {
        const { name, job, gender } = this.state;

        return (
            <form onSubmit={this.submitForm} className="addForm">
                <label for="name">头像
                <div class="box">
                        <div class="back"></div>
                        <img src={facelogo} alt="头像" clas  sName="avator" />
                    </div>
                </label> 
                <label for="name">姓名
                    <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
                </label>
                <label>
                    性别
                    <select value={gender} onChange={this.handleChange}>
                        <option value="1">男</option>
                        <option value="2">女</option>
                    </select>
                </label>
                <label for="job">工作
                    <input type="text" id="job" name="job" value={job} onChange={this.handleChange} />
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

export default Form;