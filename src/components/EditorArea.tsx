import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LeftPanel from '../components/LeftPanel';
import { Topbar } from '../components/Topbar';
import { SFlexCol } from '../components/container/FlexContainer';


import { Element, Frame } from "@craftjs/core";
import RightPanel from './RightPanel';
import Container from './container/Container';

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