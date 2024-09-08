import { useState , useEffect } from "react"
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout} from './store/authSlice'
import { Header, Footer} from './components'
function App() {

  const [ loading, setLoading ] = useState( true)
  // beacause useEffect do some works on mounting
  // will make it false inside useEffect

  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then( (userData) => {
      if ( userData ){
        dispatch(login({userData}))
      } else{
        dispatch(logout({userData}))
      }
    })
    // .catch()
    .finally( () => setLoading(false))
  },[])

  return !loading ? (
    <div 
    className="min-h-screen flex flex-wrap content-between bg-gray-500">
    <div className="w-full block">
      <Header />
      <main>
        {/* < Outlet /> */}
      </main>
      <Footer />
    </div>
    </div>
  ) : null
}

export default App
