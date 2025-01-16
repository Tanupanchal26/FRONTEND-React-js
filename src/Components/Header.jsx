import React from 'react'
import Footer from './Footer'

const Header = ({val }) => {
  return (
    <div>
        {val}
          {

        val>10 ? <Footer/> : <Header/>    
          }  
    </div>
  )
}

