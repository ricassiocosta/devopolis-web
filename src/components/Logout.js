import React from 'react'
import styled from 'styled-components'

const modalBackground = styled.div `
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4); 
`
const modalContent = styled.div `
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`
const closeBtn = styled.span `
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
`


const Logout = () => {
  return(
   <modalBackground>
     <modalContent>
       sdad
     </modalContent>
   </modalBackground>
  )
}

export default Logout