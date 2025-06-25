import React from 'react'

const About = () => {
  return (
     <div className="container my-5">
      <h2>About This App</h2>
     <div className='my-5'>
       <p>
        This is a simple Todo List application built using React. It allows users to add, delete, and manage their daily tasks efficiently.
      </p>
      <p>
        The app demonstrates the use of React functional components, state management with <code>useState</code>, routing with <code>react-router-dom</code>, and storing data in <code>localStorage</code> to retain tasks even after refreshing the page.
      </p>
      <p>
        It's a beginner-friendly project aimed at learning the core concepts of React while building something useful and interactive.
      </p>
      <p>This App is created by Jiya Jayaprakash.</p>
     </div>
    </div>
  )
}

export default About
