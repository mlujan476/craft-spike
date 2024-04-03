// components/user/Card.js
import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { FlexContainer } from "./FlexContainer";
import { useNode, Editor, Element } from "@craftjs/core";
import styled from "styled-components";
import { SFlexRow } from "./container/FlexContainer";

const SCardContainer = styled.div`
    border: 1px dotted #dedede;
    width: 300px;
    height: 300px;
`


export const CardTop = ({ children }: any) => {
    const { connectors: { connect } } = useNode()
    return (
        <SCardContainer ref={connect} className="text-only">
            {children}
        </SCardContainer>
    )
}
CardTop.craft = {
    rules: {
        canMoveIn: (incomingNodes: any) => incomingNodes.every((incomingNode: any) => incomingNode.data.type == Text)
    }
}

export const CardBottom = ({ children }: any) => {
    const { connectors: { connect } } = useNode()
    return (
        <SFlexRow ref={connect}>
            {children}
        </SFlexRow>
    )
}
CardBottom.craft = {
    rules: {
        canMoveIn: (incomingNodes: any) => incomingNodes.every((incomingNode: any) => incomingNode.data.type == Button)
    }
}



export const Card = ({ children }: any) => {

    return (
        <FlexContainer flexDirection={"column"} alignItems={"center"} justifyContent={"center"} size={"sm"}>
            <Element id="text" is={CardTop} canvas> 
                <Text text="Title" fontSize={20} />
                <Text text="Subtitle" fontSize={15} />
            </Element>
            <Element id="buttons" is={CardBottom} canvas> 
                <Button size="md">This is Also a button</Button>
            </Element>
        </FlexContainer>
    )
}


