import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>備品名</th>
        <th>個数</th>
        <th>個数を変更</th>
        <th>備品一覧から削除</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.furnitureData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.numberOf}</td>
        <td>
          <button onClick={() => props.changeFurniture(index)}>変更</button>
        </td>
        <td>
          <button onClick={() => props.removeFurniture(index)}>削除</button>
        </td>
      </tr>
    )
  })
  
  return (
  <tbody>{rows}</tbody>
  )
}

class Table extends Component {
  render() {
    return (
      <>
        <h2>備品一覧</h2>
        <table>
          <TableHeader />
          <TableBody
            furnitureData={this.props.furnitureData}
            changeFurniture={this.props.changeFurniture}
            removeFurniture={this.props.removeFurniture} />
        </table>
      </>
    )
  }
}

export default Table