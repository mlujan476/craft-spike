import { useNode } from '@craftjs/core'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface IHeadingProps {
    fontSize: string
    fontWeight: string
    fontFamily: string
    color: string
    textAlign: string
    padding: string
}

const SHeading = styled.h1<IHeadingProps>`
    font-size: ${p => p.fontSize};
    font-weight: ${p => p.fontWeight};
    font-family: ${p => p.fontFamily};
    color: ${p => p.color};

    width: 100%;
    text-align: ${p => p.textAlign};
    padding: ${p => p.padding};
`

const Heading = ({ fontSize = '1rem', fontWeight = '300', fontFamily = 'sans-serif', fontColor = "black", headingText = "Interesting Heading", align = "center", padding = "0" }: any) => {

    const { connectors: { connect, drag }, hasSelectedNode, hasDraggedNode, actions: { setProp } } = useNode((state: any) => ({
        hasSelectedNode: state.events.selected.size > 0,
        hasDraggedNode: state.events.dragged.size > 0
    }))

    const [text, setText] = useState<string>(headingText)
    const [editable, setEditable] = useState<boolean>(false)

    const handleEdit = (e: any) => setText(e.target.value)

    useEffect(() => {
        if (!hasSelectedNode) {
            setEditable(false)

        }
    }, [])

    return (

        <SHeading
           
            contentEditable={editable}
            onInput={handleEdit}
            onClick={() => setEditable(true)}
            ref={ref => connect(drag(ref))}
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontFamily={fontFamily}
            color={fontColor}
            textAlign={align}
            padding={padding}
        >{text}</SHeading>
    )
}

const HeadingSettings = () => {
    const {actions: {setProp}, fontSize } = useNode((node: any) => {
        fontSize: node.data.props.fontSize
    })

    return (
        <>
            
        </>
    )
}

Heading.craft = {

    rules: {
        canDrag: (node: any) => node.data.props.text != "Drag"
    }
}

export default Heading