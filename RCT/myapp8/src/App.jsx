import './App.css'
import GrandParent from './components/GrandParent'

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

const Card=({children})=>{


  return (
    <>
    
    <h1>CARD COMPONENT</h1>
    {children}
    </>
  )
}

function App() {
  

  return (
    <>
      {/* <Card>
          <Avatar/>
          <Details/>
      </Card> */}
      <GrandParent/>
    </>
  )
}

export default App
