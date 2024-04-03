import React, { useEffect, useState } from 'react'
import { useNode } from '@craftjs/core'
import ContentEditable from 'react-contenteditable'

export const Text = ({ text, fontSize }: any) => {

    const { connectors: { connect, drag }, hasSelectedNode, hasDraggedNode, actions: { setProp } } = useNode((state) => ({
        hasSelectedNode: state.events.selected.size > 0,
        hasDraggedNode: state.events.dragged.size > 0
    }));

    const [editable, setEditable] = useState(false);

    useEffect(() => { 
        !hasSelectedNode && setEditable(false) 
    }, [hasSelectedNode]);

    return (
        <div ref={ref => connect(drag(ref))} onClick={e => setEditable(true)}>
            <ContentEditable
                style={{ fontSize }}

                disabled={!editable}
                html={text}
                onChange={e => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/, "")}
                tagName={"p"} />

        </div>
    )
}
Text.craft = {

    rules: {
        canDrag: (node: any) => node.data.props.text != "Drag"
    }
}