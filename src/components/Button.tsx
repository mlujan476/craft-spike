import { useNode } from "@craftjs/core";
import styled from 'styled-components';
interface Props {

}

const SButton = styled.button<Props>`
    border-radius: 8px;

    &.sm {
        height: 20px;
        width: 50px;
    }

    &.md {
        height: 35px;
        width: 80px;
    }

    &.lg {
        height: 50px;
        width: 120px;
    }

    &.primary {
        background-color: #009b94;
        color: white;
    }

    &.secondary {
        border: 1px solid #009b94;
        color: #009b94;
    }
 


`


export const Button = ({ size, variant, color, children }: any) => {

    const { connectors: { connect, drag } } = useNode()

    return (
        <SButton ref={ref => connect(drag(ref))} className={`${size && size} ${variant && variant} ${color && color}`} >
            {children}
        </SButton>
    )
}

Button.craft = {

    rules: {
        canDrag: (node: any) => node.data.props.text != "Drag"
    }
}