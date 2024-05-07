import { useNode, Element } from '@craftjs/core'
import styled from 'styled-components'
import { SFlexCol, SFlexRow } from './FlexContainer'

interface IRow {
    gridArea: string
}

const SContainer = styled(SFlexRow) <IRow>`
    width: 100%;

    box-sizing: border-box;
    background-color: white;
    border: 2px dotted #aac2e0;

    min-height: 100px;

`
export const RowDroppableArea = ({ children }: any) => {

    const { connectors: { connect } } = useNode()

    return (
        <SContainer ref={connect}>{children}</SContainer>
    )
}

const Row = ({ children }: any) => {
    return (
        <Element id="row" is={RowDroppableArea} canvas>{children}</Element>
    )
}

Row.craft = {
    rules: {
        canMoveIn: (incomingNodes: any) => incomingNodes.every((incomingNode: any) => incomingNode.data.type)
    }
}

export default Row