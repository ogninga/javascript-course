// must use special word children

const User = ({ img, name, hobbies, children }) => {
  console.log(name);
  return (
    <section>
      <img src={img} alt={name} />
      <h1> name: {name}</h1>
      <h3>hobbies: {hobbies}</h3>
      {children}
    </section>
  );
};
// made the user component and open and closing tag, putting the data in user kinda like an html document, and between the tags the children
function App() {
  return (
    <>
      <User
        img="https://th.bing.com/th/id/OIP.B29P-JotxZYlRA7smM4ghAHaE8?rs=1&pid=ImgDetMain"
        name="John"
        age={18}
        hobbies={["coding ", "reading ", "sleeping "]}
        realData={{ name: "alex", location: "new york" }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est harum
          repellendus quia dolorem doloribus consequatur error laudantium
          delectus ab mollitia.
        </p>
      </User>
    </>
  );
}

export default App;
