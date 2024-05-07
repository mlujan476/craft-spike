import { useNode } from '@craftjs/core';
import { NumberInput, Select, ComboboxItem } from '@mantine/core';
import { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import styled from 'styled-components';
import { SFlexCol, SFlexRow } from './container/FlexContainer';

const SContainer = styled(SFlexCol)`
    
`


const SRowContainer = styled(SFlexRow)`
    width: 100%;
    padding: 0px;
    gap: 10px;
    align-items: flex-start;
`


export const Text = ({ text, fontSize, textAlign, width, height, marginTop, marginRight, marginBottom, marginLeft, paddingTop, paddingRight, paddingBottom, paddingLeft }: any) => {

    const { connectors: { connect, drag } } = useNode((node: any) => ({
        isActive: node.events.selected
    }))

    const [editable, setEditable] = useState(false);

    const DEV = true

    return (
        <div ref={ref => connect(drag(ref))} onClick={e => setEditable(true)}>
            <ContentEditable
                style={{

                    border: DEV && "3px dotted #f1f1f1",
                    overflow: "hidden",

                    fontSize: `${fontSize}px`,
                    textAlign,


                    width: width === "max" ? "100%" : `${width}px`,
                    height: `${height}px`,

                    marginTop: `${marginTop}px`,
                    marginRight: `${marginRight}px`,
                    marginBottom: `${marginBottom}px`,
                    marginLeft: `${marginLeft}px`,

                    paddingTop: `${paddingTop}px`,
                    paddingRight: `${paddingRight}px`,
                    paddingBottom: `${paddingBottom}px`,
                    paddingLeft: `${paddingLeft}px`,
                }}

                disabled={!editable}
                html={text}
                onChange={e => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/, "")}
                tagName={"p"} />


        </div>
    )
}

const TextSettings = () => {
    const { actions: { setProp }, fontSize, textAlign, width, height, marginTop, marginRight, marginBottom, marginLeft, paddingTop, paddingRight, paddingBottom, paddingLeft } = useNode((node) => ({

        fontSize: node.data.props.fontSize,
        textAlign: node.data.props.textAlign,
        width: node.data.props.width,
        height: node.data.props.height,

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
        <SContainer>
            <SRowContainer>

                <NumberInput
                    label="Font Size"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={fontSize}
                    min={8}
                    max={60}
                    value={fontSize}
                    onChange={(value: any) => editFontSize(value)}

                />

                <Select
                    label="Text Align"
                    style={{ textAlign: "left" }}
                    data={["left", "center", "right", "justify"]}
                    value={textAlign}
                    onChange={(value: any, option: any) => editTextAlign(value, option)}
                />
            </SRowContainer>

            <SRowContainer>

                <NumberInput
                    label="Height"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={height}
                    min={20}
                    max={1000}
                    value={height}
                    onChange={(value: any) => editHeight(value)}

                />

                <NumberInput
                    label="Width"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={width}
                    min={20}
                    max={1000}
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


        </SContainer>
    )
}

Text.craft = {

    props: {
        text: "Et mollit officia cupidatat ipsum minim amet dolor pariatur aliquip esse sit excepteur. Esse id sunt anim proident veniam magna eu proident consectetur ipsum nostrud adipisicing ullamco nisi. Qui amet pariatur ipsum reprehenderit. Amet nisi incididunt esse est elit duis ad elit ipsum. Nulla consectetur ipsum sunt aliqua laborum eiusmod id officia velit ad ea reprehenderit anim. ",
        fontSize: 12,
        textAlign: "left",

        height: 200,
        width: "max",

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
        settings: TextSettings
    }
}

