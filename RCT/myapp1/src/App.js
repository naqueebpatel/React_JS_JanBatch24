import './App.css';
import { DateDisplay, MessageDisplay } from './components/MessageDisplay';  //named import
import TextDisplay from './components/TextDisplay';            // default import
// import TextDisplay from "./components/TextDisplay";


//COMPONENTS?

// functional Component

// function TextDisplay(){   //react pascalCase
//    |
//    |    -->> LOGIC 
//    |
//    return (  --> UI
        //  {jsx territory}
//    )
// } 
// <TextDisplay />  --> self closing  --> <------- />

// return --> whenever we need to write js we use jsx--> HTML+JS---> {    }

// function TextDisplay(){

//   const text="HI REACT"
   
//   return <h1>{text}</h1>
// }





function App() {  //parent component
  return (
    <div className="App">
      HELLO WORLD!
    <TextDisplay/>
    <MessageDisplay/>
    <DateDisplay/>
    </div>
  );
}

export default App;
