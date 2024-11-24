import axios from 'axios'
import Register from './Register'

function App() {
  axios.defaults.baseURL = 'http://localhost:4000/'; 
  axios.defaults.withCredentials = true; //to set cookies in our api
  return (
    <>
      <Register/>
    </>
  )
}

export default App
