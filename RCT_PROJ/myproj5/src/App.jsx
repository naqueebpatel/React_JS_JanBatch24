
import { useEffect, useState } from 'react';
import RecipeReviewCard from './components/RecipeReviewCard'
import SearchAppBar from './components/SearchAppBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify=()=>{
  toast("This recipe doesnt exist!")
}

function App() {

  const [data,setData]=useState([]);
  const [query,setQuery]=useState("chicken")

  // const url="https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}"

  const App_Id="ca508253";
  const App_Key="0fd364ca21c243248025b54a96bd695b";

  const getRecipe=()=>{
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}`)
    .then(res=>res.json())
    .then(res=>{
      setData(res.hits)
      console.log(res.hits)})
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
        getRecipe()
  },[query])


  


  return (
    <>
      <SearchAppBar setQuery={setQuery} />
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap"}}>

      {data.length>0?data.map(elem=>
          < RecipeReviewCard key={elem.id} elem={elem} />   
          ):<Toastify/>}
      <ToastContainer/>
      </div>
    </>
  )
}

export default App
