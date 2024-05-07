// components/Toolbox.js
import { useEditor } from "@craftjs/core";
import styled from "styled-components";
import { Text } from "./Text";
import Heading from "./common/Heading";
import { SFlexCol, SFlexRowWrap } from "./container/FlexContainer";
import ImageDropzone from "./image/ImageDropzone";
import { SHeadingRightPanel } from "./styled/SHeading";
import ListContainer from "./list/ListContainer";
import TwoColumn from "./container/TwoColumn";
import Row from "./container/Row";
import Column from "./container/Column";
import ListItem from "./list/ListItem";

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
                <SToolboxButton  className={'lg'} ref={ref => connectors.create(ref, <Heading />)}>Heading</SToolboxButton>

                {/* Text */}
                <SToolboxButton className={'lg'} ref={ref => connectors.create(ref, <Text/>)}>Text</SToolboxButton>


                {/* Single Column */}
                <SToolboxButton className={'lg'} ref={ref => connectors.create(ref, <Column/>)}>Single Column</SToolboxButton>

                {/* Two Column */}
                <SToolboxButton className={'lg'} ref={ref => connectors.create(ref, <TwoColumn/>)}>Two Column</SToolboxButton>

                {/* Two Column */}
                <SToolboxButton className={'lg'} ref={ref => connectors.create(ref, <Row/>)}>Row</SToolboxButton>

                {/* List Container */}
                <SToolboxButton className={'lg'} ref={ref => connectors.create(ref, <ListContainer/>)}>List Container</SToolboxButton>

                {/* List Container */}
                <SToolboxButton className={'lg'} ref={ref => connectors.create(ref, <ListItem/>)}>List Item</SToolboxButton>

                

            </SFlexRowWrap>
        </SContainer>
    )
};