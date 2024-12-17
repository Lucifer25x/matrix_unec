import React from "react"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      c: 0
    }

    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  decrease(){
    if(this.state.c > 0){
      this.setState({c: this.state.c-1}) 
    }
  }

  increase(){
    this.setState({c: this.state.c+1})
  }

  render(){
    return(
      <div className="main">
       <button onClick={this.decrease}>-</button>
       <span>{this.state.c}</span>
       <button onClick={this.increase}>+</button>
      </div>
    )
  }
}

export default App
