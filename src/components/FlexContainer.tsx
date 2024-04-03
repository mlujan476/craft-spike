import { useNode } from "@craftjs/core";
import React from "react";
import styled from 'styled-components'

interface IProps {
  justifyContent: string
  alignItems: string;
  flexDirection: string
}

const SContainer = styled.div<IProps>`

    display: flex;
    flex-direction: ${p => p.flexDirection};
    justify-content: ${p => p.justifyContent};
    align-items: ${p => p.alignItems};

    border: 1px solid #dedede;

     &.sm {
        height: 120px;
        width: 100%;
    }

    &.md {
        height: 280px;
        width: 100%;
    }

    &.lg {
        height: 400px;
        width: 100%;
    }
`

export const FlexContainer = ({ flexDirection, alignItems, justifyContent, size, children }: any) => {
  const { connectors: { connect, drag } } = useNode()
  return (
    <SContainer ref={ref => connect(drag(ref))} flexDirection={flexDirection} alignItems={alignItems} justifyContent={justifyContent} className={`${size && size}`}>
      {children}
    </SContainer>
  )
}

FlexContainer.craft = {

  rules: {
    canDrag: (node: any) => node.data.props.text != "Drag"
  }
}