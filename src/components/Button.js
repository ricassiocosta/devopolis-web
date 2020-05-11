import React from 'react'
import styled from 'styled-components'

const DynamicButton = styled.button `
  background-color: ${props => props.backgroundColor};
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    filter: brightness(0.9)
  }
`
const ButtonText = styled.span `
  color: ${props => props.textColor};
  font-size: 14px !important;
  font-family: 'RobotoBold';
`

const Button = ({text, textColor, backgroundColor}) => {
  return(
    <DynamicButton backgroundColor={backgroundColor}>
      <ButtonText textColor={textColor}>
        {text}
      </ButtonText>
    </DynamicButton>
  )
}

export default Button