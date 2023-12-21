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

// import Add from "./components/Add";
// import Greetings from "./components/greetings";

// import { Fragment } from "react";
// can use <> </> as a fragment as well.
function App() {
  const myName = "emmanuel";
  const multiply = (a, b) => a * b;
  const specialClass = "simple class";
  return (
    <>
      <h1>{myName}</h1>
      <p>2 * 4 = {2 * 4}</p>
      <p>My Firends List: {["alex", "john", "fuby"]}</p>
      <p>2 * 2 = {multiply(2, 2)}</p>
      <p className={specialClass}>a special class</p>
    </>

    // <>
    //   { fragments/* <Greetings />
    //   <Add /> */}
    // </>
  );
}

export default App;
