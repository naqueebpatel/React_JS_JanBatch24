import "./App.css"
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import NavBar from './components/NavBar'

function App() {


  return (
    <>
       <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>

     

    </>
  )
}

export default App

// <Routes> ---> IT IS USED TO WRAP THE ALL THE ROUTE


// <Route path="" element={}/>

// path= "/ your_path_name " 

// element ={ the_element_that_will_be_rendered_on_particular_path }

// <Route path="" element={}/>

// path= "/ your_path_name " 

// element ={ the_element_that_will_be_rendered_on_particular_path }

// <Route path="" element={}/>

// path= "/ your_path_name " 

// element ={ the_element_that_will_be_rendered_on_particular_path }

// </Routes>

// <Link to=" "/ > </Link>

// to= " your_route_path"
