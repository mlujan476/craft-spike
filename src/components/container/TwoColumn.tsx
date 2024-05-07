import { Element, Frame, useNode } from "@craftjs/core";
import styled from 'styled-components';
import Column from './Column';
import { SFlexCol, SFlexRow } from "./FlexContainer";
import { useState } from "react";
import { ComboboxItem, NumberInput, Select } from "@mantine/core";

interface IContainerProps {
    height: string
    width: string

    textAlign: string

    marginTop: number
    marginRight: number
    marginBottom: number
    marginLeft: number

    paddingTop: number
    paddingRight: number
    paddingBottom: number
    paddingLeft: number
}

const SContainer = styled.div<IContainerProps>`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: "left right";
    box-sizing: border-box;
    min-height: 100px;

    border: 2px dotted #7bedc5;

    width: ${p => p.width === "max" ? "100%" : p.width+"px"};
    height: auto;

    margin-top: ${p => p.marginTop + "px"};
    margin-right: ${p => p.marginRight + "px"};
    margin-bottom: ${p => p.marginBottom + "px"};
    margin-left: ${p => p.marginLeft + "px"};

    padding-top: ${p => p.paddingTop + "px"};
    padding-right: ${p => p.paddingRight + "px"};
    padding-bottom: ${p => p.paddingBottom + "px"};
    padding-left: ${p => p.paddingLeft + "px"};

    
`

const SSettingsContainer = styled(SFlexCol)`
    
`


const SRowContainer = styled(SFlexRow)`
    width: 100%;
    padding: 0px;
    gap: 10px;
    align-items: flex-start;
`


const TwoColumn = ({ height, width, textAlign, marginTop, marginRight, marginBottom, marginLeft, paddingTop, paddingRight, paddingBottom, paddingLeft }: any) => {
    const { connectors: { connect, drag } } = useNode((node: any) => ({
        isActive: node.events.selected
    }))

    return (
        <SContainer
            ref={ref => connect(drag(ref))}
            height={height}
            width={width}

            textAlign={textAlign}

            marginTop={marginTop}
            marginRight={marginRight}
            marginBottom={marginBottom}
            marginLeft={marginLeft}

            paddingTop={paddingTop}
            paddingRight={paddingRight}
            paddingBottom={paddingBottom}
            paddingLeft={paddingLeft}
        >
            <Element id="left" is={Column} gridArea={"left"} canvas />
            <Element id="right" is={Column} gridArea={"right"} canvas/>
        </SContainer>
    )
}


const TwoColumnSettings = () => {
    const { actions: { setProp }, height, width, marginTop, marginRight, marginBottom, marginLeft, paddingTop, paddingRight, paddingBottom, paddingLeft } = useNode((node) => ({

        width: node.data.props.width,
        height: node.data.props.height,

        fontSize: node.data.props.fontSize,
        textAlign: node.data.props.textAlign,
        fontColor: node.data.props.color,

        marginTop: node.data.props.marginTop,
        marginRight: node.data.props.marginRight,
        marginBottom: node.data.props.marginBottom,
        marginLeft: node.data.props.marginLeft,

        paddingTop: node.data.props.paddingTop,
        paddingRight: node.data.props.paddingRight,
        paddingBottom: node.data.props.paddingBottom,
        paddingLeft: node.data.props.paddingLeft,
    }))


    const editWidth = (value: number) => {
        setProp((props: any) => props.width = value)
    }

    const editHeight = (value: number) => {
        setProp((props: any) => props.height = value)
    }


    const editMarginTop = (value: number) => {
        setProp((props: any) => props.marginTop = value)
    }
    const editMarginRight = (value: number) => {
        setProp((props: any) => props.marginRight = value)
    }
    const editMarginBottom = (value: number) => {
        setProp((props: any) => props.marginBottom = value)
    }
    const editMarginLeft = (value: number) => {
        setProp((props: any) => props.marginLeft = value)
    }


    const editPaddingTop = (value: number) => {
        setProp((props: any) => props.paddingTop = value)
    }
    const editPaddingRight = (value: number) => {
        setProp((props: any) => props.paddingRight = value)
    }
    const editPaddingBottom = (value: number) => {
        setProp((props: any) => props.paddingBottom = value)
    }
    const editPaddingLeft = (value: number) => {
        setProp((props: any) => props.paddingLeft = value)
    }
    return (
        <SSettingsContainer>


            <SRowContainer>

                <NumberInput
                    label="Height"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={height}
                    min={20}
                    max={2000}
                    value={height}
                    onChange={(value: any) => editHeight(value)}

                />

                <NumberInput
                    label="Width"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={width}
                    min={20}
                    max={2000}
                    value={width}
                    onChange={(value: any) => editWidth(value)}

                />
            </SRowContainer>



            <SRowContainer>

                <NumberInput
                    label="Margin Top"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={marginTop}
                    min={0}
                    max={500}
                    value={marginTop}
                    onChange={(value: any) => editMarginTop(value)}

                />

                <NumberInput
                    label="Margin Bottom"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={marginBottom}
                    min={0}
                    max={500}
                    value={marginBottom}
                    onChange={(value: any) => editMarginBottom(value)}

                />
            </SRowContainer>

            <SRowContainer>

                <NumberInput
                    label="Margin Left"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={marginLeft}
                    min={0}
                    max={500}
                    value={marginLeft}
                    onChange={(value: any) => editMarginLeft(value)}

                />

                <NumberInput
                    label="Margin Right"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={marginRight}
                    min={0}
                    max={500}
                    value={marginRight}
                    onChange={(value: any) => editMarginRight(value)}

                />
            </SRowContainer>



            <SRowContainer>

                <NumberInput
                    label="Padding Top"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={paddingTop}
                    min={0}
                    max={500}
                    value={paddingTop}
                    onChange={(value: any) => editPaddingTop(value)}

                />

                <NumberInput
                    label="Padding Bottom"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={paddingBottom}
                    min={0}
                    max={500}
                    value={paddingBottom}
                    onChange={(value: any) => editPaddingBottom(value)}

                />
            </SRowContainer>

            <SRowContainer>

                <NumberInput
                    label="Padding Left"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={paddingLeft}
                    min={0}
                    max={500}
                    value={paddingLeft}
                    onChange={(value: any) => editPaddingLeft(value)}

                />

                <NumberInput
                    label="Padding Right"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={paddingRight}
                    min={0}
                    max={500}
                    value={paddingRight}
                    onChange={(value: any) => editPaddingRight(value)}

                />
            </SRowContainer>


        </SSettingsContainer>
    )

}

TwoColumn.craft = {
    props: {
        height: "100",
        width: "max",
        textAlign: "left",

        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,

        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,


    },
    rules: {
        canDrag: (node: any) => node.data.props.text != "Drag",
        //canMoveIn: (incomingNodes: any) => incomingNodes.every((incomingNode: any) => incomingNode)
    },
    related: {
        settings: TwoColumnSettings
    }
}


export default TwoColumn