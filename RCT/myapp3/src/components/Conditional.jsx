import logo from './logo.svg';
import './App.css';

function App() {
  
  var component
  const isAuthenticated=false

  //TRUE-->LOGOUT
  //FALSE-->LOGIN

  // if(isAuthenticated){
  //   component=<h1>USER AUTHENTICATED</h1>
  // }else{
  //   component=<h1>USER NOT AUTHENTICATED</h1>
  // }

  return (
    <div className="App">
      {isAuthenticated?<h1>USER AUTHENTICATED</h1>:<h1>USER NOT AUTHENTICATED</h1>}
      <button>{isAuthenticated?"LOGOUT":"LOGIN"}</button>
    </div>
  );
}

export default App;
