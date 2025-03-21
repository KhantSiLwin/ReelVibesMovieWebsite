import React from "react"
import './App.css'
import Search from "./components/Search"


function App() {


  return (
      <main>
        <div className="pattern">
            <div className="wrapper">
                <header className="text-center flex flex-col justify-center align-middle">
                   <div className="img-wrapper -mt-2.5">
                   <img src="./hero.png" className="hero-img text-center" alt="Hero Banner" />
                   </div>
                  <h2 className=" mt-2.5 text-6xl font-bold hero-text">Find <span className='text-gradient'>Movies</span> Your'll Enjoy Without the Hassle</h2>
                </header>

                <Search/>

            </div>
        </div>
      </main>
  )
}

export default App
