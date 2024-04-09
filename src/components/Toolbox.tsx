// components/Toolbox.js
import React from "react";
import { SFlexCol, SFlexRow, SFlexRowWrap } from "./container/FlexContainer";
import styled from "styled-components";
import { Button } from "./Button";
import { Text } from "./Text";
import { FlexContainer } from "./FlexContainer";
import { Card } from "./Card";
import { Element, useEditor } from "@craftjs/core";
import ImageDropzone from "./image/ImageDropzone";
import { SHeadingRightPanel } from "./styled/SHeading";
import Heading from "./common/Heading";
import EditComponentSlider from "./common/EditComponentSlider";

const SContainer = styled(SFlexCol)`
    
    width: 100%;

    padding: 20px;
`


interface Props {

}

const SToolboxButton = styled.button<Props>`
    border: 1px solid #dedede;
    width: 1fr;
    height: 1fr;
    margin: 2.5px;
    border-radius: 8px;
    background-color: white;

    &.sm {
        height: 40px;
        width: 40px;
    }

    &.md {
        height: 60px;
        width: 60px;
    }

    &.lg {
        height: 100px;
        width: 100px;
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

export const Toolbox = () => {

    const { connectors, query } = useEditor()



    return (
        <SContainer>
            <SHeadingRightPanel>Components</SHeadingRightPanel>
            <SFlexRowWrap>
                {/* <SToolboxButton className={'lg'} ref={ref => connectors.create(ref, <Button class={'md'} >Neue Button</Button>)}>Button</SToolboxButton>
                
               
                <SToolboxButton className={'lg'} ref={ref => connectors.create(ref, <Card />)}>Card</SToolboxButton>
 */}
                {/* Image */}
                <SToolboxButton  className={'lg'} ref={ref => connectors.create(ref, <ImageDropzone />)}>Image</SToolboxButton>

                {/* Heading */}
                <SToolboxButton  className={'lg'} ref={ref => connectors.create(ref, <Heading fontSize={"2rem"} align={"left"}  padding={"10px"} text={"This is a great heading"}/>)}>Heading</SToolboxButton>

                {/* Text */}
                <SToolboxButton className={'lg'} ref={ref => connectors.create(ref, <Text  />)}>Text</SToolboxButton>

                

            </SFlexRowWrap>
        </SContainer>
    )
};