import { useNode } from '@craftjs/core'
import React from 'react'
import styled from 'styled-components'

export const SContainer = styled.div`
    width: 450px;
    height:300px;
    border: 2px dotted green;
`

const ImageContainer = () => {
  const { connectors: { connect, drag } } = useNode()
  return (
    <SContainer  ref={ref => connect(drag(ref))}>ImageContainer</SContainer>
  )
}

export default ImageContainer