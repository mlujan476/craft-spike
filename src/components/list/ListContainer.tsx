import { useNode, Element } from '@craftjs/core';
import { ComboboxItem, List, NumberInput, Select } from '@mantine/core';
import { useState } from 'react';
import styled from 'styled-components';
import { SFlexCol, SFlexRow } from '../container/FlexContainer';
import ListItem from './ListItem';

interface IListContainer {

  size: string
  height: string
  width: string

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

const SContainer = styled(List) <IListContainer>`

    size: ${p => p.size};
    height: ${p => p.height};
    width: ${p => p.width};

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
/* 
const SContainer = styled(SFlexCol)`
    
` */


const SRowContainer = styled(SFlexRow)`
    width: 100%;
    padding: 0px;
    gap: 10px;
    align-items: flex-start;
`

const SList = styled.ul`
  min-height: 100px;
`


export const ListComponent = ({ children }: any) => {


  const { connectors: {connect}} = useNode()


  return (

    <SList ref={connect}>{children}</SList>
  )
}

export const ListContainer = ({ height, width, textAlign, marginTop, marginRight, marginBottom, marginLeft, paddingTop, paddingRight, paddingBottom, paddingLeft, children }: any) => {

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
      <Element id="list" is={ListComponent} canvas >
      {children}
      </Element>
    </SContainer>
  )
}

const ListContainerSettings = () => {
  const { actions: { setProp }, size, fontSize, textAlign, fontColor, height, width, marginTop, marginRight, marginBottom, marginLeft, paddingTop, paddingRight, paddingBottom, paddingLeft } = useNode((node) => ({

    size: node.data.props.size,
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

  const [value, setValue] = useState<ComboboxItem | null>(null);
  const [sizeValue, setSizeValue] = useState<ComboboxItem | null>(null)

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

  const editSize = (value: number, option: any) => {
    setProp((props: any) => props.size = value)
    setSizeValue(option)
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
        <Select
          label="Size"
          style={{ textAlign: "left" }}
          data={["sm", "md", "lg"]}
          value={size}
          onChange={(value: any, option: any) => editSize(value, option)}
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
          label="Font Size"
          style={{ textAlign: "left" }}
          suffix="px"
          defaultValue={fontSize}
          min={8}
          max={80}
          value={fontSize}
          onChange={(value: any) => editFontSize(value)}

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

ListContainer.craft = {
  props: {
    height: "100",
    width: "500",
    size: "md",
    fontSize: 20,
    fontWeight: 300,
    fontColor: "black",
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
    canMoveIn: (incomingNodes: any) => incomingNodes.every((incomingNode: any) => incomingNode.data.type == ListItem)
  },
  related: {
    settings: ListContainerSettings
  }
}


export default ListContainer