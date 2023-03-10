import React from 'react'
import Category from './Components/Category'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import Pages from './Pages/Pages'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Search />                     
      <Category />
      <Pages />
    </div>
  )
}

export default App