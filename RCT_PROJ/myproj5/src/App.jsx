
import RecipeReviewCard from './components/RecipeReviewCard'
import SearchAppBar from './components/SearchAppBar'

function App() {


  return (
    <>
      <SearchAppBar />
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
      {
        [1, 2, 3, 4, 1, 5].map(elem=>
          < RecipeReviewCard key={elem} />   
          )
       
      }
      </div>
    </>
  )
}

export default App
