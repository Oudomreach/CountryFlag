// import CountryCard from "./components/CountryCard"

import CountryList from "./components/CountryList"
import Header from "./components/Header"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"
import CountryInfo from "./components/CountryInfo";


function App() {
  // const [count, setCount] = useState(0)

  function refreshPage(){
    window.location.href = window.location.pathname;
  }

  return (
    <>
    <div>
      <div>
        <Link to={window.location.pathname} onClick={refreshPage}>
          <Header />
        </Link>
      </div>
      <div className="px-24">
        <CountryList />
      </div>
    </div>

    {/* <CountryInfo  /> */}
      
    </>
  )
}

export default App
