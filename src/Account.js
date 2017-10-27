import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0
    };
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  deposit() {
    let depositAmount = parseInt(this.inputBox.value, 10);
    this.setState({
      balance: this.state.balance + depositAmount
    });
  }

  withdraw() {
    let withdrawalAmount = parseInt(this.inputBox.value, 10);
    if (withdrawalAmount <= this.state.balance) {
      this.setState({
        balance: this.state.balance - withdrawalAmount
      });
    } else {
      this.setState({
        balance: 0
      });
    }
  }

  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input)=>this.inputBox=input} />
        <input type="button" value="Deposit" onClick={this.deposit}/>
        <input type="button" value="Withdraw" onClick={this.withdraw} />
      </div>
    )
  }
}
