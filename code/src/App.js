import React from 'react';

// Creating context
const MyContext = React.createContext()

// Provider component to be used as global wrapper
export class MyProvider extends React.Component{
  state = {
    name: "Adam",
    age: 37,
    musician: true ? "Yes" : "no"
  }
  render() {
    return(
      <MyContext.Provider value={{ ...this.state }}> 
        {this.props.children}
      </MyContext.Provider>     
    )
  }
};

// This is the application being wrapped with global state by MyProvider
const App = ()  => {
  const AppStyle = {
    backgroundColor: "pink",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  }
  return (
    <MyProvider>
      <div className="App" style={AppStyle}>
        <h1>Top component</h1>
        <p>Wrapped by MyProvider component with MyContext.Provider</p>
        <p>Holding global state</p>
        <Middle />
      </div>
    </MyProvider>
  );
};
export default App;

// Unused component that's just creating some distance in the component tree
const Middle = () => (
  <div style={{ background: "lightgreen", padding: "20px"}}>
    <h2>Middle component</h2>
    <p>Just a middle man</p>
    <Bottom />
  </div>
);

// Bottom level compoenent accessing global state via the context consumer
const Bottom = () => (
  <MyContext.Consumer>
    {(value) => (
      <div style={{ background: "lightblue", padding: "20px"}}>
        <h3>Bottom component</h3>
        <p>Wrapped by MyContext.Consumer </p>
        <p>Accessing global state without props </p>
        <ul>
          <li>
            Name: {value.name}            
          </li>
          <li>
            Age: {value.age}            
          </li>
          <li>
            Musician: {value.musician}            
          </li>
        </ul>
      </div>
    )}
  </MyContext.Consumer>
);
