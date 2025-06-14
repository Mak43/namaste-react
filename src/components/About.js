import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//     return (
//         <div>
//             <h1>About Page</h1>
//             <h2>This is about page</h2>
//             <User name={'mayank from (function)'}/>
//             <UserClass name={'mayank from (class)'}/>
//         </div>
//     );
// }

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constractor");
  }
  componentDidMount(){
    console.log("parent componet");

  }
  render() {
    console.log("parent Render");

    return (
      <div>
        <h1>About Page</h1>
        <h2>This is about page</h2>
        <User name={"mayank from (function)"} />
        <UserClass name={"first child (class)"} />
        <UserClass name={"second child (class)"} />
        <UserClass name={"third child (class)"} />

      </div>
    );
  }
}
export default About;
