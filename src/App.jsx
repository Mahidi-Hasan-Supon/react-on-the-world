import { Suspense } from 'react'
import './App.css'
import Countris from './Compunents/Countrics/Countris'

const fetchCountries = fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())
console.log(fetchCountries)
function App() {


  return (
    <>
    <h1>React on the World</h1>
    <Suspense fallback={<p>LOading countries...</p>}>
      <Countris fetchCountries={fetchCountries}></Countris>
    </Suspense>
    </>
  )
}

export default App
