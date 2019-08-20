import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>姓名</th>
                <th>工作</th>
                <th>操作</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData ? props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button className="deleteBtn" onClick={props.removeCharacter.bind(this,index)}>Delete</button>
                    {/* <button className="deleteBtn" onClick={() => props.removeCharacter(index)}>Delete</button> */}
                </td>
            </tr>
        )
    }) : null

    return (
        <tbody>
            {rows}
        </tbody>
    )

}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props
        return (
            <div className="container">
                <table cellSpacing="0" cellPadding="0">
                    <TableHeader />
                    <TableBody characterData={characterData} removeCharacter={removeCharacter} />
                </table>
            </div>
        )
    }
}

export default Table