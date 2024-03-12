import { useContext } from 'react'
import './App.css'
import GrandParent from './components/GrandParent'
import { ThemeContext } from './context/ThemeContext'

const Avatar=()=>{
  return <h6>IMAGE HERE</h6>
}

const Details=()=>{
  return <h6>DETAILS HERE</h6>
}


// const Card=()=>{
//   return <> 
//   <Avatar/>
//   <Details/>
//   </>
// }

// const Card=({children})=>{


//   return (
//     <>
    
//     <h1>CARD COMPONENT</h1>
//     {children}
//     </>
//   )
// }

function App() {

  const {isDark}=useContext(ThemeContext);
  

  return (
    <div style={{border:"2px solid black",background:isDark?"white":"black",color:isDark?"black":"white"}}>
      {/* <Card>
          <Avatar/>
          <Details/>
      </Card> */}
      <GrandParent/>
    </div>
  )
}

export default App
