    import React, {useState, useEffect} from 'react'
    import './navbar.css' 
    
    export default function Navbar() {
        const [toggleMenu, setToggleMenu] = useState(false)
        //allows button to show on full screen instead displaying null
        const [screenWidth, setScreenWidth] = useState
        (window.innerWidth)
        const toggleNav = () => {
            // !reverses my false use state
            setToggleMenu(!toggleMenu)
        }
        useEffect(() => {
         const  changeWidth = () => {
             setScreenWidth(window.innerWidth)
         }
         //everytime the window is resized we change the width
          window.addEventListener('resize', changeWidth)  
          //return so we do not keep addeventlistener in the memory
          return () => {
              window.removeEventListener('resize', changeWidth)
          }
        }, [])

      return (
        <nav>
            {/* nav for profile page */}
            {/* not sure how to link all different pages to one nav without breaking it */}
            {(toggleMenu || screenWidth > 500) && (
                <ul className='list'>
                <a href=''><li className='items'>App Name</li></a>
                <a href=''><li className='items'>Qr Code</li></a>
               <a href=''><li className='items'>My Profile</li></a>
               <a href=''><li className='items'>My Contacts</li></a>
                <a href=""><li className='items'>Logout</li></a>
                </ul>
            )}
            {/* <button onClick={toggleNav} className='btn'>click me</button> */}
        </nav>
      )
    }
    