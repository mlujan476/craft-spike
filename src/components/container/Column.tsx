import { useNode, Element } from '@craftjs/core'
import styled from 'styled-components'
import { SFlexCol } from './FlexContainer'

interface IColumn {
    gridArea: string
}

const SContainer = styled(SFlexCol)<IColumn>`
    width: 100%;

    box-sizing: border-box;
    background-color: white;
    border: 2px dotted #f3f3f3;

    min-height: 100px;

    grid-area: ${p => p.gridArea};
    


`

const Column = ({ gridArea, children }: any) => {
    const { connectors: {connect}} = useNode()

  return (
    <SContainer gridArea={gridArea} ref={connect}>{children}</SContainer>
  )
}

Column.craft = {
    rules: {
        canMoveIn: (incomingNodes: any) => incomingNodes.every((incomingNode: any) => incomingNode.data.type)
    }
  }

export default Column