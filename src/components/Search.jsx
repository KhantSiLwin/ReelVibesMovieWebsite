import React from 'react'

const Search = ({searchTerm,setSearchTerm}) => {
  return (
   <div className="search mt-6">
    <div className=" flex justify-center align-middle">
        
        <input type="text" className='search-input w-100 bg-blue-950 p-3 border-blue-800 border-2 rounded-full'
        placeholder='Search through thousands of movies' 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value) }
        />
           {/* <div className='w-8 bg-blue-950 p border-blue-800 border-2 rounded-full'>
             <img src="search.png"  alt=""/>
        </div> */}
    </div>
   </div>
  )
}

export default Search