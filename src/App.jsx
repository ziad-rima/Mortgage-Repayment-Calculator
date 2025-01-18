import Calculator from "./components/mainComponent/Calculator"
import Results from "./components/emptyResults/Results"
import FinalResults from "./components/finalResults/FinalResults"
const App = () => {
  return (
    <div className="main-component">
      <Calculator />
      <Results />
      <FinalResults />
    </div>
  )
}

export default App
