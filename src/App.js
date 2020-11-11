import React from 'react'
import Cards from './Components/Cards'
import Sdata from './Components/Sdata'
import './index.css'
console.log(Sdata[0])
function App() {
  return (
    <div className="App">
      <h1 className='heading_style'>List Of  Top 5 Netflix Series</h1>
      {/* <Cards {...Sdata[0]}/>
      <Cards {...Sdata[1]} />
      <Cards {...Sdata[2]}/>
      <Cards {...Sdata[3]}/>
      <Cards {...Sdata[4]}/> */}
      {Sdata.map((val) => {
        return(
          <Cards {...val}/>
        )
      })}
    </div>
  );
}

export default App;
