import React from 'react'

import './jsdropdown-style.css'

const myFunction = (e)=> {
  // console.log(e)
  e.preventDefault()
  //
  document.getElementById("myDropdown").classList.toggle("myshow");
  // window.getElementById("myDropdown").classList.toggle("myshow");
}

// const mycklick = (e)=>{
//   console.log('click',e)
// }

function JsDropdown(props) {


  return (

    <div className="mydropdown">
      <button onClick={ myFunction} className="mydropbtn">Dropdown</button>
      <div id="myDropdown" className="mydropdown-content">
        
        {props.children}
        
      </div>
    </div>
  )
}

export default JsDropdown
