import { Editor } from "@craftjs/core";
import '@mantine/core/styles.css';
import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import EditorArea from './components/EditorArea';
import Heading from './components/common/Heading';
import Container from './components/container/Container';
import ImageContainer from './components/image/ImageContainer';
import ImageDropzone from './components/image/ImageDropzone';
import { Text } from "./components/Text";
import { createTheme, MantineProvider } from '@mantine/core'
import EditComponentSlider from "./components/common/EditComponentSlider";

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

const theme = createTheme({
  /** Put your mantine theme override here */
});


function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider theme={theme}>
      <SBody>
        <Editor resolver={{ Container, ImageDropzone, ImageContainer, Heading, Text, EditComponentSlider }}>
          <EditorArea />
        </Editor>
      </SBody>
    </MantineProvider>
  )
}

export default App
