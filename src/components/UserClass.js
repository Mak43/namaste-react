import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // it will initial parent class props
    this.state = { //it is a big state obj which has all state variables.
      count: 0,
      count2:2,
      userInfo:{
        name:"May"
      }
    };
    console.log(this.props.name+"child constractor");
  }

  async componentDidMount(){
    console.log(this.props.name+"child componet");
    const data = await fetch("https://api.github.com/users/mak43");
    const json = await data.json();
    this.setState({
        userInfo:json
    })
    console.log(json);
    this.timer = setInterval(()=>{
        console.log("class krte raho");
    },1000);
  }
  componentWillUnmount(){
    console.log("will unmount done");
    clearInterval(this.timer);
  }
  render() {
    console.log(this.props.name+"child Render");

    return (
      <div className="user-card">
        <UserContext.Consumer>
          {(user)=><h1>{user.loggedInUser}</h1>}
        </UserContext.Consumer>
        <h1>count1: {this.state.count}</h1> {/*to acces the state variable */}
        <h1>count2: {this.state.userInfo.login}</h1>
        <button onClick={()=>{
            this.setState({
                count: this.state.count+1,
            })
        }}>count1 increase</button>
        <h1> {this.state.userInfo.created_at}</h1>
        <h2>28</h2>
      </div>
    );
  }
}

export default UserClass;
