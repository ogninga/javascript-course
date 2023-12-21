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

// import { Fragment } from "react";
// can use <> </> as a fragment as well.
function App() {
  return (
    <>
      <Greetings />
      <Add />
    </>
  );
}

export default App;
