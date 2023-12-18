import "./App.css"
import Navigation from "./Components/Navigation/Navigation"
import MovieList from "./Components/MovieCards/MovieList"
import { moviesData } from "./Components/MovieCards/Data"
import { useState } from "react"
import AddMovie from "./AddMovie/AddMovie"
import FilterMovie from "./Components/FilterMovie/FilterMovie"
import Reset from "./Components/Reset/Reset"

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [inputSearch, setInputSearch] = useState("")
  // console.log(inputSearch)
  const [newRate, setNewRate] = useState(0)
  // console.log(newRate)

  const add = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  const handleReset = () => {
    setInputSearch("")
    setNewRate(0)
  }

  return (
    <div className="App">
      <Navigation />
      <AddMovie add={add} />
      <FilterMovie
        setInputSearch={setInputSearch}
        inputSearch={inputSearch}
        setNewRate={setNewRate}
        newRate={newRate}
      />
      <Reset handleReset={handleReset} />
      <MovieList movies={movies} inputSearch={inputSearch} newRate={newRate} />
    </div>
  )
}

export default App
