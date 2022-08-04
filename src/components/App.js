import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Home username={user.name} city={user.city} color={user.color} />
//       <About bio={user.bio} links={user.links} />
//     </div>
//   );
// }

// export default App;

export default class App extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <Home username={this.user.name} city={this.user.city} color={this.user.color} />
        <About bio={this.user.bio} links={this.user.links} />
      </div>
    )
  }
}
