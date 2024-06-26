import { useNode } from '@craftjs/core'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NumberInput, Select, ComboboxItem } from '@mantine/core';
import { SFlexCol, SFlexRow } from '../container/FlexContainer';

interface IHeadingProps {
    fontSize: string
    fontWeight: number
    color: string
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

const SHeading = styled.h1<IHeadingProps>`
    font-size: ${p => p.fontSize + "px"};
    font-weight: ${p => p.fontWeight};
    color: ${p => p.color};
    text-align: ${p => p.textAlign};

    margin-top: ${p => p.marginTop + "px"};
    margin-right: ${p => p.marginRight + "px"};
    margin-bottom: ${p => p.marginBottom + "px"};
    margin-left: ${p => p.marginLeft + "px"};

    padding-top: ${p => p.paddingTop + "px"};
    padding-right: ${p => p.paddingRight + "px"};
    padding-bottom: ${p => p.paddingBottom + "px"};
    padding-left: ${p => p.paddingLeft + "px"};

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border: 3px dotted #f1f1f1;
    width: auto;
`

const SContainer = styled(SFlexCol)`
    
`


const SRowContainer = styled(SFlexRow)`
    width: 100%;
    padding: 0px;
    gap: 10px;
    align-items: flex-start;
`

const Heading = ({ fontSize, fontWeight,  fontColor, headingText, textAlign, marginTop, marginRight, marginBottom, marginLeft, paddingTop, paddingRight, paddingBottom, paddingLeft }: any) => {

    const { connectors: { connect, drag } } = useNode((node: any) => ({
        isActive: node.events.selected
    }))

    //const [text, setText] = useState<string>(headingText)
    const [editable, setEditable] = useState<boolean>(false)

    //const handleEdit = (e: any) => setText(e.target.value)

    /* useEffect(() => {
        if (!hasSelectedNode) {
            setEditable(false)

        }
    }, []) */

    return (

        <SHeading
           
            contentEditable={editable}
            onChange={e => props.headingText = e.target.value.replace(/<\/?[^>]+(>|$)/, "")}
            onClick={() => setEditable(true)}
            ref={ref => connect(drag(ref))}

            fontSize={fontSize}
            fontWeight={fontWeight}
            textAlign={textAlign}
            color={fontColor}

            marginTop={marginTop}
            marginRight={marginRight}
            marginBottom={marginBottom}
            marginLeft={marginLeft}

            paddingTop={paddingTop}
            paddingRight={paddingRight}
            paddingBottom={paddingBottom}
            paddingLeft={paddingLeft}

        >{headingText}</SHeading>
    )
}

const HeadingSettings = () => {
    const { actions: { setProp }, fontSize, textAlign, marginTop, marginRight, marginBottom, marginLeft, paddingTop, paddingRight, paddingBottom, paddingLeft } = useNode((node) => ({
        fontSize: node.data.props.fontSize,
        textAlign: node.data.props.textAlign,

        marginTop: node.data.props.marginTop,
        marginRight: node.data.props.marginRight,
        marginBottom: node.data.props.marginBottom,
        marginLeft: node.data.props.marginLeft,

        paddingTop: node.data.props.paddingTop,
        paddingRight: node.data.props.paddingRight,
        paddingBottom: node.data.props.paddingBottom,
        paddingLeft: node.data.props.paddingLeft,
    }))

    const [value, setValue] = useState<ComboboxItem | null>(null);

    const editFontSize = (value: any) => {
        setProp((props: any) => props.fontSize = value)
    }

    const editTextAlign = (value: any, option: any) => {
        setProp((props: any) => props.textAlign = value)
        setValue(option)

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
        <SContainer>
            <SRowContainer>

                <NumberInput
                    label="Font Size"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={fontSize}
                    min={8}
                    max={80}
                    value={fontSize}
                    onChange={(value: any) => editFontSize(value)}

                />

                <Select
                    label="Text Align"
                    style={{ textAlign: "left" }}
                    data={["left", "center", "right"]}
                    value={textAlign}
                    onChange={(value: any, option: any) => editTextAlign(value, option)}
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


        </SContainer>
    )
}

Heading.craft = {
    props: {
        headingText: "Edit Heading",
        fontSize:40,
        fontWeight: 300,
        textAlign: "left",

        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,

        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        
        
    },
    rules: {
        canDrag: (node: any) => node.data.props.text != "Drag"
    },
    related: {
        settings: HeadingSettings
    }
}

export default Heading