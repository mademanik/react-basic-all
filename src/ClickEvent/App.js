function App() {
  const title = "Welcome to my app";
  const age = 20;
  const link = "http://google.com";

  const clickMe = (name) => {
    console.log(`Hello ${name}`);
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <h1>{age}</h1>
      <a href={link} className="href">
        Welcome to my website
      </a>
      <button
        onClick={() => {
          clickMe("Made Manik");
        }}
      >
        Click Button
      </button>
    </div>
  );
}

export default App;
