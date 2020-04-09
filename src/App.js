import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    // 備品一覧
    furnitures: [
      {
        name: 'LANケーブル',
        numberOf: 30,
      },
      {
        name: 'モニタ',
        numberOf: 10,
      },
      {
        name: 'HDMIケーブル',
        numberOf: 15,
      },
      {
        name: 'ノートPC',
        numberOf: 5,
      },
    ],
    // 備品の変更モード
    changeFurnitureFlag: false
  }
  
  changeFurniture = index => {
    alert(index)
    this.setState({
      changeFurnitureFlag: true
    })
  }

  // 備品の削除
  removeFurniture = index => {
    const newFurnitures = this.state.furnitures.filter((furniture, i) => {
      return i !== index
    })
    this.setState({
      furnitures: newFurnitures      
    })
  }

  // 備品情報の変更
  changeFurniture = (index) => {
    let newFurnitures = this.state.furnitures.slice()
    let newNumberOf = newFurnitures[index].numberOf;
    newNumberOf = parseInt(prompt('個数を入力してください。', newFurnitures[index].numberOf))
    if (isNaN(newNumberOf)) {
      newNumberOf = newFurnitures[index].numberOf
      alert('数字を入力してください！')
    }
    
    newFurnitures[index].numberOf = newNumberOf
    this.setState({
      furnitures: newFurnitures
    })
  }

  // 備品の追加
  addFurniture = furniture => {
    let newFurnitures = this.state.furnitures.slice()
    newFurnitures.push(furniture)
    this.setState({
      furnitures: newFurnitures
    })
  }

  render() {
    return (
      <div className="container">
        <h1>備品管理Webアプリ</h1>
        <p>備品数を管理するWebアプリです。</p>
        <Table
          furnitureData={this.state.furnitures}
          changeFurniture={this.changeFurniture}
          removeFurniture={this.removeFurniture} />
        <Form 
          addFurniture={this.addFurniture} />
      </div>
    )
  }
}

export default App
