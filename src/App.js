import AlbumFeature from "./features/Album";

function App() {
  // const age = 18
  // const isMale = true;
  // const student = {
  //   name: "K++"
  // };
  // const colors = ['red', 'green', 'blue'];
  return (
    <div className="App">
      <AlbumFeature />
      {/* <TodoFeature /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          oOKiTo
        </p>
        <p> Xin chap {student.name} {age} {isMale ? 'Male' : 'Female'}</p>
        {isMale ? <p>Male</p> : <p>Female</p>}
        {isMale && <p>Male</p>}
        {isMale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </div>
        )}
        {isMale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </>
        )}
        <ul>
          {colors.map(color => (<li style={{ color}}>
            {color}
          </li>))}
        </ul>
      </header> */}
    </div>
  );
}

export default App;
