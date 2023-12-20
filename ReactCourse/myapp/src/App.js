// import { Component } from "react";
// class App extends Component {
//   //to show content on the screen
//   render() {
//     return <h1>Hello Boogey bads</h1>;
//   }
// }

// function App() {
//   return (
//     // using className not class to style html
//     // <h1 className="title-class">Title</h1>
//     //htmlFor instead of for
//     // <form>

//     //   <label htmlFor="name">Name</label>
//     //   <input type="text" id="name" />
//     // </form>

// );
// }

// export default App;

import Add from "./components/Add";
import Greetings from "./components/greetings";

function App() {
  return (
    <section>
      <Add />
      <Greetings />
      <Add />
    </section>
  );
}

export default App;
