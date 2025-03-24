import { Footer } from "./components/Footer"
import { Login } from "./components/Login"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <>
      <div className='bg-gray-700 flex flex-col h-screen justify-between'>
        <Navbar></Navbar>
        <Login/>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
