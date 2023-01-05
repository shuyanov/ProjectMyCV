import React from "react"
import styled from 'styled-components'

import Descrip from "../Descrip"

const Wrapper = styled.div``

const Input = styled.input`
  width: 97%;
  height: 6px;
  margin: 0 0.4rem;
  overflow: hidden;
  cursor: pointer;
  -webkit-appearance: none;
  &::-webkit-slider-runnable-track {
    background: #ddd;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 40px;
    background: dodgerblue;
    box-shadow: -100vw 0 0 100vw dodgerblue;
    border: 1px solid #999;
  }
`


const Range = () => {
    const [value, setVale] = React.useState(90)
    return(
    <Wrapper>

        <Descrip>
         Name - {value}
        </Descrip>

        <Input
        value={value}
        step='10'
        min='0'
        max='100'
        type='range'
        onChange={(e) => setVale(e.target.value)} />
    </Wrapper>
    )
}

export default Range;