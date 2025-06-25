// type rafc to get this template code
import React from 'react'

const Footer = () => {
  let footerStyle = {
    height: "50px",
    position: "relative",
    top:"100vd",
    width: "100%",



  }
  return (
    <footer className='bg-dark text-light py-2 mt-4 ' style={footerStyle}> 
    {/* read the bootstrap codes to get css styles using classnames */}
     <p className="text-center">Copyright &copy; Todolist.com</p>
    </footer>
  )
}

export default Footer
