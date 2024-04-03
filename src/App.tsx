import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { Editor, Frame, Element } from "@craftjs/core";
import { Topbar } from './components/Topbar';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Container from './components/container/Container';
import EditorArea from './components/EditorArea';
import { Text } from './components/Text';
import { Button } from './components/Button';
import ImageDropzone from './components/image/ImageDropzone';
import ImageContainer, { SContainer } from './components/image/ImageContainer';
import Heading from './components/common/Heading';

const SBody = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display:grid;
  grid-template-rows: 80px auto;
  grid-template-columns: 200px auto 400px;
  grid-template-areas: 
    "left header header"
    "left editor right"
    "left editor right"
  ;

  background-color: #f5f5f5;
`


function App() {
  const [count, setCount] = useState(0)

  return (
    <SBody>
      <Editor resolver={{ Container, ImageDropzone, ImageContainer, Heading }}>
        <EditorArea />
      </Editor>


    </SBody>
  )
}

export default App
