import { useNode } from '@craftjs/core'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const SContainer = styled.div`
    width: 100%;
    height:calc(100vh - 80px);
    box-sizing: border-box;
    background-color: white;
    


`

const Container = ({ children }: any) => {
    const { connectors: {connect}} = useNode()

  return (
    <SContainer ref={connect}>{children}</SContainer>
  )
}

export default Container