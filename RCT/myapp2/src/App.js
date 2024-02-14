import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";

// function Display() {
//   return <h1> REACT DAY 2</h1>;
// }

// const SumDisplay = (props) => {
//   console.log(props)
//   const result=props.num1+props.num2

//   return <h1>{result}</h1>;
// };

// const SumDisplay = ({num1,num2}) => {    //props--> {num1: 50, num2: 100}-->Destructuring?
//   const result=num1+num2

//   return <h1>{result}</h1>;
// };

// // props?
// THE VALUE OR AN OBJECT WHICH IS PASSED FROM ONE COMPONENT TO ANOTHER COMPONENT IS CALLED PROP in the form of Objects.

function App() {
  //ONE COMPONENT CAN INCLUDE MULTIPLE COMPONENTS.
  return (
    // territory?-->JSX
    // <div style={{border:"1px solid black"}}>
    // {/* React Fragments? */}
    // {/* <>    </> */}
    // <Display/>
    // <Display/>
    // </div>

    // <>
    // <Display/>
    // <Display/>
    // </>

    // SumDisplay(50,100)
    // <>
    // <SumDisplay num1={50} num2={100} />
    // <SumDisplay num1={200} num2={300} />
    // </>

    <div className="App">
      <MyButton btnText={"Click Me!"}  bgColor={"yellow"} />
      <MyButton btnText={"Submit!"} bgColor={"green"} />
      <MyButton btnText={"Cancel!"}  bgColor={"blue"} />
    </div>
  );
}

export default App;

// Event Handling in react?
// Conditional Rendering


// EVENT HANDLE ON CLICK--->
// CLICK ME--> alert("bTN 1 CLICKED")
// Submit--> alert("bTN 2 CLICKED")
// Cancel--> alert("bTN 3 CLICKED")
