import React from 'react'

const Header=({handleToggleDarkMode})=> {
    return (
        <div className='header'>
            <h1 >Note</h1>
           
 <label class="switch">
            <input  onClick={()=>
                handleToggleDarkMode(
                    (previousDarkMode)=>!previousDarkMode
                    )}  type="checkbox"></input>
            <span class="slider"></span>
</label>

        </div>
    )
}

export default Header
