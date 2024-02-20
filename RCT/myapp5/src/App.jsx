import { useState } from 'react'
import './App.css'

function App() {

  // const [name,setName]=useState("");
  // const [password,setPassword]=useState("")
  const [formValue, setFormValue] = useState({
    formName: "",
    formEmail: "",
    formPassword: ""
  })
  const [data,setData]=useState([])


  // const handleNameChange=(event)=>{
  //   console.log(event)
  //   setFormValue()
  //   // console.log(event.target.value)
  //   // setName(event.target.value)
  //   // console.log("handle name")
  // }

  // const handlePasswordChange=(event)=>{
  //   // console.log(event.target.value)
  //   // setPassword(event.target.value)
  // }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValue({ ...formValue, [name]: value })
  }

  const handleSubmit = () => {
    // const payload={
    //   name,
    //   password
    // }

    console.log("MAKING AN API REUQEST", formValue)
    setData([...data,formValue])
    console.log(data)
  }

  return (
    <>
      <input
        type='text'
        name='formName'
        value={formValue.formName}
        onChange={handleChange}
        placeholder='ENTER NAME'
      />
      <input
        type='text'
        name='formEmail'
        value={formValue.formEmail}
        onChange={handleChange}
        placeholder='ENTER EMAIL'
      />
      <input
        type='password'
        name="formPassword"
        value={formValue.formPassword}
        onChange={handleChange}
        placeholder='ENTER PASSWORD' />
      <button onClick={handleSubmit}>SUBMIT!</button>
    </>
  )
}

export default App


// //EVENT IN REACT?
// /*
// When a USER INTERACT WITH A WEBPAGE EVENT HAPPENS

// EVENT--> GIVES THE WHOLE EVENT ALONG WITH THE ELEMENT

// const event={
//   target:{
//     value:""
//   }
// }

// The data which we send to the backend or an api is called a payload

// {
//  firstName:"",
//  lastName:"",
//  zone:"",
//  city:"",
//  pincode:""
// }