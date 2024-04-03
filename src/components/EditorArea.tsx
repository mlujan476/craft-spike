import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Toolbox } from '../components/Toolbox';
import { SettingsPanel } from '../components/SettingsPanel';
import { Topbar } from '../components/Topbar';
import { FlexContainer } from '../components/FlexContainer';
import { Button } from '../components/Button';
import { Card, CardBottom, CardTop } from '../components/Card';
import { Text } from '../components/Text';
import { SFlexCol, SReset } from '../components/container/FlexContainer';
import LeftPanel from '../components/LeftPanel';


import { Editor, Frame, Element, useNode } from "@craftjs/core";
import Container from './container/Container';
import ImageDropzone from './image/ImageDropzone';
import RightPanel from './RightPanel';

interface IProps {
  width: string
}

const SBackground = styled(SFlexCol)<IProps>`
  background-color: transparent;
  align-items: center;
  width: ${p => p.width};
  margin: auto;

  transition: all 0.2s ease;


`


const EditorArea = ({ children }: any) => {

  const [deviceType, setDeviceType] = useState<string>("")

  useEffect(() => {
    const init = () => {
      handleChangeDevice("DESKTOP")
    }

    return init()
  },[])



  const handleChangeDevice = (type: string) => {
    console.log(type)
    switch(type){
      case "DESKTOP":
        setDeviceType("100%")
        break;
      case "TABLET":
        setDeviceType("870px")
        break;
      case "MOBILE":
        setDeviceType("420px")
        break;

      default:
        setDeviceType("desktop")
        break;
    }
  }

  return (
    <>
      <Topbar  setDeviceType={handleChangeDevice}/>
      <LeftPanel />
      <SBackground width={deviceType}>
      <Frame>
        <Element is={Container}  canvas>

        </Element>
      </Frame>
      </SBackground>
      <RightPanel />
    </>
  )
}
EditorArea.craft = {
  rules: {
    canMoveIn: (incomingNodes: any) => incomingNodes.every((incomingNode: any) => incomingNode)
  }
}

export default EditorArea