import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // it will initial parent class props
    this.state = { //it is a big state obj which has all state variables.
      count: 0,
      count2:2
    };
    console.log(this.props.name+"child constractor");
  }

  componentDidMount(){
    console.log(this.props.name+"child componet");

  }
  render() {
    console.log(this.props.name+"child Render");

    return (
      <div className="user-card">
        <h1>count1: {this.state.count}</h1> {/*to acces the state variable */}
        <h1>count2: {this.state.count2}</h1>
        <button onClick={()=>{
            this.setState({
                count: this.state.count+1,
                count2: this.state.count2+1
            })
        }}>count1 increase</button>
        <h1>Mayank {this.props.name}</h1>
        <h2>28</h2>
      </div>
    );
  }
}

export default UserClass;
