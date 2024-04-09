import { useNode } from '@craftjs/core';
import { NumberInput, Select, ComboboxItem } from '@mantine/core';
import { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import styled from 'styled-components';
import { SFlexCol, SFlexRow } from './container/FlexContainer';

const SContainer = styled(SFlexRow)`
    width: 100%;
    padding: 0px;
    gap: 10px;
`

export const Text = ({ text, fontSize, textAlign }: any) => {

    /* const { connectors: { connect, drag }, hasSelectedNode, hasDraggedNode, actions: { setProp } } = useNode((state) => ({
        hasSelectedNode: state.events.selected.size > 0,
        hasDraggedNode: state.events.dragged.size > 0
    }));

    
    const [value, setValue] = useState<number>(fontSize);

    useEffect(() => {
        !hasSelectedNode && setEditable(false)
    }, [hasSelectedNode]);

    const editProp = (value: any) => {
        setProp((props: any) => props.fontSize = value)
        setValue(value)
    } */

    const [editable, setEditable] = useState(false);

    const { connectors: { connect, drag }, isActive, actions: { setProp }} = useNode((node: any) => ({
        isActive: node.events.selected
    }))

    return (
        <div ref={ref => connect(drag(ref))} onClick={e => setEditable(true)}>
            <ContentEditable
                style={{ fontSize: `${fontSize}px`, textAlign }}

                disabled={!editable}
                html={text}
                onChange={e => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/, "")}
                tagName={"p"} />
            {/* {
                editable && (
                    <SContainer>
                        <EditComponentSlider min={0.5} max={2} step={0.1} value={value} defaultValue={1} editProp={editProp} />
                  
                    </SContainer>
                )
            } */}

        </div>
    )
}

const TextSettings = () => {
    const { actions: {setProp}, fontSize, textAlign} = useNode((node) => ({
        fontSize: node.data.props.fontSize,
        textAlign: node.data.props.textAlign
    }))

    const [value, setValue] = useState<ComboboxItem | null>(null);

    const editFontSize = (value: any) => {
        setProp((props: any) => props.fontSize = value)
    } 

    const editTextAlign = (value: any) => {
        setProp((props: any) => props.textAlign = value)

    }

    return (
        <SContainer>

            <NumberInput 
                label="Font Size"
                suffix="px"
                defaultValue={fontSize}
                min={8}
                max={60}
                value={fontSize}
                onChange={(value: any) => editFontSize(value)}

            />

            <Select 
                label="Text Align"
                data={["left", "center", "right", "justify"]}
                value={textAlign}
                onChange={(value: any, option: any) => {editTextAlign(value); setValue(option)}}
            />
        </SContainer>
    )
}

Text.craft = {

    props: {
        text: "Et mollit officia cupidatat ipsum minim amet dolor pariatur aliquip esse sit excepteur. Esse id sunt anim proident veniam magna eu proident consectetur ipsum nostrud adipisicing ullamco nisi. Qui amet pariatur ipsum reprehenderit. Amet nisi incididunt esse est elit duis ad elit ipsum. Nulla consectetur ipsum sunt aliqua laborum eiusmod id officia velit ad ea reprehenderit anim. ",
        fontSize: 12,
        textAlign: "left"
    },
    rules: {
        canDrag: (node: any) => node.data.props.text != "Drag"
    },
    related: {
        settings: TextSettings
    }
}

