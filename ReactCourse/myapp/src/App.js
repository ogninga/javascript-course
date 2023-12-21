function App() {
  const userInfo = [
    {
      username: "Leslie",
      email: "test@gmail.com",
      location: "UK",
    },
    {
      username: "pookie",
      email: "test@gmail.com",
      location: "Uganda",
    },
    {
      username: "ray ray",
      email: "test@gmail.com",
      location: "Usa",
    },
  ];

  return (
    <>
      {userInfo.map((user) => (
        <ul key={Math.random() * 10}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
